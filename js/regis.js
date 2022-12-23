var inputFullName = document.getElementById('fullName');
var inputAdress = document.getElementById('Adress');
var inputPhoneNum = document.getElementById('phoneNum');
var inputEmail= document.getElementById('e-mail');
var inputUserName= document.getElementById('userName');
var inputPassword= document.getElementById('password');

var submitbtn= document.getElementById('submit');

// var lawyersInfo = [];
// var addLawyer = function(){

//     lawyersInfo.push(lawyerInfo);
// } console.log(lawyerInfo);

var lawyerInfo={
    Name: inputFullName.value ,
    phone: inputPhoneNum.value,
    // address: inputAdress.value,
    email: inputEmail.value,
    password: inputPassword.value,
    userName: inputUserName.value,

};
var jsonLawyerInfo = JSON.stringify(lawyerInfo);

console.log(typeof(jsonLawyerInfo));
console.log(jsonLawyerInfo);

submitbtn.onclick= function(){

}
// POST request using fetch()
fetch("https://localhost:7176/api/Companies", {    
    // Adding method type
    method: "POST",  
    // Adding body or contents to send
    body: JSON.stringify(lawyerInfo),
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
// Converting to JSON
.then(response => response.json())
// Displaying results to console
.then(json => console.log(json));