/*
async ve await, JavaScript’te asenkron programlamayı daha kolay ve okunabilir hale getiren yapılar olup, Promise’lerle birlikte çalışır. Bu yapılar sayesinde asenkron kodu, senkron kod gibi yazabiliriz. Şimdi her birini detaylı şekilde açıklayayım:

1. async

	•	async, bir fonksiyonun asenkron olduğunu belirtir ve bu fonksiyonun her zaman bir Promise döndüreceğini garanti eder.
	•	async fonksiyonlar içinde await kullanılabilir.

2. await

	•	await ifadesi, yalnızca bir async fonksiyonu içinde kullanılabilir.
	•	await, bir Promise’in tamamlanmasını bekler ve Promise başarıyla tamamlanırsa sonucu döner. Eğer Promise reddedilirse, hata fırlatılır.

Neden async/await?

	•	Okunabilirlik: async/await yapıları, asenkron kodu daha okunabilir ve senkron gibi yazmanıza olanak sağlar. Geleneksel callback veya .then() kullanımıyla yazılmış kodlar, “callback hell” (geri çağırma cehennemi) sorununa yol açabilir. async/await bu karmaşayı ortadan kaldırır.
	•	Hata yönetimi: async/await, try...catch blokları ile hata yönetimini kolaylaştırır. .catch() gibi hata yakalama yöntemlerine kıyasla, hata yönetimi daha doğal ve temiz bir şekilde yapılır.

 */
   // API URL'sini tanımlıyoruz (JSONPlaceholder API)
   const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

   // Yanıtları göstermek için HTML elemanı
   const responseOutput = document.getElementById('responseOutput');
   
   // 1. GET İşlemi: Veri Alma
   // 'getData' fonksiyonu, asenkron bir işlem yapacak, 'async' anahtar kelimesiyle tanımlanmıştır.
   async function getData() {
     try {
       // 'fetch' ile API'den veri alıyoruz, await ile işlemin tamamlanmasını bekliyoruz.
       const response = await fetch(apiUrl);
   
       // Eğer HTTP yanıtı başarılı değilse (status kodu 200 değilse) hata fırlatıyoruz.
       if (!response.ok) {
         throw new Error(`HTTP Hatası: ${response.status}`);
       }
   
       // API'den alınan veriyi JSON formatına çeviriyoruz
       const data = await response.json();
   
       // JSON verisini düzgün bir şekilde ekranda göstermek için formatlıyoruz.
       responseOutput.textContent = JSON.stringify(data, null, 2);
     } catch (error) {
       // Hata yakalandığında, ekranda hata mesajını gösteriyoruz.
       responseOutput.textContent = 'GET Hatası: ' + error;
     }
   }
   
   // 2. POST İşlemi: Yeni Veri Gönderme
   // 'postData' fonksiyonu da asenkron bir fonksiyon olarak tanımlanmıştır.
   async function postData() {
     // Gönderilecek yeni veri
     const newData = {
       title: 'Mike',
       body: 'Tyson',
       userId: 1
     };
   
     try {
       // 'fetch' ile POST isteği gönderiyoruz, await ile işlem tamamlanmasını bekliyoruz.
       const response = await fetch(apiUrl, {
         method: 'POST',  // HTTP metodunu 'POST' olarak ayarlıyoruz
         headers: {
           'Content-Type': 'application/json'  // JSON formatında veri gönderiyoruz.
         },
         body: JSON.stringify(newData)  // 'newData' objesini JSON string formatına çeviriyoruz.
       });
   
       // API'den dönen yanıtı JSON formatında alıyoruz
       const data = await response.json();
   
       // Dönen veriyi ekranda gösteriyoruz
       responseOutput.textContent = 'POST - Yanıt: ' + JSON.stringify(data, null, 2);
     } catch (error) {
       // Hata durumunda, ekranda hata mesajını gösteriyoruz
       responseOutput.textContent = 'POST Hatası: ' + error;
     }
   }
   
   // 3. PUT İşlemi: Veriyi Güncelleme
   // 'updateData' fonksiyonu da asenkron bir fonksiyondur.
   async function updateData() {
     // Güncellenecek veri
     const updatedData = {
       id: 1,
       title: 'Updated Post Title',
       body: 'Updated content for the post.',
       userId: 1
     };
   
     try {
       // 'fetch' ile PUT isteği gönderiyoruz, await ile işlem tamamlanmasını bekliyoruz.
       const response = await fetch(apiUrl + '/1', {  // 1 numaralı veriyi güncelliyoruz
         method: 'PUT',  // HTTP metodunu 'PUT' olarak ayarlıyoruz
         headers: {
           'Content-Type': 'application/json'  // JSON formatında veri gönderiyoruz.
         },
         body: JSON.stringify(updatedData)  // 'updatedData' objesini JSON string formatına çeviriyoruz.
       });
   
       // Eğer HTTP yanıtı başarılı değilse, hata fırlatıyoruz
       if (!response.ok) {
         throw new Error(`HTTP Hatası: ${response.status}`);
       }
   
       // API'den dönen yanıtı JSON formatında alıyoruz
       const data = await response.json();
   
       // Güncellenen veriyi ekranda gösteriyoruz
       responseOutput.textContent = 'PUT - Güncellenen Veri: ' + JSON.stringify(data, null, 2);
     } catch (error) {
       // Hata durumunda, ekranda hata mesajını gösteriyoruz
       responseOutput.textContent = 'PUT Hatası: ' + error;
     }
   }
   
   // 4. DELETE İşlemi: Veri Silme
   // 'deleteData' fonksiyonu da asenkron bir fonksiyondur.
   async function deleteData() {
     try {
       // 'fetch' ile DELETE isteği gönderiyoruz, await ile işlem tamamlanmasını bekliyoruz.
       const response = await fetch(apiUrl + '/1', {  // 1 numaralı veriyi siliyoruz
         method: 'DELETE'  // HTTP metodunu 'DELETE' olarak ayarlıyoruz
       });
   
       // Eğer yanıt başarılıysa, verinin silindiğini bildiriyoruz
       if (response.ok) {
         responseOutput.textContent = 'DELETE - Veri başarıyla silindi.';
       } else {
         // Silme işlemi başarısız olursa, hata fırlatıyoruz
         throw new Error('Silme işlemi başarısız');
       }
     } catch (error) {
       // Hata durumunda, ekranda hata mesajını gösteriyoruz
       responseOutput.textContent = 'DELETE Hatası: ' + error;
     }
   }
   
   // Butonlara event listener ekliyoruz
   // Butonlar tıklandığında ilgili fonksiyonları çağırır
   document.getElementById('getDataButton').addEventListener('click', getData);
   document.getElementById('postDataButton').addEventListener('click', postData);
   document.getElementById('updateDataButton').addEventListener('click', updateData);
   document.getElementById('deleteDataButton').addEventListener('click', deleteData);