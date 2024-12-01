// ----- Dizi Tanımlama -----
let fruits = ["Elma", "Armut", "Muz"]; // Köşeli parantezlerle
let numbers = new Array(10, 20, 30); // Array constructor ile
let emptyArray = []; // Boş bir dizi

console.log("Diziler:", fruits, numbers, emptyArray);

// ----- Dizi Elemanlarına Erişim -----
console.log("İlk eleman:", fruits[0]); // "Elma"
console.log("Son eleman:", fruits[fruits.length - 1]); // "Muz"

// ----- Dizi Uzunluğu -----
console.log("Fruits dizisinin uzunluğu:", fruits.length); // 3

// ----- Eleman Ekleme ve Çıkarma -----
fruits.push("Çilek"); // Dizi sonuna ekleme
console.log("Çilek eklendi:", fruits);

fruits.pop(); // Son elemanı kaldır
console.log("Son eleman kaldırıldı:", fruits);

fruits.unshift("Kiraz"); // Başa eleman ekle
console.log("Başa Kiraz eklendi:", fruits);

fruits.shift(); // İlk elemanı kaldır
console.log("İlk eleman kaldırıldı:", fruits);

// ----- Eleman Arama -----
console.log("Çilek mevcut mu?", fruits.includes("Çilek")); // false
console.log("Muz'un indeksi:", fruits.indexOf("Muz")); // 2

// ----- Dilimleme ve Birleştirme -----
let slicedFruits = fruits.slice(1, 3); // Belirli bir kısmını al
console.log("Dilimlenen dizi:", slicedFruits);

let moreFruits = ["Kivi", "Ananas"];
let combinedFruits = fruits.concat(moreFruits); // Dizileri birleştir
console.log("Birleştirilmiş dizi:", combinedFruits);

// ----- Sıralama ve Ters Çevirme -----
let numbersToSort = [5, 3, 8, 1];
numbersToSort.sort((a, b) => a - b); // Sayısal sıralama
console.log("Sıralı sayılar:", numbersToSort);

numbersToSort.reverse(); // Diziyi ters çevir
console.log("Ters çevrilmiş sayılar:", numbersToSort);

// ----- Eleman Değiştirme -----
fruits.splice(1, 1, "Portakal"); // 1. indeksi "Portakal" ile değiştir
console.log("Eleman değiştirildi:", fruits);

// ----- Döngüler ile Dizi İşlemleri -----
// forEach
fruits.forEach((fruit) => console.log("ForEach ile eleman:", fruit));

// map
let fruitLengths = fruits.map((fruit) => fruit.length); // Eleman uzunlukları
console.log("Eleman uzunlukları:", fruitLengths);

// for...of
for (let fruit of fruits) {
    console.log("For...of ile eleman:", fruit);
}

// for...in
for (let index in fruits) {
    console.log(`For...in ile eleman [${index}]:`, fruits[index]);
}

// ----- Sayılar Üzerine İşlemler -----
// Dizi toplamını hesapla
let numbersArray = [10, 20, 30, 40];
let total = numbersArray.reduce((sum, num) => sum + num, 0);
console.log("Dizinin toplamı:", total);

// ----- Dizi Kopyalama -----
let copiedFruits = [...fruits]; // Spread operatörü ile kopyalama
console.log("Kopyalanmış dizi:", copiedFruits);

// ----- Diziye Yeni Eleman Ekleyerek Kopyalama -----
let extendedFruits = [...fruits, "Mango"];
console.log("Yeni eleman eklenmiş kopya:", extendedFruits);

// ----- Dizi Filtreleme -----
let filteredFruits = fruits.filter((fruit) => fruit.includes("a"));
console.log("Filtrelenmiş dizi (a içerenler):", filteredFruits);

// ----- Bazı Kontroller -----
// Her elemanın uzunluğu 5'ten büyük mü?
let allLongerThan5 = fruits.every((fruit) => fruit.length > 5);
console.log("Tüm elemanlar uzun mu (5+ harf)?", allLongerThan5);

// En az bir elemanın uzunluğu 5'ten büyük mü?
let someLongerThan5 = fruits.some((fruit) => fruit.length > 5);
console.log("Bazı elemanlar uzun mu (5+ harf)?", someLongerThan5);