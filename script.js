// --- playlist code ---
const tracks = [
  {
    title: "Three Voices - Morton Feldman by Charlotte Mundy",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=1771117454/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "Crippled Symmetry: at June in Buffalo by Morton Feldman",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=319421928/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "Éliane Radigue: Occam Delta XV by Quatuor Bozzini",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=1446815635/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "John Cage - Empty Words by John Cage",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2707716937/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "Eva-Maria Houben – works for flute by Eva-Maria Houben",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=247282474/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "Jürg Frey.Luigi Nono - violin duos by Joanna Becker, Clemens Merkel",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=843759268/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "So You … (Hermes, Orpheus, Eurydice) by Alvin Lucier",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=4032850209/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "Adnos by Eliane Radigue",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=1269396988/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "Eva-Maria Houben - finding some stuff by Eva-Maria Houben",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2028530921/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "Eva-Maria Houben – works for double bass by Eva-Maria Houben",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=242085484/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "Irei/Tikur by Ivan Liuzzo, Augustin Lipp, Lorenzo Reggiani, James Morley",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=4165594907/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "Gentle Fire Basel by Ivan Liuzzo, Simone Spampinato, Alvin Lucier",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=87817122/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  }
];

const playlistScroll = document.getElementById('playlist-scroll');
let currentIndex = 0;

function renderPlaylist() {
  playlistScroll.innerHTML = '';
  tracks.forEach((track, i) => {
    const div = document.createElement('div');
    div.className = 'playlist-item' + (i === currentIndex ? ' active' : '');
    div.innerHTML = `<div>${track.iframe}</div><div style="font-size:0.95rem;color:#777;margin-top:0.25rem;text-align:center">${track.title}</div>`;
    playlistScroll.appendChild(div);
  });
}

function showTrack(index) {
  currentIndex = (index + tracks.length) % tracks.length;
  renderPlaylist();
}

document.getElementById('scroll-left').addEventListener('click', () => showTrack(currentIndex - 1));
document.getElementById('scroll-right').addEventListener('click', () => showTrack(currentIndex + 1));

// Initialize
renderPlaylist();

/* // --- bitmap background ---
const bitmapImages = [
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80"
];
let bgIndex = 0;
const bgDiv = document.getElementById("bg-bitmap");
function changeBg() {
  bgDiv.style.backgroundImage = `url('${bitmapImages[bgIndex]}')`;
  bgIndex = (bgIndex + 1) % bitmapImages.length;
}
changeBg();
setInterval(changeBg, 1500); */

/* // --- sfera ellittica dietro manifesto ---
const sfera = document.getElementById('sfera-ellittica');
const sferaCtx = sfera.getContext('2d');

function resizeSfera() {
  sfera.width = sfera.offsetWidth;
  sfera.height = sfera.offsetHeight;
}
resizeSfera();
window.addEventListener('resize', resizeSfera);

let sferaT = 0;
function drawSfera() {
  resizeSfera();
  sferaCtx.clearRect(0,0,sfera.width,sfera.height);
  const cx = sfera.width/2, cy = sfera.height/2;
  const rx = sfera.width/2.05, ry = sfera.height/2.45;
  sferaCtx.save();
  sferaCtx.translate(cx,cy);
  sferaCtx.rotate(Math.PI/12);
  sferaCtx.beginPath();
  for(let i=0;i<=360;i+=1){
    const rad = i*Math.PI/180;
    const deform = Math.sin(rad*5 + sferaT)*22 + Math.cos(rad*3 - sferaT*0.7)*15;
    const x = Math.cos(rad)*(rx+deform);
    const y = Math.sin(rad)*(ry+deform*0.6);
    if(i===0) sferaCtx.moveTo(x,y);
    else sferaCtx.lineTo(x,y);
  }
  sferaCtx.closePath();
  const grad = sferaCtx.createLinearGradient(-rx,0,rx,0);
  grad.addColorStop(0,"#b4e8ff");
  grad.addColorStop(0.45,"#c9b4ff");
  grad.addColorStop(1,"#ffecc7");
  sferaCtx.strokeStyle = grad;
  sferaCtx.lineWidth = 3.5;
  sferaCtx.shadowColor = "#d9cfff";
  sferaCtx.shadowBlur = 18;
  sferaCtx.stroke();
  sferaCtx.restore();
  sferaT += 0.012;
  requestAnimationFrame(drawSfera);
}
drawSfera();

// --- testo circolare su asse sferico (larga, inclinata, lenta) ---
const circCanvas = document.getElementById('circular-text-canvas');
const circCtx = circCanvas.getContext('2d');
function resizeCircCanvas() {
  circCanvas.width = circCanvas.offsetWidth;
  circCanvas.height = circCanvas.offsetHeight;
}
resizeCircCanvas();
window.addEventListener('resize', resizeCircCanvas);

const circularText = "Act I – quiet, long and slow music for the social era • ";
let circT = 0;

function drawCircularText() {
  resizeCircCanvas();
  circCtx.clearRect(0,0,circCanvas.width,circCanvas.height);
  // Sfera ellittica: radiusX molto più grande di radiusY
  const radiusX = circCanvas.width/1.7;
  const radiusY = circCanvas.height/2.7;
  const angleOffset = Math.PI/8;

  circCtx.save();
  circCtx.translate(circCanvas.width/2, circCanvas.height/2 + 8);
  circCtx.rotate(angleOffset);

  circCtx.font = "1.04rem Geist, Inter, Arial, sans-serif";
  circCtx.fillStyle = "#111";
  for(let i=0; i<circularText.length; i++) {
    const angle = (i / circularText.length) * Math.PI * 2 + circT;
    const x = Math.cos(angle) * radiusX;
    const y = Math.sin(angle) * radiusY;
    circCtx.save();
    circCtx.translate(x, y);
    circCtx.rotate(angle + Math.PI/2);
    circCtx.fillText(circularText[i], 0, 0);
    circCtx.restore();
  }
  circCtx.restore();
  circT += 0.003;
  requestAnimationFrame(drawCircularText);
}
drawCircularText();*/
