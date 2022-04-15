const div = document.querySelector('div');
const ul = document.querySelector('ul');

async function getPeople(){ 
  let response = await fetch('https://api.airtable.com/v0/apprQovZ8QrIy14da/Form%20Responses%201?api_key=key8XafwyxvEVD9sn'); 
  let data = response.json(); return data; 
}

getPeople().then(data => { makeList(data.records) });

function makeList(records) { 
  for(let i = 0; i < records.length; i++) { 
    let name = records[i].fields.name; 
    let listItem = document.createElement('li'); 
    listItem.appendChild(document.createTextNode(name)); 
    div.appendChild(listItem); 
  } 

  for(let i = 0; i < records.length; i++) { 
    let age = records[i].fields.age; 
    let listItem = document.createElement('ul'); 
    listItem.appendChild(document.createTextNode(age)); 
    div.appendChild(listItem);   
  } 

  
}
