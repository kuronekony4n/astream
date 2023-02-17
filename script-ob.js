const _0x180ae6 = _0x2c0f;
(function(_0x4ab55a, _0x2df3cb) { const _0x564e20 = _0x2c0f,
        _0x46f84a = _0x4ab55a(); while (!![]) { try { const _0x26d543 = parseInt(_0x564e20(0xcd)) / 0x1 + parseInt(_0x564e20(0xd7)) / 0x2 * (-parseInt(_0x564e20(0x10b)) / 0x3) + -parseInt(_0x564e20(0xde)) / 0x4 + -parseInt(_0x564e20(0x110)) / 0x5 + parseInt(_0x564e20(0xe0)) / 0x6 * (parseInt(_0x564e20(0x113)) / 0x7) + parseInt(_0x564e20(0x11a)) / 0x8 + -parseInt(_0x564e20(0x10d)) / 0x9 * (-parseInt(_0x564e20(0xc8)) / 0xa); if (_0x26d543 === _0x2df3cb) break;
            else _0x46f84a['push'](_0x46f84a['shift']()); } catch (_0x222c53) { _0x46f84a['push'](_0x46f84a['shift']()); } } }(_0x2e6f, 0xaf487));
const queryInput = document['getElementById']('queryInput'),
    homeBtn = document['getElementById'](_0x180ae6(0xdd)),
    searchBtn = document['getElementById'](_0x180ae6(0xf5)),
    recentBtn = document[_0x180ae6(0xdf)](_0x180ae6(0x118)),
    resultContainer = document[_0x180ae6(0xdf)](_0x180ae6(0x104)),
    animeInfoContainer = document[_0x180ae6(0xdf)](_0x180ae6(0x115)),
    watchContainer = document[_0x180ae6(0xdf)](_0x180ae6(0xe6)),
    mainLoading = document[_0x180ae6(0xdf)](_0x180ae6(0xee)),
    pageTitle = document[_0x180ae6(0xdf)](_0x180ae6(0x11b)),
    videoPlayer = document['getElementById']('player'),
    statsFrame = document[_0x180ae6(0xdf)](_0x180ae6(0xf8));
let obf = 'obfuscator.io',
    htmlen = _0x180ae6(0x101);
var youtubeLinks = ['https://www.youtube.com/embed/3yOVIxOHiaw', _0x180ae6(0x123), 'https://www.youtube.com/embed/S7W135mNveI', _0x180ae6(0xd5), _0x180ae6(0xe2), 'https://www.youtube.com/embed/Wi6tTATXnaw', _0x180ae6(0x106), _0x180ae6(0xcc), 'https://www.youtube.com/embed/uwwU55zBYlQ'],
    randomLink = youtubeLinks[Math['floor'](Math[_0x180ae6(0xe3)]() * youtubeLinks[_0x180ae6(0x10c)])];
videoPlayer[_0x180ae6(0xce)] = randomLink;

function updateUrl(_0x91269f) { const _0x4a3434 = _0x180ae6;
    window['history'][_0x4a3434(0xd6)]({}, '', _0x91269f); }
searchBtn['addEventListener'](_0x180ae6(0xfe), async function() { const _0xfc71a6 = _0x180ae6;
    animeInfoContainer[_0xfc71a6(0x119)]['display'] = _0xfc71a6(0xca), resultContainer[_0xfc71a6(0x119)]['display'] = _0xfc71a6(0x117), mainLoading[_0xfc71a6(0x119)][_0xfc71a6(0xc7)] = _0xfc71a6(0x117), pageTitle[_0xfc71a6(0xe5)] = _0xfc71a6(0xf7), recentBtn[_0xfc71a6(0x119)][_0xfc71a6(0xc7)] = _0xfc71a6(0xca), resultContainer['innerHTML'] = '', updateUrl(_0xfc71a6(0xe7)); const _0x16d46a = queryInput[_0xfc71a6(0xcf)];
    statsFrame[_0xfc71a6(0xce)] = _0xfc71a6(0x11d) + _0x16d46a + _0xfc71a6(0x109); const _0x5bff71 = await fetch('https://api.consumet.org/anime/gogoanime/' + _0x16d46a + _0xfc71a6(0xed)),
        _0x347e5c = await _0x5bff71[_0xfc71a6(0x107)]();
    displayResults(_0x347e5c[_0xfc71a6(0xd1)]); });
