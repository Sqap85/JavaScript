// Class Tabanlı Miras - ES6 ve sonrası
/*
 * JavaScript’te constructor overload ya da method overload (metod aşırı yükleme) doğrudan desteklenmez
 */

// Parent class
class Animal {
  constructor(name) {
    this.name = name; // Animal sınıfı, hayvanın adını saklar
  }

  makeSound() {
    console.log(`${this.name} made a sound.`); // Hayvan bir ses çıkarır
  }
}

// Child class - Method overriding for Cat
class Cat extends Animal {
  constructor(name, breed) {
    super(name); // Parent class'ın constructor'ını çağırır
    this.breed = breed; // Kediye özgü 'breed' (ırk) özelliği
  }

  // Override the makeSound method from Animal class
  makeSound() {
    super.makeSound(); // Üst sınıfın makeSound metodunu çağırır (isteğe bağlı)
    console.log(`${this.name} meowed.`); // Kediye özgü ses çıkarma
  }
}

// Child class - Method overriding for Dog
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Parent class'ın constructor'ını çağırır
    this.breed = breed; // Köpeğe özgü 'breed' (ırk) özelliği
  }

  // Override the makeSound method from Animal class
  makeSound() {
    console.log(`${this.name} barked.`); // Köpeğe özgü ses çıkarma
  }
}

// Kullanım - Method overriding
const animal = new Animal("Animal");
animal.makeSound(); // Animal made a sound.

const cat = new Cat("Whiskers", "Persian");
cat.makeSound(); 
// Output:
// Whiskers made a sound.
// Whiskers meowed.

const dog = new Dog("Buddy", "Golden Retriever");
dog.makeSound(); 
// Output:
// Buddy barked.


  // Prototype Tabanlı Miras - ES5 ve öncesi
  /*
  function AnimalProto(name) {
    this.name = name;  // AnimalProto fonksiyonu, hayvanların adını saklar
  }
  
  AnimalProto.prototype.makeSound = function() {
    console.log(`${this.name} made a sound.`);  // Hayvan bir ses çıkarır
  };
  
  function CatProto(name, breed) {
    AnimalProto.call(this, name);  // AnimalProto'nun constructor'ını çağırır
    this.breed = breed;  // Kediye özgü 'breed' (ırk) özelliği
  }
  
  // Prototip zincirini kuruyoruz
  CatProto.prototype = Object.create(AnimalProto.prototype);
  CatProto.prototype.constructor = CatProto;
  
  // Kediye özgü makeSound metodunu override ediyoruz
  CatProto.prototype.makeSound = function() {
    AnimalProto.prototype.makeSound.call(this);  // Üst sınıfın makeSound metodunu çağırır (super alternatifi)
    console.log(`${this.name} meowed.`);  // Kedi özel ses çıkartır
  };
  
  // Kullanım - Class Tabanlı Miras
  const animal = new Animal("Animal");
  animal.makeSound(); // Animal made a sound.
  
  const cat = new Cat("Whiskers", "Persian");
  cat.makeSound(); 
  // Animal made a sound. 
  // Whiskers meowed.
  
  // Kullanım - Prototype Tabanlı Miras
  const animalProto = new AnimalProto("ProtoAnimal");
  animalProto.makeSound(); // ProtoAnimal made a sound.
  
  const catProto = new CatProto("Fluffy", "Maine Coon");
  catProto.makeSound(); 
  // ProtoAnimal made a sound.
  // Fluffy meowed. */