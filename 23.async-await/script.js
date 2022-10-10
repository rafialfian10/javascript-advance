//async -Await

//Asynchronous function adalah sebuah function yang bekerja secara asynchronous (melalui event loop), yang mnghasilkan (implisit) promise sebagai return value-nya, tapi cara penulisan code-nya menggunakan penulisan synchronous (standard). singkatnya function-nya akan mengembalikan promise meskipun didalamnya tidak ada code yang asynchronous, tapi penulisan codenya menggunakan cara standard(synchronous)
    // fungsi akan berjalan secara asynchronous 
    // menghasilkan implisit (promise)
    // cara penulisanya sama seperti synchronous function (function biasa)

// penjelasan lain adalah sebuah async function ddapat memiliki keyword await di dalamnya untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promise-nya selesai. 


//contoh 1 sederhana

const a = new Promise(resolve => resolve('Resolve dari a selesai'));
console.log(a); //ini aka menghasilkan promise resolve, tapi jika promisenya tidak langsung resolve, tapi menunggu dulu selama beberapa detik


//contoh 2
const b = new Promise(resolve => {
    setTimeout(function(){
        resolve('Resolve dari b selesai')
    },2000)
})
console.log(b); //hasilnya akan pending karena dijalankan secara synchronous, dan untuk mengatasinya maka gunakan then /catch

b.then(resolve => console.log(resolve)); //hasilnya akan nunggu selama 2 detik, lalu resolve


//contoh 3 dengan (smpan promise di function)
function c(){
    return new Promise(resolve => {
        setTimeout( () => {
            resolve('resolve dari c selesai')
        }, 3000)
    })
}

const simpanC = c();
console.log(simpanC); //ini akan pending juga, karena itu, maka gunakan then
simpanC.then(resolve => console.log(resolve))


//contoh 4 (menggunakan async - await)
function d(){
    return new Promise(resolve => {
        setTimeout( () => {
            resolve('resolve dari d selesai')
        }, 4000)
    })
}

//lalu simpan function d didalam sebuah function
async function cobaAsync(){
    const simpanD = await d()
    console.log(simpanD);
}

cobaAsync(); // ini juga akan pending, untuk mengatasinya maka harus menggunakan async - await untuk memberitahu javascriptnya kalau akan ada function asynchronous


//contoh 5 (cara menangkap catch)
function e(){ //keadaannya jika resolve dibawah 7 detik maka tampilkan resolve, dan jika lebih daari 7 detik maka tampilkan reject
    return new Promise((resolve, reject) => {
        const waktu = 7000; //7 detik
        if(waktu < 8000){
            setTimeout(() => {
                resolve('resolve dari e selesai');
            }, waktu)
        } else {
            reject('reject dari e karena terlalu lama');
        }
    });
}

const simpanE = e();
simpanE
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))
// ini jika menggunakan then & catch, tapi jika menggunakan async - await maka lihat dibawah ini


//contoh 6 menggunakan async - await dengan then & catch
function f(){
    return new Promise((resolve, reject) => {
        let waktu = 10000;
        if (waktu < 10000){
            setTimeout( () => {
                resolve('resolve dari f selesai');
            }, waktu)
        } else {
            reject('reject dari f karena terlalu lama');
        }
    });
}

async function cobaAsyncF(){ //jika hanya ini, maka akan diasumsikan hanya resolve yabg diambil, jadi tambahkan try dan catch
    try { // try untuk menangkap resolve
        const simpanF = await f();
        console.log(simpanF);
    } catch(err){ // catch untuk menangkap reject, wajib diberi parameter
        console.error(err)
    } 
}

cobaAsyncF();


