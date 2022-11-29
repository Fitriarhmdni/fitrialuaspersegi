var input = require('readline-sync');
var panjang = input.question("input panjang persegi panjang : ");
var lebar = input.question("input lebar persegi panjang : ");
var luas = (panjang * lebar);
console.log("Luas persegi panjangnya adalah" , luas , "cm persegi");
