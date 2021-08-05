
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
}

