/*Spread operator & rest parameter 
	kedua method ini direpresentasikan dengan mengunakan ...  
	meskipun menggunakan notasi yang sama, tapi kedua haal tersebut berbeda
*/
//Spread operator merupakan operator yang memecah (expand /unpack) sebuah iterable menjadi single element. (array, strings, argument / nodelist, map, typed array, set, user-defined iterables)


//Spread operator (memecah iterable menjadi single elemen)
const mahasiswa1 = ['Rafi Alfian', 'Ervin Alfianto', 'Ali Imron', 'Dayu'];
console.log(...mahasiswa1); // hasilnya array mahasiswa akan dipecah menjadi per elemen
console.log(...mahasiswa1[1]); // hasilnya index 1 Ervin Alfianto akan dipecah tiap karakternya


//manggabungkan 2 array (bisa denga concat / spread operator)
const mhs = ['Rafi Alfian', 'Ervin Alfianto', 'Ali Imron', 'Dayu'];
const dosen = ['Hardika', 'Diaz', 'Jan', 'Arif'];

const data1 = mhs.concat(dosen);
console.log(data1);

const data2 = [...mhs, 'sutama', ...dosen]; // cara ini lebih fleksibel karena kita bisa menambahkan data per elemen
console.log(data2);


//mengcopy array
const mahasiswa2 = ['Rafi Alfian', 'Ervin Alfianto', 'Ali Imron', 'Dayu'];
// const mhs2 = mahasiswa2; // sebenarnya ini bukan mengcopy, karena jika mhs2 ada yang diubah, maka mahasiswa2 juga akan berubah
// mhs2[0] = 'Rafi';
// console.log(mahasiswa2)

const mhs2 = [...mahasiswa2]; // jika menggunakan spread, meskipun ada data yang diubah pada mhs2, maka mahasiswa2 tidak akan ikut berubah
mhs2[0] = 'Chanief';
console.log(mhs2)


