$(document).ready(function () {
    // firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyArWRcifQJkNkFOCRfDtatxm5wKTA4-G0Y",
    authDomain: "advokat-app.firebaseapp.com",
    projectId: "advokat-app",
    storageBucket: "advokat-app.appspot.com",
    messagingSenderId: "587147129556",
    appId: "1:587147129556:web:1a35448225f60a9a470141",
    measurementId: "G-ZDSHHE394M",
    databaseURL: "https://advokat-app-default-rtdb.firebaseio.com",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  // send Consultation messages to firebase database
  $("form#send-quote").submit(function (e) {
    e.preventDefault();
    var name = $("#recipient-name").val();
    var email = $("#recipient-email").val();
    var phone = $("#recipient-phone").val();

    database.ref("Consultation-quotes/" + name).set({
      NameOfReceipt: name,
      EmailOfReceipt: email,
      PhoneOfReceipt: phone,
    });
    console.log("done");
  });

  //   send contact us messages
  $("form#contact-us").submit(function (e) {
    e.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#message").val();

    // validation for user inputs

    if(name == "" || email =="" || phone==""){
      alert("Please fill in the form")
      
      if(name==""){
        alert("Please write your name")
        }else if(email==""){
          alert("Please write your email")
        }else if(phone==""){
          alert("Please write a message")
        }  
    }
    if(name!=""& email!=""& phone!=""){
      alert("Message Sent")
    }
  

    database.ref("contact-us/" + name).set({
      userName: name,
      userEmail: email,
      userPhone: phone,
    });

    // alert("Message Sent")
  });
});








