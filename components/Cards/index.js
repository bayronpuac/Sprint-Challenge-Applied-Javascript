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

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(res => {
        console.log(res);
        cards.appendChild(UserCard(res.data))
    })
    .catch (error => {
        console.log("this is an error", error)
      })

    const cards = document.querySelector('.cards-container');
     

function UserCard(Card){
    const newCard = document.createElement("div");
    const newHeadLine = document.createElement("div");
    const newAuthor = document.createElement("div");
    const newimg = document.createElement("div");
    const newimgSrc = document.createElement("img");
    const newAuthorsName = document.createElement("span");

    newCard.appendChild(newHeadLine);
    newHeadLine.appendChild(newAuthor);
    newAuthor.appendChild(newimg);
    newAuthor.appendChild(newAuthorsName);
    newimg.appendChild(newimgSrc);


    newCard.classList.add('card');
    newHeadLine.classList.add('headline');
    newAuthor.classList.add('author');
    newimg.classList.add('img-container');

    newHeadLine.textContent =  Card.articles.headline;
    newimgSrc.src = Card.articles.bootstrap[0].authorPhoto;
    newAuthorsName.textContent = Card.articles.bootstrap[0].authorName;

    return newCard
}

function UserCard2(Card){
    const newCard2 = document.createElement("div");
    const newHeadLine = document.createElement("div");
    const newAuthor = document.createElement("div");
    const newimg = document.createElement("div");
    const newimgSrc = document.createElement("img");
    const newAuthorsName = document.createElement("span");

    newCard2.appendChild(newHeadLine);
    newCard2.appendChild(newAuthor);
    newCard2.appendChild(newimg);
    newCard2.appendChild(newimgSrc);
    newCard2.appendChild(newAuthorsName);

    newCard.classList.add('card');
    newCard.classList.add('headline');
    newCard.classList.add('author');
    newCard.classList.add('img-container');

    newHeadLine.textContent =  Card.articles.bootstrap[1].headline;

    return newCard
}
function UserCard3(Card){
    const newCard = document.createElement("div");
    const newHeadLine = document.createElement("div");
    const newAuthor = document.createElement("div");
    const newimg = document.createElement("div");
    const newimgSrc = document.createElement("img");
    const newAuthorsName = document.createElement("span");

    newCard.appendChild(newHeadLine);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newimg);
    newCard.appendChild(newimgSrc);
    newCard.appendChild(newAuthorsName);

    newCard.classList.add('card');
    newCard.classList.add('headline');
    newCard.classList.add('author');
    newCard.classList.add('img-container');

    newHeadLine.textContent =  Card.articles.bootstrap[2].headline;

    return newCard
}


