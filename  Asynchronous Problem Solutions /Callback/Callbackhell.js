// Callback eski bir yontemdir ve suan tercih edilmez
//Callback hell ornegi

// getName fonksiyonu: Adı alır ve verilen callback fonksiyonunu çağırır
function getName(callback) {
    setTimeout(() => {
        const name = "Ahmet";
        console.log("Ad alındı:", name);
        callback(name);
    }, 1000);
}

// getSurname fonksiyonu: Soyadı alır ve verilen callback fonksiyonunu çağırır
function getSurname(name, callback) {
    setTimeout(() => {
        const surname = "Yılmaz";
        console.log("Soyad alındı:", surname);
        callback(name, surname);
    }, 1500);
}

// getAge fonksiyonu: Yaşı alır ve verilen callback fonksiyonunu çağırır
function getAge(name, surname, callback) {
    setTimeout(() => {
        const age = 30;
        console.log("Yaş alındı:", age);
        callback(name, surname, age);
    }, 2000);
}

// getCountry fonksiyonu: Ülkeyi alır ve verilen callback fonksiyonunu çağırır
function getCountry(name, surname, age, callback) {
    setTimeout(() => {
        const country = "Türkiye";
        console.log("Ülke alındı:", country);
        callback(name, surname, age, country);
    }, 2500);
}

// Callback Hell: Birçok işlem sırasıyla iç içe yazılıyor
getName(function(name) {
    getSurname(name, function(name, surname) {
        getAge(name, surname, function(name, surname, age) {
            getCountry(name, surname, age, function(name, surname, age, country) {
                console.log("Kullanıcı Bilgisi: " + name + " " + surname + ", " + age + " yaşında, " + country);
            });
        });
    });
});