var email = document.getElementById("inputEmail");
var emaillabel = document.getElementById("emaillabel");

function validemailsign(){
    var emailregexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/ ;
    if (emailregexp.test(email.value)){
        emaillabel.innerText = "Valid Email address";
        emaillabel.style.color = "green";
        emaillabel.style.fontWeight = "bold";
        emaillabel.style.textShadow = "0 0 5px rgb(245, 241, 241), 0 0 5px rgb(219, 217, 71)";
        return true;
    }
    else{
        emaillabel.innerText = "Invalid Email address!";
        emaillabel.style.color = "red";
        emaillabel.style.fontWeight = "bold";
        emaillabel.style.textShadow = "0 0 5px rgb(245, 241, 241), 0 0 5px rgb(219, 217, 71)";
        email.style.border = "2px solid red";
        return false;

    }
}

var phone = document.getElementById("inputPhone");
var phonelabel = document.getElementById("phonelabel");

function validphone(){
    var phoneregexp = /^([0-9]{3})([\. -])?([0-9]{3})([\. -])?([0-9]{4})$/ ;
    if (phoneregexp.test(phone.value)){
        phonelabel.innerText = "Valid Phone number";
        phonelabel.style.color = "green";
        phonelabel.style.fontWeight = "bold";
        phonelabel.style.textShadow = "0 0 5px rgb(245, 241, 241), 0 0 5px rgb(219, 217, 71)";
        return true;
    }
    else{
        phonelabel.innerText = "Invalid Phone number";
        phonelabel.style.color = "red";
        phonelabel.style.fontWeight = "bold";
        phonelabel.style.textShadow = "0 0 5px rgb(245, 241, 241), 0 0 5px rgb(219, 217, 71)";
        phone.style.border = "2px solid red";
        return false;
    }
}

var pswd = document.getElementById("inputPassword");
var pswdlabel = document.getElementById("pswdlabel");

function validpasssign(){
    var passregexp = /((?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+))/ ;
    if (passregexp.test(pswd.value) && pswd.value.length>=8){
        pswdlabel.innerText = "Valid Password";
        pswdlabel.style.color = "green";
        pswdlabel.style.fontWeight = "bold";
        pswdlabel.style.textShadow = "0 0 5px rgb(245, 241, 241), 0 0 5px rgb(219, 217, 71)";
        return true;
    }
    else{
        pswdlabel.innerText = "Invalid Password";
        pswdlabel.style.color = "red";
        pswdlabel.style.fontWeight = "bold";
        pswdlabel.style.textShadow = "0 0 5px rgb(245, 241, 241), 0 0 5px rgb(219, 217, 71)";
        pswd.style.border = "2px solid red";
        return false;
    }
}


function pswdstrength(){
    if (pswd.value.length<=10){
        pswdlabel.innerText = "Weak Password!!";
        pswdlabel.style.color = "red";
        pswdlabel.style.fontWeight = "bold";
        pswdlabel.style.textShadow = "0 0 5px rgb(245, 241, 241), 0 0 5px rgb(219, 217, 71)";   
}
    else if (pswd.value.length<=14){
        pswdlabel.innerText = "Moderate Password!!";
        pswdlabel.style.color = "orange";
        pswdlabel.style.fontWeight = "bold";
        pswdlabel.style.textShadow = "0 0 5px rgb(245, 241, 241), 0 0 5px rgb(219, 217, 71)";
    }
    else {
        pswdlabel.innerText = "Strong Password!!";
        pswdlabel.style.color = "green";
        pswdlabel.style.fontWeight = "bold";
        pswdlabel.style.textShadow = "0 0 5px rgb(245, 241, 241), 0 0 5px rgb(219, 217, 71)";
    }
}

var confpswd = document.getElementById("inputPassword2");
var pswdlabel2 = document.getElementById("pswdlabel2");

function confirmpswd(){
    if (confpswd.value!=pswd.value){
        pswdlabel2.innerText = "Passwords don't match!!";
        pswdlabel2.style.color = "red";
        pswdlabel2.style.fontWeight = "bold";
        pswdlabel2.style.textShadow = "0 0 5px rgb(245, 241, 241), 0 0 5px rgb(219, 217, 71)";
        confpswd.style.border = "2px solid red";
        return false;
    }
    else {
        return true;
    }
}


function validate() {
    validemailsign();
    validphone();
    validpasssign();
    confirmpswd();
    if (validemailsign() && validpasssign() && validphone() && confirmpswd()){
        return true;
    }
    else {
        return false;
    }
}


// login form

var emaillog = document.getElementById("inputEmaillog");
var emaillabellog = document.getElementById("emaillabellog");

function validemaillog(){
    var emailregexp2 = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/ ;
    if (emailregexp2.test(emaillog.value)){
        return true;
    }
    else {
        emaillabellog.innerText ="Invalid Email";
        emaillabellog.style.color ="red";
        emaillog.style.border = "2px solid red";
        emaillabellog.style.textShadow = "0 0 5px rgb(245, 241, 241), 0 0 5px rgb(219, 217, 71)";
        emaillabellog.style.fontWeight = "bold"
        return false;
    }
}