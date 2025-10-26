// --- playlist code ---
const tracks = [
  {
    title: "Éliane Radigue: Occam Delta XV by Quatuor Bozzini",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=1446815635/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
   {
    title: "Radu Malfatti: One man and a fly",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2380711875/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
   {
    title: "Eliane Radigue: Adnos",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=1269396988/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "Morton Feldman: Three Voices. By Charlotte Mundy",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=1771117454/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
    {
    title: "Eva-Maria Houben: Works for double bass",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=242085484/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
   {
    title: "Ivan Liuzzo, Simone Spampinato, Alvin Lucier: Gentle Fire Basel",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=87817122/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "Morton Feldman: Crippled Symmetry",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=319421928/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "Eva-Maria Houben: Works for flute",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=247282474/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "Jürg Frey.Luigi Nono: violin duos. By Joanna Becker, Clemens Merkel",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=843759268/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "Alvin Lucier: So You … (Hermes, Orpheus, Eurydice)",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=4032850209/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "Eva-Maria Houben: Finding some stuff",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2028530921/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
  },
  {
    title: "Ivan Liuzzo: Irei/Tikur with Augustin Lipp, Lorenzo Reggiani, James Morley",
    iframe: `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=4165594907/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>`
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






