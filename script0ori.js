const queryInput = document.getElementById("queryInput");
const homeBtn = document.getElementById("homeBtn");
const searchBtn = document.getElementById("searchBtn");
const recentBtn = document.getElementById("recentBtn");
const resultContainer = document.getElementById("resultContainer");
const animeInfoContainer = document.getElementById("animeInfoContainer");
const watchContainer = document.getElementById("qualityContainer");
const mainLoading = document.getElementById("mainLoading");
const pageTitle = document.getElementById("title");
const videoPlayer = document.getElementById("player")
const statsFrame = document.getElementById("statsFrame")

const apiEndpoint = "apiconsumet.vercel.app";

// Randomly set player iframes to these video onLoad
var youtubeLinks = [
    "https://www.youtube.com/embed/3yOVIxOHiaw",
    "https://www.youtube.com/embed/nfAPAvGGH4g",
    "https://www.youtube.com/embed/S7W135mNveI",
    "https://www.youtube.com/embed/X1M69l7ZGlw",
    "https://www.youtube.com/embed/IUtFAblCT1o",
    "https://www.youtube.com/embed/Wi6tTATXnaw",
    "https://www.youtube.com/embed/5xkzzO5nNow",
    "https://www.youtube.com/embed/PgAswqBtrUk",
    "https://www.youtube.com/embed/uwwU55zBYlQ"
];
var randomLink = youtubeLinks[Math.floor(Math.random() * youtubeLinks.length)];
videoPlayer.src = randomLink;

// Check URL parameters
function updateUrl(newUrl) {
    window.history.pushState({}, '', newUrl);
}

// Check if the site is visited using android app
let urlParams = new URLSearchParams(window.location.search);
let appParam = urlParams.get('app');
if (appParam == 'true') {
    const playerContainer = document.getElementById("playerContainer");
    playerContainer.style.display = "none";

    const footerContainer = document.getElementById("footerContainer");
    footerContainer.style.display = "none";
}

// Detect if searchBtn is clicked
searchBtn.addEventListener("click", async function () {
    animeInfoContainer.style.display = `none`;
    resultContainer.style.display = `flex`;
    mainLoading.style.display = "flex";
    pageTitle.innerHTML = `astream - kuronekony4n`
    recentBtn.style.display = "none";
    resultContainer.innerHTML = "";

    const query = queryInput.value;
    statsFrame.src = `stats.html?data=${query}&type=Search`;
    const res = await fetch(`https://${apiEndpoint}/anime/gogoanime/${query}?page=1`);
    const data = await res.json();
    displayResults(data.results);
});

// Confirm search by using an ENTER button
async function getSearchByEnter(event) {
    if (event.keyCode === 13) {
        animeInfoContainer.style.display = `none`;
        resultContainer.style.display = `flex`;
        mainLoading.style.display = "flex";
        pageTitle.innerHTML = `astream - kuronekony4n`
        recentBtn.style.display = "none";
        resultContainer.innerHTML = "";

        const query = queryInput.value;
        statsFrame.src = `stats.html?data=${query}&type=Search`;
        const res = await fetch(`https://${apiEndpoint}/anime/gogoanime/${query}?page=1`);
        const data = await res.json();
        displayResults(data.results);
    }
}

// Detect if homeBtn is clicked
homeBtn.addEventListener("click", function () {
    if (appParam == 'true') {
        window.location.href = "/?app=true";
    } else {
        window.location.href = "/";
    }
});


// Detect if recentBtn is clicked
recentBtn.addEventListener("click", async function () {
    resultContainer.style.display = `flex`;
    mainLoading.style.display = "flex";
    recentBtn.style.display = "none";

    const res = await fetch(`https://${apiEndpoint}/anime/gogoanime/recent-episodes`);
    const data = await res.json();
    displayRecent(data.results);
});


// Display Recent Result
function displayRecent(results) {
    resultContainer.innerHTML = "";
    mainLoading.style.display = "none";

    results.forEach(result => {
        const resultDiv = document.createElement("div");
        resultDiv.className = "row";
        subType = `<div class="subDir">SUB</div>`;
        episodeNumber = `${result.episodeNumber}`;
        if (!episodeNumber.length) {
            episodeNumber = '???';
        }
        episodeNumber = `<div id="releaseYear">Eps ${episodeNumber}</div>`
        tableName = `<div id="tableName">${result.title.replace("(Dub)", "")}</div>`
        resultTitle = `${subType} ${tableName} ${episodeNumber}`;
        resultDiv.innerHTML = resultTitle;

        resultDiv.addEventListener("click", async function () {
            mainLoading.style.display = "flex";
            resultContainer.style.display = `none`;

            const res = await fetch(`https://${apiEndpoint}/anime/gogoanime/info/${result.id}`);
            const data = await res.json();
            displayAnimeInfo(data);
        });
        resultContainer.appendChild(resultDiv);
    });
}

