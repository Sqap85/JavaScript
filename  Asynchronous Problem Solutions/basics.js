/*
  1. Senkron (Synchronous)

Senkron programlama, işlemlerin sırasıyla ve eş zamanlı olarak gerçekleştiği bir yaklaşımdır. Yani, bir işlem başladığında, bu işlem tamamlanmadan bir sonraki işlem başlatılamaz.
	•	Özellikleri:
	•	İşlemler sırasıyla yapılır.
	•	Bir işlem tamamlanmadan bir sonraki işleme geçilemez.
	•	Kod sırasıyla çalışır ve her işlem sırasıyla bekler.
 */
console.log("Start of the program");

// Senkron işlem
console.log("This is a synchronous task.");
for (let i = 0; i < 3; i++) {
  console.log(`Sync Task #${i}`);
}

/*
2. Asenkron (Asynchronous)

Asenkron programlama, işlemlerin birbirinden bağımsız olarak çalıştığı bir yaklaşımdır. Yani, bir işlem başlatıldığında, işlem beklenmeden diğer işlemlere geçilebilir. Bu, özellikle zaman alan işlemler (dosya okuma, ağ istekleri vb.) için kullanışlıdır.
	•	Özellikleri:
	•	İşlemler paralel veya zaman içinde gerçekleşir.
	•	Bir işlem başlatıldığında, diğer işlemler başlatılabilir ve tamamlanmasını beklemek gerekmez.
	•	Genellikle callback fonksiyonları, Promise ve async/await gibi yapılarla yönetilir. */

console.log("Start")

// Asenkron işlem
setTimeout(() => {
  console.log("This is an asynchronous task (after 2 seconds).");
}, 2000);  // 2 saniye sonra çalışacak

// Senkron işlem
console.log("End of the program");

//Start
//End of the program
//This is an asynchronous task (after 2 seconds).