const div = document.querySelector('div');
const ul = document.querySelector('ul');
const li = document.querySelector('li');
let container = document.querySelector(".container");

async function getPeople(){ 
  let response = await fetch('https://api.airtable.com/v0/apprQovZ8QrIy14da/Form%20Responses%201?api_key=key8XafwyxvEVD9sn'); 
  let data = response.json(); return data; 
}

getPeople().then(data => { makeList(data.records) });

function makeList(records) { 
  for(let i = 0; i < records.length; i++) { 
    let song = records[i].fields.song; 
    let listItem = document.createElement('div'); 
    let songimg = records[i].fields.songimg;

    listItem.classList.add("pname");


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

  
    

    
    listItem.appendChild(document.createTextNode(songimg+song));
    listItem.appendChild( moodnumberItem); 
    listItem.appendChild(genreItem);
    listItem.appendChild(nameItem);
    

    container.appendChild(listItem); 

   

    
  }
  
}
