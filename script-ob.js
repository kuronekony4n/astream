const _0x562372=_0x3935;function _0x3935(_0x3c53d5,_0x21a173){const _0x37337e=_0x3733();return _0x3935=function(_0x393513,_0x844f20){_0x393513=_0x393513-0x19e;let _0x310681=_0x37337e[_0x393513];return _0x310681;},_0x3935(_0x3c53d5,_0x21a173);}(function(_0x19ef71,_0x3b6847){const _0x35e291=_0x3935,_0xc30cb6=_0x19ef71();while(!![]){try{const _0x50157e=-parseInt(_0x35e291(0x1da))/0x1*(parseInt(_0x35e291(0x1ce))/0x2)+-parseInt(_0x35e291(0x1b0))/0x3*(-parseInt(_0x35e291(0x1a6))/0x4)+-parseInt(_0x35e291(0x1d2))/0x5+-parseInt(_0x35e291(0x1dd))/0x6*(parseInt(_0x35e291(0x1c3))/0x7)+-parseInt(_0x35e291(0x1be))/0x8*(-parseInt(_0x35e291(0x19f))/0x9)+-parseInt(_0x35e291(0x1e1))/0xa+parseInt(_0x35e291(0x1b3))/0xb;if(_0x50157e===_0x3b6847)break;else _0xc30cb6['push'](_0xc30cb6['shift']());}catch(_0x153093){_0xc30cb6['push'](_0xc30cb6['shift']());}}}(_0x3733,0x2e1d9));const queryInput=document[_0x562372(0x1bc)]('queryInput'),searchBtn=document[_0x562372(0x1bc)](_0x562372(0x1e9)),recentBtn=document[_0x562372(0x1bc)](_0x562372(0x1e4)),resultContainer=document[_0x562372(0x1bc)](_0x562372(0x1d0)),animeInfoContainer=document[_0x562372(0x1bc)](_0x562372(0x19e)),watchContainer=document[_0x562372(0x1bc)]('qualityContainer'),mainLoading=document[_0x562372(0x1bc)]('mainLoading'),pageTitle=document['getElementById'](_0x562372(0x1d7)),videoPlayer=document[_0x562372(0x1bc)](_0x562372(0x1e7)),statsFrame=document[_0x562372(0x1bc)](_0x562372(0x1ef));let obf=_0x562372(0x1ed),htmlen='html-code-generator.com/tools/html-encrypt-decrypt';var youtubeLinks=['https://www.youtube.com/embed/3yOVIxOHiaw?controls=0','https://www.youtube.com/embed/nfAPAvGGH4g?controls=0',_0x562372(0x1e5)],randomLink=youtubeLinks[Math[_0x562372(0x1af)](Math['random']()*youtubeLinks[_0x562372(0x1e0)])];videoPlayer['src']=randomLink,searchBtn['addEventListener'](_0x562372(0x1c5),async function(){const _0x2475e9=_0x562372;animeInfoContainer[_0x2475e9(0x1b6)]['display']=_0x2475e9(0x1cc),resultContainer['style'][_0x2475e9(0x1a9)]=_0x2475e9(0x1bd),mainLoading[_0x2475e9(0x1b6)][_0x2475e9(0x1a9)]=_0x2475e9(0x1a1),pageTitle[_0x2475e9(0x1a7)]=_0x2475e9(0x1e6),recentBtn[_0x2475e9(0x1b6)][_0x2475e9(0x1a9)]=_0x2475e9(0x1cc),resultContainer['innerHTML']='';const _0x322473=queryInput[_0x2475e9(0x1b2)];statsFrame[_0x2475e9(0x1c7)]=_0x2475e9(0x1b1)+_0x322473+_0x2475e9(0x1a5);const _0x440d00=await fetch(_0x2475e9(0x1f0)+_0x322473+_0x2475e9(0x1dc)),_0x59bb92=await _0x440d00[_0x2475e9(0x1db)]();displayResults(_0x59bb92['results']);}),recentBtn[_0x562372(0x1c1)]('click',async function(){const _0x48eb03=_0x562372;resultContainer['style'][_0x48eb03(0x1a9)]=_0x48eb03(0x1bd),mainLoading[_0x48eb03(0x1b6)][_0x48eb03(0x1a9)]=_0x48eb03(0x1a1),recentBtn[_0x48eb03(0x1b6)][_0x48eb03(0x1a9)]=_0x48eb03(0x1cc);const _0xae9d7c=await fetch('https://api.consumet.org/anime/gogoanime/recent-episodes'),_0x1257b6=await _0xae9d7c['json']();displayRecent(_0x1257b6[_0x48eb03(0x1c6)]);});function displayRecent(_0x15398a){const _0x58b508=_0x562372;resultContainer[_0x58b508(0x1a7)]='',mainLoading[_0x58b508(0x1b6)]['display']=_0x58b508(0x1cc),_0x15398a['forEach'](_0x4dee5f=>{const _0x3e8471=_0x58b508,_0x4af877=document[_0x3e8471(0x1cd)](_0x3e8471(0x1ba));_0x4af877[_0x3e8471(0x1b6)]['backgroundImage']=_0x3e8471(0x1b7)+_0x4dee5f['image']+')',subType='<span\x20id=\x22subType\x22>SUB</span>',releaseDate='<span\x20id=\x22releaseDate\x22>(Episode\x20'+_0x4dee5f[_0x3e8471(0x1d4)]+_0x3e8471(0x1ae),resultTitle=subType+'\x20'+_0x4dee5f['title']['replace'](_0x3e8471(0x1e2),'')+'\x20'+releaseDate,_0x4af877[_0x3e8471(0x1a7)]=resultTitle,_0x4af877[_0x3e8471(0x1c1)](_0x3e8471(0x1c5),async function(){const _0x1ccf02=_0x3e8471;mainLoading[_0x1ccf02(0x1b6)][_0x1ccf02(0x1a9)]='flex',resultContainer[_0x1ccf02(0x1b6)][_0x1ccf02(0x1a9)]=_0x1ccf02(0x1cc);const _0x4b404f=await fetch(_0x1ccf02(0x1c0)+_0x4dee5f['id']),_0x4c70f8=await _0x4b404f[_0x1ccf02(0x1db)]();displayAnimeInfo(_0x4c70f8);}),resultContainer['appendChild'](_0x4af877);});}function _0x3733(){const _0x3cd00d=['json','?page=1','1091358wrBqIn','number','Released:\x20','length','2336270FeRuVa','(Dub)','multires1','recentBtn','https://www.youtube.com/embed/S7W135mNveI?controls=0','astream\x20-\x20kuronekony4n','player','episodes','searchBtn','className','Episode\x20','player.html?url=','obfuscator.io','quality','statsFrame','https://api.consumet.org/anime/gogoanime/','serverSelect','animeInfoContainer','9OovWJp','image','flex','button','multires2','status','&type=Search','337544qsrNsM','innerHTML','appendChild','display','replace','option','querySelectorAll','.pill-button',')</span>','floor','6cIcGdT','stats.html?data=','value','7362212JozagD','backup','subordub','style','url(','videoTitle','pill-button','div','type','getElementById','block','2031752jhrtrw','\x20-\x20kuronekony4n','https://api.consumet.org/anime/gogoanime/info/','addEventListener','url','14MdLfOQ','<br><br>','click','results','src','sources','</span>','toLowerCase','https://api.consumet.org/anime/gogoanime/watch/','none','createElement','65120QJRItl','description','resultContainer','forEach','877455Nxsfnp','Type\x22>','episodeNumber','selectElement','subOrDub','title','videoDescription','href','4xuoMzP'];_0x3733=function(){return _0x3cd00d;};return _0x3733();}function displayResults(_0x6e5a1d){const _0x2c70af=_0x562372;resultContainer[_0x2c70af(0x1a7)]='',mainLoading[_0x2c70af(0x1b6)][_0x2c70af(0x1a9)]='none',_0x6e5a1d[_0x2c70af(0x1d1)](_0x3d3f5b=>{const _0x38a54d=_0x2c70af,_0x9b4e87=document[_0x38a54d(0x1cd)](_0x38a54d(0x1ba));_0x9b4e87[_0x38a54d(0x1b6)]['backgroundImage']='url('+_0x3d3f5b[_0x38a54d(0x1a0)]+')',subType='<span\x20id=\x22'+_0x3d3f5b['subOrDub'][_0x38a54d(0x1ca)]()+_0x38a54d(0x1d3)+_0x3d3f5b[_0x38a54d(0x1d6)]+_0x38a54d(0x1c9),releaseDate='<span\x20id=\x22releaseDate\x22>('+_0x3d3f5b['releaseDate']['replace'](_0x38a54d(0x1df),'')+_0x38a54d(0x1ae),resultTitle=subType+'\x20'+_0x3d3f5b[_0x38a54d(0x1d7)]['replace'](_0x38a54d(0x1e2),'')+'\x20'+releaseDate,_0x9b4e87[_0x38a54d(0x1a7)]=resultTitle,_0x9b4e87[_0x38a54d(0x1c1)](_0x38a54d(0x1c5),async function(){const _0x3af78e=_0x38a54d;mainLoading[_0x3af78e(0x1b6)][_0x3af78e(0x1a9)]=_0x3af78e(0x1a1),resultContainer[_0x3af78e(0x1b6)]['display']=_0x3af78e(0x1cc);const _0x4cccda=await fetch(_0x3af78e(0x1c0)+_0x3d3f5b['id']),_0x2ac80f=await _0x4cccda[_0x3af78e(0x1db)]();displayAnimeInfo(_0x2ac80f);}),resultContainer['appendChild'](_0x9b4e87);});}function displayAnimeInfo(_0x5b88dd){const _0x44e116=_0x562372;animeInfoContainer['style'][_0x44e116(0x1a9)]='block',resultContainer['style'][_0x44e116(0x1a9)]='none',watchContainer['style'][_0x44e116(0x1a9)]='none',mainLoading[_0x44e116(0x1b6)][_0x44e116(0x1a9)]=_0x44e116(0x1cc);const _0x249d19=document[_0x44e116(0x1bc)](_0x44e116(0x1b8));_0x249d19[_0x44e116(0x1a7)]=''+_0x5b88dd['title'],pageTitle[_0x44e116(0x1a7)]=_0x5b88dd[_0x44e116(0x1d7)]['toLowerCase']()+_0x44e116(0x1bf),statsFrame[_0x44e116(0x1c7)]='stats.html?data='+_0x5b88dd[_0x44e116(0x1d7)]+'&type=Watch';const _0x30c7c0=document[_0x44e116(0x1bc)](_0x44e116(0x1a4));_0x30c7c0[_0x44e116(0x1a7)]=''+_0x5b88dd[_0x44e116(0x1a4)];const _0x34e8cc=document[_0x44e116(0x1bc)](_0x44e116(0x1b5));_0x34e8cc[_0x44e116(0x1a7)]=''+_0x5b88dd[_0x44e116(0x1d6)];const _0x293163=document[_0x44e116(0x1bc)](_0x44e116(0x1bb));_0x293163['innerHTML']=''+_0x5b88dd['type'];const _0xfd4eb8=document[_0x44e116(0x1bc)](_0x44e116(0x1d8));_0xfd4eb8['innerHTML']=''+_0x5b88dd[_0x44e116(0x1cf)][_0x44e116(0x1aa)]('\x0a',_0x44e116(0x1c4));const _0x5aae7a=document[_0x44e116(0x1bc)](_0x44e116(0x1d5));_0x5aae7a[_0x44e116(0x1a7)]='',_0x5b88dd[_0x44e116(0x1e8)]['sort']((_0x5c0daf,_0x3bbf9c)=>_0x3bbf9c[_0x44e116(0x1de)]-_0x5c0daf[_0x44e116(0x1de)]),_0x5b88dd[_0x44e116(0x1e8)]['forEach'](_0x305a09=>{const _0x38dff9=_0x44e116,_0x80dc7f=document[_0x38dff9(0x1cd)](_0x38dff9(0x1ab));_0x80dc7f['value']=_0x305a09['id'],_0x80dc7f[_0x38dff9(0x1a7)]=_0x38dff9(0x1eb)+_0x305a09['number'],_0x5aae7a[_0x38dff9(0x1a8)](_0x80dc7f);});const _0x3a4d66=document[_0x44e116(0x1bc)]('episodeButton');_0x3a4d66['addEventListener'](_0x44e116(0x1c5),async function(){const _0x1533ab=_0x44e116,_0x47631e=document[_0x1533ab(0x1bc)]('serverSelect');_0x47631e[_0x1533ab(0x1a7)]='',watchContainer[_0x1533ab(0x1b6)][_0x1533ab(0x1a9)]='none',mainLoading[_0x1533ab(0x1b6)][_0x1533ab(0x1a9)]='flex';const _0x5c17ac=document[_0x1533ab(0x1bc)](_0x1533ab(0x1d5))['value'],_0x23d49a=await fetch(_0x1533ab(0x1cb)+_0x5c17ac),_0x411eae=await _0x23d49a[_0x1533ab(0x1db)]();displayWatchInfo(_0x411eae);});}function displayWatchInfo(_0x2c5ac4){const _0x22a4df=_0x562372;watchContainer['style'][_0x22a4df(0x1a9)]=_0x22a4df(0x1bd),mainLoading[_0x22a4df(0x1b6)]['display']=_0x22a4df(0x1cc);const _0x2c6f6a=document[_0x22a4df(0x1bc)]('downloadButton');_0x2c6f6a[_0x22a4df(0x1d9)]=_0x2c5ac4['download'];const _0x584a2f=document[_0x22a4df(0x1bc)](_0x22a4df(0x1f1));_0x584a2f[_0x22a4df(0x1a7)]='',_0x2c5ac4[_0x22a4df(0x1c8)][_0x22a4df(0x1d1)](_0x3ca574=>{const _0x173088=_0x22a4df,_0x1838bb=document['createElement'](_0x173088(0x1a2));_0x1838bb['value']=_0x3ca574[_0x173088(0x1c2)],_0x1838bb[_0x173088(0x1ea)]=_0x173088(0x1b9);let _0x318949=_0x3ca574[_0x173088(0x1ee)][_0x173088(0x1aa)]('default',_0x173088(0x1e3))['replace'](_0x173088(0x1b4),_0x173088(0x1a3));_0x1838bb[_0x173088(0x1a7)]=''+_0x318949,_0x584a2f['appendChild'](_0x1838bb);});const _0x1386c7=document[_0x22a4df(0x1ac)](_0x22a4df(0x1ad));for(let _0x10c11a=0x0;_0x10c11a<_0x1386c7[_0x22a4df(0x1e0)];_0x10c11a++){_0x1386c7[_0x10c11a][_0x22a4df(0x1c1)](_0x22a4df(0x1c5),function(){const _0x17c866=_0x22a4df,_0x3efa55=this[_0x17c866(0x1b2)];let _0x20d902=_0x3efa55;videoPlayer[_0x17c866(0x1c7)]=_0x17c866(0x1ec)+_0x20d902;});};}