async function getSearchByEnter(_0xf90537) { const _0x3f3b9c = _0x180ae6; if (_0xf90537[_0x3f3b9c(0xf6)] === 0xd) { animeInfoContainer[_0x3f3b9c(0x119)][_0x3f3b9c(0xc7)] = _0x3f3b9c(0xca), resultContainer[_0x3f3b9c(0x119)][_0x3f3b9c(0xc7)] = _0x3f3b9c(0x117), mainLoading['style'][_0x3f3b9c(0xc7)] = 'flex', pageTitle[_0x3f3b9c(0xe5)] = _0x3f3b9c(0xf7), recentBtn['style'][_0x3f3b9c(0xc7)] = _0x3f3b9c(0xca), resultContainer[_0x3f3b9c(0xe5)] = '', updateUrl(_0x3f3b9c(0xe7)); const _0x47c2df = queryInput[_0x3f3b9c(0xcf)];
        statsFrame[_0x3f3b9c(0xce)] = _0x3f3b9c(0x11d) + _0x47c2df + '&type=Search'; const _0x1eb407 = await fetch('https://api.consumet.org/anime/gogoanime/' + _0x47c2df + _0x3f3b9c(0xed)),
            _0x25de31 = await _0x1eb407[_0x3f3b9c(0x107)]();
        displayResults(_0x25de31['results']); } }
homeBtn['addEventListener'](_0x180ae6(0xfe), function() { const _0x3e5424 = _0x180ae6;
    window[_0x3e5424(0x122)][_0x3e5424(0xf4)] = '/'; }), recentBtn['addEventListener']('click', async function() { const _0x2b31af = _0x180ae6;
    resultContainer[_0x2b31af(0x119)]['display'] = _0x2b31af(0x117), mainLoading[_0x2b31af(0x119)][_0x2b31af(0xc7)] = 'flex', recentBtn[_0x2b31af(0x119)]['display'] = 'none'; const _0x59d2f2 = await fetch(_0x2b31af(0x11e)),
        _0x3c9f5d = await _0x59d2f2[_0x2b31af(0x107)]();
    displayRecent(_0x3c9f5d[_0x2b31af(0xd1)]); });

function _0x2c0f(_0xcf988a, _0xb46d7c) { const _0x2e6fa4 = _0x2e6f(); return _0x2c0f = function(_0x2c0ff4, _0x19e7b2) { _0x2c0ff4 = _0x2c0ff4 - 0xc6; let _0x10a59c = _0x2e6fa4[_0x2c0ff4]; return _0x10a59c; }, _0x2c0f(_0xcf988a, _0xb46d7c); }

