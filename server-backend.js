document.getElementById('order_form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Form data saved successfully');
        event.target.reset(); // Clear the form fields
      } else {
        alert('Error saving form data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving form data');
    }
  });