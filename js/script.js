// jQuery(document).ready(function($) {
  
//     $(document).on('blur', '#billing-postcode', function() {
    
//         var enteredPostcode = $(this).val().trim();
//         var allowedPostcodes = postcodeData.allowed_postcodes.split(',');

//         if (!allowedPostcodes.includes(enteredPostcode)) {
//             $('.wc-block-components-checkout-place-order-button').prop('disabled', true);
//         } else {
//             $('.wc-block-components-checkout-place-order-button').prop('disabled', false);
//         }
//     });
// });
// jQuery(window).on('load', function() {
//     console.log('Window and all content fully loaded.');

//     jQuery('#billing-postcode').on('input blur', function(event) {
//         var enteredZip = jQuery(this).val().trim();
//         console.log('Event type:', event.type); // Logs the type of event triggered ('input' or 'blur')
//         console.log('ZIP Code entered:', enteredZip); // Logs entered ZIP code

//         var allowedZips = allowedZIP.zipcodes;
//         console.log('Allowed ZIP codes:', allowedZips); // Logs list of allowed ZIP codes

//         var placeOrderButton = jQuery('.wc-block-components-checkout-place-order-button');
//         console.log('Place Order Button found:', placeOrderButton.length > 0); // Logs true if button is found, false otherwise

//         if (!allowedZips.includes(enteredZip)) {
//             console.log('Entered ZIP is not allowed.');
//             placeOrderButton.prop('disabled', true).addClass('disabled');
//             jQuery(this).addClass('input-error'); // Adds error styling to input
//             jQuery('.wc-block-components-notices').html('<div class="woocommerce-error">Please enter a valid ZIP Code that is within our delivery area.</div>');
//             console.log('Error message displayed.');
//         } else {
//             console.log('Entered ZIP is allowed.');
//             placeOrderButton.prop('disabled', false).removeClass('disabled');
//             jQuery(this).removeClass('input-error');
//             jQuery('.wc-block-components-notices').empty(); // Clears any error messages
//             console.log('Error message cleared.');
//         }
//     });
// });
jQuery(document).ready(function($) {
    $('form.checkout').on('submit', function(e) {
        var postalCode = $('#billing_postcode').val();
        var validCodes = "<?php echo get_option('cwpc_postal_codes'); ?>".split(',');
        if (!validCodes.includes(postalCode)) {
            e.preventDefault();
            alert('Invalid Postal Code.');
        }
    });
});