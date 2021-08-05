// send Consultation messages to firebase database
$(document).ready(function () {
  $("form#send-quote").submit(function (e) {
    e.preventDefault();

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

    var name = $("#recipient-name").val();
    var email = $("#recipient-email").val();
    var phone = $("#recipient-phone").val();

    var database = firebase.database();

    database.ref("Consultation-quotes/" + name).set({
      NameOfReceipt: name,
      EmailOfReceipt: email,
      PhoneOfReceipt: phone,
    });
    console.log("done")
  });
});
