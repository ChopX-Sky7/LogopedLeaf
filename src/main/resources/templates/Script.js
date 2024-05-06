document.addEventListener('DOMContentLoaded', function() {
    const valueDisplay = document.getElementById('valueDisplay');
    let currentValue = 0;

    function updateDisplay() {
        valueDisplay.textContent = currentValue;
    }


    const decrementButton = document.getElementById('decrementButton');
    const incrementButton = document.getElementById('incrementButton');


    decrementButton.addEventListener('click', function() {
        currentValue -= 1;
        updateDisplay();
    });


    incrementButton.addEventListener('click', function() {
        currentValue += 1;
        updateDisplay();
    });
});
