//Rest parameter adalah sebuah method yang berfungsi untuk merepressentasikan argumen pada function dengan jumlah yang tidak terbatas menjadi sebuah array

function myFunc(a, b,  ...myArg){ //...myArg akan berisi sisa dari parameter
	return `a = ${a}, b = ${b}, my arguments = ${myArg}`
}

console.log(myFunc(1, 2, 3, 4, 5));

//------------------------

function angka(...myArg){

	//Menggunakan HOF
	// return myArg.reduce((acc, curr) => acc + curr);

	//menggunakan for..of
	let jumlah = 0;
	for(const a of myArg){
		jumlah += a;
	}
	return jumlah;
}

console.log(angka(1,2,3,4,5));

//------------------------

function angka2(){
	//sebenarnya dibelakang layar argument sudah tersimpan ke dalam arguments. jadi dikembalikan dalam entuk argument buka dalam bentuk array

	return Array.from(arguments).reduce((acc, curr) => acc + curr); //ubah dulu arguments menjadi array, karena akan menggunakan method HOF

	// return [...arguments].reduce((acc, curr) => acc + curr);
	//kedua cara tersebut sama-sama berhasil
}
console.log(angka2(1,2,3,4,5));


//---------------------------

//Rest parameter pada object
const team = {

	leader: 'Rafi Alfian',
	frontEnd1: 'Dawam',
	frontEnd2: 'Candra',
	backEnd: 'Abdillah',
	ux: 'Rofiq',
	devOps: 'Manto'
}

const {leader, ...myTeam} = team;
console.log(leader);
console.log(myTeam);

for(const a in myTeam){
console.log(myTeam[a]);
}



//---------------------------

//filtering

function filterBy(type, ...values){

	return values.filter(v => typeof v === type);//cari yang type-nya number, number juga bisa diganti dengan string / boolean


	// const fil = [...arguments].filter(a => typeof a === arguments[0] );
	// return fil;
}
console.log(filterBy('string', 1, 'Rafi Alfian', true, 2, 10, 'Ervin Alfianto', false, 8, 5, 'Ali Imron'));



