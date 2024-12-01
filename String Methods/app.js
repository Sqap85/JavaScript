// ----- 1. Arama ve Karşılaştırma Metodları -----
const str = "Hello, JavaScript!";
console.log("charAt(1):", str.charAt(1)); // "e"
console.log("charCodeAt(0):", str.charCodeAt(0)); // 72
console.log("includes('Java'):", str.includes("Java")); // true
console.log("indexOf('Script'):", str.indexOf("Script")); // 7
console.log("lastIndexOf('o'):", str.lastIndexOf("o")); // 4
console.log("startsWith('Hello'):", str.startsWith("Hello")); // true
console.log("endsWith('!'):", str.endsWith("!")); // true

// ----- 2. Kesme ve Bölme Metodları -----
console.log("slice(7, 17):", str.slice(7, 17)); // "JavaScript"
console.log("substring(7, 17):", str.substring(7, 17)); // "JavaScript"
console.log("split(', '):", str.split(", ")); // ["Hello", "JavaScript!"]

// ----- 3. Değiştirme ve Birleştirme Metodları -----
console.log("replace('Hello', 'Hi'):", str.replace("Hello", "Hi")); // "Hi, JavaScript!"
console.log("replaceAll('o', 'O'):", str.replaceAll("o", "O")); // "HellO, JavaScript!"
console.log("concat(' ', 'is fun'):", str.concat(" ", "is fun")); // "Hello, JavaScript! is fun"

// ----- 4. Dönüştürme Metodları -----
console.log("toUpperCase():", str.toUpperCase()); // "HELLO, JAVASCRIPT!"
console.log("toLowerCase():", str.toLowerCase()); // "hello, javascript!"

// ----- 5. Beyaz Alan Temizleme Metodları -----
const paddedStr = "   Trim me!   ";
console.log("trim():", paddedStr.trim()); // "Trim me!"
console.log("trimStart():", paddedStr.trimStart()); // "Trim me!   "
console.log("trimEnd():", paddedStr.trimEnd()); // "   Trim me!"

// ----- 6. Tekrarlama Metodu -----
console.log("repeat(3):", "Repeat! ".repeat(3)); // "Repeat! Repeat! Repeat! "

// ----- 7. Uzunluk Özelliği -----
console.log("length:", str.length); // 18

// ----- 8. Erişim ve Manipülasyon -----
console.log("[0]:", str[0]); // "H"
console.log("['Hello'][1]:", "Hello"[1]); // "e"