// Display Search Result
function displayResults(results) {
    resultContainer.innerHTML = "";
    mainLoading.style.display = "none";

    results.forEach(result => {
        const resultDiv = document.createElement("div");
        resultDiv.className = "row";
        subType = `<div class="${result.subOrDub.toLowerCase()}Dir">${result.subOrDub}</div>`;
        releaseDate = `${result.releaseDate.replace("Released: ", "")}`;
        if (!releaseDate.length) {
            releaseDate = '???';
        }
        releaseDate = `<div id="releaseYear">${releaseDate}</div>`
        tableName = `<div id="tableName">${result.title.replace("(Dub)", "")}</div>`
        resultTitle = `${subType} ${tableName} ${releaseDate}`;
        resultDiv.innerHTML = resultTitle;

        resultDiv.addEventListener("click", async function () {
            mainLoading.style.display = "flex";
            resultContainer.style.display = `none`;

            const res = await fetch(`https://${apiEndpoint}/anime/gogoanime/info/${result.id}`);
            const data = await res.json();
            displayAnimeInfo(data);
        });
        resultContainer.appendChild(resultDiv);
    });
}

//Check if theres Anime Parameters
let animeParam = urlParams.get('anime');
fetchAnimeInfo()
async function fetchAnimeInfo() {
    if (typeof animeParam !== 'undefined' && animeParam !== null) {
        recentBtn.style.display = "none";
        mainLoading.style.display = "flex";

        const res = await fetch(`https://${apiEndpoint}/anime/gogoanime/info/${animeParam}`);
        const data = await res.json();
        displayAnimeInfo(data);
    }
}


// Display Anime Info
function displayAnimeInfo(data) {
    animeInfoContainer.style.display = `block`;
    resultContainer.style.display = `none`;
    watchContainer.style.display = "none";
    mainLoading.style.display = "none";

    const title = document.getElementById("videoTitle");
    title.innerHTML = `${data.title}`;
    pageTitle.innerHTML = `${data.title.toLowerCase()} - kuronekony4n`

    statsFrame.src = `stats.html?data=${data.title}&type=Watch`;

    const status = document.getElementById("status");
    status.innerHTML = `${data.status}`;

    const subordub = document.getElementById("subordub");
    subordub.innerHTML = `${data.subOrDub}`;

    const type = document.getElementById("type");
    type.innerHTML = `${data.type}`;

    const description = document.getElementById("videoDescription");
    description.innerHTML = `${data.description.replace("\n", "<br><br>")}`;

    const episodeSelect = document.getElementById("selectElement");
    episodeSelect.innerHTML = "";

    data.episodes.sort((a, b) => b.number - a.number);
    data.episodes.forEach((episode) => {
        const option = document.createElement("option");
        option.value = episode.id;
        option.innerHTML = `Episode ${episode.number}`;
        episodeSelect.appendChild(option);
    });

    const watchBtn = document.getElementById("episodeButton");
    watchBtn.addEventListener("click", async function () {
        const serverSelect = document.getElementById("serverSelect");
        serverSelect.innerHTML = "";
        watchContainer.style.display = "none";
        mainLoading.style.display = "flex";

        const episodeId = document.getElementById("selectElement").value;
        const res = await fetch(`https://${apiEndpoint}/anime/gogoanime/watch/${episodeId}`);
        const episodeData = await res.json();
        displayWatchInfo(episodeData);
    });
}

// Display Episode List
function displayWatchInfo(episodeData) {
    watchContainer.style.display = "block";
    mainLoading.style.display = "none";

    const download_button = document.getElementById("downloadButton");
    download_button.href = episodeData.download;

    const serverSelect = document.getElementById("serverSelect");
    serverSelect.innerHTML = "";
    episodeData.sources.forEach((stream) => {
        const option = document.createElement("button");
        option.value = stream.url;
        option.className = "pill-button";
        let streamquality = stream.quality.replace("default", "auto");
        option.innerHTML = `${streamquality}`;
        serverSelect.appendChild(option);
    });

    const watchBtn = document.querySelectorAll(".pill-button");
    for (let i = 0; i < watchBtn.length; i++) {
        watchBtn[i].addEventListener("click", function () {
            const serverUrl = this.value;
            let proxyweb = 'https://anime-w.orewa.workers.dev/'
            let selectedServer = serverUrl.replace('https://', '');
            selectedServer = selectedServer.replace('http://', '');
            selectedServer = proxyweb + selectedServer;

            if (appParam == 'true') {
                updateUrl(`?playInApp=${selectedServer}`);
            } else {
                videoPlayer.src = `/player/?url=${selectedServer}`;
            }
        });
    };
}

// Donate Alert
const spanElement = document.getElementById("spanDonate");
let contentDonate = [
    "<span>Support this website by making a donation starting from 1$!</span><a href='https://sociabuzz.com/willydev/tribe' target='_blank' title='Thank you!'>DONATE</a>",
    "<span>Dukung website ini dengan cara berdonasi mulai dari Rp1000!</span><a href='https://sociabuzz.com/willydev/tribe' target='_blank' title='Thank you!'>DONASI</a>"
];
let indexDonate = 0;
setInterval(function () {
    spanElement.innerHTML = contentDonate[indexDonate];
    indexDonate = (indexDonate + 1) % contentDonate.length;
}, 5000);