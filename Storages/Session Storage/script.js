// Sayfa yüklendiğinde, Session Storage'dan verileri kontrol et ve ekrana yazdır
window.onload = function() {
    const storedUsername = sessionStorage.getItem('username');
    const storedEmail = sessionStorage.getItem('email');

    if (storedUsername && storedEmail) {
        document.getElementById('storedUsername').textContent = storedUsername;
        document.getElementById('storedEmail').textContent = storedEmail;
    }
};

// Formu submit ettiğimizde verileri Session Storage'a kaydet
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfa yenilenmesini engelle

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Session Storage'a kaydetme
                        //soldaki Key / sagdaki Value
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('email', email);

    // Kaydedilen veriyi ekranda göster
    document.getElementById('storedUsername').textContent = username;
    document.getElementById('storedEmail').textContent = email;
});