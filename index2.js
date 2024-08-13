document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('order_form');

    // Load data from local storage if available
    const savedData = localStorage.getItem('formData');
    if (savedData) {
        const data = JSON.parse(savedData);
        document.getElementById('name').value = data.name || '';
        document.getElementById('phone').value = data.phone || '';
        document.getElementById('address').value = data.address || '';
        
        // Handle radio button state
        const selectedPackage = document.querySelector(`input[name="package_price"][value="${data.package_price}"]`);
        if (selectedPackage) {
            selectedPackage.checked = true;
        }
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            package_price: document.querySelector('input[name="package_price"]:checked').value
        };

        // Save data to local storage
        localStorage.setItem('formData', JSON.stringify(formData));

        form.reset();

        // Optionally, show a message or perform other actions
        alert('Thank You for Submitting');

        // Optionally, if you want to submit the form or redirect:
        // form.submit();
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementsByClassName('dataForm');

//     // Load data from local storage if available
//     const savedData = localStorage.getItem('formData');
//     if (savedData) {
//         const data = JSON.parse(savedData);
//         document.getElementById('name').value = data.name || '';
//         document.getElementById('phone').value = data.phone || '';
//         document.getElementById('address').value = data.address || '';
//     }

//     form.addEventListener('submit', (event) => {
//         event.preventDefault(); // Prevent form submission

//         // Collect form data
//         const formData = {
//             name: document.getElementById('name').value,
//             phone: document.getElementById('phone').value,
//             address: document.getElementById('address').value
//         };

//         // Save data to local storage
//         localStorage.setItem('formData', JSON.stringify(formData));

//         // Optionally, you can show a message or take further action
//         alert('Data saved to local storage!');
//     });
// });





// (function() {
//     var queryStr = window.location.search,
//         currentRequestModify = 'api.php',
//         forms = document.forms,     //search all forms
//         formLength = forms.length,  //forms count
//         i;

//     if(formLength > 0) {  //If there is at least one form
//         for(i = 0; i < formLength; i++) {
//             var form = forms[i]; //current form
//             form.action = currentRequestModify + queryStr; //set action
//             if (name = form.name)
//                 name.required = true;  //set required

//             if (phone = form.phone)
//                 phone.required = true;

//             if (country = form.country)
//                 country.style.display = "none";

//             form.method = 'POST';
//         }
//     }

//     var promoEl = document.getElementsByClassName("al-cost-promo");

//     for(var i = 0; i < promoEl.length; i++){
//         promoEl[i].innerText = "2998 INR";
//     }

//     var priceEl = document.getElementsByClassName("al-cost");

//     for(var i = 0; i < priceEl.length; i++){
//         priceEl[i].innerText = "1499 INR";
//     }
// })();