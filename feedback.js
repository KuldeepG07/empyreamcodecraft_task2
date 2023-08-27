// Form Validation 
function validateform() {
    let a = document.feedback.fname.value;
    let b = document.feedback.lname.value;
    let c = document.feedback.email.value;
    if (a == "") {
        alert("Please enter your First Name");
        return false;
    }

    else if (b == "") {
        alert("Please enter your Last Name");
        return false;
    }

    else if (c == "") {
        alert("Please enter your Email-ID");
        return false;
    }

    alert("Feedback Form submitted successfully!");
    return true;
}