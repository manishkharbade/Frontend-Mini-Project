// go to top
// go to top
// Get the button
let mybutton = document.getElementById("btnScrollToTop");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topfunction() {
  document.documentElement.scrollTop = 0;
}
// go to top
// go to top

// User button
let userbox = document.querySelector(".user_id");

document.querySelector("#user_btn").onclick = () => {
  userbox.classList.toggle("active");
};

let userid = document.getElementById("userid");

function toggleicon() {
  userid.classList.toggle("active");
}
// User button

// Contact Form button
function submit() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (name == "" || email == "" || subject == "" || message == "") {
    alert("Please Check the missing fields!");
  } else {
    alert("Form Submitted Successfully! \nWe will connect with you soon.");
  }
}
// Contact Form button

// login and register button

function register() {
  let x = document.getElementById("login");
  let y = document.getElementById("register");
  let z = document.getElementById("btn1");

  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function login() {
  let x = document.getElementById("login");
  let y = document.getElementById("register");
  let z = document.getElementById("btn1");

  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}
// login and register button

// login
function login_form() {
  let login_user = document.getElementById("log_user").value;
  let login_password = document.getElementById("log_pswd").value;

  if (login_user == "" || login_password == "") {
    alert("Please enter correct UserId and Password");
  } else {
    alert("Great Job..!");
  }
}
// login

// Register
function reg_form() {
  let user_name = document.getElementById("reg_id").value;
  let user_email = document.getElementById("reg_email").value;
  let user_pswd = document.getElementById("reg_pswd").value;

  if (user_name == "" || user_email == "" || user_pswd == "") {
    alert("Please Check the missing fields!");
  } else {
    alert("Successfully Register.");
  }
}
// Register

// login and register form
