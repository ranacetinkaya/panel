const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const form1 = document.getElementById('form');


registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

  loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
}); 
 

//    const idCounter= JSON.parse(localStorage.getItem("jsonData"));
//   const totalİd =(idCounter.length);
// const Personİd=(totalİd+50); 
// console.log(Personİd);


// JavaScript kodları

var passInput = document.getElementById("password");                 
const email = document.getElementById("mail");
 const tcknInput = document.getElementById("tckn");
const phoneInput = document.getElementById("phone");

const emailBox =document.querySelector('.email-box');
const tcknBox =document.querySelector('.tckn-box');
const phoneBox =document.querySelector('.phone-box');
const passBox =document.querySelector('.pass-box');
const emailError =document.querySelector('.email-error');
const tcknError =document.querySelector('.tckn-error');
const phoneError =document.querySelector('.phone-error');
const passError =document.querySelector('.password-error');
const emailPattern = /[A-Za-z0-9._%+-]+@[gmail.com]+\.[A-Za-z]{1,63}$/;
const tcknpattern = /^\d{12}$/;
const PhonePattern = /^\d{11}$/;
const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

email.addEventListener('input',()=>{
  
  if(email.value.match(emailPattern)){
          emailBox.classList.add('valid');
          emailBox.classList.remove('invalid');
          emailError.innerHTML = "Your Email Address is Valid"; 
         

        }else{
          emailBox.classList.add('invalid');
          emailBox.classList.remove('valid');
          emailError.innerHTML = "Must be a valid email address."; 
        }
      });
tcknInput.addEventListener("input", function (event) {

let tckn = this.value.replace(/\D/g, "");

if (tckn.length >= 11) {
tckn = tckn.slice(0, 11);
}
tckn = tckn.replace(tcknpattern, " ");
  this.value = tckn;

    
  
  
  if(tcknInput.value.length==11){
          tcknBox.classList.add('valid');
          tcknBox.classList.remove('invalid');
          tcknError.innerHTML = "Your tckn is Valid"; 
        }else{
          tcknBox.classList.add('invalid');
          tcknBox.classList.remove('valid');
          tcknError.innerHTML = "TCKN must be exactly 11 digits."; 
        }
       
        

});

passInput.addEventListener('input',()=>{
  
  if( passInput.value.match(passPattern) ){
          passBox.classList.add('valid');
          passBox.classList.remove('invalid');
          passError.innerHTML = "Your password is Valid"; 
        }
        
       else{
          passBox.classList.add('invalid');
          passBox.classList.remove('valid');
          passError.innerHTML = 'Password must be at least 6 characters ' + "<p>" + 'At least one uppercase' + "<p>" +  'One lowercase '+ "<p>" + 'One number.'; 
        }
      });

document.getElementById("password").addEventListener("focus", function () {
         
         this.type = "text";
     });

     document.getElementById("password").addEventListener("blur", function () {
        
         this.type = "password";
     });
     document.getElementById("phone").addEventListener("input", function () {
    
    this.value = this.value.replace(/^0[0-9]*$/g, "");
});



phoneInput.addEventListener("input", function () {
  
    let phoneNumber = this.value.replace(/\D/g, "");


    if (phoneNumber.length > 10 ) {
        phoneNumber = phoneNumber.slice(0, 10);
    }

  
    phoneNumber = phoneNumber.replace(PhonePattern, "XXX-XXX-XX-XX");
    this.value = phoneNumber;

    if(phoneInput.value.length==10){
      phoneBox.classList.add('valid');
      phoneBox.classList.remove('invalid');
      phoneError.innerHTML = "Your phone number is Valid"; 
    }else{
      phoneBox.classList.add('invalid');
      phoneError.classList.remove('valid');
      phoneError.innerHTML = "Phone number must be exactly 10 digits."; 
    }




});
email.addEventListener('input',()=>{
  
  if(email.value.match(emailPattern)){
          emailBox.classList.add('valid');
          emailBox.classList.remove('invalid');
          emailError.innerHTML = "Your Email Address is Valid"; 
        }else{
          emailBox.classList.add('invalid');
          emailBox.classList.remove('valid');
          emailError.innerHTML = "Must be a valid email address."; 
        }
      });

