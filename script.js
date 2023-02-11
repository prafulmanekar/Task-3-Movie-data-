const searchTerm = document.getElementById('searchTerm');
const searchButton = document.getElementById('searchButton');
const result = document.getElementById('result');

searchButton.addEventListener('click', function() {
  const term = searchTerm.value;
  const url = `http://www.omdbapi.com/?apikey=e6aeca00&t=${term}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      result.innerHTML = `
        <img src="http://img.omdbapi.com/?apikey=e6aeca00&i=${data.imdbID}" alt="${data.Title}"  />
        <p>Title: ${data.Title}</p>
        <p>Year: ${data.Year}</p>
        <p>IMDB Rating: ${data.imdbRating}</p>
        <p>Cast: ${data.Actors}</p>
        <p>Director: ${data.Director}</p>
      `;
    });
});
