
function validate(){
    var txtZip = $('#txtZip').val();
    if (txtZip.length != 5) {
        alert("Please enter a 5 digit zip code.");
        return false;
    }
    else if (isNaN(txtZip)) {
        alert("Please enter only numbers.");
        return false;
    }
}