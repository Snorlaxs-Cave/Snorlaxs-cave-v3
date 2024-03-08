self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
try {
    window.addEventListener('load', function() {
  
      console.log("loaded");
  
      if (typeof window != 'undefined') {
  
        console.log("Injection started");
  
        let backBtnExists = document.getElementById("__snorlax__backBtn");
  
        if (/dashboard|portal/.test(window.location.href) && !backBtnExists) {
  
          console.log("Started adding button");
  
          const backBtnDiv = document.createElement("div");
          const backBtn = document.createElement("button");
          const backBtnStyle = document.createElement("style");
  
          document.body.prepend(backBtnDiv);
          backBtnDiv.appendChild(backBtn);
          backBtnDiv.appendChild(backBtnStyle);
  
          let visible = true;
  
          document.addEventListener('keydown', (e) => {
            if (e.key === '#') {
              visible = !visible;
              backBtn.style.display = visible ? 'block' : 'none';  
            }
          });
  
          try {
            backBtn.addEventListener('click', function() {
              window.history.back();
            });
            console.log("Event listener added")
          } catch (e) { console.log(e); }
  
          backBtn.id = "__snorlax__backBtn";
          backBtnStyle.innerHTML = "#__snorlax__backBtn{position: absolute; z-index: 9999; left: 1vw; top: 2vh; color: white;text-decoration: none;letter-spacing: 3px;font-weight: bold;font-size: 14px;padding: 14px 16px;background-color: rgba(0, 0, 0, 0.1);border-radius: 8px;border: none;transition: background-color .5s;cursor: pointer;}#__snorlax__backBtn:hover{background-color: rgba(2, 55, 105, 0.637);}";
          backBtn.innerHTML = "Go Back"
          console.log("Finished adding button " + backBtn);
        } else if (backBtnExists) {
          console.log("Back Button Already Exists")
        } else {
          console.log("Not Injecting, Wrong Page")
        }
      }
    });
  } catch (e) {}
  
try {
    window.addEventListener('load', function() {
  
      console.log("loaded");
  
      if (typeof window != 'undefined') {
  
        console.log("Injection started");
  
        let backBtnExists = document.getElementById("__snorlax__backBtn");
  
        if (/dashboard|portal/.test(window.location.href) && !backBtnExists) {
  
          console.log("Started adding button");
  
          const backBtnDiv = document.createElement("div");
          const backBtn = document.createElement("button");
          const backBtnStyle = document.createElement("style");
  
          document.body.prepend(backBtnDiv);
          backBtnDiv.appendChild(backBtn);
          backBtnDiv.appendChild(backBtnStyle);
  
          let visible = true;
  
          document.addEventListener('keydown', (e) => {
            if (e.key === '#') {
              visible = !visible;
              backBtn.style.display = visible ? 'block' : 'none';  
            }
          });
  
          try {
            backBtn.addEventListener('click', function() {
              window.history.back();
            });
            console.log("Event listener added")
          } catch (e) { console.log(e); }
  
          backBtn.id = "__snorlax__backBtn";
          backBtnStyle.innerHTML = "#__snorlax__backBtn{position: absolute; z-index: 9999; left: 1vw; top: 2vh; color: white;text-decoration: none;letter-spacing: 3px;font-weight: bold;font-size: 14px;padding: 14px 16px;background-color: rgba(0, 0, 0, 0.1);border-radius: 8px;border: none;transition: background-color .5s;cursor: pointer;}#__snorlax__backBtn:hover{background-color: rgba(2, 55, 105, 0.637);}";
          backBtn.innerHTML = "Go Back"
          console.log("Finished adding button " + backBtn);
        } else if (backBtnExists) {
          console.log("Back Button Already Exists")
        } else {
          console.log("Not Injecting, Wrong Page")
        }
      }
    });
  } catch (e) {}
  
