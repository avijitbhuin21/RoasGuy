function handlePayment() {
  const fullNameInput = document.querySelector('input[placeholder="Enter your full name"]');
  const phoneNumberInput = document.querySelector('.phone-input');
  const countryCodeInput = document.querySelector('.country-select');
  const emailInput = document.querySelector('input[type="email"]');

  const fullName = fullNameInput ? fullNameInput.value.trim() : "";
  const phoneNumber = phoneNumberInput ? phoneNumberInput.value.trim() : "";
  const countryCode = countryCodeInput ? countryCodeInput.value : "";
  const email = emailInput ? emailInput.value.trim() : "";

  if (!fullName || !phoneNumber || !email) {
    alert("Please fill in all required fields.");
    return;
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const priceElement = document.querySelector('.price');
  const amount = priceElement ? priceElement.innerText : "0";

  const paymentData = {
    fullName: fullName,
    phoneNumber: countryCode + phoneNumber,
    email: email,
    amount: amount
  };

  console.log("Processing payment for:", paymentData);
  alert(`Proceeding to payment for ${amount}. Integration waiting for gateway credentials.`);
  
  // TODO: Add actual payment gateway integration here (e.g., Razorpay, Stripe)
  // Example for Razorpay:
  // var options = {
  //     "key": "YOUR_KEY_ID",
  //     "amount": "50000", 
  //     ...
  // };
  // var rzp1 = new Razorpay(options);
  // rzp1.open();
}
