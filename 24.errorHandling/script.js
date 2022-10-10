// //Error Handling

// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', async function(){
//     try{
//         const inputKeyword = document.querySelector('.input-keyword');
//         const movies = await getMovies(inputKeyword.value);
//         updateUI(movies);       
//     } catch(err){
//         // console.log(err);
//         alert(err);
//     }
// });

// // function pada show cards
// function getMovies(keyword){
//     return fetch('http://www.omdbapi.com/?apikey=22a431b&s=' + keyword)
//          .then(response => { //berikan kondisi, jika error, maka tampilkan pesan error, jika berhasil maka kembalikan response.json() 
//             if(response.ok === false){
//                 throw new Error(response.statusText);
//             }
//             return response.json();
//          })
//          .then(response => {
//             if(response.Response === 'False'){
//                 throw new Error(response.Error);
//             }
//             return response.Search;
//          } );
//  }
 
//  function updateUI(movies){
//      let cards = '';
//      movies.map(m => {
//          cards += showCards(m);
//          const moviesContainer = document.querySelector('.movies-container');
//          moviesContainer.innerHTML = cards;
//      });
//  }
//  // akhir function show cards
 

// // ketika button show detail di click
// document.addEventListener('click',async function(e){
//     if(e.target.classList.contains('detail-movies-button')){
//         const imdbID = e.target.dataset.imdbid;
//         const moviesDetail = await getDetailMovies(imdbID);
//         updateDetailUI(moviesDetail);
//     }
// })

// // function pada show detail movies
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



const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){
    try{
        const inputKeyword = document.querySelector('.input-keyword').value;
        const movies = await getMovies(inputKeyword);
        updateUI(movies);
    }catch(err){
       alert(err)
    }
    
})

document.addEventListener('click',async function(event){
    if(event.target.classList.contains('detail-movies-button')){
        try {
            const imdbID = event.target.dataset.imdbid;
            const idMovies = await getDetailMovies(imdbID);
            updateUIDetail(idMovies);
        } catch(err){
            alert(err)
        }
    }
})


function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=22a431b&s=' + keyword)
        .then(response => {
            if(response.ok === false){
                throw new Error(response.statusText)
            }
            return response.json();
        })
        .then(response => {
            if(response.Response === "False"){
                throw new Error(response.Error)
            }
            return response.Search;
        })
}
        

function updateUI(movies){
    let cards = '';
    movies.forEach(m => {
        cards += showCards(m)
    })
    const moviesContainer = document.querySelector('.movies-container');
    moviesContainer.innerHTML = cards;
}


function getDetailMovies(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=22a431b&i=' + imdbid)
        .then(response => {
            if(response.ok === false){
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(m => m);
}

function updateUIDetail(m){
    m = showDetailmovies(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = m;
}