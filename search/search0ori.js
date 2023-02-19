const searchInput = document.getElementById("search");
const animeList = document.getElementById("resultContainer");

const searchanime = async (searchBox) => {
  const res = await fetch("https://gist.githubusercontent.com/kuronekony4n/175eb7a21a688ac3280b4681943cd3fc/raw/8921b5adf7b35ba5eae651160e1ca8f2e1961d01/animelist.json");
  const airports = await res.json();

  let fits = airports.filter((anime) => {
    const regex = new RegExp(`^${searchBox}`, "gi");
    return (
      anime.name.match(regex));
  });

  if (searchBox.length === 0) {
    fits = [];
    animeList.innerHTML = "";
  }

  outputHtml(fits);
};

const outputHtml = (fits) => {
  if (fits.length > 0) {
    const animeFits = fits
      .map(
        (fit) =>
          `<div class="fastsearchrow">
              <a href="/?anime=${fit.url}">${fit.name}</a>
          </div>`
      )
      .join("");
    animeList.innerHTML = animeFits;
  }
};

searchInput.addEventListener("input", () => searchanime(search.value));