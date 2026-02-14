document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('enrollForm');
    var expRadios = document.getElementsByName('experience');
    var expGroup = document.getElementById('expGroup');
    var expDetails = document.getElementById('expDetails');

    function toggleExperience() {
        var hasExp = Array.from(expRadios).some(function(r){ return r.checked && r.value === 'yes'; });
        expGroup.style.display = hasExp ? 'block' : 'none';
        if (!hasExp) expDetails.value = '';
    }

    Array.from(expRadios).forEach(function(r){ r.addEventListener('change', toggleExperience); });
    toggleExperience();

    form.addEventListener('submit', function(e){
        e.preventDefault();
        var name = document.getElementById('Sauravkumaruprety').value.trim();
        var email = document.getElementById('email').value.trim();
        var course = document.getElementById('course').value;
        var mode = document.querySelector('input[name="mode"]:checked');
        var experience = document.querySelector('input[name="experience"]:checked');

        // Name and email required
        if (!name) { alert('Name is required.'); return; }
        if (!email) { alert('Email is required.'); return; }

        // Email format
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) { alert('Please enter a valid email address.'); return; }

        // Course selected
        if (!course) { alert('Please select a course.'); return; }

        // Mode selected
        if (!mode) { alert('Please select mode of study.'); return; }

        // If experience yes, textarea must not be empty
        if (experience && experience.value === 'yes') {
            if (!expDetails.value.trim()) { alert('Please provide your experience details.'); expDetails.focus(); return; }
        }

        // If all validations pass, show summary
        var summary = `Enrollment Summary:\nName: ${name}\nEmail: ${email}\nCourse: ${course}\nMode: ${mode.value}\nExperience: ${experience ? experience.value : 'N/A'}\n`;        
        if (experience && experience.value === 'yes') {
            summary += `Experience Details: ${expDetails.value.trim()}`;
        }
        alert(summary);
        
        // Optionally reset
        // form.reset(); toggleExperience();

    });
});
