/// counter1 for alpine product

let counter1 = 1;

let btns1 = document.querySelectorAll('.btn1');

let alpProd = document.querySelector('.alpine');
let alpCheck = document.querySelector('.alpine_finalCheck_product');

let alpPrice = 3.15
alpCheck.textContent = alpPrice;



btns1.forEach(function (btn1) {
    btn1.addEventListener('click', function (e) {
        console.log(e.currentTarget.classList);
        const style1 = e.currentTarget.classList;

        if (style1.contains('decrease')) {
            if (counter1 <= 1) {
                counter1 = 1
            } else {
                counter1 --
            }

        } else if (style1.contains('increase')) {
            counter1 ++
        }
        alpProd.textContent = counter1;

        let alpCheck = document.querySelector('.alpine_finalCheck_product');


        let alpAmount = counter1

        alpCheck.textContent = Math.floor((alpAmount*3.15)*100)/100;
    })
})


/// counter2 for milka product

let counter2 = 1;

let btns2 = document.querySelectorAll('.btn2');

let milkProd = document.querySelector('.milka');
let milkCheck = document.querySelector('.milka_finalCheck_product');

let milkPrice = 4.99;
milkCheck.textContent = milkPrice;



btns2.forEach(function (btn2) {
    btn2.addEventListener('click', function (e) {
        console.log(e.currentTarget.classList);
        const style2 = e.currentTarget.classList;

        if (style2.contains('decrease')) {
            if (counter2 <= 1) {
                counter2 = 1
            } else {
                counter2 --
            }

        } else if (style2.contains('increase')) {
            counter2 ++
        }
        milkProd.textContent = counter2;

        let milkCheck = document.querySelector('.milka_finalCheck_product');


        let milkAmount = counter2;

        milkCheck.textContent = Math.floor(milkAmount*4.99*100)/100;

    })
})

// final result with total check and total amount of product

let finalCheck = document.querySelector('.totalCheck');
let btnCheckout = document.querySelector(".btn_check");
let totalAmount = document.querySelector('.totalAmount');

btnCheckout.addEventListener('click', function () {

    let alpPriceSum = +document.querySelector('.alpine_finalCheck_product').textContent;
    let milkPriceSum = +document.querySelector('.milka_finalCheck_product').textContent;

    let finAmountOfProduct = +alpProd.textContent + +milkProd.textContent;
    let finTot = Math.floor((alpPriceSum + milkPriceSum)*100)/100;
    finalCheck.textContent = finTot + " $";
    totalAmount.textContent = finAmountOfProduct + " itm";

})

