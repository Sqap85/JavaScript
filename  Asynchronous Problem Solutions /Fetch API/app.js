/**
fetch API, JavaScript’te web tarayıcısından sunucuya HTTP istekleri göndermek ve yanıtları almak için kullanılan modern bir yöntemdir. Bu API, özellikle asenkron işlemlerle çalışmak için tasarlanmış olup, Promise tabanlıdır ve XMLHttpRequest’in yerine daha kolay bir alternatif sunar.
fetch API ile, HTTP istekleri (GET, POST, PUT, DELETE vb.) yapılabilir ve bu istekler asenkron olarak işlenebilir. Yanıtlar Promise ile döner, bu sayede then ve catch metodlarıyla yanıtlar işlenebilir.

 CRUD, veritabanı işlemlerini tanımlayan bir terimdir ve dört temel işlemi temsil eder:
	1.	Create (Oluşturma): Yeni veri ekleme işlemi. Bu işlem, veritabanına yeni bir kayıt eklemeyi ifade eder. Örneğin, yeni bir kullanıcı kaydı oluşturmak.
	2.	Read (Okuma): Veriyi okuma işlemi. Bu işlem, veritabanından mevcut verileri sorgulama ve görüntüleme anlamına gelir. Örneğin, tüm kullanıcıları listelemek veya belirli bir kullanıcıyı aramak.
	3.	Update (Güncelleme): Mevcut veriyi güncelleme işlemi. Bu işlem, var olan bir kaydın içeriğini değiştirmeyi ifade eder. Örneğin, bir kullanıcının adres bilgilerini güncellemek.
	4.	Delete (Silme): Veriyi silme işlemi. Bu işlem, veritabanından bir kaydın kaldırılması anlamına gelir. Örneğin, bir kullanıcının kaydını silmek.

CRUD işlemleri, veritabanı yönetim sistemlerinin ve çoğu web uygulamasının temelini oluşturur. Bu dört işlem, verilerin doğru bir şekilde yönetilmesini sağlar. Örneğin, bir kullanıcı yönetim sisteminde CRUD işlemleri kullanılarak kullanıcılar eklenebilir, listelenebilir, güncellenebilir ve silinebilir.
*/
// API URL'si (JSONPlaceholder API'si)
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // JSONPlaceholder API URL'si

// Yanıtları göstermek için HTML elemanı
const responseOutput = document.getElementById('responseOutput');

// 1. GET İşlemi: Veri Alma
function getData() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP Hatası: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      responseOutput.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      responseOutput.textContent = 'GET Hatası: ' + error;
    });
}

// 2. POST İşlemi: Yeni Veri Gönderme
function postData() {
  const newData = {
    title: 'Mike',
    body: 'Tyson',
    userId: 1
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
    .then(response => response.json())
    .then(data => {
      responseOutput.textContent = 'POST - Yanıt: ' + JSON.stringify(data, null, 2);
    })
    .catch(error => {
      responseOutput.textContent = 'POST Hatası: ' + error;
    });
}

// 3. PUT İşlemi: Veriyi Güncelleme
function updateData() {
  const updatedData = {
    id: 1,
    title: 'Updated Post Title',
    body: 'Updated content for the post.',
    userId: 1
  };

  fetch(apiUrl + '/1', {  // ID: 1 olan veriyi güncelliyoruz
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP Hatası: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      responseOutput.textContent = 'PUT - Güncellenen Veri: ' + JSON.stringify(data, null, 2);
    })
    .catch(error => {
      responseOutput.textContent = 'PUT Hatası: ' + error;
    });
}

// 4. DELETE İşlemi: Veri Silme
function deleteData() {
  fetch(apiUrl + '/1', {  // ID: 1 olan veriyi siliyoruz
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        responseOutput.textContent = 'DELETE - Veri başarıyla silindi.';
      } else {
        throw new Error('Silme işlemi başarısız');
      }
    })
    .catch(error => {
      responseOutput.textContent = 'DELETE Hatası: ' + error;
    });
}