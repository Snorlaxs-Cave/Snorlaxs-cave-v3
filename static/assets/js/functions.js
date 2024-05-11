function apps(url, ag) {
    window.navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        localStorage.setItem('currentAg', ag, location.href = __uv$config.prefix + __uv$config.encodeUrl(url));
        location.href = '/dashboard';
        agU = Ultraviolet.codec.xor.encode(url);
        localStorage.setItem('agUrl', agU);
    });
}

function openLink(url) {
    apps('https://' + url);
}

function send(url) {
  location.href = window.location.origin + url;
}

function ourDiscord() {
    window.location.href = 'https://discord.gg/ujCeNsGXud';
}


function patreon() {
    window.location.href = 'https://patreon.com/SnorlaxCave';
}

function email() {
    window.location.href = 'birdy@snorlaxscave.site';
}

function ourgithub() {
    window.location.href = 'https://github.com/Snorlaxs-Cave/Snorlaxs-Cave-v2';
}

function bgChange(color) {
    localStorage.setItem("color", color)
    window.location = window.location
}

function setImageBackground() {
    var url = document.getElementById('imageUrl').value;
    localStorage.setItem("backgroundImage", url);
    window.location.reload();
}
function setName() {
    const input = document.getElementById('name');
    const newTabName = input.value;

    document.title = newTabName;
    localStorage.setItem('tabName', newTabName);
}
function cloak() {
    let url = window.location.href;
    var w = window.open("about:blank", "_blank");
    w.document.write('<iframe style="position: absolute;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 99999;height: 100%;" src="' + url + '"></iframe>');
    window.close('', '_parent', '');
}
