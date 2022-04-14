
let song = [
    {name: "Aayushi", amount: 19, music: "Bare Wit Me by Teyanna Taylor"},
    {name: "stephanie quintero ", amount: 20, music:"Sejodioto by Karol G "},
    {name: "Lena E", amount: 18, music:"Baby Blue by Luke Hemmings"},
    {name: "Sophia Topalis", amount: 20, music:"Soft core by the Neighbourhood "},
    {name: "Gabriel Neves", amount: 21, music:"Next to Me by Imagine Dragons"},
    {name: "Zeshan", amount: 29, music:"With you for you by Parteek kuhad"},
    {name: "WB", amount: 19, music:"On & On Erykah Badu"}
    ];
  
    // One: Use the amount to indicate how big each circle is
  
  // First show all the flowers and create divs for each of them
  let container = document.querySelector(".garden");
  // create a counter variable that will give us each flowers number in the array
  let i = 0;
  
  function displayFlowers(song) {
    // creates a new div; appends that div to the container
    let newItem = document.createElement("div");
    let songDiv = container.appendChild(newItem);
    // increase the counter variable by one
    i++;
    // adds a shared class to each new div
    newItem.classList.add("song");
    // adds a specific class to each new div
    newItem.classList.add("song" + [i]);
    // places the flower name and amount to the div
    songDiv.innerHTML = song.name + " – " + song.amount + " – "+  song.music;
    // sets height of flower to the amount. try changing height to width, or padding
    songDiv.style.height = song.amount + "vh";
    console.log(song);
  }
  // loops through the flowers and runs the displayFlowers function for each one
  song.forEach(displayFlowers);