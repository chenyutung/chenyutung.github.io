/* globals require */
console.log("Hello, Airtable");

let wrapper = document.querySelector(".wrapper");

// load the airtable library, call it "Airtable"
let Airtable = require("airtable");
console.log(Airtable);

// use the airtable library, connect to our base using API key
let base = new Airtable({ apiKey: "key8XafwyxvEVD9sn" }).base(
  "apprQovZ8QrIy14da"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("music").select({}).eachPage(gotPageOfMusic, gotAllMusic);

// an empty array to hold our book data
let music = [];

// callback function that receives our data
function gotPageOfTiktoks(records, fetchNextPage) {
  console.log("gotPageOfMusic()");
  // add the records from this page to our books array
  tiktoks.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllTiktoks(err) {
  console.log("gotPageOfMusic()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogMusic();
  showMusic();
}

// just loop through the books and console.log them
function consoleLogMusic() {
  console.log("consoleLogMusic()");
  music.forEach((music) => {
    console.log("Music:", music);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showMusic() {
  console.log("showMusic()");
  tiktoks.forEach((music) => {

    let songname = document.createElement("div");
    songname.classList.add("item");
    songname.innerText = music.fields.name;
     wrapper.appendChild(songname);

     let songimg = document.createElement("img");
     songimg.src = music.fields.songimg[0].url;
     songimg.classList.add("tiktokVideo");
     wrapper.appendChild(songimg);
  });
}
