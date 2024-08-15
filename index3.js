document.querySelectorAll('a.scrollToContainer').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        // Use querySelector to find the first element with class 'container1'
        document.querySelector('.form__wrap').scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelector('#scrollToContainer').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Use querySelector to find the first element with class 'form__wrap'
    const targetElement = document.querySelector('.form__wrap');
    
    if (targetElement) {
        // Scroll smoothly to the target element
        targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Target element with class "form__wrap" not found.');
    }
});
