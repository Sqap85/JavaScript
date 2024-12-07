/* 
Set Nedir?

Set, JavaScript’te bir koleksiyon türüdür ve benzersiz değerleri saklamak için kullanılır. 
Bir Set içinde aynı değeri birden fazla kez saklayamazsınız. 
Hem primitif değerleri (örneğin string, number) hem de referans tipi değerleri (örneğin object) saklayabilir.
*/

// ---- JavaScript Set Kullanımı ----

// Yeni bir Set oluşturma
const mySet = new Set();

// Set'e değer ekleme
mySet.add(1);               // Benzersiz bir sayı eklenir
mySet.add(2);
mySet.add(2);               // Aynı değer tekrar eklenmez (Set, benzersizliği otomatik sağlar)
mySet.add('hello');         // String eklenir
mySet.add({ key: 'value' }); // Obje eklenir (her obje benzersiz referansa sahiptir)

console.log("Set içeriği:", mySet); 
// Çıktı: Set(4) { 1, 2, 'hello', { key: 'value' } }

// Değer kontrolü (Set içinde belirli bir değer olup olmadığını kontrol etme)
console.log("\nSet'te 1 var mı?:", mySet.has(1)); // true
console.log("Set'te 3 var mı?:", mySet.has(3)); // false

// Set'in boyutu (eleman sayısı)
console.log("\nSet'in boyutu:", mySet.size); // 4

// Set'ten değer silme
mySet.delete(1);
console.log("\n1 değerini sildikten sonra Set:", mySet);
// Çıktı: Set(3) { 2, 'hello', { key: 'value' } }

// Set üzerinde döngü (for...of)
console.log("\nSet elemanları (for...of):");
for (let item of mySet) {
  console.log(item);
}
// Çıktı:
// 2
// hello
// { key: 'value' }

// Set üzerinde döngü (forEach metodu ile)
console.log("\nSet elemanları (forEach):");
mySet.forEach(value => {
  console.log(value);
});
// Çıktı:
// 2
// hello
// { key: 'value' }

// Tüm değerleri temizleme
mySet.clear();
console.log("\nSet temizlendikten sonra:", mySet); // Set(0) {}

// Array'den Set'e dönüştürme (benzersiz elemanlar elde etme)
const myArray = [1, 2, 3, 1, 2, 3];
const uniqueSet = new Set(myArray);
console.log("\nArray'den Set'e dönüştürme:", uniqueSet); 
// Çıktı: Set(3) { 1, 2, 3 }

// Set'ten Array'e dönüştürme
const backToArray = Array.from(uniqueSet);
console.log("\nSet'ten Array'e dönüştürme:", backToArray);
// Çıktı: [1, 2, 3]

// Birleşim işlemi (iki Set'in birleşimi)
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const union = new Set([...setA, ...setB]); // Spread operatörü ile birleşim
console.log("\nSet birleşimi:", union); 
// Çıktı: Set(5) { 1, 2, 3, 4, 5 }

// Kesişim işlemi (iki Set'in ortak elemanları)
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log("\nSet kesişimi:", intersection); 
// Çıktı: Set(1) { 3 }

// Fark işlemi (bir Set'te olup diğerinde olmayan elemanlar)
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("\nSet farkı:", difference); 
// Çıktı: Set(2) { 1, 2 }