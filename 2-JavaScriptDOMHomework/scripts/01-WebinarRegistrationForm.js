var invoiceCheckbox = document.getElementById('invoice');

invoiceCheckbox.addEventListener("click", function () {
    var displaySection = document.getElementById('displayOnRequest')
    
    if (invoiceCheckbox.checked) {
        displaySection.style.visibility = 'visible'
    } else {
        displaySection.style.visibility = 'hidden'
    }
}, false)