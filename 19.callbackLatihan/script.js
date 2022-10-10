$('.search-button').on('click', function(){ //jika tombol search-button ditekan , maka lakukan sesuatu, ambil data dari input-keyword dan ambil val().

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=22a431b&s=' + $('.input-keyword').val(), 
        success: (result) => {
            let movies = result.Search;
            let cards = '';
            movies.forEach(m => {
                cards += showCards(m);
            });
            $('.movies').html(cards);
    
            // modal detal movies
            $('.detail-movies-button').on('click', function(){
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=22a431b&i=' + $(this).data('imdbid'),
                    success: m => {
                        let modalDetailMovies = detailMovies(m);
                        $('.modal-body').html(modalDetailMovies);
                    },
                    error: e => {
                        console.log(e.responseText);
                    }
                });
            });
            
        },
    });

});

function showCards(m){
    return `<div class="col-md-4 my-5"> <!-- my (jml movies 11 = md-4, 11/4 = 3, jadi per baris 3 movies, sedangkan margin sumbu y =5) -->
    <div class="card">
        <img src="${m.Poster}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${m.Title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
          <a href="#" class="btn btn-primary detail-movies-button" data-toggle="modal" data-target="#detailMovies" data-imdbid="${m.imdbID}">Show Details</a>   
          <!--tambahkan kedaalam button dan ganti data target-nya dengan nama bebas, dan samakan id-nya dihalaman html(data-toggle="modal" data-target="#exampleModal")-->
        </div>
      </div>
</div>`;
}


function detailMovies(m){
    return `<div class="container">
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

