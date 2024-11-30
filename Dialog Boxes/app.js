// ----- 1. Alert (Uyarı Kutusu) -----
alert("Hoş geldiniz! Bu bir uyarı mesajıdır.");

// ----- 2. Prompt (Giriş Kutusu) -----
// Kullanicilardan alinan degerler her zaman stringdir.
let userName = prompt("Lütfen adınızı girin:", "Misafir");
if (userName) {
    alert(`Merhaba, ${userName}! Sizi görmek güzel.`);
} else {
    alert("Adınızı girmediniz.");
}

// ----- 3. Confirm (Onay Kutusu) -----
let userDecision = confirm("Bu işlemi gerçekleştirmek istediğinizden emin misiniz?");
if (userDecision) {
    alert("İşlem onaylandı. Devam ediliyor...");
    console.log("Kullanıcı işlemi onayladı.");
} else {
    alert("İşlem iptal edildi.");
    console.log("Kullanıcı işlemi iptal etti.");
}
/*
1.	Alert: İlk olarak kullanıcıya bir uyarı mesajı gösterir.
2.	Prompt: Kullanıcıdan bir isim girmesini ister, girilen isme göre bir selamlama mesajı görüntüler.
3.	Confirm: Kullanıcıya bir işlem yapma onayı sorar, aldığı yanıta göre işlemle ilgili mesaj ve log gösterir. 
*/