function _0x2e6f() { const _0x16667a = ['7717344YxOxrt', 'title', 'videoTitle', 'stats.html?data=', 'https://api.consumet.org/anime/gogoanime/recent-episodes', '<div\x20id=\x22releaseYear\x22>', '<span>Dukung\x20website\x20ini\x20dengan\x20cara\x20berdonasi\x20mulai\x20dari\x20Rp1000!</span><a\x20href=\x27https://sociabuzz.com/willydev/tribe\x27\x20target=\x27_blank\x27\x20title=\x27Thank\x20you!\x27>DONASI</a>', 'createElement', 'location', 'https://www.youtube.com/embed/nfAPAvGGH4g', '<span>Support\x20this\x20website\x20by\x20making\x20a\x20donation\x20starting\x20from\x201$!</span><a\x20href=\x27https://sociabuzz.com/willydev/tribe\x27\x20target=\x27_blank\x27\x20title=\x27Thank\x20you!\x27>DONATE</a>', 'display', '10ovsvJe', '<br><br>', 'none', 'quality', 'https://www.youtube.com/embed/PgAswqBtrUk', '1058673ALBmLD', 'src', 'value', '<div\x20id=\x22tableName\x22>', 'results', 'episodes', 'https://api.consumet.org/anime/gogoanime/info/', 'videoDescription', 'https://www.youtube.com/embed/X1M69l7ZGlw', 'pushState', '1138528gtzgrY', 'type', 'releaseDate', 'anime', 'selectElement', 'block', 'homeBtn', '4239748NfyRkS', 'getElementById', '6jufUxF', 'episodeButton', 'https://www.youtube.com/embed/IUtFAblCT1o', 'random', 'div', 'innerHTML', 'qualityContainer', 'index.html', 'https://api.consumet.org/anime/gogoanime/watch/', 'url', '\x20-\x20kuronekony4n', 'search', 'Released:\x20', '?page=1', 'mainLoading', 'Dir\x22>', 'appendChild', 'spanDonate', 'sort', '(Dub)', 'href', 'searchBtn', 'keyCode', 'astream\x20-\x20kuronekony4n', 'statsFrame', 'index.html?anime=', '<div\x20id=\x22releaseYear\x22>Eps\x20', 'replace', 'episodeNumber', '</div>', 'click', 'addEventListener', 'sources', 'html-code-generator.com/tools/html-encrypt-decrypt', 'description', 'serverSelect', 'resultContainer', 'toLowerCase', 'https://www.youtube.com/embed/5xkzzO5nNow', 'json', 'forEach', '&type=Search', 'get', '3YfKNrs', 'length', '12096504dSSdfm', 'pill-button', 'row', '5589640UAGEGM', 'status', 'number', '683837AdhGEb', 'Episode\x20', 'animeInfoContainer', 'subOrDub', 'flex', 'recentBtn', 'style'];
    _0x2e6f = function() { return _0x16667a; }; return _0x2e6f(); }

function displayRecent(_0x36deab) { const _0x1bdc77 = _0x180ae6;
    resultContainer[_0x1bdc77(0xe5)] = '', mainLoading['style']['display'] = 'none', _0x36deab[_0x1bdc77(0x108)](_0x4155a5 => { const _0x3600e3 = _0x1bdc77,
            _0xd2900e = document[_0x3600e3(0x121)]('div');
        _0xd2900e['className'] = _0x3600e3(0x10f), subType = '<div\x20class=\x22subDir\x22>SUB</div>', episodeNumber = '' + _0x4155a5[_0x3600e3(0xfc)], !episodeNumber[_0x3600e3(0x10c)] && (episodeNumber = '???'), episodeNumber = _0x3600e3(0xfa) + episodeNumber + _0x3600e3(0xfd), tableName = '<div\x20id=\x22tableName\x22>' + _0x4155a5[_0x3600e3(0x11b)][_0x3600e3(0xfb)]('(Dub)', '') + _0x3600e3(0xfd), resultTitle = subType + '\x20' + tableName + '\x20' + episodeNumber, _0xd2900e[_0x3600e3(0xe5)] = resultTitle, _0xd2900e['addEventListener']('click', async function() { const _0x374e66 = _0x3600e3;
            mainLoading[_0x374e66(0x119)][_0x374e66(0xc7)] = _0x374e66(0x117), resultContainer[_0x374e66(0x119)][_0x374e66(0xc7)] = _0x374e66(0xca), updateUrl(_0x374e66(0xf9) + _0x4155a5['id']); const _0x576717 = await fetch(_0x374e66(0xd3) + _0x4155a5['id']),
                _0x2524fd = await _0x576717[_0x374e66(0x107)]();
            displayAnimeInfo(_0x2524fd); }), resultContainer[_0x3600e3(0xf0)](_0xd2900e); }); }

