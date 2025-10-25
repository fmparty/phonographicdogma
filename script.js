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






