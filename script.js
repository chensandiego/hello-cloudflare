document.getElementById('couponForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const couponCode = document.getElementById('couponCode').value;
  const resultElement = document.getElementById('result');

  try {
    const response = await fetch('https://your-worker-domain.workers.dev/verify-coupon', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: couponCode }),
    });

    const data = await response.json();

    if (data.valid) {
      resultElement.textContent = `🎉 Coupon "${couponCode}" is valid! Discount: ${data.discount}%`;
      resultElement.style.color = 'green';
    } else {
      resultElement.textContent = `❌ Invalid coupon code.`;
      resultElement.style.color = 'red';
    }
  } catch (error) {
    resultElement.textContent = `❌ An error occurred. Please try again later.`;
    resultElement.style.color = 'red';
  }
});
