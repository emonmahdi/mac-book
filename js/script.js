// Extra Memory Cost function
function memoryCost(isSixteenGb){
    const extraMemoryCost = document.getElementById('memory-cost');
    const extraMemoryCostAmount  = 180; 
    const extraMemoryCostAmountZero  = 0;  
    extraMemoryCostAmount.innerText = parseInt(extraMemoryCost.innerText); 
    extraMemoryCostAmountZero.innerText = parseInt(extraMemoryCost.innerText); 
    if(isSixteenGb == true){
        extraMemoryCost.innerText = extraMemoryCostAmount; 
    }
    else{
        extraMemoryCost.innerText = extraMemoryCostAmountZero;
    } 
    // return extraMemoryCostAmount

    netPrice();
}
  

// 8Gb memory cost
document.getElementById('eight-gb-memory-button').addEventListener('click', function(){ 
    memoryCost(false); 
});

// 16Gb memory cost
document.getElementById('sixteen-gb-memory-button').addEventListener('click', function(){  
    memoryCost(true); 
});
// ============================================================================
// ============================================================================
// ============================================================================
// Storage SSD
 

// 256GB ssd storage
document.getElementById('first-ssd-storage').addEventListener('click', function(){
    
    const extraStorageCost = document.getElementById('storage-cost'); 
    const extraStorageCostAmount = parseInt(extraStorageCost.innerText); 
    extraStorageCost.innerText = extraStorageCostAmount * 0;
    netPrice();
});

// 512GB And 1TB Using function
function premiumSsdStorage(isOneTera){
    const extraStorageCost = document.getElementById('storage-cost'); 
    let extraStorageCostAmount = parseInt(extraStorageCost.innerText);
    extraStorageCostAmount = 100;
    const extraStorageCostAmountOneTera = 180
    if(isOneTera == false){
        extraStorageCost.innerText = extraStorageCostAmount; 
    }
    else{
        extraStorageCost.innerText = extraStorageCostAmountOneTera; 
    }
    netPrice();
}


// 512GB ssd storage
document.getElementById('second-ssd-storage').addEventListener('click', function(){
    
    premiumSsdStorage(false);
     

});
// 1TB ssd storage
document.getElementById('third-ssd-storage').addEventListener('click', function(){
     
    premiumSsdStorage(true);

});
// ================================================================================
// ================================================================================
// ================================================================================
//Choose your Delivery Option
function deliveryCharge(isFreeDelivery){
    const deliveryCost = document.getElementById('delivery-cost'); 
    let deliveryCostAmount = parseInt(deliveryCost.innerText);
    deliveryCostAmount = 20;
    if(isFreeDelivery == true){
        deliveryCost.innerText = deliveryCostAmount * 0;
    }
    else{
        deliveryCost.innerText = deliveryCostAmount;
    }
    netPrice();
} 
// Free Delivery
document.getElementById('free-delivery').addEventListener('click', function(){
    
    deliveryCharge(true);

}); 
// charge Delivery
document.getElementById('charge-delivery').addEventListener('click', function(){ 

    deliveryCharge(false); 

});

// Totola amound total-price

function netPrice(){
    const bestPriceCost = parseInt(document.getElementById('best-price').innerText);

    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);

    const storageCost = parseInt(document.getElementById('storage-cost').innerText);

    const deliveryeCost = parseInt(document.getElementById('delivery-cost').innerText);

    let netPrice = bestPriceCost + memoryCost + storageCost + deliveryeCost; 

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = netPrice;

    const total = document.getElementById('total').innerText = netPrice;
    return total; 
}

 // promo code 

 document.getElementById('promo-button').addEventListener('click', function () {
   
    const promoInput = document.getElementById('promo-input');
    if (promoInput.value == "stevekaku") {
       const promoOut = document.getElementById('total');
       const promoDiscount = promoOut.innerText * 20 / 100;
       promoOut.innerText = promoOut.innerText - promoDiscount;
    }
 
    document.getElementById("promo-button").disabled = true;
    promoInput.value = "";
 });