function displayResults(_0x5be3a8) { const _0x5bfebf = _0x180ae6;
    resultContainer['innerHTML'] = '', mainLoading[_0x5bfebf(0x119)][_0x5bfebf(0xc7)] = _0x5bfebf(0xca), _0x5be3a8[_0x5bfebf(0x108)](_0x47f19e => { const _0x3d9bf0 = _0x5bfebf,
            _0x128eaf = document[_0x3d9bf0(0x121)](_0x3d9bf0(0xe4));
        _0x128eaf['className'] = 'row', subType = '<div\x20class=\x22' + _0x47f19e[_0x3d9bf0(0x116)][_0x3d9bf0(0x105)]() + _0x3d9bf0(0xef) + _0x47f19e[_0x3d9bf0(0x116)] + _0x3d9bf0(0xfd), releaseDate = '' + _0x47f19e[_0x3d9bf0(0xd9)][_0x3d9bf0(0xfb)](_0x3d9bf0(0xec), ''), !releaseDate[_0x3d9bf0(0x10c)] && (releaseDate = '???'), releaseDate = _0x3d9bf0(0x11f) + releaseDate + _0x3d9bf0(0xfd), tableName = _0x3d9bf0(0xd0) + _0x47f19e['title']['replace'](_0x3d9bf0(0xf3), '') + _0x3d9bf0(0xfd), resultTitle = subType + '\x20' + tableName + '\x20' + releaseDate, _0x128eaf['innerHTML'] = resultTitle, _0x128eaf[_0x3d9bf0(0xff)](_0x3d9bf0(0xfe), async function() { const _0x45efa4 = _0x3d9bf0;
            mainLoading[_0x45efa4(0x119)][_0x45efa4(0xc7)] = _0x45efa4(0x117), resultContainer[_0x45efa4(0x119)][_0x45efa4(0xc7)] = 'none', updateUrl(_0x45efa4(0xf9) + _0x47f19e['id']); const _0x58c2c7 = await fetch(_0x45efa4(0xd3) + _0x47f19e['id']),
                _0x5c6b41 = await _0x58c2c7[_0x45efa4(0x107)]();
            displayAnimeInfo(_0x5c6b41); }), resultContainer[_0x3d9bf0(0xf0)](_0x128eaf); }); }
let urlParams = new URLSearchParams(window[_0x180ae6(0x122)][_0x180ae6(0xeb)]),
    animeParam = urlParams[_0x180ae6(0x10a)](_0x180ae6(0xda));
fetchAnimeInfo();
async function fetchAnimeInfo() { const _0x189287 = _0x180ae6; if (typeof animeParam !== 'undefined' && animeParam !== null) { recentBtn[_0x189287(0x119)]['display'] = _0x189287(0xca), mainLoading[_0x189287(0x119)][_0x189287(0xc7)] = _0x189287(0x117); const _0x5084cb = await fetch(_0x189287(0xd3) + animeParam),
            _0x477ddf = await _0x5084cb[_0x189287(0x107)]();
        displayAnimeInfo(_0x477ddf); } }

