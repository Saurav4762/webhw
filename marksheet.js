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

    if (!fullname || !rollno) {
        alert('Please fill in all required fields!');
        return;
    }

    let english = parseFloat(englishInput.value) || 0;
    let math = parseFloat(mathInput.value) || 0;
    let science = parseFloat(scienceInput.value) || 0;

    if (english < 0 || english > 100 || math < 0 || math > 100 || science < 0 || science > 100) {
        alert('Marks must be between 0 and 100!');
        return;
    }

    // Display summary
    let total = parseFloat(totalInput.value);
    let percentage = parseFloat(percentageInput.value);
    let grade = gradeInput.value;

    alert(`Marksheet Summary\n\nName: ${fullname}\nRoll No: ${rollno}\n\nEnglish: ${english}\nMath: ${math}\nScience: ${science}\n\nTotal: ${total}/300\nPercentage: ${percentage.toFixed(2)}%\nGrade: ${grade}`);

    // Optionally, reset the form
    // form.reset();
    // calculateMarks();
});
