// -----  window Nesnesi -----
// window, tarayıcı penceresini temsil eder ve penceredeki tüm global özellikleri içerir.
// Diğer özellikler (document, console gibi) window'un alt kümeleri veya özellikleridir.
// window.document vb. olarak da erişilebilir, ancak genellikle sadece document vb. kullanılır, çünkü document vb. , window nesnesinin global bir özelliği olarak otomatik olarak mevcut olur.

// Pencere boyutlarını almak
console.log("Pencere genişliği:", window.innerWidth); // Tarayıcı penceresinin genişliği
console.log("Pencere yüksekliği:", window.innerHeight); // Tarayıcı penceresinin yüksekliği

// Kullanıcıdan onay almak
let userConfirmed = window.confirm("Sayfayı terk etmek istediğinizden emin misiniz?");
if (userConfirmed) {
    console.log("Kullanıcı sayfayı terk etmeyi kabul etti."); // Kullanıcı onayladıysa
    window.location.href = "https://www.youtube.com"; // Kullanıcı onayladığında yönlendirme yapılır
} else {
    console.log("Kullanıcı sayfada kalmaya karar verdi."); // Kullanıcı onaylamadıysa
    // Burada sayfaya yönlendirme yapılmaz, kullanıcı sayfada kalır
}

// ----- console Nesnesi -----
// Hata mesajı (Error)
console.error("Bu bir hata mesajıdır!"); // Kırmızı renkte hata mesajı gösterir

// Uyarı mesajı (Warning)
console.warn("Bu bir uyarı mesajıdır!"); // Sarı renkte uyarı mesajı gösterir

// Normal log mesajı
console.log("Bu bir normal log mesajıdır!"); // Normal bilgi mesajı

// -----  document Nesnesi -----
// Sayfa başlığını değiştirmek
document.title = "Yeni Başlık"; // Sayfanın başlığını değiştirir

// Sayfadaki bir elementin stilini değiştirmek
let element = document.getElementById("myElement"); 
if (element) {
    element.style.color = "red"; // Rengini kırmızı yapar
}

// Yeni bir HTML elemanı oluşturup sayfaya eklemek
let newParagraph = document.createElement("p"); 
newParagraph.textContent = "Bu yeni bir paragraf öğesidir!"; 
document.body.appendChild(newParagraph); // Sayfaya ekler

// Sayfa içeriğine yazı eklemek
document.write("<h1>Yeni İçerik Eklendi!</h1>"); // Sayfaya içerik ekler
// Önemli:
// 1. window nesnesi, tarayıcı penceresinin genel kontrolünü sağlar.
// 2. window.location, sayfayı başka bir URL'ye yönlendirmeye olanak tanır.
// 3. window.setTimeout, belirli bir süre sonra bir fonksiyon çalıştırmayı sağlar.
// 4. window.confirm, kullanıcıya bir onay penceresi gösterir ve bir Boolean değeri döner.
