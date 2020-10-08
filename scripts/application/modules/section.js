import { register } from '@shopify/theme-sections';
import * as product from '@shopify/theme-product';
import { getUrlWithVariant, ProductForm } from '@shopify/theme-product-form';

// This function is called whenever the user changes the value of an option input
function onOptionChange(event) {
    const variant = event.dataset.variant;

    if (variant === null) {
        // The combination of selected options does not have a matching variant
    } else if (variant && !variant.available) {
        // The combination of selected options has a matching variant but it is
        // currently unavailable
    } else if (variant && variant.available) {
        // The combination of selected options has a matching variant and it is
        // available
    }
    if (!variant) return;
    const url = getUrlWithVariant(window.location.href, variant.id);
    window.history.replaceState({ path: url }, '', url);
}

document.addEventListener('DOMContentLoaded', () => {
    const formElement = document.querySelector('[data-product-form]');
    const productHandle = formElement
        ? formElement.dataset.productHandle
        : null;

    if (productHandle) {
        fetch(`/products/${productHandle}.js`)
            .then((response) => {
                return response.json();
            })
            .then((productJSON) => {
                const productForm = new ProductForm(formElement, productJSON, {
                    onOptionChange,
                });
            });
    }
});
