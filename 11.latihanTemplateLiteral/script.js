const mahasiswa = {

	nama: 'Rafi Alfian',
	nim: 'A710170021',
	email: 'a710170021@student.ums.ac.id',
	prodi: 'Teknik Informatika'
}


let mhs1 = `<div class="mhs">
				<h2>${mahasiswa.nama}</h2>
				<span>NIM : ${mahasiswa.nim}</span><br>
				<span>Email : ${mahasiswa.email}</span><br>
				<span>Prodi : ${mahasiswa.prodi}</span><br><br><hr>
			</div>`;

document.writeln(mhs1);


function mahasiswa2(){
	this.nama = 'Rafi Alfian';
	this.nim = 'A710170021';
	this.prodi = 'a710170021.student.ums.ac.id';
	this.nilai = [3.50, 3.34, 3.89];
}

let mhs2 = new mahasiswa2();
mhs2 = (`
			<ul>
				<li>
					<p>Halo nama saya ${mhs2.nama}</p>
				</li>
				<li>
					<p>nim saya ${mhs2.nim}</p>
				</li>
				<li>
					<p>email saya ${mhs2.prodi}</p>
				</li>
				<li>
					<p>nilai saya semester ini ${mhs2.nilai.map(arr => arr).join(', ')}</p>
				</li>
			</ul><br><hr>
	`);

document.writeln(mhs2);

//-------------

const mahasiswa3 = [
	{
		nama: 'Rafi Alfian',
		umur: 25
	},
	{
		nama: 'Ervin Alfianto',
		umur: 26
	},
	{
		nama: 'Ali Imron',
		umur: 26
	}
];

let mhs3 = `<div class="mhs3">
				${mahasiswa3.map(arr => `<ul>
						<li>${arr.nama}</li>
						<li>${arr.umur}</li>
					</ul>`).join(' ')}
			</div><br><hr>`;

document.writeln(mhs3);


//---------

//menggunakan pengkondisan / ternary

const lagu = {

	judul: 'Kau adalah',
	penyanyi: 'isyana Saraswati',
	feat: 'Rayi Putra' // pada feat di berikan pengkondisian, jika ada maka di isi, jika tidak maka string kosong
}

let lg = `<div class="lagu">
			<h3>Musik</h3>
			<ol>
				<li>Judul : ${lagu.judul} </li>
				<li>Penyanyi : ${lagu.penyanyi}. feat (${(lagu.feat) ? lagu.feat : ''}) </li>
			</ol>
		</div><br><hr>`;

document.writeln(lg);


//-----------

//Nested
//HTML Fragment bersarang


const mahasiswa4 = {
	nama: 'Rafi Alfian',
	semester: 7,
	mataKuliah: ['Pemrograman WEB', 'Game Education', 'Jaringan Komputer', 'Animasi']
}

function cetakMataKuliah(mataKuliah){
	return `<ol>${mataKuliah.map(mk =>
				 `<li>${mk}</li>`).join('')
			}</ol>`;
}

const mhs4 = `<div class="mhs4">
				<p>Nama : ${mahasiswa4.nama}</p>
				<p>Semester : ${mahasiswa4.semester}</p>
				<p>Daftar mata kuliah : ${cetakMataKuliah(mahasiswa4.mataKuliah)}</p>
			</div>`;
document.writeln(mhs4);