function addData() {
  
 
  
//PASSWORD

  
  
 
function isEmailValid(){
  const inputContainers = form1.querySelectorAll('.email-box');
    let result = true;
    inputContainers.forEach(
      (container)=>{
        if(container.classList.contains('invalid')){
            result = false;
        }
    });
    return result;
  }
function isPhoneValid(){
  const inputphone = form1.querySelectorAll('.phone-box');
    let result = true;
    inputphone.forEach(
      (container)=>{
        if(container.classList.contains('invalid')){
            result = false;
        }
    });
    return result;
}
function isTcknValid(){
  const inputtckn = form1.querySelectorAll('.tckn-box');
    let result = true;
    inputtckn.forEach(
      (container)=>{
        if(container.classList.contains('invalid')){
            result = false;
        }
    });
    return result;
}
function isPasswordValid(){
  const inputContainers = form1.querySelectorAll('.pass-box');
    let result = true;
    inputContainers.forEach(
      (container)=>{
        if(container.classList.contains('invalid')){
            result = false;
        }
    });
    return result;
}



  
  
  
  
  
//***************************************************************************** */
  form1.addEventListener('submit',event => {
   
    console.log(isPasswordValid());
    console.log(isPhoneValid());
    console.log(isEmailValid());
console.log(isTcknValid());
    if(isEmailValid()==true && isPhoneValid()==true 
    && isTcknValid()==true && isPasswordValid()==true) {
         
         $(document).ready(function() {
          $("#regbtn").click(function() {
              window.location.href = "s.html";
          });
          
      });
      form1.submit();
     }else {
      event.preventDefault();
      return;
     }

     const tcknValue = tcknInput.value.replace(/\D/g, "");
     if (tcknValue.length === 11) {
       form1.tckn.value = tcknValue.slice(0, 2) + "*".repeat(5) + tcknValue.slice(8, 11);
     }
 const formData =new FormData(form1);
  
   idCounter= JSON.parse(localStorage.getItem("jsonData"));
  const totalİd =(idCounter.length+1);
 const Personİd=(totalİd); 
console.log(Personİd);


   var myData = {
   
     //id
   id: Personİd,
   email: formData.get("email"),
    telephone: formData.get("phone"),
    occupation: formData.get("occ"),
    city: formData.get("city"),
    tckn: formData.get("tckn"),
    password: formData.get("pass"),
    action:""
   };
   


  let userData=JSON.parse(localStorage.getItem("jsonData"));
 userData??=[];

  userData.push(myData);
  document.forms[0].reset();
  

  
  
  // JSON verisini Local Storage'a kaydediyoruz
  localStorage.setItem('jsonData', JSON.stringify(userData));
  

 });





formatNumber();

}



document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('regbtn').addEventListener('click',addData());
  //*****************************************************************************

});



$(document).ready(function () {
  var cities = [
  'Starter', 'Elementary', 'Intermediate', 'Upper Intermediate', 'Advanced/Expert', 'Proficient'

 
];
var occupations = [
 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 
 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina',
  'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile',
   'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic of the', 'Congo, Republic of the', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 
   'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 
   'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary',
    'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 
    'Korea, South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 
    'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco',
     'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 
     'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
      'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia',
       'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan',
        'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
         'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'








];

var roles = [
    'Student', 'Educator'
  
   
  ];

$('#citySelect').select2({
    data: cities,
    placeholder: 'Select Level'
  });

  $('#occSelect').select2({
    data: occupations,
    placeholder: 'Select Country'
  });
  $('#tckn').select2({
    data: roles,
    placeholder: 'Select Role'
  });

});
