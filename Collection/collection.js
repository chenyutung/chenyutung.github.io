const div = document.querySelector('div');
const ul = document.querySelector('ul');
const li = document.querySelector('li');
let container = document.querySelector(".container");


async function getPeople(){ 
  let response = await fetch('https://api.airtable.com/v0/apprQovZ8QrIy14da/music?api_key=key8XafwyxvEVD9sn'); 
  let data = response.json(); return data; 
}

getPeople().then(data => { makeList(data.records) });

function makeList(records) { 
  for(let i = 0; i < records.length; i++) { 
    let song = records[i].fields.song; 
    let listItem = document.createElement('div'); 
    listItem.classList.add("pname");




    let songimg = records[i].fields.songimg;
    let imageContainer = document.createElement("img");
    imageContainer.src = songimg[0].url;
    console.log(songimg[0].url);
    imageContainer.classList.add("songimg");




    let moodnumber = records[i].fields.moodnumber; 
    let moodnumberItem = document.createElement('div'); 
    moodnumberItem.classList.add("moodnumber");
    moodnumberItem.innerHTML = moodnumber;

    let genre = records[i].fields.genre; 
    let genreItem = document.createElement('div'); 
    genreItem.classList.add("genre");
    genreItem.innerHTML = genre;
    

    let name = records[i].fields.name; 
    let nameItem = document.createElement('div'); 
    nameItem.classList.add("name");
    nameItem.innerHTML = name;

  
    

    listItem.appendChild(imageContainer);
    listItem.appendChild(document.createTextNode(song));
    listItem.appendChild(moodnumberItem); 
    moodnumberItem.appendChild(genreItem);
    listItem.appendChild(nameItem);
  
    

    container.appendChild(listItem); 



  //filter buttons
  // let names = ["A", "C", "E", "G", "H", "G", "H", "I", "J", "K","L", "N", "O", "P", "R", "S", "S", "T", "U", "W", "Z", "RnB", "Soul", "Alternative", "Indie","Pop", "Rock", "P", "R", "S", "S", "T", "Electronic", "Hiphop", "Kpop", "Jazzswing", "Classical", "Musical",];

 
  

  // container.addEventListener("click", function(){
  //   container.appendChild(listItem).classList.toggle("active");
    
  // })

  //   var filter = records[i].fields.tags;
  //   filter.forEach(function(tags){
  //   })
    
  //   var A = records[i].querySelector (".A");
  //   A.addEventListener("click", function(){
  //     if (container.appendChild(lisItem).contains("A")){
  //       container.style.background = "pink";
  //       container.style.display = "block";
  //       A.classList.add("active");
  //     } else {
  //       container.style.background = "white";
  //       container.style.display = "none";
  //     }
  //   })




    }
  }
  



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}











// import lottieWeb from 'https://cdn.skypack.dev/lottie-web';

// const playIconContainer = document.getElementById('play-icon');
// const audioPlayerContainer = document.getElementById('audio-player-container');
// const seekSlider = document.getElementById('seek-slider');
// const volumeSlider = document.getElementById('volume-slider');
// const muteIconContainer = document.getElementById('mute-icon');
// let playState = 'play';
// let muteState = 'unmute';

// const playAnimation = lottieWeb.loadAnimation({
//   container: playIconContainer,
//   path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json',
//   renderer: 'svg',
//   loop: false,
//   autoplay: false,
//   name: "Play Animation",
// });

// const muteAnimation = lottieWeb.loadAnimation({
//     container: muteIconContainer,
//     path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/mute/mute.json',
//     renderer: 'svg',
//     loop: false,
//     autoplay: false,
//     name: "Mute Animation",
// });

// playAnimation.goToAndStop(14, true);

// playIconContainer.addEventListener('click', () => {
//     if(playState === 'play') {
//         playAnimation.playSegments([14, 27], true);
//         playState = 'pause';
//     } else {
//         playAnimation.playSegments([0, 14], true);
//         playState = 'play';
//     }
// });

// muteIconContainer.addEventListener('click', () => {
//     if(muteState === 'unmute') {
//         muteAnimation.playSegments([0, 15], true);
//         muteState = 'mute';
//     } else {
//         muteAnimation.playSegments([15, 25], true);
//         muteState = 'unmute';
//     }
// });

// const showRangeProgress = (rangeInput) => {
//     if(rangeInput === seekSlider) {
//       audioPlayerContainer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
//     } else {
//       audioPlayerContainer.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
//     }
// }

// seekSlider.addEventListener('input', (e) => {
//     showRangeProgress(e.target);
// });
// volumeSlider.addEventListener('input', (e) => {
//     showRangeProgress(e.target);
// });






