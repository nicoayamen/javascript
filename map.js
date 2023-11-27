/*  var myArray = [1, 2, 3, 4, 5];
  var newArray = myArray.map(function(elem) {
    elem = elem + 100;
    return elem;
}); */

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

var totals = bills.map(function(tip) {
  tip = (tip * 1.15); // when calc totals, dont forget to add tip(.15) plus TOTAL(1) which
   return Number(tip.toFixed(2));
});

console.log(totals)

