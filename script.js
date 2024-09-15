document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
        // Formspree will handle the form submission, so we don't need to prevent the default behavior
        
        // Optionally, you can still log the submission to the console
        console.log('Form submitted');
        
        // Note: The form will be submitted to Formspree, and the page will redirect to Formspree's success page
        // If you want to handle the submission without a page redirect, you'd need to use Formspree's AJAX API
    });
});
