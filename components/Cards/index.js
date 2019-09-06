// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// const articlesArray = ['javascript', 'bootstrap'];

// articlesArray.forEach(articles => {
//     axios.get(`https://lambda-times-backend.herokuapp.com/${articles}`)
//         .then(res => {
//             console.log(res);
//             cards.appendChild(UserCard(res.data))
//         })
//         .catch (error => {
//             console.log("this is an error", error)
//           })
//   })

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(res => {
        const js = res.data.articles.javascript;
        js.forEach(article => {
        cardsContainer.appendChild(UserCard(article))
        })
        const bootstrap = res.data.articles.bootstrap;
        bootstrap.forEach(article => {
        cardsContainer.appendChild(UserCard(article))
        })

        const technology = res.data.articles.technology;
        technology.forEach(article => {
        cardsContainer.appendChild(UserCard(article))
        })
    
        const jquery = res.data.articles.jquery;
        jquery.forEach(article => {
        cardsContainer.appendChild(UserCard(article))
        })
    
        const node = res.data.articles.node;
        node.forEach(article => {
        cardsContainer.appendChild(UserCard(article))
        })

})

    const cardsContainer = document.querySelector('.cards-container');
     

function UserCard(Card){
    const newCard = document.createElement("div");
    const newHeadLine = document.createElement("div");
    const newAuthor = document.createElement("div");
    const newimg = document.createElement("div");
    const newimgSrc = document.createElement("img");
    const newAuthorsName = document.createElement("span");

    newCard.appendChild(newHeadLine); 
    newCard.appendChild(newAuthor);
    newAuthor.appendChild(newimg);
    newimg.appendChild(newimgSrc);
    newAuthor.appendChild(newAuthorsName);


    newCard.classList.add('card');
    newHeadLine.classList.add('headline');
    newAuthor.classList.add('author');
    newimg.classList.add('img-container');

    newHeadLine.textContent =  `${Card.headline}`;
    newimgSrc.src = Card.authorPhoto;
    newAuthorsName.textContent = Card.authorName;

    return newCard
}

// function UserCard(Card1){
//         const newCard1 = document.createElement("div");
//         const newHeadLine = document.createElement("div");
//         const newAuthor = document.createElement("div");
//         const newimg = document.createElement("div");
//         const newimgSrc = document.createElement("img");
//         const newAuthorsName = document.createElement("span");
    
//         newCard1.appendChild(newHeadLine);
//         newCard1.appendChild(newimgSrc);
//         newCard1.appendChild(newAuthor);
//         newAuthor.appendChild(newAuthorsName);
    
    
//         newCard1.classList.add('card');
//         newHeadLine.classList.add('headline');
//         newAuthor.classList.add('author');
//         newimg.classList.add('img-container');
    
//         newHeadLine.textContent =  Card1.articles.javascript[1].headline;
//         newimgSrc.src = Card1.articles.javascript[1].authorPhoto;
//         newAuthorsName.textContent = Card1.articles.javascript[1].authorName;
    
//         return newCard1
//     }
    