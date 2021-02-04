'use strict';
const {db, auth, storage, bucket, admin} = require('../db');
const uuid = require('uuid-v4');
var multiparty = require('multiparty');
var http = require('http');
var util = require('util');


const login = async (request, response, next) => {

    const data = request.body;
    await auth.signInWithEmailAndPassword(data.email, data.password).then(currentUser => {
        //response.send(currentUser.user);
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        response.send(error.message);
    });


    var user = auth.currentUser;
    user.updateProfile({
        photoURL: "https://firebasestorage.googleapis.com/v0/b/taskmanager-54ef1.appspot.com/o/images%2Fhunter-sendromu.png?alt=media&token=45c78a9a-3d64-4441-899a-271c5ed7dc77",


    }).then(user => {
        response.send(user);
    }).catch((error) => {
        console.log(error.message);
    });


    //read only
    auth.onAuthStateChanged(function (user) {
        if (user) {
            response.send(user);
        } else {
            // No user is signed in.
        }
    });


};

const register = async (request, response, next) => {
    /*const data = request.body;
    //auth'a yeni kullancıı kaydeder.
       await auth.createUserWithEmailAndPassword(data.email, data.password).then(userCredential => {
       }).catch((error) => {
           var errorCode = error.code;
           var errorMessage = error.message;
           response.send(error.message);
       });

       var user=auth.currentUser;

       //kullanıcı kaydedildikten sonra diğer bilgilerini kaydetmek için oluşturduk.
       if(user!=null){
           user.updateProfile({
               photoURL:"https://firebasestorage.googleapis.com/v0/b/taskmanager-54ef1.appspot.com/o/images%2FNH-g%C3%B6rsel-04.png?alt=media&token=318a5cb6-defb-49cf-ab2b-c614d35d6eab",
               displayName:"deneme",
               yeniCol:"valued eğer"
           }).then(()=>{
               response.json(user);
           }).catch((error)=>{
               console.log(error.message);
           });
       }


       //user tablosuna kullanıcının diğer bilgilerini kaydetmek için kullanabiliriz.
       db.database().ref('user/'+user.uid).set({deparment:"yeni böçlüm"});*/

    //ADMİN NODEJS REGISTER
    const data = request.body;
    auth.createUser({
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber,
        displayName: data.displayName,
        photoURL:"https://firebasestorage.googleapis.com/v0/b/taskmanager-54ef1.appspot.com/o/default-user-image.png?alt=media&token=a636f616-3927-46fe-9af0-f4165d4415cb"
    }).then(userRecord => {
        response.send(userRecord)
        return userRecord;
    }).catch(error => {
        console.log(error.message)
        return error
    });


}


const updateUser =async (request,response,next)=>{
    /*// multipart data olduğu zaman böyle kullan
    var form = new multiparty.Form();
    form.parse(request, function (err, fields, files) {

        var filesData = files.photoURL[0];

        const metadata = {
            metadata: {
                firebaseStorageDownloadTokens: uuid()
            },
            contentType: 'image/png',
            cacheControl: 'public, max-age=31536000',
        };

        bucket.upload(filesData.path, {
            gzip: true,
            metadata: metadata,
            destination: filesData.originalFilename //img name işlemi

        });
    });*/
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
    logout
}