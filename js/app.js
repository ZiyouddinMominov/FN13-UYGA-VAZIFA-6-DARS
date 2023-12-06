//UYGA VAZIFA 1 - TAYYOR
// let a = 10;
// let sum = 0;
// let i = 1;
// while (i <= a) {
//   if (i % 2 == 0) {
//     sum++;
//     sum + sum + i;
//   }
//   i++;
// }
// console.log(sum);
//UYGA VAZIFA 2 - TAYYOR
// let a = 10;
// let i = 1;
// let sum = 1;
// while(i <= a){
//   i++;
//   if(i % 3 == 0){
//     sum = sum * i;
//   }
// }
// console.log(sum)
// UYGA VAZIFA 3 - TAYYOR
// let a = 5;
// let b = 10;
// let i = 0;
// let count = 0;
// while (i <= a) {
//   i++;
//   if (i % 3 && 7 == 0) {
//     count++;
//   }
// }
// while (i <= b) {
//   i++;
//   if (i % 3 && 7 == 0) {
//     count++;
//   }
// }
// console.log(count)
// UYGA VAZIFA 4 - TAYYOR
// let a = 7;
// let sum;

// if(a == 2){
//   sum = "Bu son tub son emas !!!";
// } else{
//   sum = "Bu son tub son  !!!";
// }
// console.log(sum);
// UYGA VAZIFA 5 - TAYYOR
// let a = 153;
// let b = (a % 10);
// let o = (a / 10) - a % 10 / 10 - 10;
// let y = ( a / 10) - a % 10 / 10 - 14;
// sum = b + o + y;
// console.log(sum);
// UYGA VAZIFA 6 - TAYYOR
// let a = 325;
// let b = a % 10;
// let o = ((a % 100) - b) / 10;
// let y = a / 100 - (a % 100) / 100;
// let res = "";
// switch (y) {
//   case 1:
//     res = "Bir yuz ";
//     break;
//   case 2:
//     res = "Ikki yuz ";
//     break;
//   case 3:
//     res = "Uch yuz ";
//     break;
//   case 4:
//     res = "To'rt yuz ";
//     break;
//   case 5:
//     res = "Besh yuz ";
//     break;
//   case 6:
//     res = "Olti yuz ";
//     break;
//   case 7:
//     res = "Yetti yuz ";
//     break;
//   case 8:
//     res = "Sakkiz yuz ";
//     break;
//   case 9:
//     res = "To'qqiz yuz ";
//     break;
//   default:
//     res = "Ushbu operatsiyani bajarish mumkin emas";
//     break;
// }
// switch (o) {
//   case 1:
//     res += "o'n ";
//     break;
//   case 2:
//     res += "yigirma ";
//     break;
//   case 3:
//     res += "o'ttiz ";
//     break;
//   case 4:
//     res += "qirq ";
//     break;
//   case 5:
//     res += "besh ";
//     break;
//   case 6:
//     res += "oltmish ";
//     break;
//   case 7:
//     res += "yetmish ";
//     break;
//   case 8:
//     res += "sakson ";
//     break;
//   case 9:
//     res += "to'qson ";
//     break;
//   default:
//     res = "bu son mavjud emas";
//     break;
// }
// switch (b) {
//   case 1:
//     res += "Bir";
//     break;
//   case 2:
//     res += "Ikki";
//     break;
//   case 3:
//     res += "Uch";
//     break;
//   case 4:
//     res += "to'rt";
//     break;
//   case 5:
//     res += "Besh";
//     break;
//   case 6:
//     res += "Olti";
//     break;
//   case 7:
//     res += "Yetti";
//     break;
//   case 8:
//     res += "Sakkiz";
//     break;
//   case 9:
//     res += "To'qqiz";
//     break;
//   default:
//     res = "Ushbu son mavjud emas";
//     break;
// }
// console.log(res);
// UYGA VAZIFA 7 - TAYYOR
// let son1 = +prompt("Birinchi sonni kiriting");
// let metod = prompt("Xisoblovchi operator kiriting");
// let son2 = +prompt("Ikkinchi sonni kiriting");
// let res;
// if (metod == "+") {
//   console.log(son1 + son2);
// }
// if (metod == "-") {
//   console.log(son1 - son2);
// }
// if (metod == "*") {
//   console.log(son1 * son2);
// }
// if (metod == "/") {
//   console.log(son1 / son2);
// }
