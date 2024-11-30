// ----- 1. var Değişkeni -----
// 'var' ile tanımlanan değişkenler fonksiyonel kapsamda geçerlidir ve globalde tanımlandığında global objeye eklenir.
var x = 5;
var x = 10; // 'var' ile tanımlanan değişken birden fazla kez tanımlanabilir ve son atama geçerlidir.
console.log("var ile tanımlanan x:", x); // 10

// ----- 2. let Değişkeni -----
// 'let' ile tanımlanan değişkenler blok kapsamlıdır, yani yalnızca tanımlandıkları blokta geçerlidir.
let y = 20; 
//let y = 10; hata: 'let' ile aynı ismi tekrar kullanamazsınız.
console.log("let ile tanımlanan y:", y); // 20
if (true) {
    let y = 30; // Bu 'y' sadece if bloğunda geçerlidir
    console.log("Blok içindeki let ile tanımlanan y:", y); // 30
}
console.log("Dıştaki let ile tanımlanan y:", y); // 20

// ----- 3. const Değişkeni -----
// 'const' ile tanımlanan değişkenler sabittir ve değeri bir kez atandıktan sonra değiştirilemez.
// 'const' aynı zamanda blok kapsamlıdır, yani yalnızca tanımlandığı blokta geçerlidir.
const z = 40;
console.log("const ile tanımlanan z:", z); // 40
//z = 50; // Hata: 'const' ile tanımlanan değişkenin değeri değiştirilemez.
if (true) {
    const z = 50; // Bu 'z' sadece if bloğunda geçerlidir
    console.log("Blok içindeki const ile tanımlanan z:", z); // 50
}
console.log("Dıştaki const ile tanımlanan z:", z); // 40

// ----- 4. Symbol -----
// 'Symbol' benzersiz bir değer oluşturur. Her çağrıldığında farklı bir sembol döner.
// Genellikle nesne özellikleri olarak kullanılır.
const sym1 = Symbol("benzersiz");
const sym2 = Symbol("benzersiz");
console.log("Symbol karşılaştırması (farklı mı?):", sym1 === sym2); // false, her 'Symbol' benzersizdir

// ----- 5. BigInt -----
// 'BigInt', çok büyük tam sayıları tutmak için kullanılır.
const bigNum = BigInt(123456789012345678901234567890);
console.log("BigInt değeri:", bigNum); // 123456789012345678901234567890n

// ----- 6. Global Değişkenler -----
// 'var' ile tanımlanan global değişkenler global objeye eklenir, 'let' ve 'const' eklenmez.
var globalVar = "Global var değişkeni";
console.log("Global var ile tanımlanan değişken:", globalVar); // Global var değişkeni

let globalLet = "Global let değişkeni";
console.log("window.globalLet:", window.globalLet); // undefined

const globalConst = "Global const değişkeni";
console.log("window.globalConst:", window.globalConst); // undefined

// ----- 7. Global Object (window) -----
console.log("window.globalVar:", window.globalVar); // Global var değişkeni
console.log("window.x:", window.x); // undefined

// ----- 8. function Değişkeni -----
function greet() {
    console.log("Merhaba, ben bir fonksiyonum!");
}
greet(); // Merhaba, ben bir fonksiyonum!

// ----- 9. class Değişkeni -----
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

// ----- 10. Object -----
const user = {
    username: "user123",
    email: "user@example.com",
    loginCount: 0,
    login: function() {
        this.loginCount++;
        console.log(`${this.username} giriş yaptı. Toplam giriş sayısı: ${this.loginCount}`);
        // Template literals, JavaScript'te string oluşturmanın modern bir yoludur.
        // ` ile tanımlanır.
        // ${} kullanılarak string içine değişkenler veya ifadeler kolayca eklenir.
    }
};
user.login(); // user123 giriş yaptı. Toplam giriş sayısı: 1
console.log(user.username); // user123
