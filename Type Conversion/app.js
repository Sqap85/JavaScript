// ----- 1. Implicit Type Conversion (Otomatik Tür Dönüşümü) -----
let num = 5;
let str = "10";

let result = num + str; // JavaScript otomatik olarak num'u string'e dönüştürür
console.log("Otomatik Tür Dönüşümü (num + str):", result); // "510"

// ----- 2. Explicit Type Conversion (Manuel Tür Dönüşümü) -----
let num2 = 100;
let str2 = String(num2); // Sayıyı string'e dönüştürür
console.log("Manuel Tür Dönüşümü (String):", str2); // "100"
console.log("Türü:", typeof str2); // string

let str3 = "123";
let num3 = Number(str3); // String'i sayıya dönüştürür
console.log("Manuel Tür Dönüşümü (Number):", num3); // 123
console.log("Türü:", typeof num3); // number

let boolStr = ""; // Boş string
let boolVal = Boolean(boolStr); // Boş string, false döner
console.log("Manuel Tür Dönüşümü (Boolean, empty string):", boolVal); // false

let boolStr2 = "Hello"; // Dolu string
let boolVal2 = Boolean(boolStr2); // Dolu string, true döner
console.log("Manuel Tür Dönüşümü (Boolean, non-empty string):", boolVal2); // true

// ----- 3. parseInt() ve parseFloat() ile Tür Dönüşümü -----
let str4 = "10.5";
let intVal = parseInt(str4); // String'i tamsayıya dönüştürür
let floatVal = parseFloat(str4); // String'i ondalıklı sayıya dönüştürür
console.log("parseInt ile Tür Dönüşümü:", intVal); // 10
console.log("parseFloat ile Tür Dönüşümü:", floatVal); // 10.5

// ----- 4. Farklı Türler Arasında Dönüşüm -----
let numStr = "20";
let numFromStr = +numStr; // String'den sayıya dönüşüm
console.log("String'den Number'a Dönüşüm (+ ile):", numFromStr); // 20
console.log("Türü:", typeof numFromStr); // number

let boolVal3 = true;
let boolToNum = Number(boolVal3); // Boolean'dan sayıya dönüşüm
console.log("Boolean'dan Number'a Dönüşüm:", boolToNum); // 1

// ----- 5. NaN (Not-a-Number) ve Tür Dönüşümü -----
let invalidNum = Number("Hello"); // Geçersiz dönüşüm
console.log("Geçersiz Tür Dönüşümü (NaN):", invalidNum); // NaN
console.log("NaN Kontrolü:", isNaN(invalidNum)); // true