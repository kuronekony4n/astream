const queryInput = document.getElementById("queryInput");
const homeBtn = document.getElementById("homeBtn");
const searchBtn = document.getElementById("searchBtn");
const recentBtn = document.getElementById("recentBtn");
const resultContainer = document.getElementById("animeContainer");
const sresultContainer = document.querySelector(".container-sresult");

const animeInfoContainer = document.getElementById("animeInfoContainer");
const watchContainer = document.getElementById("qualityContainer");
const mainLoading = document.getElementById("mainLoading");
const pageTitle = document.getElementById("title");
const videoPlayer = document.getElementById("player")
const watchBtn = document.getElementById("episodeButton");

var dataTitle;
var dataEpisode;
var dataURL;

const apiEndpoint = "api.consumet.org";

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
const urlParams = new URLSearchParams(window.location.search);
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
    sresultContainer.style.display = `flex`;
    resultContainer.style.display = `grid`;
    mainLoading.style.display = "flex";
    pageTitle.innerHTML = `astream - watch anime`
    recentBtn.style.display = "none";
    resultContainer.innerHTML = "";

    updateUrl(`/`);

    const query = queryInput.value;
    const res = await fetch(`https://${apiEndpoint}/anime/gogoanime/${query}?page=1`);
    const data = await res.json();
    displayResults(data.results);
});

// Confirm search by using an ENTER button
async function getSearchByEnter(event) {
    if (event.keyCode === 13) {
        animeInfoContainer.style.display = `none`;
        sresultContainer.style.display = `flex`;
        resultContainer.style.display = `grid`;
        mainLoading.style.display = "flex";
        pageTitle.innerHTML = `astream - watch anime`
        recentBtn.style.display = "none";
        resultContainer.innerHTML = "";

        updateUrl(`/`);

        const query = queryInput.value;
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
    sresultContainer.style.display = `flex`;
    resultContainer.style.display = `grid`;
    mainLoading.style.display = "flex";
    recentBtn.style.display = "none";

    const res = await fetch(`https://${apiEndpoint}/anime/gogoanime/recent-episodes`);
    const data = await res.json();
    displayRecent(data.results);
});