function displayAnimeInfo(_0x3f5def) { const _0x44a5ab = _0x180ae6;
    animeInfoContainer[_0x44a5ab(0x119)][_0x44a5ab(0xc7)] = 'block', resultContainer['style'][_0x44a5ab(0xc7)] = 'none', watchContainer[_0x44a5ab(0x119)][_0x44a5ab(0xc7)] = _0x44a5ab(0xca), mainLoading[_0x44a5ab(0x119)]['display'] = _0x44a5ab(0xca); const _0x3cf3c6 = document[_0x44a5ab(0xdf)](_0x44a5ab(0x11c));
    _0x3cf3c6['innerHTML'] = '' + _0x3f5def[_0x44a5ab(0x11b)], pageTitle[_0x44a5ab(0xe5)] = _0x3f5def['title'][_0x44a5ab(0x105)]() + _0x44a5ab(0xea), statsFrame[_0x44a5ab(0xce)] = 'stats.html?data=' + _0x3f5def[_0x44a5ab(0x11b)] + '&type=Watch'; const _0x17d6c5 = document[_0x44a5ab(0xdf)]('status');
    _0x17d6c5[_0x44a5ab(0xe5)] = '' + _0x3f5def[_0x44a5ab(0x111)]; const _0x936394 = document[_0x44a5ab(0xdf)]('subordub');
    _0x936394[_0x44a5ab(0xe5)] = '' + _0x3f5def[_0x44a5ab(0x116)]; const _0x42adc5 = document[_0x44a5ab(0xdf)](_0x44a5ab(0xd8));
    _0x42adc5['innerHTML'] = '' + _0x3f5def[_0x44a5ab(0xd8)]; const _0x582c36 = document[_0x44a5ab(0xdf)](_0x44a5ab(0xd4));
    _0x582c36[_0x44a5ab(0xe5)] = '' + _0x3f5def[_0x44a5ab(0x102)]['replace']('\x0a', _0x44a5ab(0xc9)); const _0x3c5902 = document['getElementById']('selectElement');
    _0x3c5902['innerHTML'] = '', _0x3f5def['episodes'][_0x44a5ab(0xf2)]((_0x283d52, _0x214c50) => _0x214c50['number'] - _0x283d52[_0x44a5ab(0x112)]), _0x3f5def[_0x44a5ab(0xd2)][_0x44a5ab(0x108)](_0x364233 => { const _0x5594e4 = _0x44a5ab,
            _0x16000c = document[_0x5594e4(0x121)]('option');
        _0x16000c['value'] = _0x364233['id'], _0x16000c[_0x5594e4(0xe5)] = _0x5594e4(0x114) + _0x364233['number'], _0x3c5902[_0x5594e4(0xf0)](_0x16000c); }); const _0x391ffd = document[_0x44a5ab(0xdf)](_0x44a5ab(0xe1));
    _0x391ffd[_0x44a5ab(0xff)]('click', async function() { const _0x964243 = _0x44a5ab,
            _0x5b7a38 = document[_0x964243(0xdf)](_0x964243(0x103));
        _0x5b7a38[_0x964243(0xe5)] = '', watchContainer[_0x964243(0x119)]['display'] = _0x964243(0xca), mainLoading['style'][_0x964243(0xc7)] = 'flex'; const _0x3f8b01 = document[_0x964243(0xdf)](_0x964243(0xdb))['value'],
            _0x23cabc = await fetch(_0x964243(0xe8) + _0x3f8b01),
            _0x28a3fd = await _0x23cabc[_0x964243(0x107)]();
        displayWatchInfo(_0x28a3fd); }); }

function displayWatchInfo(_0x338079) { const _0x4790d3 = _0x180ae6;
    watchContainer[_0x4790d3(0x119)][_0x4790d3(0xc7)] = _0x4790d3(0xdc), mainLoading[_0x4790d3(0x119)][_0x4790d3(0xc7)] = _0x4790d3(0xca); const _0x315256 = document[_0x4790d3(0xdf)]('downloadButton');
    _0x315256['href'] = _0x338079['download']; const _0xb5f4b8 = document[_0x4790d3(0xdf)](_0x4790d3(0x103));
    _0xb5f4b8[_0x4790d3(0xe5)] = '', _0x338079[_0x4790d3(0x100)][_0x4790d3(0x108)](_0x182636 => { const _0x6fdc5f = _0x4790d3,
            _0x1015e7 = document[_0x6fdc5f(0x121)]('button');
        _0x1015e7['value'] = _0x182636[_0x6fdc5f(0xe9)], _0x1015e7['className'] = _0x6fdc5f(0x10e); let _0x5534a5 = _0x182636[_0x6fdc5f(0xcb)]['replace']('default', 'auto');
        _0x1015e7['innerHTML'] = '' + _0x5534a5, _0xb5f4b8['appendChild'](_0x1015e7); }); const _0x5dd4b9 = document['querySelectorAll']('.pill-button'); for (let _0x21cd9b = 0x0; _0x21cd9b < _0x5dd4b9[_0x4790d3(0x10c)]; _0x21cd9b++) { _0x5dd4b9[_0x21cd9b]['addEventListener'](_0x4790d3(0xfe), function() { const _0x128921 = _0x4790d3,
                _0x30fd83 = this[_0x128921(0xcf)]; let _0x4927fc = _0x30fd83;
            videoPlayer[_0x128921(0xce)] = 'player.html?url=' + _0x4927fc; }); }; }
const spanElement = document[_0x180ae6(0xdf)](_0x180ae6(0xf1));
let contentDonate = [_0x180ae6(0xc6), _0x180ae6(0x120)],
    indexDonate = 0x0;
setInterval(function() { const _0xbe6ef7 = _0x180ae6;
    spanElement['innerHTML'] = contentDonate[indexDonate], indexDonate = (indexDonate + 0x1) % contentDonate[_0xbe6ef7(0x10c)]; }, 0x2710);