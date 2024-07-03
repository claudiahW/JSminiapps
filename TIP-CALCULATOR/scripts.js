
function calculateTip(){

    // get input type values

    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    const tipPercentage = parseFloat(document.getElementById("tip-percentage").value);

    // calculate the tip and total amount

    const tipAmount = billAmount * (tipPercentage/100);
    const totalAmount = tipAmount + billAmount;

    // Display the results
    document.getElementById("tip-amount").textContent = '$' + tipAmount.toFixed(2);
    document.getElementById("total-amount").textContent = '$' + totalAmount;
}