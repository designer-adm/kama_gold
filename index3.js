document.querySelectorAll('a.scrollToContainer').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        // Use querySelector to find the first element with class 'container1'
        document.querySelector('.form__wrap').scrollIntoView({ behavior: 'smooth' });
    });
});

// // <---form data--->
// document.addEventListener('DOMContentLoaded', function() {
//     // Function to load form data from local storage
//     function loadFormData() {
//         const savedData = localStorage.getItem('formData');
//         if (savedData) {
//             const formData = JSON.parse(savedData);
//             document.getElementById('name').value = formData.name || '';
//             document.getElementById('phone').value = formData.phone || '';
//             document.getElementById('address').value = formData.address || '';
//         }
//     }

//     // Function to save form data to local storage
//     function saveFormData() {
//         const name = document.getElementById('name').value;
//         const phone = document.getElementById('phone').value;
//         const address = document.getElementById('address').value;
//         const formData = {
//             name: name,
//             phone: phone,
//             address: address
//         };
//         localStorage.setItem('formData', JSON.stringify(formData));
//     }

//     // Load form data when the page loads
//     loadFormData();

//     // Add event listener to the form to save data on submit
//     document.getElementById('myForm').addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the default form submission
//         saveFormData();
//         document.getElementById('statusMessage').textContent = 'Form data saved successfully!';
//     });

//     // Add event listener to the clear button
//     document.getElementById('clearData').addEventListener('click', function() {
//         localStorage.removeItem('formData');
//         document.getElementById('myForm').reset(); // Clear the form fields
//         document.getElementById('statusMessage').textContent = 'Form data cleared!';
//     });
// });



// // <--form to google sheet-->


// document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission
    
//     const formData = new FormData(this);
//     const data = {};
//     formData.forEach((value, key) => {
//         data[key] = value;
//     });

//     fetch('YOUR_WEB_APP_URL', { // Replace with your Google Apps Script web app URL
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(result => {
//         console.log('Success:', result);
//         document.getElementById('statusMessage').textContent = 'Form data submitted successfully!';
//         document.getElementById('myForm').reset(); // Clear the form
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         document.getElementById('statusMessage').textContent = 'There was an error submitting the form.';
//     });
// });