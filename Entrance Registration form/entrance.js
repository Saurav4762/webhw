document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('regform');
    const messages = document.getElementById('messages');
    const overlay = document.getElementById('success-overlay');
    const successText = document.getElementById('success-text');
    const printBtn = document.getElementById('print-btn');
    const closeBtn = document.getElementById('close-btn');

    if(!form) return;

    function clearMessages(){ messages.innerHTML = ''; }

    function showErrors(errs){
        clearMessages();
        const ul = document.createElement('ul');
        ul.className = 'error-list';
        errs.forEach(e=>{
            const li=document.createElement('li');
            li.textContent=e; ul.appendChild(li);
        });
        messages.appendChild(ul);
        window.scrollTo({top:0,behavior:'smooth'});
    }

    function escapeHTML(str){
        return String(str)
            .replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,"&#039;");
    }

    function showSuccess(msg){
        clearMessages();
        if(successText){
            // allow HTML string for structured summary
            successText.innerHTML = msg;
        }
        if(overlay){ overlay.hidden = false; overlay.focus?.(); }
    }

    printBtn && printBtn.addEventListener('click', function(){
        // print the page (user can choose destination)
        window.print();
    });

    closeBtn && closeBtn.addEventListener('click', function(){
        if(overlay) overlay.hidden = true;
    });

    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        const errs = [];

        const name = document.getElementById('Sauravkumaruprety').value.trim();
        const dob = document.getElementById('dob').value;
        const ageVal = document.getElementById('age').value;
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const gender = form.querySelector('input[name="gender"]:checked');
        const stream = document.getElementById('stream').value;
        const agree = document.getElementById('agree').checked;

        if(!name) errs.push('Full Name is required.');
        else if(!/^[A-Za-z\s]+$/.test(name)) errs.push('Name must contain only letters and spaces.');

        if(!dob) errs.push('Date of Birth is required.');

        if(!ageVal) errs.push('Age is required.');
        else{
            const age = Number(ageVal);
            if(Number.isNaN(age) || age < 16 || age > 30) errs.push('Age must be between 16 and 30.');
        }

        if(!phone) errs.push('Phone number is required.');
        else if(!/^(98|97)\d{8}$/.test(phone)) errs.push('Phone must be 10 digits and start with 98 or 97.');

        if(!email) errs.push('Email is required.');
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push('Email must be a valid email address.');

        if(!gender) errs.push('Please select a gender.');

        if(!stream) errs.push('Please select an exam stream.');

        if(!agree) errs.push('You must confirm that all details are correct.');

        if(errs.length){ showErrors(errs); return; }

        // Build a summary with submitted values and show it in the centered overlay
        const summary = [];
        summary.push('<p><strong>Registration successful!</strong></p>');
        summary.push('<div><strong>Name:</strong> ' + escapeHTML(name) + '</div>');
        summary.push('<div><strong>Date of Birth:</strong> ' + escapeHTML(dob) + '</div>');
        summary.push('<div><strong>Age:</strong> ' + escapeHTML(ageVal) + '</div>');
        summary.push('<div><strong>Phone:</strong> ' + escapeHTML(phone) + '</div>');
        summary.push('<div><strong>Email:</strong> ' + escapeHTML(email) + '</div>');
        summary.push('<div><strong>Gender:</strong> ' + escapeHTML(gender ? gender.value : '') + '</div>');
        summary.push('<div><strong>Stream:</strong> ' + escapeHTML(stream) + '</div>');

        showSuccess(summary.join(''));
        const submitBtn = form.querySelector('button[type="submit"]');
        if(submitBtn) submitBtn.disabled = true;

        //Display summary in alert as well (optional)
        alert(`Registration Summary\n\nName: ${name}\nDate of Birth: ${dob}\nAge: ${ageVal}\nPhone: ${phone}\nEmail: ${email}\nGender: ${gender ? gender.value : ''}\nStream: ${stream}`);

        // reload after 5 seconds (optional)
        setTimeout(()=>{
            window.location.reload();
        }, 5000);
    });
});