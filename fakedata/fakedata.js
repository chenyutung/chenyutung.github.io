var posts=[
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },
      {
        "userId": 1,
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
      },
    ];
    
    for (let i= 0; i< posts.length; i++) {
      console.log(posts[i].title);
    } ///it would shows all the title
    
    
    /// do the same thing with anyother way
    posts.forEach(p => {
      console.log(p.id);
    ///(here we rename the posts as the P)
    })
    
    
    posts.forEach(p => {
      
    /// converting data to text
    let title = document.createTextNode (p.title);
    let body = document.createTextNode(p.body);
    
    // creating containers for the text
    let header = document.createElement("h2");
    let paragraph = document.createElement ("p");
    let listItem = document.createElement("li");
    
    // put the text into the containers
    header.appendChild(title); // 在header which is h2 裡面放 title which is p.title which is all the tiele in the posts
    paragraph.appendChild(body);
      
    //put the text containers into a bigger container 
      listItem.appendChild(header); // lisItem which li 裡面是 hearder 
      listItem.appendChild(paragraph);
      
    //put the big container onto the page
    document.querySelector("ul").appendChild(listItem);/// 在 ul 裡面是 listItem 
      //get the ul that exists on the page, then append listItems
    })