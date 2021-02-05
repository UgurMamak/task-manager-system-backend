function errorTr(error){
    switch (error.code){
        case 'auth/email-already-exists':
            return "Girmiş olduğunuz email adresi başka bir hesap tarafından kullanılmaktadır."

        case 'auth/phone-number-already-exists':
            return "Girmiş olduğunuz telefon numarasına sahip kullanıcı zaten var."

        case 'auth/invalid-password':
            return 'Parola en az 6 karakterden oluşmalıdır.';

        case 'auth/user-not-found':
            return 'Böyle bir kullanıcı bulunmamaktadır.';

        case 'auth/wrong-password':
            return 'Girmiş olduğunuz parola geçersiz.';

        default: return error.message;
    }

}

module.exports={
    errorTr
}