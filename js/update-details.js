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


function caseDetails(caseName, caseNumber, caseSummary, outCome) {
    this.caseName = caseName;
    this.caseNumber = caseNumber;
    this.caseSummary = caseSummary;
    this.outCome = outCome;
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

    
        let rates = $(".rates option:selected").val();
        let amou = $(".amount option:selected").val();
        alert("Details updated");


    });


    $("button.addCase").click(function(event) {
        event.preventDefault();
        let caseName = $("input#case-name").val();
        let caseNumber = $("input#case-number").val();
        let caseSummary = $("textarea#case-summary").val();
        let outCome = $("input:radio[name=case-outcome]:checked").val();

        let caseDetails =  new caseDetails(caseName, caseNumber, caseSummary, outCome);

        alert("Case recorded successfully"+caseDetails);



    });


    $("button.addClient").click(function(event) {
        event.preventDefault();
        let clientName =$("input#client-name").val();
        let clientEmail =$("input#client-email").val();
        let clientCaseNumber = $("input#client-case-number").val();
        alert("Client added successfully");


    });




});
