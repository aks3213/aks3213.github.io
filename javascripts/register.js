function register()
{
	var fname=document.getElementById("fname").value;
	var lname=document.getElementById("lname").value;
	var uname = document.getElementById("uname").value;
	var pwd = document.getElementById("pwd").value;
	var mail = document.getElementById("mail").value;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(fname=='')
	{
		alert("enter the first name");
	}
	else if(lname=='')
	{
		alert("enter the last name");
	}
    else if(uname =='')
	{
		alert("please enter user name.");
	}
	else if(pwd=='')
	{
		alert("enter the password");
	}
	else if(mail=='')
	{
		alert("enter the mail-id");
	}
	else if(!filter.test(mail))
	{
		alert("Enter valid mail id.");
	}
	else
	{
		alert('Thank You for Login & You are Redirecting to Home Page');
	    window.location = "userhome.html";
	}
}	