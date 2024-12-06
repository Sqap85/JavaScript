/*
1. Local Storage (Yerel Depolama)
inspect -> application dan izleyebilin

Local Storage, tarayıcı kapatıldığında bile verilerin saklanmasını sağlar. Yani, veriler tarayıcı kapalı olsa dahi depolanmaya devam eder ve kullanıcı yeniden siteyi ziyaret ettiğinde bu verilere ulaşılabilir.

Özellikler:
    • Sürekli Veri Saklama: Tarayıcıyı kapatsanız bile veriler kaybolmaz.
    • Veri Boyutu: Genellikle 5MB civarında veri saklanabilir.
    • Veriye Erişim: Veriye tarayıcıdaki her sayfa üzerinden erişilebilir.
    • Veri Silme: Veriler manuel olarak silinene kadar saklanır (tarayıcıyı yeniden başlatmak veya saklanan verileri silmek gerekir).
*/

// Veri kaydetme
localStorage.setItem('userId', '7891011'); // 'userId' anahtarına '7891011' değeri kaydedildi

// Veri okuma
const userId = localStorage.getItem('userId');
console.log(userId); // "7891011"

// Veri silme
localStorage.removeItem('userId'); // 'userId' anahtarındaki veriyi siler

// Tüm verileri silme
localStorage.clear(); // Tüm veriyi siler

// Verinin olup olmadığını kontrol etme
if (localStorage.getItem('userId')) {
    console.log('User ID mevcut');
} else {
    console.log('User ID mevcut değil');
}

// Verinin sayısal değeriyle işlem yapma
localStorage.setItem('visitCount', '5');
let visitCount = parseInt(localStorage.getItem('visitCount')); // 'visitCount' değerini sayıya dönüştürme
console.log(visitCount + 1); // 6 olarak çıktı verir

// Veriye son eklenen öğeyi alıp gösterme
localStorage.setItem('username', 'Ahmet');
localStorage.setItem('email', 'ahmet@example.com');
const lastItemKey = Object.keys(localStorage).pop(); // Son eklenen öğe anahtarını alır
const lastItemValue = localStorage.getItem(lastItemKey);
console.log(`${lastItemKey}: ${lastItemValue}`); // "email: ahmet@example.com"

// Local Storage ile JSON verisi kaydetme
const user = { name: 'Ahmet', age: 40 };
localStorage.setItem('user', JSON.stringify(user)); // JSON verisini string formatında kaydeder

// JSON verisini okuma ve parse etme
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser); // { name: 'Ahmet', age: 40 }