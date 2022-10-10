const allVideos = Array.from(document.querySelectorAll('.allVideos ul li'));
let allSnk = allVideos.filter(video => video.textContent.includes('Shingeki no Kyojin'))

.map(video => video.dataset.duration)

.map(video => {
	let parts = video.split(':')

	.map(video => parseFloat(video))

	return (parts[0] * 60) + parts[1];
})

.reduce((acc, curr) => {return acc + curr});

let jam = Math.floor(allSnk / 3600);
allSnk = allSnk - (jam * 3600);
let menit = Math.floor(allSnk / 60);
let detik = Math.floor(allSnk - (menit * 60));

console.log(allSnk);
console.log(jam);
console.log(menit);
console.log(detik);

const snk = allVideos.filter(video => video.textContent.includes('Shingeki no Kyojin')).length;
const jmlVideos = document.querySelector('.jmlVideos');
jmlVideos.innerHTML = `${snk} videos.`;

const totalDurasi = document.querySelector('.totalDurasi');
totalDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;
