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
    var category = $("#category").val();
    var message = $("#message-text").val();

    // validate the form
    //   if (name == "" || email == "" || phone == "" || category == "" || message == "") {
    //     alert("Please fill in all the fields");
    //     return;
    //   }
    //   if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    //     alert("Please enter a valid email address");
    //     return;
    //   }
    //   if (!/^\+?\d{11,12}$/.test(phone)) {
    //     alert("Please enter a valid phone number");
    //     return;
    //   }
    //   if (category == "") {
    //     alert("Please select a category");
    //     return;
    //   }
    //   if (message == "") {
    //     alert("Please enter a message");
    //     return;
    //   }
    //   // send the data to firebase
    //   var data = {
    //     name: name,
    //     email: email,
    //     phone: phone,
    //     category: category,
    //     message: message
    //   };

    //     var ref = database.ref("consultations");
    //     ref.push(data);
    //     $("#send-quote").hide();
    //     $(".success-message").html("Thank you. Consultation message sent successfully!!");
    //     $(".success-message").show();
    // });

    var rules = {
      name: {
        required: true,
        minlength: 3,
        maxlength: 30,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      category: {
        required: true,
      },
      message: {
        required: true,
      },
    };
    var messages = {
      name: {
        required: "Please enter your name",
        minlength: "Your name must be longer than 3 characters",
        maxlength: "Your name must be shorter than 30 characters",
      },
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email",
      },
      phone: {
        required: "Please enter your phone",
        minlength: "Your phone must be longer than 10 characters",
        maxlength: "Your phone must be shorter than 10 characters",
      },
      category: {
        required: "Select Category",
      },
      message: {
        required: "Enter message",
      },
    };

    var error = false;
    var errorMsg = "";

    $.each(messages, function (key, value) {
      if ($("#" + key).val() === "") {
        error = true;
        errorMsg += value.required + "<br>";
      }
    });

    if (error) {
      $("#error-message").html(errorMsg);
      return false;
    }

    var data = {
      name: name,
      email: email,
      phone: phone,
      category: category,
      message: message,
    };

    var ref = database.ref("consultations");
    ref.push(data);
    $("#send-quote").hide();
    $(".success-message").html(
      "Thank you. Consultation message sent successfully!!"
    );
    $(".success-message").show();
  });

  // database.ref("Consultation-quotes/" + name).set({
  //   NameOfReceipt: name,
  //   EmailOfReceipt: email,
  //   PhoneOfReceipt: phone,
  // });
  // $(".success-message").val("Consultation message sent successfully!!");
  // $(".success-message").show();
  // console.log("done");

  //   send contact us messages
  $("form#contact-us").submit(function (e) {
    e.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#message").val();

    // validation for user inputs

    if (name == "" || email == "" || phone == "") {
      alert("Please fill in the form");

      if (name == "") {
        alert("Please write your name");
      } else if (email == "") {
        alert("Please write your email");
      } else if (phone == "") {
        alert("Please write a message");
      }
    }
    if ((name != "") & (email != "") & (phone != "")) {
      alert("Message Sent");
    }

    database.ref("contact-us/" + name).set({
      userName: name,
      userEmail: email,
      userPhone: phone,
    });

    // alert("Message Sent")
  });
});
