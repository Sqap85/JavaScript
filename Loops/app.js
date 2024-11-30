// ----- 1. for Döngüsü -----
console.log("1. for Döngüsü:");
for (let i = 1; i <= 5; i++) {
    console.log(i); // 1, 2, 3, 4, 5
}

// ----- 2. while Döngüsü -----
console.log("2. while Döngüsü:");
let i = 1;
while (i <= 5) {
    console.log(i); // 1, 2, 3, 4, 5
    i++; // i'yi artır
}

// ----- 3. do...while Döngüsü -----
console.log("3. do...while Döngüsü:");
i = 1;
do {
    console.log(i); // 1, 2, 3, 4, 5
    i++;
} while (i <= 5);

// ----- 4. for...in Döngüsü -----
console.log("4. for...in Döngüsü:");
let fruits = ["Elma", "Armut", "Muz"];
for (let index in fruits) {
    console.log("İndeks:", index); // 0, 1, 2 (indeksler)
    console.log("Değer:", fruits[index]); // Elma, Armut, Muz (değerler)
}
// for...in döngüsü dizinin indekslerine erişir ve o indekslerdeki değerleri yazdırır.

// ----- 5. for...of Döngüsü -----
console.log("5. for...of Döngüsü:");
for (let fruit of fruits) {
    console.log("Değer:", fruit); // Elma, Armut, Muz (değerler)
}
// for...of döngüsü dizinin her bir öğesinin değerine doğrudan erişir.

// ----- 6. break Kullanımı -----
console.log("6. break Kullanımı:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // i 5 olduğunda döngüyü sonlandır
    }
    console.log(i); // 1, 2, 3, 4
}

// ----- 7. continue Kullanımı -----
console.log("7. continue Kullanımı:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // i 3 olduğunda bu iterasyonu atla
    }
    console.log(i); // 1, 2, 4, 5
}