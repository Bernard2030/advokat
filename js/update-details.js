//Bussiness logic


//lawyer object
function lawyerInfo(firstName, lastName, email, phoneNumber, lawFirm, location, bio ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.lawFirm = lawFirm;
    this.location = location;
    this.bio = bio;
}
















//User interface logic
$(document).ready(function() {

    $("button.saveDetails").click(function(event) {
        event.preventDefault();
        let lawyerFirstName = $("input#first-name").val();
        let lawyerLastName = $("input#last-name").val();
        let lawyerEmail =$("input#email").val();
        let phoneNumber =$("input#phoneNumber").val();
        let lawFirm = $("input#law-firm").val();
        let location =$("input#location").val();
        let personalBio = $("textarea#personal-bio").val();
        let supportingDocs = $("input[type='file']#supporting-docs").val();
        let areaOfLaw = $(".areaOfLaw option:selected").val();
        let qualificationDocs = $("input[type='file']#qualification-docs").val();


        $("button.addCase").click(function(event) {
            event.preventDefault();
            let caseName = $("input#case-name").val();
            let caseNumber = $("input#case-number").val();
            let caseSummary = $("textarea#case-summary").val();
            let outCome = $()

        })



    });




});
