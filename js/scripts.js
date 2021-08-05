// HOME START
$(document).ready(function () {
  $(".lawfirm1").hover(() => {
    $(".port1").show({ opacity: 5 }, 5);
  },
    () => {
      $(".port1").hide({ opacity: 1 }, 5);
    }
  )

  $(".lawfirm2").hover(() => {
    $(".port2").show({ opacity: 1 }, 5);
  },
    () => {
      $(".port2").hide({ opacity: 1 }, 5);
    }
  )

  $(".lawfirm3").hover(() => {
    $(".port3").show({ opacity: 1 }, 5);
  },
    () => {
      $(".port3").hide({ opacity: 1 }, 5);
    }
  )


})



// HOME END

//service page code
function getLawyer(){
  //location inputed
  var location = document.querySelector("#location");
  var selectedLocation= location.options[location.selectedIndex].text;
  //law field inputed
  var field = document.querySelector("#lawArea");
  var selectedField= field.options[field.selectedIndex].text;
  //law firm selected
  var firm = document.querySelector("#lawFirm");
  var selectedFirm= firm.options[firm.selectedIndex].text;
  function searchLawyer(){
    //julie
    if(selectedField=="Family Law" || selectedField=="Divorce and Separation Law" || selectedField=="Children Law"){
      document.getElementById("julieReturned").style.display="block";
    }
    // john
    if(selectedField=="Banking and Finance" || selectedField=="Criminal Law" || selectedField=="Media and Entertainment Law" || selectedField=="Personal Injury"){
      document.getElementById("johnReturned").style.display="block";
    }
    //sherline
    if(selectedField=="Energy and Resources Law" || selectedField=="Divorce and Separation Law" || selectedField=="Intellectual Property Law" || selectedField=="Administrative Law"){
      document.getElementById("sherlineReturned").style.display="block";
    }
    //mark
    if(selectedField=="Business Law" || selectedField=="Domestic Violence Law" || selectedField=="Medical Law" || selectedField=="Banking and Finance"){
      document.getElementById("markReturned").style.display="block";
    }
    //justus
    if(selectedField=="Employment Law" || selectedField=="Energy and Resources Law" || selectedField=="Insurance Law" || selectedField=="Administrative Law"){
      document.getElementById("justusReturned").style.display="block";
    }
    //fatuma
    if(selectedField=="Education Law" || selectedField=="Domestic Violence" || selectedField=="Intellectual Law"){
      document.getElementById("fatumaReturned").style.display="block";
    }
    
}
  searchLawyer();
}

function contact(){
Swal.fire({
  icon:'info',
  title: 'Hello, Do you want to make contact?',
  showDenyButton: true,
  confirmButtonText: `Send`,
  denyButtonText: `Cancel`,
}).then((result) => {
  if (result.isConfirmed){
    Swal.fire('Your notification has been sent! You will be notified on your inbox', '', 'success')
  }else if (result.isDenied) {
    Swal.fire('Your notification has not been sent!', '', 'warning')
  }
})
}
//service page end