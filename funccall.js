// const age = function(adult) {
//     if (adult >= 18) {
//         console.log("Hello there");
//     return (true); 
//     }
//     else if (adult < 18) {
//         console.log("Hey kiddo");
//     return (false); 
//     }
// };

// const message = function() {
//    age (17);
// };

// message ();

// VAT exercise----------------------

// const vatCalculation = function(number) {
//     const inclVAT = number * 1.21;
//     console.log(inclVAT);
//     return inclVAT
// }

// const result = function() {
//     vatCalculation(10);
// };

// result ();

const vatCalculation = function(number, percentage) {
    const exclVAT = number / percentage;
    const VAT = number - exclVAT;
    const result = (percentage -1) *100;
    const per = Math.round(result)
    console.log("Your VAT = ", VAT,", the amount of VAT =", per, "%", ", your amount excl VAT = ", exclVAT, ", the total price incl VAT =", number);
    return exclVAT
}

const result = function() {
    vatCalculation(20, 1.09);

};

result ();