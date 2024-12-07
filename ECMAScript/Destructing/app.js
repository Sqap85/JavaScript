/* 
Destructuring (yapı sökümü), JavaScript’te bir veri yapısının (örneğin bir dizi veya nesne) öğelerini daha kolay bir şekilde 
ayrı değişkenlere atamak için kullanılan bir özelliktir. Bu özellik, kodun daha okunabilir ve kısa olmasını sağlar.
*/

// 1. **Array Destructuring** (Dizi Yapı Sökmek)
const numbers = [1, 2, 3, 4, 5];

// Sadece 1. ve 3. elemanları almak
const [first, , third] = numbers;

console.log("Array Destructuring:");
console.log(first);  // Çıktı: 1
console.log(third);  // Çıktı: 3

// **Varsayılan Değerler** (Eksik eleman için varsayılan değer kullanımı)
const [a = 10, b = 20] = [5]; 
console.log("\nArray with Default Values:");
console.log(a); // Çıktı: 5
console.log(b); // Çıktı: 20

// **Dizi ile Hesaplama** (Array with Calculation)
const calculate = (a, b) => {
    const sum = a + b;       // Toplama
    const difference = a - b; // Çıkartma
    const product = a * b;    // Çarpma
    const quotient = b !== 0 ? a / b : "Cannot divide by zero"; // Bölme (sıfıra bölme kontrolü)

    // Sonuçları bir dizi olarak döndürme
    return [sum, difference, product, quotient];
};
  
// Test
const [sumResult, differenceResult, productResult, quotientResult] = calculate(10, 5);

console.log("\nCalculation Results:");
console.log("Sum:", sumResult);         // Çıktı: 15
console.log("Difference:", differenceResult); // Çıktı: 5
console.log("Product:", productResult);     // Çıktı: 50
console.log("Quotient:", quotientResult);   // Çıktı: 2

// 2. **Object Destructuring** (Nesne Yapı Sökmek)
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Destructuring
const { name, age, city } = person;

console.log("\nObject Destructuring:");
console.log(name); // Çıktı: John
console.log(age);  // Çıktı: 30
console.log(city); // Çıktı: New York

// **Değişken İsimlerini Değiştirme** (Renaming variables during destructuring)
const { name: fullName, age: yearsOld } = person;
console.log("\nRenamed Object Properties:");
console.log(fullName); // Çıktı: John
console.log(yearsOld); // Çıktı: 30

// **Rest Parametresi** (Kalan Özellikler)
const { name: personName, ...address } = person;
console.log("\nRest Operator (Remaining Properties):");
console.log(personName); // Çıktı: John
console.log(address); // Çıktı: { age: 30, city: 'New York' }

// 3. **Fonksiyon Parametrelerinde Destructuring**
  
// **Array Parametrelerinde Destructuring** (Dizi Parametre Yapı Sökmek)
function sum([a, b]) {
  return a + b;
}

console.log("\nFunction with Array Destructuring:");
console.log(sum([3, 4])); // Çıktı: 7

// **Object Parametrelerinde Destructuring** (Nesne Parametre Yapı Sökmek)
function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

console.log("\nFunction with Object Destructuring:");
greet({ name: "Alice", age: 25 }); // Çıktı: Hello, my name is Alice and I am 25 years old.