//sort berfungsi untuk mengurutkan
const array = [9,3,1,7,5,10,4,2,6,8];
array.sort((a,b) => a-b )
console.log(array);

//filter angka yang lebih besar dari 5 dengan cara biasa(looping) dan simpan dalam variabel
const newArray = [];
for(let i = 0; i < array.length; i++){
	
	if(array[i] > 5){
		newArray.push(array[i]);
	}
}
console.log(newArray);



// filter angka yang lebih besar dari 5 dengan method filter dan simpan dalam variabel
const arr = array.filter(arr => arr <= 5);
console.log(arr);

//map array (map sama saja dengan foreach, bedanya map mengembalikan array) 
const array2 = array.map(arr => arr * 2);
console.log(array2);

//reduce berfungsi untuk menjumlahkan semua elemen pada array. [9 + 3 + 1 + 7 + 5 + 10 + 4 + 2 + 6 + 8] = 55
const array3 = array.reduce(( accumulator, currentValue) => accumulator + currentValue, 0);
console.log(array3);
//ada 3 variabel pada reduce pertama acc, kedua curr (nama bisa diganti), dan yang ketiga berupa nilai angka, jika tida diisi maka akan diberikan nilai default 0(variabel ketiga harus berada di akhir return)





















