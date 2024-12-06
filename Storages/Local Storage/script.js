// Sayfa yüklendiğinde Local Storage'dan verileri okuma ve ekranda gösterme
window.onload = function() {
    const savedName = localStorage.getItem('name');
    const savedAge = localStorage.getItem('age');

    if (savedName && savedAge) {
        document.getElementById('savedName').textContent = savedName;
        document.getElementById('savedAge').textContent = savedAge;
    }
}

// Verileri Local Storage'a kaydetme
function saveData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);

        // Kaydedilen veriyi ekranda gösterme
        document.getElementById('savedName').textContent = name;
        document.getElementById('savedAge').textContent = age;
    } else {
        alert('Lütfen adınızı ve yaşınızı girin.');
    }
}

// Verileri temizleme
function clearData() {
    localStorage.removeItem('name');
    localStorage.removeItem('age');

    // Ekrandaki bilgileri temizleme
    document.getElementById('savedName').textContent = 'Henüz kaydedilmedi';
    document.getElementById('savedAge').textContent = 'Henüz kaydedilmedi';
}