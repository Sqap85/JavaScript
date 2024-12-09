/*
JavaScript'te Promise, asenkron işlemlerle çalışırken kullanılan bir yapıdır. Promise, 
gelecekte bir değerin elde edileceğini veya bir hatanın oluşacağını belirten bir objedir. 
Örneğin, veritabanı sorgusu ya da API çağrısı gibi zaman alabilecek işlemler için kullanılır.
Promise, üç durumda olabilir:
	1.	Pending (Beklemede): Promise, henüz tamamlanmamış ve sonuç beklemektedir.
	2.	Fulfilled (Tamamlanmış): Promise başarılı bir şekilde tamamlanmış ve bir değer döndürülmüştür.
	3.	Rejected (Reddedilmiş): Promise, bir hata nedeniyle başarısız olmuştur.

	•	then(): Promise başarılı olduğunda yapılacak işlemi belirtir.
	•	catch(): Promise reddedildiğinde yapılacak işlemi belirtir.
	•	finally(): Promise’in sonucuna bakılmaksızın her durumda çalışacak işlemi belirtir.
	•	Promise.all(): Birden fazla Promise’i paralel çalıştırır ve hepsinin başarılı olmasını bekler.
	•	Promise.allSettled(): Birden fazla Promise’i paralel çalıştırır ve her bir Promise’in sonucunu döndürür.
	•	Promise.race(): Birden fazla Promise’den ilk tamamlananı alır.
	•	Promise.resolve(): Hemen çözülmüş bir Promise döndürür.
	•	Promise.reject(): Hemen reddedilmiş bir Promise döndürür.
*/

console.log("1. Örnek: `check` Değişkenine Dayalı Promise");

// 1. Örnek: `check` Değişkenine Dayalı Promise
function createPromise(check) {
    return new Promise((resolve, reject) => {
        if (check) {
            resolve("Promise True");
        } else {
            reject("Promise False");
        }
    });
}

let check = true;  // check değişkenine true atanır (bu değeri false yaparak sonucu değiştirebilirsiniz)

createPromise(check)
    .then((response) => {
        console.log(response);  // Eğer Promise başarılıysa burası çalışır
    })
    .catch((error) => {
        console.log(error);  // Eğer Promise reddedildiyse burası çalışır
    })
    .finally(() => {
        console.log("Always works this");  // Her durumda çalışacak kod
    });

console.log("\n2. Örnek: API'den Kullanıcı Verisi Çekme");

// 2. Örnek: API'den Kullanıcı Verisi Çekme
function fetchUsers() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    reject('API hata verdi');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

fetchUsers()
    .then((users) => {
        console.log('Kullanıcılar:', users);
    })
    .catch((error) => {
        console.log('Hata:', error);
    })
    .finally(() => {
        console.log("API isteği tamamlandı");
    });

console.log("\n3. Örnek: Birden Fazla Promise ile Çalışmak");

// 3. Örnek: Birden Fazla Promise ile Çalışmak - `Promise.all`
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://example.com") {// === Strict equality operator (katı eşitlik operatörü) kullanılır. Bu operatör, iki değerin hem değerinin hem de tipinin tam olarak aynı olup olmadığını kontrol eder.
                resolve("Veri başarıyla alındı!");
            } else {
                reject("API hatası!");
            }
        }, 1000);
    });
}

Promise.all([
    fetchData("https://example.com"),
    fetchData("https://example2.com")
])
    .then((responses) => {
        console.log("Tüm veriler alındı:", responses);
    })
    .catch((error) => {
        console.log("Bir hata oluştu:", error);
    })
    .finally(() => {
        console.log("Tüm işlemler tamamlandı.");
    });

console.log("\n4. Örnek: `Promise.race()` ile En Hızlı İşlemi Almak");

// 4. Örnek: `Promise.race()` ile En Hızlı İşlemi Almak
function fetchDataWithDelay(url, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://example1.com") {//	=== Strict equality operator (katı eşitlik operatörü) kullanılır. Bu operatör, iki değerin hem değerinin hem de tipinin tam olarak aynı olup olmadığını kontrol eder.
                resolve(`Veri ${url} adresinden alındı!`);
            } else {
                reject(`Veri ${url} adresinden alınamadı!`);
            }
        }, delay);
    });
}

const promise1 = fetchDataWithDelay("https://example1.com", 500);  // 500ms'de tamamlanacak
const promise2 = fetchDataWithDelay("https://example2.com", 2000); // 2000ms'de tamamlanacak

Promise.race([promise1, promise2])  // İlk tamamlanan Promise'i alır
    .then((response) => {
        console.log(response);  // İlk tamamlanan Promise'in sonucu
    })
    .catch((error) => {
        console.log(error);  // Hata mesajı
    })
    .finally(() => {
        console.log("Race işlemi tamamlandı.");
    });