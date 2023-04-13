

document.addEventListener('DOMContentLoaded', function() {
    // Get the textarea element and log its value to the console on page load
    var billing = document.getElementById('billing');
    console.log(billing.value);
});


const useBillingCheckbox = document.querySelector('input[name="useBilling"]');
const billingTextArea = document.getElementById('billing');
const homeTextArea = document.getElementById('home');

useBillingCheckbox.addEventListener('change', function() {
  if (useBillingCheckbox.checked) {
    homeTextArea.value = billingTextArea.value;
    homeTextArea.disabled = true;
  } else {
    homeTextArea.value = '';
    homeTextArea.disabled = false;
  }
});


