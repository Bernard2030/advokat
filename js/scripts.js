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

    alert(`You live in ${selectedLocation} have chosen ${selectedField} and you will be represented by ${selectedFirm}`);

    function searchLawyer(){
            if(selectedField=="Family Law" || selectedField=="Divorce & Separation Law" || selectedField=="Children Law"){
            document.getElementById("julieReturned").style.display="block";
        }
    }
    searchLawyer();
}
//service page end