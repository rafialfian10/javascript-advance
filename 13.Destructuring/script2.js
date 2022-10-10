//Destructuring object
const mahasiswa1 = {

	nama1: 'Rafi Alfian',
	umur1: 25
}

const {nama1, umur1} = mahasiswa1; //ketika memetakan property kedalam variabel, namanya wajib sama, beda dengan array yang namanya bebas.
console.log(nama1); //maka hasilnya Rafi Alfian
console.log(umur1); // 25


//Assigment tanpa deklarasi object
({nama2, umur2} = {nama2: 'Ervin Alfianto', umur2: 26}); 
// tidak perlu menggunakan const, tapi cukup gunakan tanda kurung untuk membungkus semuanya, lalu buat propertynya yang disimpan di kurung kurawal

console.log(nama2); //maka hasilnya adalah Ervin Alfianto
console.log(umur2); // 26


//assigment dengan nama variabel baru 
const mahasiswa3 = {

	nama3: 'Ali Imron',
	umur3: 25
}

const {nama3: n3, umur3: u3} = mahasiswa3; 
console.log(n3); //maka hasilnya Ali Imron. //yang dapat dipanggil adalah nama barunya n3, jika dipaanggil nama3, maka akan error
console.log(u3);


//Memberikan nilai default pada value

const mahasiswa4 = {

	nama4: 'Rafi Alfian',
	umur4: 25,
	email4: 'rafialfian770@gmail.com'
}

// const {nama4, umur4, email4} = mahasiswa4; //jika misal kta tambahkan email, maka hasilnya akan undefined
const {nama4, umur4, email4 = 'default@gmail.com'} = mahasiswa4; // jadi bisa kita berikan nilai defalt pada email4 dengan cara menambahkan = value-nya apa, tapi jika terdapat property email4 pada object, maka default akan ditimpa oleh property pada object
console.log(nama4); //maka hasilnya Rafi Alfian
console.log(umur4);
console.log(email4);


//Memberi nama variabel baru dan nilai default
const mahasiswa5 = {
	nama5: 'Ervin Alfianto',
	umur5: 26,
	email5: 'ervin@gmail.com'
}; 

const {nama5: n5 = 'Nama', umur5: u5 = 0, email5: e5 = 'default@gmail.com'} = mahasiswa5;

console.log(n5); //maka hasilnya adalah Ervin Alfianto
console.log(u5); // 26
console.log(e5);


//Rest parameter
const mahasiswa6 = {

	nama6: 'Ali Imron',
	umur6: 25,
	email6: 'ali@gmail.com'
}

const {nama6, ...values} = mahasiswa6; 
console.log(nama6); // maka hasilnya adalah Ali Imron
console.log(values); // 25 dan ali@gmail.com tapi dalam bentuk object



//Mengambil field pada object, setelah dikirim sebagi parameter untuk function
const mahasiswa7 = {
	id: 12345,
	nama7: 'Rafi Alfian',
	umur7: 25,
	email7: 'rafialfian770@gmail.com'
}

//cara biasa
// function getId(mahasiswa7){ // yang diterima oleh function juga object mahasiswa7
// 	return mahasiswa7.id; // tapi yang dikembalikan hanya salah satu property-nya saja
// } 
// console.log(getId(mahasiswa7)); //yang dikirim object mahasiswa7


//dengan destructuring object
function getIdMhs({id}){ // tapi yang diterima function bukan lagi object mahasiswa7, tapi hanya salah satu property-nya saja, jadi langsung dibongkar. penting: tapi gunakan tanda kurawal pada function yang menerima parameter
	return id;
}

console.log(getIdMhs(mahasiswa7)); // yang dikirim object mahasiswa7











