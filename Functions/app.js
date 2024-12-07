// ----- 1. Basit Fonksiyon -----
// Merhaba mesajı veren basit bir fonksiyon
function greet() {
    console.log("Merhaba, JavaScript!");
}
greet(); // Merhaba, JavaScript!

// ----- 2. Parametre Alan Fonksiyon -----
// İki sayıyı toplayan fonksiyon
function sum(a, b) {
    return a + b;
}
let result = sum(5, 3);
console.log("Toplama Sonucu:", result); // Toplama Sonucu: 8

// ----- 3. Varsayılan Parametreler -----
// Varsayılan parametre değeri kullanma
function greetPerson(name = "Misafir") {
    console.log("Merhaba, " + name);
}
greetPerson("Ahmet"); // Merhaba, Ahmet
greetPerson(); // Merhaba, Misafir

// ----- 4. Arrow Fonksiyonu -----
// Kısa yazımla iki sayıyı çarpan fonksiyon
let multiply = (a, b) => a * b;
console.log("Çarpma Sonucu:", multiply(4, 3)); // Çarpma Sonucu: 12

const hello = () => {
    console.log("Hello, world!");
  };
  hello(); // Çıktı: Hello, world!


// ----- 5. Rest Parametreleri -----
// Birden fazla sayıyı toplayan fonksiyon
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log("Toplam Sonuç:", sumAll(1, 2, 3, 4, 5)); // Toplam Sonuç: 15

// ----- 6. Anonim Fonksiyon -----
// Anonim fonksiyonla 2 saniye sonra mesaj yazdırma
setTimeout(function() {
    console.log("2 saniye geçti!");
}, 2000); // 2 saniye sonra çalışacak

// ----- 7. Callback Fonksiyonu -----
// Callback fonksiyonu örneği
function fetchData(callback) {
    console.log("Veri çekiliyor...");
    callback("Veri başarıyla çekildi!");
}
fetchData(function(message) {
    console.log(message); // Veri başarıyla çekildi!
});

// ----- 8. IIFE (Immediately Invoked Function Expression) -----
// Hemen çalıştırılan fonksiyon örneği
(function() {
    console.log("Bu fonksiyon hemen çalıştırıldı.");
})();

// ----- 9. Fonksiyon içinde Fonksiyon Kullanımı -----
// İç içe fonksiyonlar
function outer() {
    console.log("Dış fonksiyon çalıştı");

    function inner() {
        console.log("İç fonksiyon çalıştı");
    }

    inner(); // İç fonksiyon çağrılıyor
}
outer(); // Dış fonksiyon çalıştı -> İç fonksiyon çalıştı
