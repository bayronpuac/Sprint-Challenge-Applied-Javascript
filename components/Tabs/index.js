// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const topicsArray = ['javascript', 'bootstrap'];

// topicsArray.forEach(topics => {
//     axios.get(`https://lambda-times-backend.herokuapp.com/${topics}`)
//         .then(res => {
//             console.log(res);
//             cards.appendChild(UserTabs(res.data))
//         })
//         .catch (error => {
//             console.log("this is an error", error)
//           })
//   })


    axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(res => {
        topics.appendChild(UserTabs(res.data))
    })
    .catch (error => {
        console.log("this is an error", error)
      })



    const topics = document.querySelector('.topics');
    

    function UserTabs(tabs){
        const newTab = document.createElement("div");
        const newTab2 = document.createElement("div");
        const newTab3 = document.createElement("div");
        const newTab4 = document.createElement("div");
        const newTab5 = document.createElement("div");

        newTab.appendChild(newTab2);
        newTab2.appendChild(newTab3);
        newTab3.appendChild(newTab4);
        newTab4.appendChild(newTab5);

        newTab.classList.add('tab');

        newTab.textContent = tabs.topics[0];
        newTab2.textContent = tabs.topics[1];
        newTab3.textContent = tabs.topics[2];
        newTab4.textContent = tabs.topics[3];
        newTab5.textContent = tabs.topics[4];
  


        return newTab
    }

    // function UserTabs(bootstrap){
    //     const newTab = document.createElement("div");
    //     const newTab2 = document.createElement("div");
    //     const newTab3 = document.createElement("div");
    //     // newTab4 = document.createElement("div");
    //     // newTab5 = document.createElement("div");

    //     newTab.appendChild(newTab2);
    //     newTab.appendChild(newTab3);
    //     // newTab.appendChild(newTab4);
    //     // newTab.appendChild(newTab5);

    //     newTab.classList.add('tab');

    //     newTab.textContent = bootstrap.topics[2];
  


    //     return newTab
    // }

    // function UserTabs(technology){
    //     const newTab = document.createElement("div");
    //     const newTab2 = document.createElement("div");
    //     const newTab3 = document.createElement("div");
    //     // newTab4 = document.createElement("div");
    //     // newTab5 = document.createElement("div");

    //     newTab.appendChild(newTab2);
    //     newTab.appendChild(newTab3);
    //     // newTab.appendChild(newTab4);
    //     // newTab.appendChild(newTab5);

    //     newTab.classList.add('tab');

    //     newTab.textContent = technology.topics[3];
  


    //     return newTab
    // }
    
