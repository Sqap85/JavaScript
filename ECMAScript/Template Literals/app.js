// ---- Template Literals Nedir? ----
// Template literals, JavaScript'te değişkenleri, ifadeleri ve çok satırlı stringleri kolayca birleştirmek için kullanılır.
// Backtick (`) karakterleri ile tanımlanır ve ${} içine değişken veya ifadeler gömülebilir.

// Değişken tanımları
const name = "Ali";
const age = 25;
const city = "İstanbul";

// Template literals ile string birleştirme
const message = `Merhaba, benim adım ${name}, ${age} yaşındayım ve ${city} şehrinde yaşıyorum.`;
console.log(message);

// Çok satırlı stringler
const multiLine = `Bu bir
çok satırlı
template literal örneğidir.`;
console.log("\nÇok satırlı string:\n", multiLine);

// HTML şablonu oluşturma
const title = "Hoş Geldiniz!";
const content = "Bu bir dinamik içerik örneğidir.";
const htmlTemplate = `
  <div>
    <h1>${title}</h1>
    <p>${content}</p>
  </div>
`;
console.log("\nHTML Şablonu:\n", htmlTemplate);

// Fonksiyon kullanımı
function greet(name) {
  return `Merhaba, ${name}!`;
}
console.log("\nFonksiyon çağrısı ile mesaj:", `${greet("Ayşe")}`);

// Çoklu ifade gömme
const a = 10;
const b = 20;
console.log(`\n${a} ile ${b} toplamı: ${a + b}, çarpımı: ${a * b}`);

// Default değer kullanımı
const userName = null;
console.log(`\nKullanıcı: ${userName || "Bilinmeyen"}`);

// Etiketli template literal örneği
function tag(strings, ...values) {
  console.log("Strings:", strings);
  console.log("Values:", values);
  return "Etiketli template literal!";
}
console.log("\n", tag`Kullanıcı ${name}, yaşı ${age} ve şehir ${city}.`);