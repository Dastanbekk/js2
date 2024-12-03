// 1-masala
// let natija = 0;
// let oldingiQiymat = 0; 
// function rimdanButunSonga(rim) {
//     const qiymatlar = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     };
//     for (let i = rim.length - 1; i >= 0; i--) {
//         const key = rim[i];
//         const qiymat = qiymatlar[key];
//         if (qiymat < oldingiQiymat) {
//             natija -= qiymat;
//         } else {
//             natija += qiymat;
//         }
//         oldingiQiymat = qiymat;
//     }
//     return natija;
// }
// console.log(rimdanButunSonga("LVIII"))



// 3-masala
// let str = "luffy is still joyboy";
// let str2 = str.trim().split(" ");
// let width = 0;
// let str3 = "";
// for(let i = 0; i<str2.length; i++){
//     str3 = str2[i];
// }
// console.log(str3.length);

// 4-masala

// let s = "A man, a plan, a canal: Panama";
// let str2 = s.toLowerCase();
// let str3 = "";
// let str4 = "";

// for(let i = 0; i<str2.length; i++){
//     if(str2[i]!=="," && str2[i]!==" " && str2[i]!==":"){
//         str3 += str2[i]
//     }
// }
// str4 = str3.split("").reverse().join()

// console.log(`${str4 === str4} is a palindrome.`)


// 5-masala

// let num = 38;
// let num2 = num.toString().split("");
// let count = 0;
// let count2 = 0;
// for(let i= 0;  i < num2.length; i++){
//     count += Number(num2[i])
// }
// natija = count.toString().split("");
// for(let j = 0; j < natija.length; j++){
//     count2 += Number(natija[j])
// }
// console.log(count2)
