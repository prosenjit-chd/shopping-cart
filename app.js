function updateCaseNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value; 
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) +1;
    }
    else if(productNumber>0){
        productNumber = parseInt(productNumber) -1;
    }  
    productInput.value = productNumber;
    //update case total
    const productTotal =  document.getElementById(product + "-total");
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const PhoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = PhoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    //up[date on the main html page
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total").innerText = total;
}
//Phone Increase event handler
document.getElementById("phone-plus-button").addEventListener("click", function(){
    updateCaseNumber("phone", 1219, true);
})
//Phone Dicrease event handler
document.getElementById("phone-minus-button").addEventListener("click", function(){
    updateCaseNumber("phone", 1219, false);
})

//Case Increase event handler
document.getElementById("case-plus-button").addEventListener("click", function(){
    updateCaseNumber("case", 59,  true);
    
})
//Case Dicrease event handler
document.getElementById("case-minus-button").addEventListener("click", function(){
    updateCaseNumber("case", 59, false);
    
})
