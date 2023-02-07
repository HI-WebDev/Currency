const select = document.querySelectorAll(".currency");
const convertMoney = document.getElementById("btn");
const neded = document.getElementById("Need");
const result = document.getElementById("result");
let end1 = document.querySelector(".resume .origin");
let end2 = document.querySelector(".resume .change");


fetch("https://api.frankfurter.app/currencies")
    .then((data) => data.json())
    .then((data) => {
        display(data);
    });

function display(data) {
    const ApiData = Object.entries(data);
    for (var i = 0; i < ApiData.length; i++) {
        select[0].innerHTML += `<option value="${ApiData[i][0]}">${ApiData[i][0]}</option>`;
        select[1].innerHTML += `<option value="${ApiData[i][0]}">${ApiData[i][0]}</option>`;
    }
}

btn.addEventListener("click", () => {
    let currency1 = select[0].value;
    let currency2 = select[1].value;
    let value = neded.value;

    if (currency1 != currency2) {
        convert(currency1, currency2, value);
    } else {
        alert("Choose Different Currencies !!!");
    }
});

function convert(currency1, currency2, value) {
    const host = "api.frankfurter.app";
    fetch(
        `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
    )
        .then((val) => val.json())
        .then((val) => {
            console.log(Object.values(val.rates)[0]);
            result.value = Object.values(val.rates)[0];

            let tst1 = end1.innerHTML = value + " " + currency1;
            let tst2 = end2.innerHTML = Object.values(val.rates)[0] + " " + currency2;

            console.log(tst1);
            console.log(tst2);
        });

    // let test1 = end1.value = Object.values(val.rates)[0];   //select[0].value;
    // console.log(test1)
    // end2.value = result.value    //select[1].value;
};

// let resume = document.querySelector(".resume");


// let test1 = end1.value = Object.values(.rates)[0];   //select[0].value;
// console.log(test1)
// end2.value = result.value    //select[1].value;

// let select = document.querySelectorAll(".currency");
// let neded = document.querySelector("#Need");
// let result = document.querySelector("#result");
// let convert = document.querySelector("#btn");

// fetch("https://api.frankfurter.app/currencies").then((data) => {
//     data.json()
// }).then((data) => {
//     display(data)
// });

// function display(data) {
//     let ApiData = Object.entries(data);
//     for (i = 0; i < ApiData.length; i++) {
//         select[0].innerHTML += `<option value="${ApiData[i][0]}">${ApiData[i][0]}</option>`;
//         select[1].innerHTML += `<option value="${ApiData[i][0]}">${ApiData[i][0]}</option>`;
//     }
// };


// convert.addEventListener("click", () => {
//     let currency1 = select[0].value;
//     let currency2 = select[1].value;
//     let nededValue = neded.value;
//     if (currency1 != currency2) {
//         change(currency1, currency2, nededValue);
//     } else {
//         alert("please enter different currencies")
//     };
// });

// function change(currency1, currency2, nededValue) {
//     const host = "api.frankfurter.app";
//     fetch(`https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`).then((val) => { //hadi hya li kadirlina dik function tae t7awl l3omla(darb)
//         val.json(); // hna 7owlnaha(results ta3 fetch) l json
//     }).then((val) => {
//         console.log(object.values(val.rates)[0]);
//         result.value = Object.values(val.rates)[0];
//     });
// };