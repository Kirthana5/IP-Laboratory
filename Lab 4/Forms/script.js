
function checkName()
{
    var exp=/^([a-zA-Z][\s]*)+$/;
    var name=document.forms['myform']['Name'];
    if(!name.value.match(exp))
        {
            name.value="Enter a valid name!!";
            name.style.color="red";
        }
    
}
function checkMail()
{
    var exp=/^[a-z0-9]+@gmail.com$/;
    var mailId=document.forms['myform']['email'];
    if(!mailId.value.match(exp))
    {
        mailId.value="Enter a valid mail!!";
        mailId.style.color="red";
    }
}

function checkPhone()
{
    var exp=/^[7-9][0-9]{9}$/;
    var phone=document.forms['myform']['phone'];
    if(!phone.value.match(exp))
    {
        phone.value="Enter a valid contact details!!";
        phone.style.color="red";
    }
}

function resetName()
{
    var name=document.forms['myform']['Name'];
    if(name.value=="Enter a valid name!!")
    {
        name.value="";
        name.style.color="black";
    }
}
function resetMail()
{
    var mail=document.forms['myform']['email'];
    if(mail.value=="Enter a valid mail!!")
    {
        mail.value="";
        mail.style.color="black";
    }
}

function resetPhone(){
    var phone=document.forms['myform']['phone'];
    if(phone.value=="Enter a valid contact details!!");
    {
        phone.value="";
        phone.style.color="black";
    }
}
function reset(){
    document.forms['myform']['Name'].value="";
    document.forms['myform']['email'].value="";
    document.forms['myform']['phone'].value="";
    document.getElementById('colorPick').removeAttribute('checked');
    document.getElementById('carName').removeAttribute('checked');
    document.forms['myform']['Other'].value="";
    document.forms['myform']['specification'].value="";
    document.getElementById('contactCheck').removeAttribute('checked');


}
function validateForm()
{
    var name=document.forms['myform']['Name'];
    var mail=document.forms['myform']['email'];
    var phone=document.forms['myform']['phone'];
    var carName=document.querySelector('input[id="carName"]:checked');
    var colorPick=document.forms['myform']['colorPick'].value;
    var other=document.forms['myform']['Other'];
    var specification=document.forms['myform']['specification'].value;
    var contactCheck=document.querySelector('input[id="contactCheck"]:checked');

    if(carName==null)
    {
        alert("Please pick a Car");
        return false;
    }

    if(colorPick=="Pick a Color" && other.value==''){
        alert("Please select the color");
        return false;
    }

    if(specification==""){
        alert("Please enter the specification");
        return false;
    }
    if(specification.length<10){
        alert("Minimum 10 characters required");
        return false;
    }
    if(specification.length>15){
        alert("Maximum 15 characters required");
        return false;
    }

    if(name.value=="" || mail.value=="" || phone.value=="")
    {
        alert("Please enter all the fields.!!");
        return false;
    }

    if(contactCheck==null)
    {
        alert("Please check the checkbox");
        return false;
    }
    
}