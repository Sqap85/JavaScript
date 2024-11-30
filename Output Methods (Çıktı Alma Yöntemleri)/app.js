// Çıktı alma yöntemleri

// 1. Yöntem: document.write ile çıktı verme
document.write("Çıktı alma yöntemleri test sayfasi<br>");
document.writeln("85");
document.write(5.5);

// 2. Yöntem: console.log metodu
console.log("Console loglama");
console.log(3.43);
console.log(true);
console.log({ name: "Sqap", surname: "85" });

// console.clear(); // temizlemek için

let a = 5;
let b = 10;
console.log("İki sayının toplamı:", a + b);

// 3. Yöntem: Alert popup ile çıktı verme
alert("Bu bir popup!");
alert("İki sayının toplamı: " + (a + b));

// Ek Yöntem: innerHTML ile çıktı verme
// HTML içinde bir elementle etkileşim için
// Örneğin: <div id="output"></div>
document.getElementById("output").innerHTML = "innerHTML degistirildi!";

// Ek Yöntem: prompt ile kullanıcı girdisi alıp çıktı verme
let isim = prompt("Adınızı girin:");
console.log("Merhaba " + isim + "!");