// ----- Nesne ile for...in Döngüsü -----
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  console.log("Using for...in to iterate over object properties:");
  for (let key in person) {
    console.log(key, ":", person[key]);
  }
  // for...in döngüsü, nesnenin özelliklerine (anahtarlarına) erişir ve her bir özelliğin değerini gösterir.
  
  // ----- Dizi ile for...of Döngüsü -----
  const fruits = ["apple", "banana", "cherry"];
  
  console.log("\nUsing for...of to iterate over array elements:");
  for (let fruit of fruits) {
    console.log(fruit);
  }
  // for...of döngüsü, dizinin her bir öğesinin değerine doğrudan erişir.
  
  // ----- Dizi ile for...in Döngüsü (İndeksleri Kullanarak) -----
  const numbers = [10, 20, 30, 40];
  
  console.log("\nUsing for...in to iterate over array indices:");
  for (let index in numbers) {
    console.log(index, ":", numbers[index]);
  }
  // for...in döngüsü, dizinin indekslerine erişir ve her bir indeksin değerini gösterir.
  
  // ----- for...in Döngüsü ile Dizi İterasyonu -----
  console.log("\nUsing for...in to iterate over array elements:");
  let fruits2 = ["Elma", "Armut", "Muz"];
  for (let index in fruits2) {
      console.log("İndeks:", index); // Dizinin indekslerini gösterir
      console.log("Değer:", fruits2[index]); // Dizinin her bir öğesinin değerini gösterir
  }
  // for...in döngüsü, dizinin indekslerine erişir ve her bir öğenin değerini gösterir.
  
  // ----- for...of Döngüsü ile Dizi İterasyonu -----
  console.log("\nUsing for...of to iterate over array values:");
  for (let fruit of fruits2) {
      console.log("Değer:", fruit); // Dizinin her bir öğesinin değerini doğrudan gösterir
  }
  // for...of döngüsü, dizinin her öğesinin değerine doğrudan erişir.