
// keywords
const searchBtn = document.querySelector('.search-button');
searchBtn.addEventListener('click', function(){
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=22a431b&s=' + inputKeyword.value)
        .then(resolve => resolve.json())
        .then(resolve => {
            const movies = resolve.Search;
            let cards = '';
            movies.map(m => {
                cards += showCards(m);
                const moviesContainer = document.querySelector('.movies-container');
                moviesContainer.innerHTML = cards;
            });

            // ketika tombol show di-click
            const showButton = document.querySelectorAll('.detail-movies-button');
            showButton.forEach(s => {
                s.addEventListener('click', function(){
                    const imdbID = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=22a431b&i=' + imdbID)
                        .then(resolve => resolve.json())
                        .then(m => {
                            let detailMovies = showDetailmovies(m);
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = detailMovies;
                        })
                        .catch(reject => console.log(reject));  
                });
            }); 
        })
        .catch(reject => console.log(reject));
    });






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

