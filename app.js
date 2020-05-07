// Find our form in the DOM using its class name.
const form = document.getElementByClassName('.contact-form')[0];
// Get the form data with our (yet to be defined) function.
const data = getFormDataAsJSON(form);
// Do something with the email address.
doSomething(data.email);