//ambil semua data di dalam div
const allVideos = Array.from(document.querySelectorAll('.allVideos ul li'));

//filter data yang diambil(dalam kasus ini yang diambil hanya Shingeki no Kyojin) dengan textContent.includes / innerHTML.includes
let snk = allVideos.filter(function(videos) {return videos.innerHTML.includes('Shingeki no Kyojin')})

	//ambil durasi dari data videos dengan setdata.duration pada atribut data-(duration), yang dihalaman index.html datanya duration, maka harus sama
	.map(function(item){return item.dataset.duration})
	
	//hilangkan tanda : pada durasi karena tidak dibutuhkan dalam operasi matematik ["23:45"] => ["23", "45"].
	.map(function(waktu){
		const parts = waktu.split(':')

	// 	//ubah duration menjadi float karena duration masih bertipe string sehingga tidak bisa dilakukan operasi matematik.
		.map(function(part){return parseFloat(part)});

		//karena semua data akan dijadikan detik, maka kembalikan nilai parts[0] elemen awal masih daalam menit maka dikalikan 60 agar menjadi detik lalu + parts[1] elemen 2, maka hasilnya akan menjadi total dari detik
		return parts[0] * 60 + parts[1];

	})

	//jumlahkan seluruh detik dengan reduce
	.reduce(function(acc, curr) {return acc + curr});

	//lalu ubah dari total detik menjadi jam:menit:detik
	let jam = Math.floor(snk / 3600);
	snk = snk - (jam * 3600);
	let menit = Math.floor(snk / 60);
	let detik = Math.floor(snk - (menit * 60));
	

	//Tampilkan jumlah video snk
	const jmlVideo = document.querySelector('.jmlVideos');
	let videos = allVideos.filter(function(videos) {return videos.innerHTML.includes('Shingeki no Kyojin')}).length;
	jmlVideo.innerHTML = videos + ' video';
		
	//Tampilkan total durasi dengan innerHTML atau textContent
	const tDurasi = document.querySelector('.totalDurasi');
	tDurasi.innerHTML = jam +'jam ' + menit + 'menit ' + detik + 'detik ';

	
