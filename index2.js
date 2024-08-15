const scriptURL = 'https://script.google.com/macros/s/AKfycbwnFUJ3aZJphkJYEjKJEq3cdL7T8GqEdANyg7lEbM30fdbOaH4_B0Hnvnhj7vgcevJ59w/exec';
        const form = document.forms['contact-form'];

        form.addEventListener('submit', async e => {
            e.preventDefault();
            const loadingIndicator = document.getElementById('loading');
            loadingIndicator.style.display = 'block'; // Show loading indicator

            try {
                const response = await fetch(scriptURL, {
                    method: 'POST',
                    body: new FormData(form)
                });

                if (response.ok) {
                    window.location.href = 'thank_you.html'; // Redirect to thank you page
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Error!', error.message);
                alert('There was a problem submitting the form.');
            } finally {
                loadingIndicator.style.display = 'none'; // Hide loading indicator
            }
        });