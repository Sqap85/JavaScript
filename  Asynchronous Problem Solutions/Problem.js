/*
Bu örnekte setTimeout sadece asenkron işlemleri simüle etmek amacıyla kullanılmıştır. Gerçek dünyada, asenkron işlemler genellikle ağ istekleri gibi zaman alıcı işlemleri simüle eder. Özellikle HTTP istekleri ve veritabanı sorguları gibi işlemler, genellikle bir süre bekleme gerektirir ve bu süre zarfında program diğer işlemlerle devam edebilir.
*/

// Kullanıcı ID'sini almak için HTTP isteği simülasyonu
function getUserId() {
    setTimeout(() => {
        return 5;  // 1 saniye sonra 5 dönecek, kullanıcı ID'si
    }, 1000);
}

// Kullanıcı ID'sine göre post almak için HTTP isteği simülasyonu
function getPostByUserId(userId) {
    console.log(userId);  // Burada userId'nin undefined olacağını göreceğiz.

    setTimeout(() => {
        const users = [
            { userId: 1, post: "User 1's post" },
            { userId: 5, post: "User 5's post" },
        ];

        users.forEach((user) => {
            if (user.userId === userId) {
                console.log(user.post); // Burada post yazdırılacak.
            }
        });
    }, 500);
}

let userId = getUserId();  // userId alinmadan getpostbyuser calisir asenkron problemine ornek
getPostByUserId(userId);  // userId burada undefined olacak çünkü getUserId henüz tamamlanmamıştı