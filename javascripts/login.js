function login()
{
	var uname = document.getElementById("uname").value;
	var pwd = document.getElementById("pwd").value;
    if(uname =='')
	{
		alert("please enter user name.");
	}
	else if(pwd=='')
	{
		alert("enter the password");
	}
	else
	{
		alert('Thank You for Login & You are Redirecting to Home Page');
	    window.location = "userhome.html";
	}
}	