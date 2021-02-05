'use strict';
const {db, auth, storage, bucket, admin, firebase} = require('../db');

const {errorTr} = require('../error-messages');

const uuid = require('uuid-v4'); //
var multiparty = require('multiparty');
var http = require('http');
var util = require('util');

const metadata = {
    metadata: {
        firebaseStorageDownloadTokens: uuid()
    },
    contentType: 'image/png',
    cacheControl: 'public, max-age=31536000',
};

function createImgPath(pathToFile, downloadToken) {
    // IMPORTANT*********** (img path)
    //`${baseurl}${storageBucket}/o/${imgRecord[0].id}?alt=media&token=${imgRecord[0].metadata.metadata.firebaseStorageDownloadTokens}`
    ////photoUrl = `${baseurl}${storageBucket}/o/${imgRecord[0].id}?alt=media&token=${imgRecord[0].metadata.metadata.firebaseStorageDownloadTokens}`
    return `https://firebasestorage.googleapis.com/v0/b/taskmanager-54ef1.appspot.com/o/${pathToFile}?alt=media&token=${downloadToken}`
}

const login = async (request, response, next) => {
    await new multiparty.Form().parse(request, function (err, fields, files) {
        if (err) return;
        firebase.auth().signInWithEmailAndPassword(fields.email[0], fields.password[0])
            .then(userRecord => {
                response.send(userRecord);
                return userRecord;
            })
            .catch(error => {
                error.message=errorTr(error);
                response.send(error);
                return error;
            });
    });
};

const register = async (request, response, next) => {
    await new multiparty.Form().parse(request, function (err, fields, files) {
        if (err) return;
        auth.createUser({
            email: fields.email[0],
            password: fields.password[0],
            phoneNumber: fields.phoneNumber[0],
            displayName: fields.displayName[0],
            photoURL: "https://firebasestorage.googleapis.com/v0/b/taskmanager-54ef1.appspot.com/o/default-user-image.png?alt=media&token=a636f616-3927-46fe-9af0-f4165d4415cb"
        })
            .then(userRecord => {
                response.send(userRecord)
                return userRecord;
            })
            .catch(error => {
                error.message=errorTr(error);
                response.send(error);
                return error;
            });
    });
}

const userImgUpdate = async (request, response, next) => {
    await new multiparty.Form().parse(request, function (err, fields, files) {
        if (err) return;
        var photo = files.photo[0], photoUrl = "";
        bucket.upload(photo.path, {
            gzip: true,
            metadata: metadata,
            destination: `images/${fields.uid[0]}`
            //destination: 'location/in/bucket'
        })
            .then(imgRecord => {
                photoUrl = createImgPath(imgRecord[0].id, imgRecord[0].metadata.metadata.firebaseStorageDownloadTokens);
            })
            .then(() => {
                auth.updateUser(fields.uid[0], {photoURL: photoUrl})
                    .then(userRecord => {
                        response.send(userRecord);
                        return userRecord;
                    })
                    .catch(error => {
                        response.send(error);
                        return error;
                    });
            })
            .catch(error => {
                response.send(error);
                return error;
            });
    });
};

const updateUser = async (request, response, next) => {
    await new multiparty.Form().parse(request, function (err, fields, files) {
        if (err) return;
        auth.updateUser(fields.uid[0], {
            //email:fields.email[0],
            password: fields.password[0],
            phoneNumber: fields.phoneNumber[0],
            displayName: fields.displayName[0]
        })
            .then(userRecord => {
                response.send(userRecord);
                return userRecord;
            })
            .catch(error => {
                response.send(error);
                return error;
            })
    });
};

const logout = async () => {
    await auth.signOut().then(() => {

    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        response.send(error.message);
    });
}

module.exports = {
    login,
    register,
    updateUser,
    userImgUpdate,
    logout
}