// 1. Temel Arrow Function
// Geleneksel fonksiyon tanımlamak:
function sumTraditional(a, b) {
    return a + b;
  }
  
  // Arrow function ile aynı işlevi yazmak:
  const sumArrow = (a, b) => {
    return a + b;
  };
  
  console.log("Sum with traditional function:", sumTraditional(2, 3));  // Çıktı: 5
  console.log("Sum with arrow function:", sumArrow(2, 3));  // Çıktı: 5
  
  // 2. Tek Satırlık Arrow Function (return ifadesi olmadan)
  const sumShort = (a, b) => a + b;
  console.log("Short arrow function:", sumShort(5, 10));  // Çıktı: 15
  
  // 3. Parametresiz Arrow Function
  const greet = () => console.log("Hello, World!");
  greet();  // Çıktı: Hello, World!
  
  // 4. Tek Parametre İçin Parantez Kullanımı
  // Eğer bir parametre varsa, parantezler opsiyoneldir:
  const square = x => x * x;
  console.log("Square of 4:", square(4));  // Çıktı: 16
  
  // 5. Birden Fazla Parametre İçin Parantez Kullanımı
  const multiply = (a, b) => a * b;
  console.log("Multiplication of 2 and 3:", multiply(2, 3));  // Çıktı: 6
  
  // 6. Arrow Function ve 'this' Bağlamı
  // Geleneksel fonksiyonlarda 'this' farklı davranırken, arrow function'da çevresel bağlamı referans alır.
  function TraditionalPerson(name) {
    this.name = name;
    setTimeout(function() {
      console.log("Traditional function 'this' value:", this.name); // 'this' global objeyi işaret eder
    }, 1000);
  }
  
  function ArrowPerson(name) {
    this.name = name;
    setTimeout(() => {
      console.log("Arrow function 'this' value:", this.name); // 'this' çevresel bağlamı işaret eder
    }, 1000);
  }
  
  let person1 = new TraditionalPerson("John");
  let person2 = new ArrowPerson("Alice");
  
  // 7. Return Kullanımı
  // Tek satırlık fonksiyonlarda 'return' kullanmak gerekmez.
  const divide = (a, b) => b !== 0 ? a / b : "Cannot divide by zero";
  console.log("Division result:", divide(10, 2));  // Çıktı: 5
  console.log("Division result with zero:", divide(10, 0));  // Çıktı: Cannot divide by zero