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