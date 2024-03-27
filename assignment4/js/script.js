document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the form
    document.getElementById('pizza-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Retrieve form values
        const size = document.getElementById('pizza-size').value;
        const crust = document.getElementById('crust-type').value;
        const toppings = document.getElementById('toppings').value.split(',').map(topping => topping.trim());
        const quantity = parseInt(document.getElementById('quantity').value);
        
        // Create Pizza object
        const pizza = new Pizza(size, crust, toppings, quantity);
        
        // Present Pizza details to the customer
        presentPizza(pizza);
    });
    
    



class Pizza {
    constructor(size, crust, toppings, quantity) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.quantity = quantity;
    }
}

function displayPizza(pizza) {
    document.getElementById('size-display').textContent = `Size: ${pizza.size}`;
    document.getElementById('crust-display').textContent = `Crust: ${pizza.crust}`;
    document.getElementById('toppings-display').textContent = `Toppings: ${pizza.toppings.join(', ')}`;
    document.getElementById('quantity-display').textContent = `Quantity: ${pizza.quantity}`;

    document.getElementById('pizza-details').classList.remove('hidden');
}

});

class Pizza {
    constructor(size, crust, toppings, quantity) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.quantity = quantity;
    }
}

function presentPizza(pizza) {
    // Display pizza description
    document.getElementById('size-display').textContent = `Size: ${pizza.size}`;
    document.getElementById('crust-display').textContent = `Crust: ${pizza.crust}`;
    document.getElementById('toppings-display').textContent = `Toppings: ${pizza.toppings.join(', ')}`;
    document.getElementById('quantity-display').textContent = `Quantity: ${pizza.quantity}`;
    
    // Display pizza image
    const imageContainer = document.getElementById('image-container');
    const pizzaImage = document.getElementById('pizza-image');
    pizzaImage.src = "placeholder_pizza_image.jpg"; // Change to actual image URL later
    imageContainer.classList.remove('hidden');
    document.getElementById('pizza-details').classList.remove('hidden');
}











