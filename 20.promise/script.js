//Request menggunakan vanilla js

    // let xhr = new XMLHttpRequest();

    // xhr.onreadystatechange = function(){
    //     if(xhr.readyState === 4 && xhr.status === 200){
    //         let mahasiswa = JSON.parse(xhr.responseText);
    //         mahasiswa.map(mhs => {
    //             console.log(mhs.nama)
    //         })
    //     } else if (xhr.readyState === 0 && xhr.status === 404){
    //         console.log(xhr.responseText);
    //     }
    // }

    // xhr.open('get', '../18.callback/json/mahasiswa.json');
    // xhr.send();

// Request Menggunakan JQuery

    // $.ajax({
    //     url: 'json/mahasiswa.json',
    //     success: (mhs) => {
    //         mhs.map(m => console.log(m.nama))
    //     },
    //     error: (e) => {
    //         console.log(e.responseText)
    //     } 
    // })


//ada cara yang lebih simple(javascript modern) yaitu dengan mengunakan fetch.
//catatan: dengan menggunakan fetch, maka data yang dikembalikan dalam bentuk promise (bukan dalam bentuk data)

// let data = fetch('../18.callback/json/mahasiswa.json');
// console.log(data) 
//request dikembalikan dalam bentuk promise, jadi untuk mengatasinya maka gunakan cara dibawah ini

// fetch('../18.callback/json/mahasiswa.json')
//     .then(response => response.json()) //response adalah callback
//     .then(response =>  console.log(response))

//Promise(janji) object yang merepresentaikan keberhasilan / kegagalan sebuah event yang asynchronous dimasa yang akan datang.
//janji dapat (terpenuhi / ingkar) jadi kalau di js keadaanya disebut dengan states (fullfiled(terpenuhi) / rejected(ingkar/tidak terpenuhi) / pending(waktu tunggu sebelum janji terpenuhi atau tidak) )

// dan untuk menjalankan keadaan ini ada 3 funsi callback. yaitu:
// resolve(terpenuhi) / reject(tidak terpenuhi) / finally (waktu tunggu)

// dan ada aksi yang akan dilakukan apabila janji terpenuhi atau tidak terpenuhi
// then(terpenuhi) dan akan menjalankan resolve / cacth (tidak terpenuhi) dan aka menjalankan reject

//Contoh sederhana promise
let ditepati1 = true;
const janji1 = new Promise((resolve, reject) => { // ada 2 parameter yang bentknya callback
    if(ditepati1){
        resolve('janji telah ditepati');
    } else {
        reject('janji telah diingkari')
    }
});

// dan untuk menangkap resolve dan reject maka gunakan then daan catch
janji1

    .then(response => console.log(`OK : ${response}`)) // response adalah resolve dari janji1
    .catch(response => console.log(`NOT OK : ${response}`))


//contoh 2 dengan menggunakan pending
let ditepati2 = true;
janji2 = new Promise((resolve, reject) => {
    if(ditepati2){
        setTimeout( () => {
            resolve('Janji telah ditepati setelah beberapa waktu');
        }, 2000)
    } else {
        setTimeout( () => {
            reject('Janji telah diingkari setelah beberapa waktu');
        })
    }
})

console.log('Mulai');
// console.log(janji2.then(() => console.log(janji2)))
janji2
    .finally( () => console.log('Selesai menunggu')) //method finally() akan dijalankan ketika then / catch sudah siap dijalankan jad jika pending selssai, maka finally() dulu yang dijalankan. method ini biasanya digunakan untuk animasi loading
    .then((response) => console.log(`OK : ${response}`))
    .catch((response) => console.log(`NOT OK : ${response}`))
console.log('Selesai');


// Promise.all

game = new Promise((resolve) => {
    setTimeout( () => {
        resolve([{
            judul: 'Resident Evil Series',
            genre: 'Horor, Adventure, Mistery',
            developer: 'konami' 
        }])
    }, 2000)
})

anime = new Promise(resolve => {
    setTimeout( () => {
        resolve([{
            judul: 'Shingeki no kyojin',
            genre: 'Horror, Mistery, Drama',
            pencipta: 'Hajime Isayama'
        }])
    }, 2000)
})

//jika ditangkap resolve secara manual, satu per satu
// game.then(response => console.log(response))
// anime.then(response => console.log(response))

//jika dengan Promise.all
Promise.all([game, anime]) //didalamnya disimpan array dari setiap promise
    // .then(response => console.log(response)) // hasilnya array di dalam array, jika array ingin dipisah, maka gunakan cara dibawah
    .then(response => {
        const [game, anime] = response // gunakan spread pada array
        console.log(game)
        console.log(anime)
    })

