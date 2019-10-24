var ValidateEmail = emailstr => {
    var strcheck = /@{1}/;
    return strcheck.test(emailstr);
}

var ValidateUserName = UserNameStr => {
    let strcheck = /[A-Za-z]/;
    return strcheck.test(UserNameStr);
}

var ValidateEmail = phonenumberstr => {
    var strcheck = /[0-9]/;
    return strcheck.test(phonenumberstr);
}

function Validate() {

    let email = document.getElementById("email").value;
    let username = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let repass = document.getElementById("repassword").value;
    let phonenumber = document.getElementById("phonenumber").value;

    if (repass === password) {
        console.log("bang");
    } else {
        console.log("khong bang")
    }


}