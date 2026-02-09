function validateForm(){
            const form = document.getElementById('regForm');
            const messages = document.getElementById('messages');

            function clearMessages(){ messages.innerHTML = ''; }

            function showErrors(errs){
                clearMessages();
                const ul = document.createElement('ul');
                ul.className = 'error-list';
                errs.forEach(e=>{ const li=document.createElement('li'); li.textContent=e; ul.appendChild(li); });
                messages.appendChild(ul);
                window.scrollTo({top:0,behavior:'smooth'});
            }

            function showSuccess(msg){
                clearMessages();
                const div=document.createElement('div'); div.className='success'; div.textContent=msg; messages.appendChild(div);
            }

            form.addEventListener('submit', function(evt){
                evt.preventDefault();
                const errs = [];

                const name = document.getElementById('fullname').value.trim();
                const dob = document.getElementById('dob').value;
                const ageVal = document.getElementById('age').value;
                const phone = document.getElementById('phone').value.trim();
                const email = document.getElementById('email').value.trim();
                const gender = form.querySelector('input[name="gender"]:checked');
                const stream = document.getElementById('stream').value;
                const agree = document.getElementById('agree').checked;

                if(!name) errs.push('Full Name is required.');
                else if(!/^[A-Za-z\\s]+$/.test(name)) errs.push('Name must contain only letters and spaces.');

                if(!dob) errs.push('Date of Birth is required.');

                if(!ageVal) errs.push('Age is required.');
                else{
                    const age = Number(ageVal);
                    if(Number.isNaN(age) || age < 16 || age > 30) errs.push('Age must be between 16 and 30.');
                }

                if(!phone) errs.push('Phone number is required.');
                else if(!/^(98|97)\\d{8}$/.test(phone)) errs.push('Phone must be 10 digits and start with 98 or 97.');

                if(!email) errs.push('Email is required.');
                else if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) errs.push('Email must be a valid email address.');

                if(!gender) errs.push('Please select a gender.');

                if(!stream) errs.push('Please select an exam stream.');

                if(!agree) errs.push('You must confirm that all details are correct.');

                if(errs.length){ showErrors(errs); return; }

                // Success
                showSuccess('Registration successful! This page will refresh in 5 seconds.');
                // Optionally disable submit to prevent duplicates
                form.querySelector('button[type="submit"]').disabled = true;
                setTimeout(()=>{
                    window.location.reload();
                }, 5000);
            });
        }