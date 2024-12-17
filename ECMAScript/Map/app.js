/* Map, JavaScript’te anahtar-değer (key-value) çiftlerini saklamak için kullanılan bir veri yapısıdır. Map, nesnelerle (object) benzer bir işlevsellik sunar, ancak bazı önemli farklara ve avantajlara sahiptir.

Temel Özellikler:

	1.	Anahtar ve Değer Çiftleri: Map, her anahtara karşılık bir değer saklar. Anahtarlar ve değerler herhangi bir türde olabilir (örneğin, sayılar, diziler, objeler, fonksiyonlar, vb.).
	2.	Sıra Koruması: Map, öğeleri ekleme sırasına göre saklar. Yani, öğeleri eklediğiniz sırayla döngü ile sıralayabilirsiniz. Bu özellik, Object’te her zaman garanti edilmez (özellikle sayısal anahtarlar ile).
	3.	Yüksek Performans: Map, büyük veri kümeleri ile çalışırken daha hızlıdır. Çünkü Map’te arama, ekleme ve silme işlemleri genellikle daha hızlıdır, özellikle anahtar-değer çiftlerinin sıklıkla değiştiği durumlarda.
	4.	Daha Esnek Anahtarlar: Map’te anahtarlar yalnızca dizelerle sınırlı değildir, herhangi bir veri tipi anahtar olarak kullanılabilir. Bu, Object’te yalnızca dizeler veya semboller kullanılabileceği için önemli bir farktır.
*/

// Yeni bir Map nesnesi oluşturuluyor
const map = new Map();

// Anahtar-değer çiftleri ekleme
map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');
map.set(100, 'hundred');  // Sayısal bir anahtar kullanmak da mümkündür
map.set([1, 2], 'array'); // Dizi gibi nesneler de anahtar olabilir

console.log("Map içeriği:");
console.log(map); 
// Map(5) { 'name' => 'John', 'age' => 30, 'city' => 'New York', 100 => 'hundred', [1, 2] => 'array' }

// Anahtar ile değere erişme
console.log("\n'age' anahtarının değeri:", map.get('age')); // 30

// Map'in boyutunu öğrenme
console.log("\nMap'in boyutu:", map.size); // 5

// Anahtar olup olmadığını kontrol etme
console.log("\n'city' anahtarı var mı?", map.has('city')); // true
console.log("'country' anahtarı var mı?", map.has('country')); // false

// Anahtar-değer çiftlerini silme
map.delete('city');
console.log("\n'city' anahtarını sildikten sonra Map:", map);
// Map(4) { 'name' => 'John', 'age' => 30, 100 => 'hundred', [1, 2] => 'array' }

// Map üzerinde her anahtar-değer çiftini döngü ile gezmek
console.log("\nMap üzerindeki anahtar-değer çiftleri:");
for (let [key, value] of map) {
  console.log(key, ":", value);
}
// Çıktı:
// name : John
// age : 30
// 100 : hundred
// [1, 2] : array

// Anahtarın olup olmadığını kontrol etme (yine)
console.log("\n'city' anahtarı var mı?", map.has('city')); // false
console.log("\n100 anahtarının değeri:", map.get(100)); // hundred

// Kurslar dizisi
const courses = [
  { id: 1, name: "React 101", instructor: "John Doe", duration: 10 },
  { id: 2, name: "Advanced JavaScript", instructor: "Jane Smith", duration: 15 },
  { id: 3, name: "CSS for Beginners", instructor: "Alice Johnson", duration: 8 },
];

// Map ile kursları formatlayarak bir liste oluşturuyoruz
const formattedCourses = courses.map((course) => {
  return `Kurs Adı: ${course.name}, Eğitmen: ${course.instructor}, Süre: ${course.duration} saat`;
});

// Sonuçları yazdırma
console.log("Formatlanmış Kurslar:");
formattedCourses.forEach((course) => console.log(course));

// Tüm öğeleri temizleme
map.clear();
console.log("\nMap'i temizledikten sonra:", map); // Map(0) {}
