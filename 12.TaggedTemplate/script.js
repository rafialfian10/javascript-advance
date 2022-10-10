//Tagged Template adalah bentuk yang lebih kompleks dari template literal, memungkinkan kia untuk membaca template literal melalui sebuah function

let nama = 'Rafi Alfian';
let nim = 'A710170021';
let prodi = 'Teknik Informatika';
let waktu = 'Malam';

function mahasiswa(strings, ...values){

	let result = '';
	strings.forEach((str, i) => { //bisa forEach / map
	result += `${str}<hl class="reds">${values[i] || ''}</hl>`
	});

	return result;	

}

let mhs = mahasiswa `halo selamat ${waktu}, nama saya ${nama}, nim ${nim}, jurusan ${prodi}`;

document.writeln(mhs);
