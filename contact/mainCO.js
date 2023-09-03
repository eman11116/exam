$(document).ready(function () {
    $("#loading").hide()
})
/*  ********************side bar************ */

$(".iconSideBar").click(function(){
    let sideBarWidth=$(".side_Bar").innerWidth();
    if($(".side-bar").css("left")=="0px"){
        $(".side-bar").animate({left:-sideBarWidth},1000)
    }
    else{
        $(".side-bar").animate({left:"0px"},1000)
    
    }
    })
// ********************************
let userName = document.getElementById("name");
let email = document.getElementById("email");
let age = document.getElementById("age");
let tel = document.getElementById("tel");
let pass = document.getElementById("pass");
let repass = document.getElementById("repass");
let nameErorr = document.getElementById("nameErorr");
let emailErorr = document.getElementById("emailErorr");
let phoneErorr = document.getElementById("phoneErorr");
let ageErorr = document.getElementById("ageErorr");
let passErorr = document.getElementById("passErorr");
let repassErorr = document.getElementById("repassErorr");

function validationName() {
    let regx=/^[A-Z][a-zA-Z]{3,10}$/
    if (regx.test(userName.value)==true) {
        console.log("tru");
        userName.classList.add("is-valid")
        userName.classList.remove("is-invalid")
        nameErorr.classList.add("d-none")


return true
    }
    else{
        userName.classList.remove("is-valid")
        userName.classList.add("is-invalid")
        nameErorr.classList.remove("d-none")


        return false
    }
}
function validateEmail() {
    let regx=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (regx.test(email.value)==true) {
        console.log("tru");
        email.classList.add("is-valid")
        email.classList.remove("is-invalid")
        emailErorr.classList.add("d-none")

return true
    }
    else{
        email.classList.remove("is-valid")
        email.classList.add("is-invalid")
        emailErorr.classList.remove("d-none")

        
        return false
    }
}
function validateTel() {
    let regx=/[0-9]{11}/
    if (regx.test(tel.value)==true) {
        console.log("tru");
        tel.classList.add("is-valid")
        tel.classList.remove("is-invalid")
        phoneErorr.classList.add("d-none")

return true
    }
    else{
        tel.classList.remove("is-valid")
        tel.classList.add("is-invalid")
        phoneErorr.classList.remove("d-none")

        return false
    }
}
function validateAge() {
    let regx=/^[0-9]{2}$/
    if (regx.test(age.value)==true) {
        console.log("tru");
        age.classList.add("is-valid")
        age.classList.remove("is-invalid")
        ageErorr.classList.remove("d-none")

return true
    }
    else{
        age.classList.remove("is-valid")
        age.classList.add("is-invalid")
        ageErorr.classList.remove("d-none")

        return false
    }
}
function validatePass() {
    let regx=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (regx.test(pass.value)==true) {
        console.log("tru");
        pass.classList.add("is-valid")
        pass.classList.remove("is-invalid")
        passErorr.classList.add("d-none")

return true
    }
    else{
        pass.classList.remove("is-valid")
        pass.classList.add("is-invalid")
        passErorr.classList.remove("d-none")

        return false
    }
}
function validateRepass() {
if (pass.value===repass.value) {
repass.classList.add("is-valid")
    repass.classList.remove("is-invalid")
    repassErorr.classList.add("d-none")

}
else{
    pass.classList.remove("is-valid")
    pass.classList.add("is-invalid")
    repassErorr.classList.remove("d-none")

}
}





















// function check() {
//     let userName  =userName.value
//     let email=   email.value
// age.value
// tel.value
// pass.value
// repass.value

// }
// if(userName.value===""){
//     setError(userName,"Special characters and numbers not allowed")
// }
// else{
//     setSucces(userName)
// }
// function setError(input,message) {
//     let formControl = input.parententElement
// }
// $("#myform").validate({
// rules:{
// name:{
//     minlength: 2
// },
// email:{
// email:true
// },
// phone:{
// number:true,
// minlength:11,
// maxlength:11
// },
// message:{
// name:{
// required:"please enter your email",
// minlength:"Special characters and numbers not allowed"
// },
// email:"Email not valid *exemple@yyy.zzz",
// phone:"Enter valid Phone Number",
// age:" Enter valid Age",
// age:" Enter valid Age",
// pass:"Enter valid password *Minimum eight characters, at least one letter and one number",


// },
// },

//     submitHandler: function(form) {
//       form.submit();
//     }
//    });