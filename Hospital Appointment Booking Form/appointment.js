document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('appointmentForm');
    var dateInput = document.getElementById('date');

    // Set min date to today
    (function setMinDate() {
        var d = new Date();
        var yyyy = d.getFullYear();
        var mm = String(d.getMonth() + 1).padStart(2, '0');
        var dd = String(d.getDate()).padStart(2, '0');
        dateInput.min = yyyy + '-' + mm + '-' + dd;
    })();

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('Sauravkumaruprety').value.trim();
        var age = Number(document.getElementById('age').value);
        var phone = document.getElementById('phone').value.trim();
        var department = document.getElementById('department').value;
        var date = document.getElementById('date').value;
        var timeslot = document.getElementById('timeslot').value;

        // Name validation (letters and spaces only)
        var namePattern = /^[a-zA-Z\s]+$/;
        if (!name) { alert('Patient name is required.'); return; }
        if (!namePattern.test(name)) { alert('Name must contain letters and spaces only.'); return; }

        // Age validation
        if (!age || age <= 0) { alert('Age must be greater than 0.'); return; }

        // Phone validation
        var phonePattern = /^(98|97)\d{8}$/;
        if (!phonePattern.test(phone)) { alert('Phone number must be 10 digits starting with 98 or 97.'); return; }

        // Department/time slot
        if (!department) { alert('Please select a department.'); return; }
        if (!timeslot) { alert('Please select a time slot.'); return; }

        // Date validation (not in the past)
        if (!date) { alert('Please select an appointment date.'); return; }
        var selected = new Date(date + 'T00:00:00');
        var today = new Date();
        today.setHours(0,0,0,0);
        if (selected < today) { alert('Appointment date cannot be in the past.'); return; }

        alert('Appointment confirmed for ' + name + '.');
        // Optionally reset the form
        // form.reset();
    });
});
