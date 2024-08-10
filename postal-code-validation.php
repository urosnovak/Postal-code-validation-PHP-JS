<?php
/*
Plugin Name: postal Code Validation
Description: Validates postal codes
Version: 1.0
Author: Uros Novakovic
*/

defined('ABSPATH') or die('No script kiddies please!');

require_once(plugin_dir_path(__FILE__) . 'admin-page.php');

add_action('wp_enqueue_scripts', 'cwpc_enqueue_scripts');
function cwpc_enqueue_scripts() {
    if (is_checkout() && !is_wc_endpoint_url()) {
        wp_register_script('cwpc-validate-postal', plugin_dir_url(__FILE__) . 'js/script.js', array('jquery'), '1.0', true);
        wp_enqueue_script('cwpc-validate-postal');
        $translation_array = array('postalCodes' => get_option('cwpc_postal_codes'));
        wp_localize_script('cwpc-validate-postal', 'postalCodeData', $translation_array);
    }
}

if (!function_exists('validate_postal_code')) {
    function validate_postal_code($data, $errors) {
        $valid_postal_codes = explode(',', get_option('cwpc_postal_codes'));
        if (!in_array($data['postcode'], $valid_postal_codes)) {
            $errors->add('validation', 'Invalid postal code.');
        }
    }
    add_action('woocommerce_after_checkout_validation', 'validate_postal_code', 10, 2);
}
