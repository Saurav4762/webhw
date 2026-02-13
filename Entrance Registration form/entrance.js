document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    var name = document.getElementById("name").value.trim();
    var dob = document.getElementById("dob").value;
    var age = document.getElementById("age").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');
    var stream = document.getElementById("stream").value;
    var agree = document.getElementById("agree").checked;

    //Name validation
    var namepattern = /^[a-zA-Z\s]+$/;
    if (!namepattern.test(name)) {
        alert("Please enter a valid name (letters and spaces only).");
        return;
    }

    //DOB validation
    if(dob === "") {
        alert("Please enter your date of birth.");
        return;
    }   

    //Age validation
    if(age <16 || age > 30) {
        alert("Age must be between 16 and 30.");
        return;
    }

    //phone validation
    var phonepattern = /^(98|97)\d{8}$/;
    if (!phonepattern.test(phone)) {
        alert("Please enter a valid phone number (10 digits starting with 98 or 97).");
        return;
    }

    //email validation
    var emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailpattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    //Gender validation
    if (!gender)
    { alert("Please select your gender."); return; }

    //Stream validation
    if (stream === "") {
        alert("Please select an exam stream.");
        return;
    }   

    function escapeHTML(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

    alert("Registration successful!"); // Show success message

    setTimeout(function() {
        location.reload();
    },5200); // Reload the page after 5 seconds
});
