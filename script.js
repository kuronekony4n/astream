const _0x183925 = _0x3f4b; (function (_0x2832e9, _0x522b30) { const _0x570e8f = _0x3f4b, _0x2452c3 = _0x2832e9(); while (!![]) { try { const _0x394f13 = -parseInt(_0x570e8f(0x105)) / 0x1 * (parseInt(_0x570e8f(0x114)) / 0x2) + parseInt(_0x570e8f(0xd2)) / 0x3 + -parseInt(_0x570e8f(0xb9)) / 0x4 * (parseInt(_0x570e8f(0xed)) / 0x5) + parseInt(_0x570e8f(0xff)) / 0x6 + -parseInt(_0x570e8f(0xf1)) / 0x7 + -parseInt(_0x570e8f(0xfd)) / 0x8 + -parseInt(_0x570e8f(0xf9)) / 0x9 * (-parseInt(_0x570e8f(0xfb)) / 0xa); if (_0x394f13 === _0x522b30) break; else _0x2452c3['push'](_0x2452c3['shift']()); } catch (_0x504cc9) { _0x2452c3['push'](_0x2452c3['shift']()); } } }(_0xe296, 0xe510f)); function _0x3f4b(_0x22a93a, _0x53ddd1) { const _0xe296c2 = _0xe296(); return _0x3f4b = function (_0x3f4b86, _0x2c2abd) { _0x3f4b86 = _0x3f4b86 - 0xb7; let _0x3a3674 = _0xe296c2[_0x3f4b86]; return _0x3a3674; }, _0x3f4b(_0x22a93a, _0x53ddd1); } const queryInput = document[_0x183925(0xce)](_0x183925(0x10e)), homeBtn = document[_0x183925(0xce)]('homeBtn'), searchBtn = document[_0x183925(0xce)](_0x183925(0xf7)), recentBtn = document[_0x183925(0xce)](_0x183925(0xc0)), resultContainer = document['getElementById'](_0x183925(0xbe)), animeInfoContainer = document[_0x183925(0xce)](_0x183925(0xf2)), watchContainer = document['getElementById'](_0x183925(0xe8)), mainLoading = document[_0x183925(0xce)](_0x183925(0xe2)), pageTitle = document[_0x183925(0xce)](_0x183925(0xdc)), videoPlayer = document[_0x183925(0xce)](_0x183925(0xc7)), statsFrame = document[_0x183925(0xce)](_0x183925(0x11a)), apiEndpoint = _0x183925(0xe4); var youtubeLinks = [_0x183925(0x107), _0x183925(0xf6), _0x183925(0xd9), _0x183925(0xf0), 'https://www.youtube.com/embed/IUtFAblCT1o', _0x183925(0x108), _0x183925(0xbd), _0x183925(0x111), _0x183925(0xd7)], randomLink = youtubeLinks[Math[_0x183925(0x101)](Math['random']() * youtubeLinks[_0x183925(0xc5)])]; videoPlayer[_0x183925(0xca)] = randomLink; function updateUrl(_0x287fe8) { window['history']['pushState']({}, '', _0x287fe8); } let urlParams = new URLSearchParams(window['location'][_0x183925(0xbb)]), appParam = urlParams[_0x183925(0xc2)](_0x183925(0x112)); if (appParam == _0x183925(0xda)) { const playerContainer = document['getElementById']('playerContainer'); playerContainer[_0x183925(0xd1)]['display'] = _0x183925(0xf3); const footerContainer = document[_0x183925(0xce)]('footerContainer'); footerContainer['style'][_0x183925(0x118)] = _0x183925(0xf3); } searchBtn[_0x183925(0xee)](_0x183925(0x100), async function () { const _0xf95fb8 = _0x183925; animeInfoContainer['style']['display'] = _0xf95fb8(0xf3), resultContainer[_0xf95fb8(0xd1)]['display'] = _0xf95fb8(0xc4), mainLoading[_0xf95fb8(0xd1)]['display'] = 'flex', pageTitle[_0xf95fb8(0xfe)] = _0xf95fb8(0x115), recentBtn[_0xf95fb8(0xd1)][_0xf95fb8(0x118)] = _0xf95fb8(0xf3), resultContainer['innerHTML'] = ''; const _0x304f19 = queryInput[_0xf95fb8(0x119)]; statsFrame[_0xf95fb8(0xca)] = _0xf95fb8(0xd6) + _0x304f19 + '&type=Search'; const _0x264243 = await fetch(_0xf95fb8(0x10b) + apiEndpoint + _0xf95fb8(0xe0) + _0x304f19 + _0xf95fb8(0xdd)), _0x1d16c5 = await _0x264243[_0xf95fb8(0xb7)](); displayResults(_0x1d16c5[_0xf95fb8(0x106)]); }); async function getSearchByEnter(_0x328554) { const _0x43b30c = _0x183925; if (_0x328554[_0x43b30c(0x113)] === 0xd) { animeInfoContainer[_0x43b30c(0xd1)][_0x43b30c(0x118)] = 'none', resultContainer[_0x43b30c(0xd1)][_0x43b30c(0x118)] = _0x43b30c(0xc4), mainLoading[_0x43b30c(0xd1)][_0x43b30c(0x118)] = _0x43b30c(0xc4), pageTitle['innerHTML'] = 'astream\x20-\x20kuronekony4n', recentBtn[_0x43b30c(0xd1)][_0x43b30c(0x118)] = 'none', resultContainer[_0x43b30c(0xfe)] = ''; const _0x5bf1ab = queryInput[_0x43b30c(0x119)]; statsFrame['src'] = 'stats.html?data=' + _0x5bf1ab + _0x43b30c(0x109); const _0x2257ed = await fetch(_0x43b30c(0x10b) + apiEndpoint + _0x43b30c(0xe0) + _0x5bf1ab + _0x43b30c(0xdd)), _0x58657c = await _0x2257ed[_0x43b30c(0xb7)](); displayResults(_0x58657c[_0x43b30c(0x106)]); } } homeBtn[_0x183925(0xee)]('click', function () { const _0xdc25d3 = _0x183925; appParam == _0xdc25d3(0xda) ? window[_0xdc25d3(0xeb)][_0xdc25d3(0xcd)] = _0xdc25d3(0x10f) : window[_0xdc25d3(0xeb)][_0xdc25d3(0xcd)] = '/'; }), recentBtn[_0x183925(0xee)](_0x183925(0x100), async function () { const _0x5e1f46 = _0x183925; resultContainer['style'][_0x5e1f46(0x118)] = _0x5e1f46(0xc4), mainLoading[_0x5e1f46(0xd1)][_0x5e1f46(0x118)] = _0x5e1f46(0xc4), recentBtn[_0x5e1f46(0xd1)]['display'] = _0x5e1f46(0xf3); const _0x1edbb2 = await fetch(_0x5e1f46(0x10b) + apiEndpoint + '/anime/gogoanime/recent-episodes'), _0x456672 = await _0x1edbb2[_0x5e1f46(0xb7)](); displayRecent(_0x456672['results']); }); function displayRecent(_0x5285b9) { const _0x2a3d38 = _0x183925; resultContainer[_0x2a3d38(0xfe)] = '', mainLoading['style'][_0x2a3d38(0x118)] = _0x2a3d38(0xf3), _0x5285b9[_0x2a3d38(0xd3)](_0x3b4717 => { const _0x5e9f2c = _0x2a3d38, _0x211510 = document[_0x5e9f2c(0xfc)](_0x5e9f2c(0xde)); _0x211510['className'] = 'row', subType = _0x5e9f2c(0xcb), episodeNumber = '' + _0x3b4717[_0x5e9f2c(0xc3)], !episodeNumber[_0x5e9f2c(0xc5)] && (episodeNumber = _0x5e9f2c(0xd4)), episodeNumber = _0x5e9f2c(0xfa) + episodeNumber + _0x5e9f2c(0xec), tableName = _0x5e9f2c(0x10d) + _0x3b4717[_0x5e9f2c(0xdc)][_0x5e9f2c(0xef)]('(Dub)', '') + _0x5e9f2c(0xec), resultTitle = subType + '\x20' + tableName + '\x20' + episodeNumber, _0x211510[_0x5e9f2c(0xfe)] = resultTitle, _0x211510[_0x5e9f2c(0xee)](_0x5e9f2c(0x100), async function () { const _0x41b038 = _0x5e9f2c; mainLoading[_0x41b038(0xd1)][_0x41b038(0x118)] = _0x41b038(0xc4), resultContainer[_0x41b038(0xd1)]['display'] = _0x41b038(0xf3); const _0x41fa95 = await fetch('https://' + apiEndpoint + '/anime/gogoanime/info/' + _0x3b4717['id']), _0x2fd2df = await _0x41fa95[_0x41b038(0xb7)](); displayAnimeInfo(_0x2fd2df); }), resultContainer[_0x5e9f2c(0x103)](_0x211510); }); } function displayResults(_0x431c80) { const _0x3418d3 = _0x183925; resultContainer['innerHTML'] = '', mainLoading[_0x3418d3(0xd1)][_0x3418d3(0x118)] = _0x3418d3(0xf3), _0x431c80[_0x3418d3(0xd3)](_0x1afd2f => { const _0x202274 = _0x3418d3, _0x1bbbdc = document[_0x202274(0xfc)](_0x202274(0xde)); _0x1bbbdc['className'] = _0x202274(0xb8), subType = _0x202274(0xba) + _0x1afd2f['subOrDub'][_0x202274(0x116)]() + 'Dir\x22>' + _0x1afd2f['subOrDub'] + '</div>', releaseDate = '' + _0x1afd2f['releaseDate'][_0x202274(0xef)]('Released:\x20', ''), !releaseDate[_0x202274(0xc5)] && (releaseDate = _0x202274(0xd4)), releaseDate = _0x202274(0xf8) + releaseDate + '</div>', tableName = _0x202274(0x10d) + _0x1afd2f[_0x202274(0xdc)][_0x202274(0xef)](_0x202274(0xbc), '') + _0x202274(0xec), resultTitle = subType + '\x20' + tableName + '\x20' + releaseDate, _0x1bbbdc[_0x202274(0xfe)] = resultTitle, _0x1bbbdc[_0x202274(0xee)]('click', async function () { const _0x5e4dd6 = _0x202274; mainLoading[_0x5e4dd6(0xd1)]['display'] = _0x5e4dd6(0xc4), resultContainer[_0x5e4dd6(0xd1)]['display'] = _0x5e4dd6(0xf3); const _0xc959a2 = await fetch(_0x5e4dd6(0x10b) + apiEndpoint + '/anime/gogoanime/info/' + _0x1afd2f['id']), _0x1eaea5 = await _0xc959a2[_0x5e4dd6(0xb7)](); displayAnimeInfo(_0x1eaea5); }), resultContainer['appendChild'](_0x1bbbdc); }); } let animeParam = urlParams[_0x183925(0xc2)](_0x183925(0xf5)); fetchAnimeInfo(); async function fetchAnimeInfo() { const _0x20eac9 = _0x183925; if (typeof animeParam !== _0x20eac9(0xe9) && animeParam !== null) { recentBtn[_0x20eac9(0xd1)][_0x20eac9(0x118)] = _0x20eac9(0xf3), mainLoading[_0x20eac9(0xd1)][_0x20eac9(0x118)] = _0x20eac9(0xc4); const _0x20bad7 = await fetch('https://' + apiEndpoint + _0x20eac9(0x10a) + animeParam), _0x35ee92 = await _0x20bad7['json'](); displayAnimeInfo(_0x35ee92); } } function _0xe296() { const _0x28045d = ['9660912FEEMQP', 'innerHTML', '6173688dRUfwP', 'click', 'floor', 'button', 'appendChild', '?playInApp=', '377RuvTwd', 'results', 'https://www.youtube.com/embed/3yOVIxOHiaw', 'https://www.youtube.com/embed/Wi6tTATXnaw', '&type=Search', '/anime/gogoanime/info/', 'https://', 'className', '<div\x20id=\x22tableName\x22>', 'queryInput', '/?app=true', 'sort', 'https://www.youtube.com/embed/PgAswqBtrUk', 'app', 'keyCode', '4816YRnpQn', 'astream\x20-\x20kuronekony4n', 'toLowerCase', 'option', 'display', 'value', 'statsFrame', 'json', 'row', '4bBJwOl', '<div\x20class=\x22', 'search', '(Dub)', 'https://www.youtube.com/embed/5xkzzO5nNow', 'resultContainer', 'querySelectorAll', 'recentBtn', 'episodeButton', 'get', 'episodeNumber', 'flex', 'length', 'block', 'player', 'spanDonate', 'subOrDub', 'src', '<div\x20class=\x22subDir\x22>SUB</div>', 'auto', 'href', 'getElementById', '.pill-button', 'download', 'style', '1498605kSxfRW', 'forEach', '???', 'number', 'stats.html?data=', 'https://www.youtube.com/embed/uwwU55zBYlQ', 'subordub', 'https://www.youtube.com/embed/S7W135mNveI', 'true', 'videoDescription', 'title', '?page=1', 'div', '<br><br>', '/anime/gogoanime/', 'default', 'mainLoading', '\x20-\x20kuronekony4n', 'apiconsumet.vercel.app', 'type', 'serverSelect', 'sources', 'qualityContainer', 'undefined', 'selectElement', 'location', '</div>', '3887070JkIzhR', 'addEventListener', 'replace', 'https://www.youtube.com/embed/X1M69l7ZGlw', '5421843LlSvtK', 'animeInfoContainer', 'none', '<span>Support\x20this\x20website\x20by\x20making\x20a\x20donation\x20starting\x20from\x201$!</span><a\x20href=\x27https://sociabuzz.com/willydev/tribe\x27\x20target=\x27_blank\x27\x20title=\x27Thank\x20you!\x27>DONATE</a>', 'anime', 'https://www.youtube.com/embed/nfAPAvGGH4g', 'searchBtn', '<div\x20id=\x22releaseYear\x22>', '791271QUWKUn', '<div\x20id=\x22releaseYear\x22>Eps\x20', '350PHAfon', 'createElement']; _0xe296 = function () { return _0x28045d; }; return _0xe296(); } function displayAnimeInfo(_0xd2ae7e) { const _0x37a9a3 = _0x183925; animeInfoContainer[_0x37a9a3(0xd1)][_0x37a9a3(0x118)] = _0x37a9a3(0xc6), resultContainer[_0x37a9a3(0xd1)][_0x37a9a3(0x118)] = _0x37a9a3(0xf3), watchContainer[_0x37a9a3(0xd1)]['display'] = 'none', mainLoading[_0x37a9a3(0xd1)][_0x37a9a3(0x118)] = 'none'; const _0x807f3b = document[_0x37a9a3(0xce)]('videoTitle'); _0x807f3b[_0x37a9a3(0xfe)] = '' + _0xd2ae7e[_0x37a9a3(0xdc)], pageTitle['innerHTML'] = _0xd2ae7e[_0x37a9a3(0xdc)][_0x37a9a3(0x116)]() + _0x37a9a3(0xe3), statsFrame['src'] = 'stats.html?data=' + _0xd2ae7e['title'] + '&type=Watch'; const _0x4170bf = document[_0x37a9a3(0xce)]('status'); _0x4170bf[_0x37a9a3(0xfe)] = '' + _0xd2ae7e['status']; const _0x504956 = document[_0x37a9a3(0xce)](_0x37a9a3(0xd8)); _0x504956[_0x37a9a3(0xfe)] = '' + _0xd2ae7e[_0x37a9a3(0xc9)]; const _0x44d0d1 = document[_0x37a9a3(0xce)]('type'); _0x44d0d1[_0x37a9a3(0xfe)] = '' + _0xd2ae7e[_0x37a9a3(0xe5)]; const _0x2ec6d8 = document[_0x37a9a3(0xce)](_0x37a9a3(0xdb)); _0x2ec6d8[_0x37a9a3(0xfe)] = '' + _0xd2ae7e['description'][_0x37a9a3(0xef)]('\x0a', _0x37a9a3(0xdf)); const _0xd11292 = document[_0x37a9a3(0xce)]('selectElement'); _0xd11292['innerHTML'] = '', _0xd2ae7e['episodes'][_0x37a9a3(0x110)]((_0xf9a879, _0x2c0f85) => _0x2c0f85['number'] - _0xf9a879[_0x37a9a3(0xd5)]), _0xd2ae7e['episodes'][_0x37a9a3(0xd3)](_0x277750 => { const _0x1315ab = _0x37a9a3, _0x2059ec = document['createElement'](_0x1315ab(0x117)); _0x2059ec[_0x1315ab(0x119)] = _0x277750['id'], _0x2059ec[_0x1315ab(0xfe)] = 'Episode\x20' + _0x277750[_0x1315ab(0xd5)], _0xd11292['appendChild'](_0x2059ec); }); const _0x5a692e = document[_0x37a9a3(0xce)](_0x37a9a3(0xc1)); _0x5a692e['addEventListener'](_0x37a9a3(0x100), async function () { const _0x15aa74 = _0x37a9a3, _0x4697ff = document[_0x15aa74(0xce)](_0x15aa74(0xe6)); _0x4697ff[_0x15aa74(0xfe)] = '', watchContainer[_0x15aa74(0xd1)][_0x15aa74(0x118)] = _0x15aa74(0xf3), mainLoading['style'][_0x15aa74(0x118)] = _0x15aa74(0xc4); const _0x360bac = document['getElementById'](_0x15aa74(0xea))[_0x15aa74(0x119)], _0x135c22 = await fetch(_0x15aa74(0x10b) + apiEndpoint + '/anime/gogoanime/watch/' + _0x360bac), _0x453ee0 = await _0x135c22['json'](); displayWatchInfo(_0x453ee0); }); } function displayWatchInfo(_0x59c6d4) { const _0x2ce3f3 = _0x183925; watchContainer[_0x2ce3f3(0xd1)]['display'] = _0x2ce3f3(0xc6), mainLoading[_0x2ce3f3(0xd1)][_0x2ce3f3(0x118)] = _0x2ce3f3(0xf3); const _0x43c289 = document[_0x2ce3f3(0xce)]('downloadButton'); _0x43c289['href'] = _0x59c6d4[_0x2ce3f3(0xd0)]; const _0x551bda = document[_0x2ce3f3(0xce)]('serverSelect'); _0x551bda[_0x2ce3f3(0xfe)] = '', _0x59c6d4[_0x2ce3f3(0xe7)][_0x2ce3f3(0xd3)](_0x27ca2c => { const _0x5b7dfb = _0x2ce3f3, _0x386b89 = document['createElement'](_0x5b7dfb(0x102)); _0x386b89[_0x5b7dfb(0x119)] = _0x27ca2c['url'], _0x386b89[_0x5b7dfb(0x10c)] = 'pill-button'; let _0x243a96 = _0x27ca2c['quality']['replace'](_0x5b7dfb(0xe1), _0x5b7dfb(0xcc)); _0x386b89[_0x5b7dfb(0xfe)] = '' + _0x243a96, _0x551bda[_0x5b7dfb(0x103)](_0x386b89); }); const _0xb3dcc6 = document[_0x2ce3f3(0xbf)](_0x2ce3f3(0xcf)); for (let _0x372d7e = 0x0; _0x372d7e < _0xb3dcc6[_0x2ce3f3(0xc5)]; _0x372d7e++) { _0xb3dcc6[_0x372d7e][_0x2ce3f3(0xee)](_0x2ce3f3(0x100), function () { const _0x21221c = _0x2ce3f3, _0x37e28a = this['value']; let _0x37502e = _0x37e28a; appParam == _0x21221c(0xda) ? updateUrl(_0x21221c(0x104) + _0x37502e) : videoPlayer[_0x21221c(0xca)] = '/player?url=' + _0x37502e; }); }; } const spanElement = document[_0x183925(0xce)](_0x183925(0xc8)); let contentDonate = [_0x183925(0xf4), '<span>Dukung\x20website\x20ini\x20dengan\x20cara\x20berdonasi\x20mulai\x20dari\x20Rp1000!</span><a\x20href=\x27https://sociabuzz.com/willydev/tribe\x27\x20target=\x27_blank\x27\x20title=\x27Thank\x20you!\x27>DONASI</a>'], indexDonate = 0x0; setInterval(function () { const _0x2865d7 = _0x183925; spanElement[_0x2865d7(0xfe)] = contentDonate[indexDonate], indexDonate = (indexDonate + 0x1) % contentDonate[_0x2865d7(0xc5)]; }, 0x1388);