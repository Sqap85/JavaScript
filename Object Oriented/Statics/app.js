/*
    Statik metotlar sınıfın kendisine ait olup, nesne oluşturulmadan doğrudan sınıf üzerinden çağrılabilir. Yani, bir nesne oluşturmanıza gerek yoktur. Bu metotlar, genellikle sınıfın genel işlevlerini ve özelliklerini tanımlamak için kullanılır.
    •	Statik özellikler de benzer şekilde sınıfın kendisine aittir ve nesne üzerinden erişilemez. Yalnızca sınıf üzerinden erişilebilir.
    •	Statik metotlar ve özellikler genellikle nesnelerin özelliklerinden bağımsız, genel işlemler için kullanılır. Örneğin, bir sınıfın tüm nesneleri için geçerli olan bir sabit değer veya genel bir hesaplama yapılacaksa, statik bir özellik veya metot daha uygun olabilir.
 */

    class Mat {
        // Nesne metodu: Addition (Toplama)
        Addition = (a, b) => a + b;
    
        // Nesne metodu: Subtraction (Çıkarma)
        Subtraction(a, b) {
            return a - b;
        }
    
        // Statik metot: Multiplication (Çarpma)
        // Statik metotlar sınıf düzeyinde çalışır ve sınıf üzerinden çağrılır.
        // Bu metod nesne oluşturmadan, doğrudan Mat sınıfından çağrılabilir.
        static Multiplication = (a, b) => a * b;
    
        // Nesne metodu: Division (Bölme)
        Division(a, b) {
            return a / b;
        }
    
        // Statik metot: Square (Kare alma)
        // Statik metot, nesne oluşturmadan doğrudan sınıf üzerinden erişilebilir.
        static Square(a) {
            return a * a;
        }
    }
    
    // Nesne üzerinden metodları çağırıyoruz
    const mat = new Mat();
    
    // 'Addition' metodunu çağırıyoruz. Bu nesne metodudur, nesne oluşturulması gerekir.
    let toplam = mat.Addition(1, 2);
    console.log("Toplam: " + toplam);  // Çıktı: Toplam: 3
    
    // 'Subtraction' metodunu çağırıyoruz. Bu da nesne metodudur.
    let cikarma = mat.Subtraction(10, 2);
    console.log("Cikarma: " + cikarma);  // Çıktı: Cikarma: 8
    
    // 'Multiplication' statik metodunu çağırıyoruz. Bu sınıf üzerinden çağrılır.
    // Statik metotlar nesne üzerinden değil, sınıf üzerinden çağrılır.
    let carpma = Mat.Multiplication(2, 2);
    console.log("Carpma: " + carpma);  // Çıktı: Carpma: 4
    
    // 'Division' metodunu çağırıyoruz. Bu nesne metodudur.
    let bolme = mat.Division(10, 2);
    console.log("Bolme: " + bolme);  // Çıktı: Bolme: 5
    
    // 'Square' statik metodunu çağırıyoruz. Bu da sınıf üzerinden çağrılır.
    // Statik metot nesne oluşturulmadan doğrudan sınıf üzerinden erişilebilir.
    let kare = Mat.Square(5);
    console.log("Kare: " + kare);  // Çıktı: Kare: 25
    
    
    /*
        static değişkenler (veya statik özellikler), JavaScript sınıflarında, sınıfın tüm nesneleri için ortak olan veri öğelerini tutmak için kullanılır. Yani, bir statik değişken sınıfın bir örneğiyle (nesne) ilişkilendirilmez, doğrudan sınıfla ilişkilidir. Bu, nesne oluşturulmadan sınıf düzeyinde erişilebilen bir özelliktir.
     */
    /*
    static değişkenler (veya statik özellikler), JavaScript sınıflarında, sınıfın tüm nesneleri için ortak olan veri öğelerini tutmak için kullanılır. Yani, bir statik değişken sınıfın bir örneğiyle (nesne) ilişkilendirilmez, doğrudan sınıfla ilişkilidir. Bu, nesne oluşturulmadan sınıf düzeyinde erişilebilen bir özelliktir.
*/

class Employee {
    // Statik özellik: Şirket bilgisi tüm Employee nesneleri için ortak
    static companyName = "ABC Teknoloji Şirketi"; // Tüm Employee nesneleri için ortak olan statik özellik

    // Nesne özellikleri: Çalışan adı ve pozisyonu
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    // Nesne metodu: Çalışan bilgilerini gösterir
    displayEmployeeInfo() {
        // 'Employee.companyName' ile statik özellik sınıf üzerinden erişilir
        console.log(`${this.name} is a ${this.position} at ${Employee.companyName}`); // Statik özelliğe sınıf adıyla erişim
    }
}

// Nesneler oluşturuluyor
const employee1 = new Employee("Ahmet", "Software Engineer");
const employee2 = new Employee("Mehmet", "Data Scientist");

// Nesne metodu ile çalışan bilgilerini gösteriyoruz
employee1.displayEmployeeInfo();  // Çıktı: Ahmet is a Software Engineer at ABC Teknoloji Şirketi
employee2.displayEmployeeInfo();  // Çıktı: Mehmet is a Data Scientist at ABC Teknoloji Şirketi

// Statik özellik 'companyName' doğrudan sınıf üzerinden değiştiriliyor
Employee.companyName = "85 Company";
//employee1.companyName = "85 Company"; // Yanlış: Statik değişkeni nesne üzerinden değiştirmek doğru değildir.

// Değişen şirket bilgisini kontrol edelim
employee1.displayEmployeeInfo();  // Çıktı: Ahmet is a Software Engineer at 85 Company
employee2.displayEmployeeInfo();  // Çıktı: Mehmet is a Data Scientist at 85 Company

// Şirket bilgisini doğrudan sınıf üzerinden erişebiliyoruz
console.log("Şirket Adı: " + Employee.companyName);  // Çıktı: Şirket Adı: 85 Company