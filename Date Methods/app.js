// ----- 1. Date Nesnesi Oluşturma -----
console.log("1. Date Nesnesi Oluşturma:");
// Şu anki tarih ve saat
const now = new Date();
console.log("Şu an:", now);

// Belirli bir tarihi oluşturma
const specificDate = new Date("2024-01-01T12:00:00");
console.log("Belirli bir tarih:", specificDate);

// Tarihi yıl, ay, gün şeklinde oluşturma (Not: Aylar 0 tabanlıdır, 0 = Ocak)
const manualDate = new Date(2024, 0, 1, 12, 0, 0);
console.log("Elle oluşturulmuş tarih:", manualDate);

// Unix zaman damgası (milisaniye cinsinden)
const fromTimestamp = new Date(1672531200000);
console.log("Unix zaman damgası ile:", fromTimestamp);

// ----- 2. Tarih Bilgisi Almak -----
console.log("\n2. Tarih Bilgisi Almak:");
console.log("Yıl:", now.getFullYear()); // Yılı alır
console.log("Ay (0-11):", now.getMonth()); // Ay (0 = Ocak)
console.log("Gün (Ayın günü):", now.getDate()); // Ayın günü
console.log("Haftanın günü (0-6):", now.getDay()); // Haftanın günü (0 = Pazar)
console.log("Saat:", now.getHours()); // Saat
console.log("Dakika:", now.getMinutes()); // Dakika
console.log("Saniye:", now.getSeconds()); // Saniye
console.log("Milisaniye:", now.getMilliseconds()); // Milisaniye

// ----- 3. Tarih Ayarlamak -----
console.log("\n3. Tarih Ayarlamak:");
const newDate = new Date();
newDate.setFullYear(2025);
newDate.setMonth(11); // Aralık
newDate.setDate(25);
newDate.setHours(15, 30, 0, 0); // Saat: 15:30:00.000
console.log("Ayarlanmış tarih:", newDate);

// ----- 4. Tarih Karşılaştırma -----
console.log("\n4. Tarih Karşılaştırma:");
const date1 = new Date("2024-01-01");
const date2 = new Date("2023-12-31");
console.log("date1 > date2:", date1 > date2); // true
console.log("date1 - date2 (milisaniye farkı):", date1 - date2); // 86400000 (1 gün)

// ----- 5. Tarih Formatlama -----
console.log("\n5. Tarih Formatlama:");
console.log("ISO Formatı:", now.toISOString()); // 2024-12-01T10:15:30.000Z
console.log("UTC String:", now.toUTCString()); // Sun, 01 Dec 2024 10:15:30 GMT
console.log("Yerel Tarih ve Saat:", now.toLocaleString()); // 01/12/2024, 12:15:30
console.log("Yerel Tarih:", now.toLocaleDateString()); // 01/12/2024
console.log("Yerel Saat:", now.toLocaleTimeString()); // 12:15:30

// ----- 6. Timestamp (Zaman Damgası) -----
console.log("\n6. Timestamp (Zaman Damgası):");
console.log("Şimdiki zaman damgası (milisaniye):", now.getTime());
console.log("Şimdiki zaman damgası (milisaniye, alternatif):", Date.now());

// ----- 7. Zaman Bölgesi ve Ofset -----
console.log("\n7. Zaman Bölgesi ve Ofset:");
console.log("Saat dilimi ofseti (dakika):", now.getTimezoneOffset()); // Örneğin -120

// ----- 8. Diğer Faydalı Metodlar -----
console.log("\n8. Diğer Faydalı Metodlar:");
const startDate = new Date("2024-01-01");
const endDate = new Date("2024-01-10");
const diffInMs = endDate - startDate; // Milisaniye farkı
console.log("Tarih farkı (gün):", diffInMs / (1000 * 60 * 60 * 24)); // Gün cinsinden

const clonedDate = new Date(now.getTime()); // Tarihi kopyalama
console.log("Klonlanmış tarih:", clonedDate);