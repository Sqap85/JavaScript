// ----- 1. var Değişkeni -----
// 'var' ile tanımlanan değişkenler fonksiyonel kapsamda geçerlidir ve globalde tanımlandığında global objeye eklenir.
var x = 10; 
console.log("var ile tanımlanan x:", x); // 10

// ----- 2. let Değişkeni -----
// 'let' ile tanımlanan değişkenler blok kapsamlıdır, yani yalnızca tanımlandıkları blokta geçerlidir.
let y = 20; 
console.log("let ile tanımlanan y:", y); // 20
if (true) {
    let y = 30; // Bu 'y' sadece if bloğunda geçerlidir
    console.log("Blok içindeki let ile tanımlanan y:", y); // 30
}
console.log("Dıştaki let ile tanımlanan y:", y); // 20

// ----- 3. const Değişkeni -----
// 'const' ile tanımlanan değişkenler sabittir, yani değeri bir kez atandıktan sonra değiştirilemez.
const z = 40;
console.log("const ile tanımlanan z:", z); // 40
//z = 50; // Hata: Değeri değiştirilemez

// ----- 4. Symbol -----
/**
 * 'Symbol' benzersiz bir değer oluşturur. Her çağrıldığında farklı bir sembol döner.
 * Genellikle nesne özellikleri olarak kullanılır.
 */
const sym1 = Symbol("benzersiz");
const sym2 = Symbol("benzersiz");
console.log("Symbol karşılaştırması (farklı mı?):", sym1 === sym2); // false, her 'Symbol' benzersizdir

// ----- 5. BigInt -----
/**
 * 'BigInt', çok büyük tam sayıları tutmak için kullanılır.
 * JavaScript'teki normal sayı türü (Number) belirli bir büyüklüğe kadar olan tam sayıları tutabilir,
 * ancak BigInt, çok daha büyük sayılar için uygundur.
 */
const bigNum = BigInt(123456789012345678901234567890);
console.log("BigInt değeri:", bigNum); // 123456789012345678901234567890n

// ----- 6. Global Değişkenler -----
/**
 * 'var' ile tanımlanan global değişkenler, global object'e (tarayıcıda 'window' nesnesine) eklenir.
 * 'let' ve 'const' ile tanımlanan global değişkenler global object'e eklenmez.
 */
var globalVar = "Global var değişkeni";
console.log("Global var ile tanımlanan değişken:", globalVar); // Global var değişkeni

let globalLet = "Global let değişkeni";
console.log("window.globalLet:", window.globalLet); // undefined, çünkü let ile tanımlanan global değişken window'a eklenmez

const globalConst = "Global const değişkeni";
console.log("window.globalConst:", window.globalConst); // undefined, çünkü const ile tanımlanan global değişken window'a eklenmez

// ----- 7. Global Object (window) -----
/**
 * Tarayıcıda globalde tanımlanan 'var' değişkenleri, 'window' objesine eklenir.
 * 'let' ve 'const' ile tanımlanan değişkenler ise global objeye eklenmez.
 */
console.log("window.globalVar (global var):", window.globalVar); // Global var değişkeni (Tarayıcıda window'a eklenir)
console.log("window.x (window'da var mı?):", window.x); // undefined (let ile tanımlandığı için window'a eklenmez)

// ----- 8. function Değişkeni -----
// Fonksiyonlar da bir tür değişkendir. 'function' ile fonksiyonlar tanımlanabilir.
function greet() {
    console.log("Merhaba, ben bir fonksiyonum!");
}
greet(); // Merhaba, ben bir fonksiyonum!

// ----- 9. class Değişkeni -----
// Sınıflar (classes) JavaScript'te nesne oluşturmak için kullanılır.
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log("Merhaba, benim adım " + this.name);
    }
}
let person = new Person("Ahmet");
person.sayHello(); // Merhaba, benim adım Ahmet