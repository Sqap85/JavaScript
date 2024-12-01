// ----- 1. Genel Bilgiler -----
console.log("Math.PI:", Math.PI); // 3.141592653589793
console.log("Math.E (Euler's Sayısı):", Math.E); // 2.718281828459045

// ----- 2. Yuvarlama Metodları -----
console.log("Math.round(4.6):", Math.round(4.6)); // 5 (En yakın tam sayıya yuvarlar)
console.log("Math.ceil(4.2):", Math.ceil(4.2)); // 5 (Yukarı yuvarlar)
console.log("Math.floor(4.8):", Math.floor(4.8)); // 4 (Aşağı yuvarlar)
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4 (Ondalıklı kısmı atar)

// ----- 3. Mutlak Değer -----
console.log("Math.abs(-10):", Math.abs(-10)); // 10

// ----- 4. Kuvvet ve Karekök -----
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8 (2^3)
console.log("Math.sqrt(16):", Math.sqrt(16)); // 4 (Karekök)
console.log("Math.cbrt(27):", Math.cbrt(27)); // 3 (Küp Kök)

// ----- 5. En Büyük ve En Küçük -----
console.log("Math.max(1, 5, 10):", Math.max(1, 5, 10)); // 10
console.log("Math.min(1, 5, 10):", Math.min(1, 5, 10)); // 1

// ----- 6. Rastgele Sayılar -----
console.log("Math.random():", Math.random()); // 0 ile 1 arasında rastgele bir sayı
console.log("Random [1-10]:", Math.floor(Math.random() * 10) + 1); // 1 ile 10 arasında rastgele tam sayı

// ----- 7. Trigonometri -----
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // 1
console.log("Math.cos(0):", Math.cos(0)); // 1
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4)); // Yaklaşık 1

// ----- 8. Ters Trigonometri -----
console.log("Math.asin(1):", Math.asin(1)); // π/2
console.log("Math.acos(1):", Math.acos(1)); // 0
console.log("Math.atan(1):", Math.atan(1)); // π/4

// ----- 9. Logaritma -----
console.log("Math.log(Math.E):", Math.log(Math.E)); // 1 (Doğal logaritma, ln(e))
console.log("Math.log10(100):", Math.log10(100)); // 2 (Logaritma tabanı 10)
console.log("Math.log2(8):", Math.log2(8)); // 3 (Logaritma tabanı 2)

// ----- 10. Diğer Faydalı Metodlar -----
console.log("Math.sign(5):", Math.sign(5)); // 1 (Pozitif)
console.log("Math.sign(-5):", Math.sign(-5)); // -1 (Negatif)
console.log("Math.sign(0):", Math.sign(0)); // 0
console.log("Math.hypot(3, 4):", Math.hypot(3, 4)); // 5 (Hipotenüs, √(3^2 + 4^2))
console.log("Math.clz32(1):", Math.clz32(1)); // 31 (32 bitlik tamsayıdaki öncü sıfır sayısı)
console.log("Math.fround(1.337):", Math.fround(1.337)); // Yaklaşık olarak 1.337 (32 bitlik bir yüzer nokta sayısı döndürür)