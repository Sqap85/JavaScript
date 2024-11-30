// let ve var, JavaScript’te değişken tanımlamak için kullanılan iki anahtar kelimedir. Ancak, bunların bazı önemli farkları vardır.
   
// 1. Kapsam (Scope) Farkı
// let ile tanımlanan değişken blok kapsamlıdır
{
    let a = 10;
    console.log("let ile tanımlanan a:", a); // 10
}
// console.log(a); // Hata: a tanımlı değil (blok dışı erişim)

{
    var b = 20;
    console.log("var ile tanımlanan b:", b); // 20
}
console.log("var ile tanımlanan b (global):", b); // 20 (global erişim)

// 2. Yine Tanımlama (Re-declaration) Farkı
let x = 5;
// let x = 10; // Hata: x zaten tanımlı (let ile aynı değişken ismi tekrar tanımlanamaz)

var y = 10;
var y = 20; // Sorun yok, y 20 olur
console.log("var ile yeniden tanımlanan y:", y); // 20

// 3. Hoisting (Yukarı Çekilme) Farkı
// let ile:
try {
    console.log("let ile yukarı çekilme öncesi a:", a); // Hata: Cannot access 'a' before initialization
} catch (error) {
    console.log(error.message);
}
let a = 15;

// var ile:
console.log("var ile yukarı çekilme öncesi b:", b); // undefined (var yukarı çekildi ama değeri atanmadı)
var b = 25;

// 4. Global Erişim Farkı
let c = 30;
console.log("window.c ile let:", window.c); // undefined (let global object'te yer almaz)

var d = 40;
console.log("window.d ile var:", window.d); // 40 (var global object'te yer alır)
