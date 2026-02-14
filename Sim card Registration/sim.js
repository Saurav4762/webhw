// Set `dob` max to today minus 16 years so users cannot pick a date that makes them younger than 16
(function setDobMaxTo16Plus() {
    var dobInput = document.getElementById('dob');
    if (!dobInput) return;
    var d = new Date();
    d.setFullYear(d.getFullYear() - 16);
    var yyyy = d.getFullYear();
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    dobInput.max = yyyy + '-' + mm + '-' + dd;
})();

document.getElementById('simForm').addEventListener('submit', function(evt) {
    evt.preventDefault();

    var name = document.getElementById('Sauravkumaruprety').value.trim();
    var dob = document.getElementById('dob').value;
    var citizenID = document.getElementById('citizenID').value.trim();
    var simtype = document.getElementById('simtype').value;
    var nationality = document.getElementById('nationality').value;
    var terms = document.getElementById('terms').checked;

    // Name validation
    var namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(name)) {
        alert('Please enter a valid name (letters and spaces only).');
        return;
    }

    // Ensure user is at least 16 years old
    var dobDate = new Date(dob);
    if (isNaN(dobDate.getTime())) {
        alert('Invalid date of birth.');
        return;
    }
    var today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    var m = today.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }
    if (age < 16) {
        alert('You must be at least 16 years old to register.');
        return;
    }

    // Citizen ID validation: must be 10 digits
    var citizenIDPattern = /^\d{10}$/;
    if (!citizenIDPattern.test(citizenID)) {
        alert('Please enter a valid Citizen ID (10 digits).');
        return;
    }   
    
    // SIM type validation
    if (simtype === '') {
        alert('Please select a SIM type.');
        return;
    }

    // Nationality validation
    if (nationality === '') {
        alert('Please select your nationality.');
        return;
    }

    // Terms and conditions validation
    if (!terms) {
        alert('Please agree to the terms and conditions.');
        return;
    }

    // If all validations pass, show success message
    alert('SIM Card Registration Successful!');
    // Optionally, you can reset the form here
    // document.getElementById('simForm').reset();

    setTimeout(function() {
        location.reload();
    }, 4000);
}
);