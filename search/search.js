const searchInput = document.getElementById("search");
const animeList = document.getElementById("resultContainer");

const searchairport = async (searchBox) => {
  const res = await fetch("https://gist.githubusercontent.com/kuronekony4n/175eb7a21a688ac3280b4681943cd3fc/raw/8921b5adf7b35ba5eae651160e1ca8f2e1961d01/animelist.json");
  const airports = await res.json();

  let fits = airports.filter((airport) => {
    const regex = new RegExp(`^${searchBox}`, "gi");
    return (
      airport.name.match(regex) );
  });

  if (searchBox.length === 0) {
    fits = [];
    animeList.innerHTML = "";
  }

  outputHtml(fits);
};

const outputHtml = (fits) => {
  if (fits.length > 0) {
    const airportFits = fits
      .map(
        (fit) =>
          `<div class="fastsearchrow">
              <a href="/?anime=${fit.url}">${fit.name}</a>
          </div>`
      )
      .join("");
      animeList.innerHTML = airportFits;
  }
};

searchInput.addEventListener("input", () => searchairport(search.value));