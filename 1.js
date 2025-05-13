var basePrice=10.00;
var baseMiles = 3.00; 
function taxiPrice (unitPrice, mileAge){
function totalPrice(){
if ( mileAge > baseMiles) {
return unitPrice*mileAge; }
else{ 
return basePrice;
}}
return totalPrice();}
console.log(taxiPrice(2.00,6.00));
