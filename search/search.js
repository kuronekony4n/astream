const searchInput = document.getElementById("search");
const animeList = document.getElementById("resultContainer");
const animecount = document.getElementById("animecount");

const searchanime = async (searchBox) => {
  const res = await fetch("/search/data/anime.json");
  const animedata = await res.json();

  let fits = animedata.filter((anime) => {
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

fetch('/search/data/anime.json')
  .then(response => response.json())
  .then(data => {
    const count = Object.keys(data).length;
    console.log('Number of objects:', count);
    animecount.innerText = count;
  })
  .catch(error => console.error('Error fetching data:', error));
