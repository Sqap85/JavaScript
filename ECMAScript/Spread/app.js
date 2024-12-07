// 1. Dizinin Elemanlarını Kopyalama ve Değiştirme
const numbers = [10, 20, 30, 40];
const updatedNumbers = [...numbers, 50];  // 50'yi sonuna ekliyoruz
console.log("Updated Numbers:", updatedNumbers);  // Çıktı: [10, 20, 30, 40, 50]
// ...numbers --> numbers[0],numbers[1],numbers[2],numbers[3] demektir

// 2. Dizinin Başına veya Ortasına Eleman Ekleme
const fruits = ['apple', 'banana', 'cherry'];
const moreFruits = ['grape', ...fruits, 'orange'];  // 'grape'yi başa, 'orange'yi sona ekliyoruz
console.log("More Fruits:", moreFruits);  // Çıktı: ['grape', 'apple', 'banana', 'cherry', 'orange']

// 3. Nesneleri Kopyalama ve Özellik Güncelleme
const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020
};
const updatedCar = { ...car, year: 2022 };  // 'year' özelliğini güncelliyoruz
console.log("Updated Car:", updatedCar);  // Çıktı: { make: 'Toyota', model: 'Corolla', year: 2022 }

// 4. Nesneleri Birleştirme
const user = {
  name: 'John',
  age: 30
};
const address = {
  city: 'New York',
  country: 'USA'
};
const userWithAddress = { ...user, ...address };  // 'user' ve 'address' nesnelerini birleştiriyoruz
console.log("User With Address:", userWithAddress);
// Çıktı: { name: 'John', age: 30, city: 'New York', country: 'USA' }

// 5. Rest Parametresi ile Nesne Özelliklerini Ayırma
const person = {
  name: 'Jane',
  age: 25,
  country: 'Canada'
};
const { name, ...otherDetails } = person;  // 'name' özelliğini ayırıyoruz, geri kalanı 'otherDetails' içinde
console.log("Name:", name);  // Çıktı: Jane
console.log("Other Details:", otherDetails);  // Çıktı: { age: 25, country: 'Canada' }

// 6. Dizi Elemanlarını Fonksiyona Parametre Olarak Yayma
const numbersArray = [1, 2, 3, 4];
const sum = (a, b, c, d) => a + b + c + d;
console.log("Sum of numbers:", sum(...numbersArray));  // Çıktı: 10

// 7. Dizi Elemanını Değiştirme ve Yeni Dizi Oluşturma
const updatedArray = [...numbersArray];
updatedArray[1] = 5;  // 2'yi 5 ile değiştiriyoruz
console.log("Updated Array:", updatedArray);  // Çıktı: [1, 5, 3, 4]

// 8. Dizi Birleştirme
const firstHalf = ['a', 'b', 'c'];
const secondHalf = ['d', 'e', 'f'];
const combined = [...firstHalf, ...secondHalf];  // İki diziyi birleştiriyoruz
console.log("Combined Array:", combined);  // Çıktı: ['a', 'b', 'c', 'd', 'e', 'f']

// 9. Fonksiyon Parametrelerinde Spread ve Rest Kullanımı
const greet = (greeting, ...names) => {
  console.log(greeting, ...names);
};
greet('Hello', 'Alice', 'Bob', 'Charlie');  // Çıktı: Hello Alice Bob Charlie