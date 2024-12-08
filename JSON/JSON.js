/**
 * JSON (JavaScript Object Notation), veri saklama ve iletim için kullanılan hafif bir veri değişim formatıdır.
 * İnsan tarafından okunabilir bir yapıya sahiptir ve programlar tarafından kolayca ayrıştırılabilir.
 * JSON, basit bir söz dizimi ile JavaScript nesne yapısını temel alır, ancak programlama dilinden bağımsız olarak kullanılabilir.
 * 
 * JSON’un Temel Özellikleri:
 *  1. Hafif ve Basit: Veri değişimi için kolay bir yapı sunar ve dosya boyutları küçüktür.
 *  2. Dil Bağımsızlığı: JSON, hemen hemen tüm programlama dilleriyle uyumludur.
 *  3. Kolay Okunabilirlik: Yapısı insan ve makine tarafından kolayca anlaşılabilir.
 *  4. Hiyerarşik Yapı: Veriler iç içe geçmiş şekilde düzenlenebilir.
 * 
 * JSON Veri Türleri:
 *  - String: "Merhaba"
 *  - Number: 42, 3.14
 *  - Boolean: true, false
 *  - Null: null
 *  - Object: { "anahtar": "değer" }
 *  - Array: [ "değer1", "değer2" ]
 * 
 * JSON’un Kullanım Alanları:
 *  1. Web Servisleri: API’ler üzerinden veri alışverişi için kullanılır.
 *  2. Yapılandırma Dosyaları: Uygulamalar için ayarların saklanmasında kullanılır.
 *  3. Veritabanı Çıkışı: Modern veritabanları (örneğin MongoDB) JSON formatında veri dönebilir.
 *  4. Veri Depolama: Basit ve düzenli veri depolama ihtiyaçlarında kullanılır.
 * 
 * Neden JSON Kullanılır?
 *  - JSON, basit yapısı ve dil bağımsızlığı sayesinde özellikle web tabanlı uygulamalarda hızlı, kolay ve etkili veri iletişimi sağlar.
 *  - Modern API’ler ve uygulamalar için standart hale gelmiştir.
 */

// JSON ile veri saklama ve işleme
const veri = {
    "kullanici": {
        "ad": "Ahmet",
        "soyad": "Yılmaz",
        "yas": 30,
        "meslek": "Yazılım Geliştirici"
    },
    "hobiler": ["Kitap Okumak", "Kod Yazmak", "Yüzme"],
    "adres": {
        "sehir": "İstanbul",
        "postaKodu": 34000
    },
    "aktifMi": true
};

// JSON'u stringe dönüştür (JSON.stringify ile nesne, JSON formatında bir stringe dönüştürülür.)
const jsonString = JSON.stringify(veri, null, 4); // null, 4 ile güzel formatlı string oluşturulur
console.log("JSON String Formatı:\n", jsonString);

// JSON stringini geri çevir (JSON.parse ile string, tekrar bir nesneye dönüştürülür.)
const geriDonus = JSON.parse(jsonString);

// JSON verisine erişim
console.log("Kullanıcı Adı:", geriDonus.kullanici.ad); // Kullanıcının adını ekrana yazdırır.
console.log("Hobiler:", geriDonus.hobiler.join(", ")); // Hobileri virgülle birleştirerek yazdırır.
console.log("Yaşı:", geriDonus.kullanici.yas); // Kullanıcının yaşını yazdırır.

// JSON nesnesinde güncelleme (Adres bilgisi güncellenir.)
geriDonus.adres.sehir = "Ankara";
console.log("Güncellenmiş Adres:", geriDonus.adres); // Yeni adres ekrana yazdırılır.