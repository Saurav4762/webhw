// Get form elements
const form = document.getElementById('marksheetForm');
const englishInput = document.getElementById('marksinenglish');
const mathInput = document.getElementById('marksinmath');
const scienceInput = document.getElementById('marksinscience');
const totalInput = document.getElementById('marks');
const percentageInput = document.getElementById('percentage');
const gradeInput = document.getElementById('grade');

// Function to calculate total, percentage, and grade
function calculateMarks() {
    let a = Number(document.getElementById('marksinenglish').value);
    let b = Number(document.getElementById('marksinmath').value);
    let c = Number(document.getElementById('marksinscience').value);

    // Calculate total marks
    let total = a + b + c;
    totalInput.value = total;

    // Calculate percentage (out of 300)
    const percentage = (total / 300) * 100;
    percentageInput.value = percentage.toFixed(2);

    // Calculate grade based on percentage
    let grade = 'F';
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B+';
    } else if (percentage >= 60) {
        grade = 'B';
    }else if (percentage >= 50) {
        grade = 'C';
    }

    gradeInput.value = grade;
}

// Add event listeners for real-time calculation
englishInput.addEventListener('input', calculateMarks);
mathInput.addEventListener('input', calculateMarks);
scienceInput.addEventListener('input', calculateMarks);

// Handle form submission
form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let fullname = document.getElementById('fullname').value.trim();
    let rollno = document.getElementById('rollno').value.trim();

    // Basic validations
    if (!fullname) {
        alert('Please enter full name.');
        document.getElementById('fullname').focus();
        return;
    }
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(fullname)) {
        alert('Please enter a valid name (letters and spaces only).');
        document.getElementById('fullname').focus();
        return;
    }

    if (!rollno) {
        alert('Please enter roll number.');
        document.getElementById('rollno').focus();
        return;
    }
    const rollPattern = /^[A-Za-z0-9\-]+$/;
    if (!rollPattern.test(rollno)) {
        alert('Roll number may contain letters, numbers and hyphens only.');
        document.getElementById('rollno').focus();
        return;
    }

    let english = parseFloat(englishInput.value) || 0;
    let math = parseFloat(mathInput.value) || 0;
    let science = parseFloat(scienceInput.value) || 0;

    if (english < 0 || english > 100) { alert('English marks must be between 0 and 100.'); englishInput.focus(); return; }
    if (math < 0 || math > 100) { alert('Math marks must be between 0 and 100.'); mathInput.focus(); return; }
    if (science < 0 || science > 100) { alert('Science marks must be between 0 and 100.'); scienceInput.focus(); return; }

    // Display summary
    let total = parseFloat(totalInput.value) || (english + math + science);
    let percentage = parseFloat(percentageInput.value) || ((total / 300) * 100);
    let grade = gradeInput.value || (function(p){
        if (p >= 90) return 'A+';
        if (p >= 80) return 'A';
        if (p >= 70) return 'B+';
        if (p >= 60) return 'B';
        if (p >= 50) return 'C';
        return 'F';
    })(percentage);

    const summary = [
        `Marksheet Summary`,
        `Name: ${fullname}`,
        `Roll No: ${rollno}`,
        `English: ${english}`,
        `Math: ${math}`,
        `Science: ${science}`,
        `Total: ${total}/300`,
        `Percentage: ${percentage.toFixed(2)}%`,
        `Grade: ${grade}`
    ].join('\n');

    alert(summary);

    // Optionally, reset the form
    // form.reset();
    // calculateMarks();
});
