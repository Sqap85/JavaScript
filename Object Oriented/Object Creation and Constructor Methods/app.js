// 1. Nesne Oluşturma ve Yapıcı Metot (Constructor Method) Kullanımı

// Person sınıfı tanımlanıyor
class Person {
    // Yapıcı metot (constructor) - nesne oluşturulurken çağrılır
    // JavaScript’te metot aşırı yüklemesi (overloading) doğrudan desteklenmemektedir
    constructor(name, age) {
      this.name = name; // Nesnenin 'name' özelliği atanıyor
      this.age = age;   // Nesnenin 'age' özelliği atanıyor
    }

    // Nesneye ait bir metot
    greet() {
      console.log(`Merhaba, benim adım ${this.name} ve yaşım ${this.age}`);
    }
  }
  
  // Person sınıfından yeni bir nesne oluşturuluyor
  const person1 = new Person('Ali', 25); // Yapıcı metot çağrılıyor
  const person2 = new Person('Ayşe'); // Yapıcı metot çağrılıyor
  
  // Nesnelerin metodlarını kullanıyoruz
  person1.greet(); // Çıktı: Merhaba, benim adım Ali ve yaşım 25
  person2.greet(); // Çıktı: Merhaba, benim adım Ayşe ve yaşım 30
  
  // 2. Yapıcı Metot ve Nesne Özelliklerine Erişim
  
  // person1 nesnesinin özelliklerine erişim
  console.log(person1.name); // Çıktı: Ali
  console.log(person1.age);  // Çıktı: 25
  
  // person2 nesnesinin özelliklerine erişim
  console.log(person2.name); // Çıktı: Ayşe
  console.log(person2.age);  // Çıktı: 30
  

  // 3. Yapıcı Metot ile Varsayılan Değerler Kullanma
  class PersonWithDefaults {
    
    constructor(name = 'Bilinmeyen', age = 0) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Varsayılan değerlerle nesne oluşturuluyor
  const person3 = new PersonWithDefaults(); // Varsayılan 'Bilinmeyen' adı ve 0 yaşı kullanır
  person3.greet(); // Çıktı: Merhaba, benim adım Bilinmeyen ve yaşım 0
  
  // Belirtilen değerlerle nesne oluşturuluyor
  const person4 = new PersonWithDefaults('Mehmet', 40);
  person4.greet(); // Çıktı: Merhaba, benim adım Mehmet ve yaşım 40