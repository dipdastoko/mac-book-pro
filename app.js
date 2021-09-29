var extraMemory = 0;
var extraStorage = 0;
var deliveryCharge = 0;
var total;

function totalPrice() {
    total = 1299 + extraMemory + extraStorage + deliveryCharge;
    document.getElementById('total-price').innerText = total;
    document.getElementById('promo-total').innerText = total;
    return total;

}

function zeroAssaign(id) {
    document.getElementById(id).innerText = 0;
}


//voucher
document.getElementById('apply-btn').addEventListener('click', function () {
    let promoTotal = totalPrice();

    if (document.getElementById('input-promo').value == 'stevekaku') {
        document.getElementById('promo-total').innerText = promoTotal - promoTotal / 5;
    }
})


//memory
document.getElementById('memory-8gb').addEventListener('click', function () {
    zeroAssaign('extra-memory');
    extraMemory = 0;
    totalPrice();

})
document.getElementById('memory-16gb').addEventListener('click', function () {
    document.getElementById('extra-memory').innerText = 180;
    extraMemory = 180;
    totalPrice();

})

//storage
document.getElementById('storage-256gb').addEventListener('click', function () {
    zeroAssaign('extra-storage');
    extraStorage = 0;
    totalPrice();
})
document.getElementById('storage-512gb').addEventListener('click', function () {
    document.getElementById('extra-storage').innerText = 100;
    extraStorage = 100;
    totalPrice();
})
document.getElementById('storage-1tb').addEventListener('click', function () {
    document.getElementById('extra-storage').innerText = 180;
    extraStorage = 180;
    totalPrice();
})

//delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    zeroAssaign('delivery-charge');
    deliveryCharge = 0;
    totalPrice();
})
document.getElementById('charged-delivery').addEventListener('click', function () {
    document.getElementById('delivery-charge').innerText = 20;
    deliveryCharge = 20;
    totalPrice();
}
)