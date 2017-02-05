
function formValidation()
{
var passid = document.registration.passid;
var uname = document.registration.username;
var mnumber = document.registration.phone;
var uadd = document.registration.address;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var udorder = document.registration.order;
var usorder = document.registration.order; 

if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(mnumber))
{
if(alphanumeric(uadd))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validorder(udorder,usorder))
{}
} 
}
} 
}
}
}
return false;
}

function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function alphanumeric(mnumber)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(mnumber.value.match)
{
return true;
}
else
{
alert('Mobile Number must have alphanumeric characters only');
mnumber.focus();
return false;
}
}
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match)
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
