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

   
  // base('music').select({
  //   // Options go in here
  //   }).eachPage(gotPageOfMusic, gotAllMusic);
  
  // music.forEach((music)=> {
  
  //   var filterA= music.field.tags;
  //   filterA.forEach(Function(tags) {
  //    container.classList.add.tags
  //   })
    
  // })
 
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