// Display Recent Result
function displayRecent(results) {
    sresultContainer.style.display = `flex`;
    resultContainer.innerHTML = "";
    mainLoading.style.display = "none";

    results.forEach(result => {
        const resultDiv = document.createElement("a");
        subType = `<div class="subDir">SUB</div>`;
        episodeNumber = `${result.episodeNumber}`;
        if (!episodeNumber.length) {
            episodeNumber = '???';
        }

        resultDiv.innerHTML = `
        <img src="${result.image}" alt="">
        <div class="label">
            <span class="name" title="${result.title.replace("(Dub)", "")}">${result.title.replace("(Dub)", "")}</span>
            <span class="eps">Episode ${episodeNumber} (Subbed)</span>
        </div>
        `;

        resultDiv.addEventListener("click", async function () {
            mainLoading.style.display = "flex";
            resultContainer.style.display = `none`;

            updateUrl(`/?anime=${result.id}`);
            dataURL = `${result.id}`

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
    sresultContainer.style.display = `flex`;
    mainLoading.style.display = "none";

    results.forEach(result => {
        const resultDiv = document.createElement("a");
        subType = `<div class="${result.subOrDub.toLowerCase()}Dir">${result.subOrDub}</div>`;
        releaseDate = `${result.releaseDate.replace("Released: ", "")}`;
        if (!releaseDate.length) {
            releaseDate = '???';
        }
        resultDiv.innerHTML = `
        <img src="${result.image}" alt="">
        <div class="label">
            <span class="name" title="${result.title.replace("(Dub)", "")}">${result.title.replace("(Dub)", "")}</span>
            <span class="eps">Year ${releaseDate} (${result.subOrDub.charAt(0).toUpperCase() + result.subOrDub.slice(1)}bed)</span>
        </div>
        `;

        resultDiv.addEventListener("click", async function () {
            mainLoading.style.display = "flex";
            resultContainer.style.display = `none`;

            updateUrl(`/?anime=${result.id}`);
            dataURL = `${result.id}`

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

        dataURL = `${animeParam}`

        const res = await fetch(`https://${apiEndpoint}/anime/gogoanime/info/${animeParam}`);
        const data = await res.json();
        displayAnimeInfo(data);
    }
}


// Display Anime Info
function displayAnimeInfo(data) {
    animeInfoContainer.style.display = `block`;
    resultContainer.style.display = `none`;
    sresultContainer.style.display = `none`;
    watchContainer.style.display = "none";
    mainLoading.style.display = "none";

    const title = document.getElementById("videoTitle");
    title.innerHTML = `${data.title}`;
    dataTitle = `${data.title}`;
    pageTitle.innerHTML = `${data.title.toLowerCase()} - astream`

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

    watchBtn.addEventListener("click", async function () {
        const serverSelect = document.getElementById("serverSelect");
        serverSelect.innerHTML = "";
        watchContainer.style.display = "none";
        mainLoading.style.display = "flex";

        var selectElement = document.getElementById("selectElement");
        var selectedOption = selectElement.options[selectElement.selectedIndex];
        dataEpisode = selectedOption.innerText;
        addHistory();

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

    const resoBtn = document.querySelectorAll(".pill-button");
    for (let i = 0; i < resoBtn.length; i++) {
        resoBtn[i].addEventListener("click", function () {
            const serverUrl = this.value;
            let proxyweb = 'https://cute-cyan-millipede-coat.cyclic.app/'
            // let selectedServer = serverUrl.replace('https://', '');
            // selectedServer = selectedServer.replace('http://', '');
            let selectedServer = serverUrl;

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

// Format unicode date to a readable one (** hours ago)
function getTimeDifference(date) {
    const currentDate = new Date();
    const timestamp = new Date(date);
    const difference = currentDate - timestamp;

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    let output;
    if (seconds < 60) {
        output = `${seconds} second${seconds === 1 ? '' : 's'} ago`;
    } else if (minutes < 60) {
        output = `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else if (hours < 24) {
        output = `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (days < 7) {
        output = `${days} day${days === 1 ? '' : 's'} ago`;
    } else if (weeks < 4) {
        output = `${weeks} week${weeks === 1 ? '' : 's'} ago`;
    } else if (months < 12) {
        output = `${months} month${months === 1 ? '' : 's'} ago`;
    } else {
        output = `${years} year${years === 1 ? '' : 's'} ago`;
    }

    return output;
}

// Eps Button Navigation
const epsSelect = document.getElementById('selectElement');
function firstEps() {
    epsSelect.selectedIndex = epsSelect.options.length - 1;
}
function prevEps() {
    if (epsSelect.selectedIndex < epsSelect.options.length - 1) {
        epsSelect.selectedIndex++;
    }
}
function nextEps() {
    if (epsSelect.selectedIndex > 0) {
        epsSelect.selectedIndex--;
    }
}
function lastEps() {
    epsSelect.selectedIndex = 0;
}

// Hiding the Dim
function closeHistory() {
    let dimDiv = document.getElementById('dim');
    dimDiv.style.display = 'none';
}
closeHistory()

function showHistory() {
    let dimDiv = document.getElementById('dim');
    dimDiv.style.display = 'flex';
    historyReload();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}


// Adding a History
function addHistory() {
    let newDate = new Date();

    const notes = {
        date: newDate,
        title: dataTitle + ' ' + dataEpisode,
        url: dataURL
    }

    let local = JSON.parse(localStorage.getItem('history'));

    if (local == null) {
        const arr = [];
        arr.push(notes);
        localStorage.setItem('history', JSON.stringify(arr))
    } else {
        // Check if the number of items in the array is already 50
        if (local.length >= 10) {
            // Remove the oldest item from the array
            local.shift();
        }
        local.push(notes);
        localStorage.setItem('history', JSON.stringify(local))
    }
}

// Reloading the history data
const historyLists = document.getElementById('historyList');
var timedifference;
function historyReload() {
    let array = JSON.parse(localStorage.getItem('history'));

    if (array != null) {
        historyLists.innerHTML = "";
        for (let i = array.length - 1; i >= 0; i--) {
            timedifference = getTimeDifference(array[i].date)
            historyLists.innerHTML += `
            <li>
                <a href="/?anime=${array[i].url}">${array[i].title}</a> 
                <span class="date">- ${timedifference}</span>
            </li>`
        }
    } else {
        historyLists.innerHTML = "History empty"
    }
}

historyReload();

// Clear History
function clearHistory() {
    localStorage.removeItem('history');
    historyReload();
}