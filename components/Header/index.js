// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


function Header() {
    const
    newCard = document.createElement('div'),
    newDate = document.createElement('span'),
    newh1 = document.createElement('h1'),
    newTemp = document.createElement('span');

    newCard.appendChild(newDate);
    newCard.appendChild(newh1);
    newCard.appendChild(newTemp);

    newCard.classList.add('header');
    newDate.classList.add('date');
    newTemp.classList.add('temp');

    newDate.textContent = `SMARCH 28, 2019`;
    newh1.textContent = `Lambda Times`
    newTemp.textContent = `98°`;

    return newCard

}

const header = document.querySelector('.header-container');
header.appendChild(Header())