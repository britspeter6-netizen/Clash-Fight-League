// ===========================
// CLASH FIGHT LEAGUE — MAIN JS
// ===========================

// Mobile nav toggle (add hamburger button to HTML when needed)
document.addEventListener('DOMContentLoaded', function () {
  console.log('Clash Fight League loaded.');

  // Paystack ticket purchase
  // TODO: Replace with actual Paystack public key, amount, and event details
  const buyButtons = document.querySelectorAll('[data-action="buy-ticket"]');

  buyButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const handler = PaystackPop.setup({
        key: 'pk_test_REPLACE_WITH_YOUR_PAYSTACK_PUBLIC_KEY',
        email: document.getElementById('buyer-email').value || 'customer@example.com',
        amount: parseInt(btn.dataset.amount) * 100, // amount in kobo/cents
        currency: 'ZAR',
        ref: 'CFL-' + Math.floor(Math.random() * 1000000000 + 1),
        metadata: {
          custom_fields: [
            {
              display_name: 'Event',
              variable_name: 'event',
              value: btn.dataset.event || 'Clash Fight League'
            }
          ]
        },
        callback: function (response) {
          alert('Payment successful! Reference: ' + response.reference);
          // TODO: Send reference to your backend or n8n webhook for verification
        },
        onClose: function () {
          console.log('Payment window closed.');
        }
      });

      handler.openIframe();
    });
  });
});
