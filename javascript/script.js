function validateForm() {
    var x = document.forms["user_login"]["username"].value;
    if (x == null || x == "") {
        alert("Enter a Username!");
        return false;
    } else if (isNaN(Number(x[0])) == false) {
        alert("Usernames don't start with a number!");
        return false;
    }