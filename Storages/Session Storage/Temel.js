/*
2. Session Storage (Oturum Depolama)
inspect -> application dan izleyebilin

Session Storage, tarayıcı sekmesi kapandığında verileri kaybeder. Yani, kullanıcı tarayıcıyı kapattığında veya sekmeyi kapattığında veriler silinir.

Özellikler:
	• Oturum Süresi: Veriler yalnızca tarayıcı sekmesi açık kaldığı sürece saklanır.
	• Veri Boyutu: Genellikle 5MB civarında veri saklanabilir (bu, tarayıcıya bağlı olarak değişebilir).
	• Veriye Erişim: Veriye yalnızca aynı sekme içerisindeki sayfalardan erişilebilir.
	• Veri Silme: Tarayıcı sekmesi kapandığında veya oturum sona erdiğinde veriler silinir.
 */

// Veri kaydetme
sessionStorage.setItem('sessionId', '123456'); // 'sessionId' anahtarına '123456' değeri kaydedildi

// Veri okuma
const sessionId = sessionStorage.getItem('sessionId');
console.log(sessionId); // "123456"

// Veri silme
sessionStorage.removeItem('sessionId'); // 'sessionId' anahtarındaki veriyi siler

// Tüm verileri silme
sessionStorage.clear(); // Oturum içindeki tüm veriyi siler

// Verinin olup olmadığını kontrol etme
if (sessionStorage.getItem('sessionId')) {
    console.log('Session ID mevcut');
} else {
    console.log('Session ID mevcut değil');
}

// Verinin sayısal değeriyle işlem yapma
sessionStorage.setItem('counter', '10');
let counter = parseInt(sessionStorage.getItem('counter')); // 'counter' değerini sayıya dönüştürme
console.log(counter + 1); // 11 olarak çıktı verir

// Veriye son eklenen öğeyi alıp gösterme
sessionStorage.setItem('username', 'Ali');
sessionStorage.setItem('email', 'ali@example.com');
const lastItemKey = Object.keys(sessionStorage).pop(); // Son eklenen öğe anahtarını alır
const lastItemValue = sessionStorage.getItem(lastItemKey);
console.log(`${lastItemKey}: ${lastItemValue}`); // "email: ali@example.com"

// Session Storage ile JSON verisi kaydetme
const user = { name: 'Ali', age: 30 };
sessionStorage.setItem('user', JSON.stringify(user)); // JSON verisini string formatında kaydeder

// JSON verisini okuma ve parse etme
const storedUser = JSON.parse(sessionStorage.getItem('user'));
console.log(storedUser); // { name: 'Ali', age: 30 }