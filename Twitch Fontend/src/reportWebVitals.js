const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/*
CLS (Cumulative Layout Shift): measures the visual stability of a web page by quantifying how much the page layout shifts during loading. A high CLS score means that page elements moved around while the page was loading, which can be a jarring experience for users.

FID (First Input Delay): measures the time between when a user interacts with a page (e.g. clicks a button) and when the page responds to that interaction. A high FID score means that the page is slow to respond to user input, which can lead to frustration for users.

FCP (First Contentful Paint): measures the time it takes for the browser to render the first piece of content on the screen. This could be text, an image, or a video. A fast FCP score means that the page appears to load quickly, even if the rest of the content is still loading.

LCP (Largest Contentful Paint): measures the time it takes for the browser to render the largest piece of content on the screen. This could be an image, a video, or a block of text. A fast LCP score means that the most important content on the page appears quickly.

TTFB (Time to First Byte): measures the time it takes for the browser to receive the first byte of data from the server after making a request. A fast TTFB score means that the server is responding quickly to requests, which can help improve the perceived speed of the website.
 */
export default reportWebVitals;
