const X_RapidAPI_Key = "4953b35761msh0a5f35004b3cd2dp17a0afjsnee960396a6e4";

function fetchMovies(query) {
  const resultsWrapper = document.querySelector("#resultsWrapper");
  var data = "";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": X_RapidAPI_Key,
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${query}`, options)
    .then((response) => response.json())

    .then((response) => {
      const allMovies = response.d;
      console.log(allMovies);

      for (const movie of allMovies) {
        data =
          data +
          `
                <div class="result-item">
                    <img src="${
                      movie.i?.imageUrl ? movie.i?.imageUrl : ""
                    }" alt="" width="200" >
                    <div class="title">${movie.l}</div>
                    <div class="extra">${movie.s}</div>
                    <div class="extra">${movie.y ? movie.y : "-"}</div>
                </div>
        `;
      }

      resultsWrapper.innerHTML = data;
    })

    .catch((err) => console.error(err));
}

const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

fetchMovies("superman"); //default parameter

searchBtn.addEventListener("click", function () {
  const query = searchBar.value;
  fetchMovies(query);
});
