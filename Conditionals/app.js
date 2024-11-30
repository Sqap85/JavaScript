// ----- 1. if ve else Kullanımı -----
console.log("1. if ve else Kullanımı:");

let age = 20;

if (age >= 18) {
    console.log("18 yaş ve üzeri, yetişkinsiniz.");
} else {
    console.log("18 yaşın altındasınız.");
}

// ----- 2. if...else if...else Kullanımı -----
console.log("2. if...else if...else Kullanımı:");

let grade = 85;

if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else {
    console.log("F");
}

// ----- 3. Mantıksal Operatörler (&& ve ||) Kullanımı -----
console.log("3. Mantıksal Operatörler (&& ve ||) Kullanımı:");

let isRaining = true;
let haveUmbrella = false;

if (isRaining && !haveUmbrella) {
    console.log("Şemsiyeniz yok, dışarı çıkmayın!");
} else if (isRaining && haveUmbrella) {
    console.log("Şemsiyeniz var, dışarı çıkabilirsiniz.");
} else {
    console.log("Yağmur yok, dışarı çıkabilirsiniz.");
}

// ----- 4. Switch Case Kullanımı -----
console.log("4. Switch Case Kullanımı:");

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Bugün Pazartesi.");
        break;
    case "Tuesday":
        console.log("Bugün Salı.");
        break;
    case "Wednesday":
        console.log("Bugün Çarşamba.");
        break;
    default:
        console.log("Bilinmeyen bir gün.");
}

// ----- 5. Ternary Operator (Kısa if-else) Kullanımı -----
console.log("5. Ternary Operator Kullanımı:");

let isAdult = age >= 18 ? "Yetişkin" : "Çocuk";
console.log(isAdult); // Yetişkin