//jQuery

// $('.search-button').on('click', function(){
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=22a431b&s=' + $('.input-keyword').val(),
//         success: result => {
//             let movies = result.Search;
//             let cards = '';
//             movies.map(m => {
//                 cards += showCards(m);
//                 $('.movis-container').html(cards);
//             })

//             $('.detail-movies-button').on('click', function(){
//               $.ajax({
//                 url: 'http://www.omdbapi.com/?apikey=22a431b&i=' + $(this).data('imdbid'),
//                 success: m => {
//                     let showMovies = showDetailmovies(m);
//                     $('.modal-body').html(showMovies);
//                 },
//                 error: e => {
//                     console.log(e.responseText);
//                 }
//               }); 
//             });
//         },
//         error: e => {
//             console.log(e.responseText)
//         }
//     });
// });



// Fetch

// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function(){
//     const inputKeyword = document.querySelector('.input-keyword')
//     fetch('http://www.omdbapi.com/?apikey=22a431b&s=' + inputKeyword.value)
//         .then(resolve => resolve.json())
//         .then(resolve => {
//             let movies = resolve.Search;
//             movies.map(movie => {
//                 let cards = '';
//                 cards += showCards(movie);
//                 const moviesContainer = document.querySelector('.movies-container');
//                 moviesContainer.innerHTML = cards;
//             });

//         const detailMoviesButton = document.querySelectorAll('.detail-movies-button');
//         detailMoviesButton.map(btn => {
//             btn.addEventListener('click', function(){
//                 const imdbID = this.dataset.imdbid;
//                 fetch('http://www.omdbapi.com/?apikey=22a431b&i=' + imdbID)
//                     .then(resolve => resolve.json())
//                     .then(m => {
//                         const detailMovies = showDetailmovies(m);
//                         const modalBody = document.querySelector('.modal-body');
//                         modalBody.innerHTML = detailMovies;
//                     });
//             });
//         });
//     });
// });


//Fetch Refactor
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);// ini masih menghasilkan promise (bukan object) karena jika kode semakin modular (function getmovies() dijalankan dan dimasukkan kedalam variabel, maka function-nya tidak lagi asynchronous melainkan synchronous), dan untuk mengatasinya maka gunakan async pada function dan await pada function getmovies() untuk memberitahu javascriptnya bahwa function ini ada sesuatu yang asynchronous
    updateUI(movies);
});

//ketka tombol show detail di click. Sebelumnya event tombolnya didalam fetch yang pertama, tapi kali ini akan dibuat secara independent(diluar)
// const detailMoviesButton = document.querySelectorAll('.detail.movies-button'), tidak bisa jika menggunakan ini, dan untuk mengatasinya, maka gunakan event binding

//harus menggunakan event binding : ketika kita memberi event ke elemen yang awalnya belum ada, tapi ketika event-nya ada, dia tetap bisa berjalan
document.addEventListener('click', async function(e){
    if(e.target.classlist.contains('detail-movies-button')){ //jika pada e.target terdapat class yang namanya detail-movies-button maka lakukan sesuatu
        const imdbID = e.target.dataset.imdbid;
        const moviesDetail = await getDetailMovies(imdbID)
        updateUIDetail(moviesDetail);
    } 
})


// function show cards
function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=22a431b&s=' + keyword)
        .then(resolve => resolve.json())
        .then(resolve => resolve.Search)
}

function updateUI(movies){
    let cards = '';
    movies.map(m => {
        cards += showCards(m);
        const moviesContainer = document.querySelector('.movies-container');
        moviesContainer.innerHTML = cards;
    })
}
// akhir function show cards


// function show detail movies
function getDetailMovies(imdbID){
    fetch('http://www.omdbapi.com/?apikey=22a431b&s=' + imdbID)
        .then(resolve => resolve.json())
        .then(m => m);
}

function updateUIDetail(moviesDetail){
    const detailMovies = showDetailmovies(moviesDetail);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = detailMovies;
}
// akhir function show detail movies



function showCards(m){
    return `<div class="col-md-4 my-5"> <!-- my (jml movies 11 = md-4, 11/4 = 3, jadi per baris 3 movies, sedangkan margin sumbu y =5) -->
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary detail-movies-button" data-toggle="modal" data-target="#detailMovies" data-imdbid="${m.imdbID}">Show Details</a>   
                    
                    </div>
                </div>
            </div>`;
}

function showDetailmovies(m){
    return `<div class="containe-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                            <li class="list-group-item"><strong>Released : </strong>${m.Released}</li>
                            <li class="list-group-item"><strong>Genre : </strong>${m.Genre}</li>
                            <li class="list-group-item"><strong>Directors : </strong>${m.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                            <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}

// // Fetch Refactor
// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', async function(){
//     const inputKeyword = document.querySelector('.input-keyword');
//    const movies = await getMovies(inputKeyword.value);
//    updateUI(movies);       
// });

// // ketika button show detail di click
// document.addEventListener('click',async function(e){
//     if(e.target.classList.contains('detail-movies-button')){
//         const imdbID = e.target.dataset.imdbid;
//         const moviesDetail = await getDetailMovies(imdbID);
//         updateDetailUI(moviesDetail);
//     }
// })

// // function show cards
// function getMovies(keyword){
//    return fetch('http://www.omdbapi.com/?apikey=22a431b&s=' + keyword)
//         .then(resolve => resolve.json())
//         .then(movies => movies.Search);
// }

// function updateUI(movies){
//     let cards = '';
//     movies.map(m => {
//         cards += showCards(m);
//         const moviesContainer = document.querySelector('.movies-container');
//         moviesContainer.innerHTML = cards;
//     });
// }
// // akhir function show cards


// // function show detail movies
// function getDetailMovies(imdbID){
//     return fetch('http://www.omdbapi.com/?apikey=22a431b&i=' + imdbID)
//     .then(resolve => resolve.json())
//     .then(m => m);
// }

// function updateDetailUI(moviesDetail){
//     let detailMovies = showDetailmovies(moviesDetail);
//     const modalBody = document.querySelector('.modal-body');
//     modalBody.innerHTML = detailMovies;
// }
// //akhir function show detail movies


