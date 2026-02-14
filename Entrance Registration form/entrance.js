document.getElementById("regform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    var name = document.getElementById("sauravkumaruprety").value.trim();
    var dob = document.getElementById("dob").value;
    var age = document.getElementById("age").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');
    var stream = document.getElementById("stream").value;
    var agree = document.getElementById("agree").checked;

    // Name validation
    var namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(name)) {
        alert("Please enter a valid name (letters and spaces only).");
        return;
    }

    // DOB validation
    if (dob === "") {
        alert("Please enter your date of birth.");
        return;
    }

    // Age validation
    var ageNum = Number(age);
    if (isNaN(ageNum) || ageNum < 16 || ageNum > 30) {
        alert("Age must be a number between 16 and 30.");
        return;
    }

    // Phone validation: must start with 98 or 97 and have 10 digits total
    var phonePattern = /^(98|97)\d{8}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (starting with 98 or 97 and followed by 8 digits).");
        return;
    }

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Gender validation
    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    // Stream validation
    if (stream === "") {
        alert("Please select an exam stream.");
        return;
    }

    // Agreement checkbox
    if (!agree) {
        alert("Please confirm that your details are correct.");
        return;
    }

    function escapeHTML(str) {
        return str.replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/\"/g, "&quot;")
                  .replace(/'/g, "&#039;");
    }

    alert("Registration successful!"); // Show success message

    setTimeout(function() {
        location.reload();
    }, 5200); // Reload the page after 5 seconds
});
