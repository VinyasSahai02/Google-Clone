export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - Hello World",
        totalResults: "1820000",
        searchTerms: "Hello World",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "a12cbb12c03db4966",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - Hello World",
        totalResults: "1820000",
        searchTerms: "Hello World",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "a12cbb12c03db4966",
      },
    ],
  },
  context: {
    title: "GOOGLE",
  },
  searchInformation: {
    searchTime: 0.456813,
    formattedSearchTime: "0.46",
    totalResults: "1820000",
    formattedTotalResults: "1,820,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "The World of Hello World - Google My Maps",
      htmlTitle: "The World of <b>Hello World</b> - Google My Maps",
      link: "https://www.google.com/mymaps/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=en_US",
      displayLink: "www.google.com",
      snippet:
        "Jun 25, 2015 ... A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs: blue ...",
      htmlSnippet:
        "Jun 25, 2015 <b>...</b> A map of programming languages and rough locations in the <b>world</b> where they were created. Colors correspond to four major epochs: blue&nbsp;...",
      cacheId: "-cCgdGJsne4J",
      formattedUrl: "https://www.google.com/mymaps/viewer?mid...hl=en_US",
      htmlFormattedUrl: "https://www.google.com/mymaps/viewer?mid...hl=en_US",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNjz-s7Eb-jIoHyWaQJyuNmX3VhLLzsQOWICJX4ZUXZ3aSxV8YBmw8MGc",
            width: "221",
            height: "228",
          },
        ],
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=en_US",
            name: "The World of Hello World - Google My Maps",
            description:
              "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs: blue - first languages, green - establishing paradigms, yellow...",
            url: "https://www.google.com/maps/d/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=en_US",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=en_US",
            "apple-itunes-app":
              "app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1j9wMaiQ12jiqpEFD1HgZ3QPuPDk%26hl%3Den_US",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "The World of Hello World - Google My Maps",
            "og:site_name": "Google My Maps",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description":
              "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs:\n blue - first languages,\n  green - establishing paradigms,\n  yellow - consolidation and modules,\n  pink - the Internet age.",
            "og:title": "The World of Hello World - Google My Maps",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=en_US",
            "og:description":
              "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs:\n blue - first languages,\n  green - establishing paradigms,\n  yellow - consolidation and modules,\n  pink - the Internet age.",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=en_US",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=en_US",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World - Google My Maps",
      htmlTitle: "<b>Hello World</b> - Google My Maps",
      link: "https://www.google.com/mymaps/viewer?mid=1zZI9FDSk7hy3dJfU31UxHnDxjAU&hl=en_US",
      displayLink: "www.google.com",
      snippet:
        "Jun 6, 2015 ... Hello World. Map Legend. Terms. 5,000 km. This map was created by a user. Learn how to create your own. Manage account. Create new map.",
      htmlSnippet:
        "Jun 6, 2015 <b>...</b> <b>Hello World</b>. Map Legend. Terms. 5,000 km. This map was created by a user. Learn how to create your own. Manage account. Create new map.",
      cacheId: "7YllQkoJ9vAJ",
      formattedUrl: "https://www.google.com/mymaps/viewer?mid...hl=en_US",
      htmlFormattedUrl: "https://www.google.com/mymaps/viewer?mid...hl=en_US",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjayMbZ6R4LxVKGAa9tQSD9mddXSUjuiwRSOUqg2yedL01m3-kzlz8RFL",
            width: "221",
            height: "228",
          },
        ],
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1zZI9FDSk7hy3dJfU31UxHnDxjAU&hl=en_US",
            name: "Hello World - Google My Maps",
            description: "I am the greatest",
            url: "https://www.google.com/maps/d/viewer?mid=1zZI9FDSk7hy3dJfU31UxHnDxjAU&hl=en_US",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1zZI9FDSk7hy3dJfU31UxHnDxjAU&hl=en_US",
            "apple-itunes-app":
              "app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1zZI9FDSk7hy3dJfU31UxHnDxjAU%26hl%3Den_US",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Hello World - Google My Maps",
            "og:site_name": "Google My Maps",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description": "I am the greatest",
            "og:title": "Hello World - Google My Maps",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1zZI9FDSk7hy3dJfU31UxHnDxjAU&hl=en_US",
            "og:description": "I am the greatest",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1zZI9FDSk7hy3dJfU31UxHnDxjAU&hl=en_US",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1zZI9FDSk7hy3dJfU31UxHnDxjAU&hl=en_US",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World. - Google My Maps",
      htmlTitle: "<b>Hello World</b>. - Google My Maps",
      link: "https://www.google.com/mymaps/viewer?mid=1l7qw-1PlTu5smS-4-zoeQvDrihc&hl=en_US",
      displayLink: "www.google.com",
      snippet:
        "Jun 17, 2015 ... by Claudio Venturini Welcome to my world and thank you for experiencing my portfolio. Begin by clicking on the links below or use the map ...",
      htmlSnippet:
        "Jun 17, 2015 <b>...</b> by Claudio Venturini Welcome to my <b>world</b> and thank you for experiencing my portfolio. Begin by clicking on the links below or use the map&nbsp;...",
      cacheId: "065L0GjRbn8J",
      formattedUrl:
        "https://www.google.com/mymaps/viewer?mid=1l7qw-1PlTu5smS-4...",
      htmlFormattedUrl:
        "https://www.google.com/mymaps/viewer?mid=1l7qw-1PlTu5smS-4...",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSuHFPeeV-nWo8g62cwWsRnZyN92dLfnCb-RiuFI_uF_xNahBPEjakR-yw",
            width: "221",
            height: "228",
          },
        ],
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1l7qw-1PlTu5smS-4-zoeQvDrihc&hl=en_US",
            name: "Hello World. - Google My Maps",
            description:
              "by Claudio Venturini Welcome to my world and thank you for experiencing my portfolio. Begin by clicking on the links below or use the map controls to see my work. [ Updated 05.02.2013 ] claudio_ven...",
            url: "https://www.google.com/maps/d/viewer?mid=1l7qw-1PlTu5smS-4-zoeQvDrihc&hl=en_US",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1l7qw-1PlTu5smS-4-zoeQvDrihc&hl=en_US",
            "apple-itunes-app":
              "app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1l7qw-1PlTu5smS-4-zoeQvDrihc%26hl%3Den_US",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Hello World.  - Google My Maps",
            "og:site_name": "Google My Maps",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description":
              "by Claudio Venturini\n\nWelcome to my world and thank you for experiencing my portfolio. Begin by clicking on the links below or use the map controls to see my work.   \n[ Updated 05.02.2013 ]\n\nclaudio_venturini@me.com, @socialcartoon",
            "og:title": "Hello World.  - Google My Maps",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1l7qw-1PlTu5smS-4-zoeQvDrihc&hl=en_US",
            "og:description":
              "by Claudio Venturini\n\nWelcome to my world and thank you for experiencing my portfolio. Begin by clicking on the links below or use the map controls to see my work.   \n[ Updated 05.02.2013 ]\n\nclaudio_venturini@me.com, @socialcartoon",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1l7qw-1PlTu5smS-4-zoeQvDrihc&hl=en_US",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1l7qw-1PlTu5smS-4-zoeQvDrihc&hl=en_US",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "The World of Hello World - Google My Maps",
      htmlTitle: "The World of <b>Hello World</b> - Google My Maps",
      link: "https://www.google.com/mymaps/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=es",
      displayLink: "www.google.com",
      snippet:
        "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs: blue - first languages, ...",
      htmlSnippet:
        "A map of programming languages and rough locations in the <b>world</b> where they were created. Colors correspond to four major epochs: blue - first languages,&nbsp;...",
      cacheId: "6RnQA1fDcSgJ",
      formattedUrl: "https://www.google.com/mymaps/viewer?mid...hl=es",
      htmlFormattedUrl: "https://www.google.com/mymaps/viewer?mid...hl=es",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS0bd3SkeZMZp_oEc6tMV3rgNiEqxmrzylkE-fCjENVSSZVvWD_7hohkFa2",
            width: "221",
            height: "228",
          },
        ],
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=es",
            name: "The World of Hello World - Google My Maps",
            description:
              "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs: blue - first languages, green - establishing paradigms, yellow...",
            url: "https://www.google.com/maps/d/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=es",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=es",
            "apple-itunes-app":
              "app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1j9wMaiQ12jiqpEFD1HgZ3QPuPDk%26hl%3Des",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "The World of Hello World - Google My Maps",
            "og:site_name": "Google My Maps",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description":
              "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs:\n blue - first languages,\n  green - establishing paradigms,\n  yellow - consolidation and modules,\n  pink - the Internet age.",
            "og:title": "The World of Hello World - Google My Maps",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=es",
            "og:description":
              "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs:\n blue - first languages,\n  green - establishing paradigms,\n  yellow - consolidation and modules,\n  pink - the Internet age.",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=es",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=es",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "{ DOWNLOAD } Jigjam Hello World { ALBUM MP3/ZIP } - Google My ...",
      htmlTitle:
        "{ DOWNLOAD } Jigjam <b>Hello World</b> { ALBUM MP3/ZIP } - Google My ...",
      link: "https://www.google.com/mymaps/viewer?mid=1Fdy7FWuzYUuMoFDOESMjDqpx2XI&hl=en_US",
      displayLink: "www.google.com",
      snippet:
        "Apr 27, 2017 ... Download Jigjam Hello World album mp3 zip torrent LINK: http://urlbucks.net/lN5mLG Jigjam Hello World download album mp3 zip Download album ...",
      htmlSnippet:
        "Apr 27, 2017 <b>...</b> Download Jigjam <b>Hello World</b> album mp3 zip torrent LINK: http://urlbucks.net/lN5mLG Jigjam <b>Hello World</b> download album mp3 zip Download album&nbsp;...",
      cacheId: "uymFTKbRv_kJ",
      formattedUrl: "https://www.google.com/mymaps/viewer?mid...hl=en_US",
      htmlFormattedUrl: "https://www.google.com/mymaps/viewer?mid...hl=en_US",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2AJFtZGsyxFNRSaVt2CxJPKECNCLwdarwmbmQx3ofc31lD_qY784SEY2c",
            width: "221",
            height: "228",
          },
        ],
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1Fdy7FWuzYUuMoFDOESMjDqpx2XI&hl=en_US",
            name: "{ DOWNLOAD } Jigjam Hello World { ALBUM MP3/ZIP } - Google My Maps",
            description:
              "Download Jigjam Hello World album mp3 zip torrent LINK: http://urlbucks.net/lN5mLG Jigjam Hello World download album mp3 zip Download album Jigjam Hello World mp3 zip Jigjam Hello World album...",
            url: "https://www.google.com/maps/d/viewer?mid=1Fdy7FWuzYUuMoFDOESMjDqpx2XI&hl=en_US",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1Fdy7FWuzYUuMoFDOESMjDqpx2XI&hl=en_US",
            "apple-itunes-app":
              "app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1Fdy7FWuzYUuMoFDOESMjDqpx2XI%26hl%3Den_US",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title":
              "{ DOWNLOAD } Jigjam Hello World { ALBUM MP3/ZIP } - Google My Maps",
            "og:site_name": "Google My Maps",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description":
              "Download Jigjam Hello World album mp3 zip torrent\nLINK: http://urlbucks.net/lN5mLG\nJigjam Hello World download album mp3 zip\nDownload album Jigjam Hello World mp3 zip\nJigjam Hello World album download zip mp3\nAlbum download Jigjam Hello World torrent zip mp3",
            "og:title":
              "{ DOWNLOAD } Jigjam Hello World { ALBUM MP3/ZIP } - Google My Maps",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1Fdy7FWuzYUuMoFDOESMjDqpx2XI&hl=en_US",
            "og:description":
              "Download Jigjam Hello World album mp3 zip torrent\nLINK: http://urlbucks.net/lN5mLG\nJigjam Hello World download album mp3 zip\nDownload album Jigjam Hello World mp3 zip\nJigjam Hello World album download zip mp3\nAlbum download Jigjam Hello World torrent zip mp3",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1Fdy7FWuzYUuMoFDOESMjDqpx2XI&hl=en_US",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1Fdy7FWuzYUuMoFDOESMjDqpx2XI&hl=en_US",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Tschüss Berlin, hello world! - Google My Maps",
      htmlTitle: "Tschüss Berlin, <b>hello world</b>! - Google My Maps",
      link: "https://www.google.com/mymaps/viewer?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US",
      displayLink: "www.google.com",
      snippet:
        "Feb 28, 2019 ... Tschüss Berlin, hello world! ... Tschüss Berlin, hello world! Map Legend. Terms. 10,000 km. This map was created by a user.",
      htmlSnippet:
        "Feb 28, 2019 <b>...</b> Tschüss Berlin, <b>hello world</b>! ... Tschüss Berlin, <b>hello world</b>! Map Legend. Terms. 10,000 km. This map was created by a user.",
      cacheId: "s_AUgf1NI4kJ",
      formattedUrl: "https://www.google.com/mymaps/viewer?mid...hl=en_US",
      htmlFormattedUrl: "https://www.google.com/mymaps/viewer?mid...hl=en_US",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSB4hG6Eoc-aKeOsFCcp2-syzX7FmJbEmCeKjrfFThWanyVbwzpwv7Gk5IK",
            width: "221",
            height: "228",
          },
        ],
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US",
            name: "Tschüss Berlin, hello world! - Google My Maps",
            description: "Tschüss Berlin, hello world!",
            url: "https://www.google.com/maps/d/viewer?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US",
            "apple-itunes-app":
              "app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1DFRYMbt58FakcbMNizdvATJhVDw%26hl%3Den_US",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Tschüss Berlin, hello world! - Google My Maps",
            "og:site_name": "Google My Maps",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description": "Tschüss Berlin, hello world!",
            "og:title": "Tschüss Berlin, hello world! - Google My Maps",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US",
            "og:description": "Tschüss Berlin, hello world!",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1DFRYMbt58FakcbMNizdvATJhVDw&hl=en_US",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World Cottages - Google hotels",
      htmlTitle: "<b>Hello World</b> Cottages - Google hotels",
      link: "https://www.google.com/travel/hotels/entity/ChoIoP-FyeSj8Pj8ARoNL2cvMTFmOXZycGRkdxAB?ei=Fxi6YfQpjdzZAofUlMAG&sa=X&ei=hbAXYujGBImv2ALsmaSICA&ei=js4XYp77FYyw2gKhjJ34BQ&ved=2ahUKEwie-q6c_Jj2AhUMmFYKHSFGB18Qv6wDKAJ6BQgBEJAB",
      displayLink: "www.google.com",
      snippet:
        "Book your Goa stay at hello world cottages with best prices only on MakeMyTrip.com. Hurry! Get , and complete your Homestay booking at the lowest price here ...",
      htmlSnippet:
        "Book your Goa stay at <b>hello world</b> cottages with best prices only on MakeMyTrip.com. Hurry! Get , and complete your Homestay booking at the lowest price here&nbsp;...",
      formattedUrl:
        "https://www.google.com/.../ChoIoP- FyeSj8Pj8ARoNL2cvMTFmOXZycGRkdxAB?...",
      htmlFormattedUrl:
        "https://www.google.com/.../ChoIoP- FyeSj8Pj8ARoNL2cvMTFmOXZycGRkdxAB?...",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-9_dSeGPZxxzwFTNQkmSrNq_TYAicmJi0iVH13r-zueoDBaQFtLfFXogQ",
            width: "272",
            height: "185",
          },
        ],
        metatags: [
          {
            "application-name": "Travel",
            "og:image":
              "https://lh5.googleusercontent.com/p/AF1QipP9RJWrTps_WlbuHRrcwuq4sKlfDCzsqHP216vm=w296-h202-n-k-no-v1",
            "og:type": "website",
            "og:image:width": "296",
            "twitter:card": "summary_large_image",
            "twitter:title": "Hello World Cottages 3.4 ★ (5)",
            mod: "true",
            "og:site_name": "Google Hotel Search",
            "apple-mobile-web-app-title": "Travel",
            "og:title": "Hello World Cottages 3.4 ★ (5)",
            "og:image:height": "202",
            "og:description":
              "Find out more information about Hello World Cottages and check out the availability & booking options for your next Bardez trip.",
            "twitter:image":
              "https://lh5.googleusercontent.com/p/AF1QipP9RJWrTps_WlbuHRrcwuq4sKlfDCzsqHP216vm=w296-h202-n-k-no-v1",
            referrer: "origin",
            "twitter:image:alt": "Hello World Cottages 3.4 ★ (5)",
            "apple-mobile-web-app-status-bar-style": "black",
            "msapplication-tap-highlight": "no",
            viewport:
              "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
            "apple-mobile-web-app-capable": "yes",
            "twitter:description":
              "Find out more information about Hello World Cottages and check out the availability & booking options for your next Bardez trip.",
            "mobile-web-app-capable": "yes",
            "og:locale": "en_US",
            "og:url":
              "https://www.google.com/travel/hotels/entity/ChoIoP-FyeSj8Pj8ARoNL2cvMTFmOXZycGRkdxAB?g2lb=4356900",
          },
        ],
        cse_image: [
          {
            src: "https://lh5.googleusercontent.com/p/AF1QipP9RJWrTps_WlbuHRrcwuq4sKlfDCzsqHP216vm=w296-h202-n-k-no-v1",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World! Processing - Google My Maps",
      htmlTitle: "<b>Hello World</b>! Processing - Google My Maps",
      link: "https://www.google.com/maps/d/viewer?mid=zmqRGP8o461w.k6uDoIO-WDKE&hl=en_US",
      displayLink: "www.google.com",
      snippet:
        "Hello World! Processing. ... Hello World! Processing. Map Legend. Terms. 5,000 km. This map was created by a user. Learn how to create your own.",
      htmlSnippet:
        "<b>Hello World</b>! Processing. ... <b>Hello World</b>! Processing. Map Legend. Terms. 5,000 km. This map was created by a user. Learn how to create your own.",
      cacheId: "9CSyWsn_iNAJ",
      formattedUrl:
        "https://www.google.com/maps/d/viewer?mid=zmqRGP8o461w...hl...",
      htmlFormattedUrl:
        "https://www.google.com/maps/d/viewer?mid=zmqRGP8o461w...hl...",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCNePZwFz-_h1ivTxqGWFecPt1pwHlxp8tcQDxMzt4CHH3Wla_tDaD6Jd3",
            width: "221",
            height: "228",
          },
        ],
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
            name: "Hello World! Processing - Google My Maps",
            description: "Hello World! Processing",
            url: "https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
            "apple-itunes-app":
              "app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1RskLR63GVFZKuE-Ujrijeh3jTDg%26hl%3Den_US",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Hello World! Processing - Google My Maps",
            "og:site_name": "Google My Maps",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description": "Hello World! Processing",
            "og:title": "Hello World! Processing - Google My Maps",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
            "og:description": "Hello World! Processing",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "The World of Hello World - Google マイマップ",
      htmlTitle: "The World of <b>Hello World</b> - Google マイマップ",
      link: "https://www.google.com/mymaps/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
      displayLink: "www.google.com",
      snippet:
        "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs: blue - first languages, ...",
      htmlSnippet:
        "A map of programming languages and rough locations in the <b>world</b> where they were created. Colors correspond to four major epochs: blue - first languages,&nbsp;...",
      cacheId: "IJcon3zDb3cJ",
      formattedUrl: "https://www.google.com/mymaps/viewer?mid...hl=ja",
      htmlFormattedUrl: "https://www.google.com/mymaps/viewer?mid...hl=ja",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu94VZ6-CM_H9YUGacMzHwZlQU4aKjdSxp-WwBV22CNTWOElDIq0Mj84QZ",
            width: "221",
            height: "228",
          },
        ],
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
            name: "The World of Hello World - Google マイマップ",
            description:
              "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs: blue - first languages, green - establishing paradigms, yellow...",
            url: "https://www.google.com/maps/d/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
            "apple-itunes-app":
              "app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1j9wMaiQ12jiqpEFD1HgZ3QPuPDk%26hl%3Dja",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "The World of Hello World - Google マイマップ",
            "og:site_name": "Google My Maps",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description":
              "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs:\n blue - first languages,\n  green - establishing paradigms,\n  yellow - consolidation and modules,\n  pink - the Internet age.",
            "og:title": "The World of Hello World - Google マイマップ",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
            "og:description":
              "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs:\n blue - first languages,\n  green - establishing paradigms,\n  yellow - consolidation and modules,\n  pink - the Internet age.",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "helloworld.ug - Google My Maps",
      htmlTitle: "<b>helloworld</b>.ug - Google My Maps",
      link: "https://www.google.com/mymaps/viewer?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US",
      displayLink: "www.google.com",
      snippet:
        "Open full screen to view more. helloworld.ug. Collapse map legend. Map details. Copy map. Zoom to viewport. Embed map. Download KML.",
      htmlSnippet:
        "Open full screen to view more. <b>helloworld</b>.ug. Collapse map legend. Map details. Copy map. Zoom to viewport. Embed map. Download KML.",
      cacheId: "LZW-q-h3CN4J",
      formattedUrl: "https://www.google.com/mymaps/viewer?mid=1_5DE...hl=en_US",
      htmlFormattedUrl:
        "https://www.google.com/mymaps/viewer?mid=1_5DE...hl=en_US",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTutZZplU0SLA0JjqjqB7txw0hPjhCXKscFSRwLqynshHpI1zfeSPgx_eg",
            width: "221",
            height: "228",
          },
        ],
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US",
            name: "helloworld.ug - Google My Maps",
            description: "our office location",
            url: "https://www.google.com/maps/d/viewer?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US",
            "apple-itunes-app":
              "app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1_5DE_FvFzw99EsuTjqXvIvWtbgs%26hl%3Den_US",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "helloworld.ug - Google My Maps",
            "og:site_name": "Google My Maps",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description": "our office location",
            "og:title": "helloworld.ug - Google My Maps",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US",
            "og:description": "our office location",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1_5DE_FvFzw99EsuTjqXvIvWtbgs&hl=en_US",
          },
        ],
      },
    },
  ],
};
