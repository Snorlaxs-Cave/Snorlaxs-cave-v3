const urlBar = document.querySelector("#urlBar")
const siteUrl = document.querySelector("#siteurl");
const urlInput = document.querySelector("#urlInput");
let encodedUrl = localStorage.getItem("agUrl");
var selectedTheme = localStorage.getItem('selectedOption');
var bgUrl = localStorage.getItem('bgUrl');

Object.defineProperty(siteUrl, 'src', {
    set: function(value) {
        this.setAttribute('src', value);
        this.dispatchEvent(new Event('srcchange'));
    }
});

urlInput.value = Ultraviolet.codec.xor.decode(encodedUrl);
urlInput.style.color = 'rgba(100, 100, 100, 0.973)';

var devToolsLoaded = false;

function devTools() {
  var siteIframe = document.getElementById('siteurl');
  if (siteIframe) {
    var innerDoc = siteIframe.contentDocument || siteIframe.contentWindow.document;
    var eruda = innerDoc.getElementById('eruda');

    if (!devToolsLoaded) {
      if (!eruda) {
        var erudaScript = document.createElement('script');
        erudaScript.src = "//cdn.jsdelivr.net/npm/eruda";
        erudaScript.onload = function() {
          var initScript = document.createElement('script');
          initScript.innerHTML = "eruda.init();eruda.show();";
          innerDoc.head.appendChild(initScript);
        };

        innerDoc.head.appendChild(erudaScript);
      }
    } else {
      if (eruda) {
        eruda.remove();
      }
    }
    devToolsLoaded = !devToolsLoaded;
  } else {
    console.error('Failed to load DevTools!');
  }
}

/* url bar functions */
function openWindow() {
    function openTabWithIframe(url) {
        const newTab = window.open('about:blank', '_blank');
        if (newTab) {
            const iframe = document.createElement('iframe');
            iframe.id = 'siteurl';
            iframe.src = url;
            iframe.style.position = 'fixed';
            iframe.style.inset = '0px';
            iframe.style.outline = 'none';
            iframe.style.border = 'none';
            iframe.style.height = '100%';
            iframe.style.width = '100%';
            iframe.style.overflow = 'hidden';
            newTab.document.body.appendChild(iframe);
        } else {
            console.error('Failed to open a new tab.');
        }
    }
    const abFrame = document.getElementById('siteurl');
    const currentSrc = abFrame.contentWindow.location.href;
    const targetUrl = currentSrc;
    openTabWithIframe(targetUrl);
    location.href = 'https://google.com';
}

var iframe = siteUrl;

function toggleFs() {
    if (!document.fullscreenElement) {
        iframe.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

function hideBar() {
    urlBar.style.display = 'none';
    siteUrl.style.height = '100vh';
}

function reload() {
    iframe.contentWindow.location.reload();
}

function forward() {
    iframe.contentWindow.history.go(1);
}

function back() {
    iframe.contentWindow.history.go(-1);
}

function exit() {
    location.href = '/';
}
