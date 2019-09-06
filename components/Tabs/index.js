// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(res => {
        console.log(res);
        topics.appendChild(UserTabs(res.data))
    })
    .catch (error => {
        console.log("this is an error", error)
      })

    const topics = document.querySelector('.topics');
    

    function UserTabs(user){
        const newTab = document.createElement("div");
        const newTab2 = document.createElement("div");
        const newTab3 = document.createElement("div");
        // newTab4 = document.createElement("div");
        // newTab5 = document.createElement("div");

        newTab.appendChild(newTab2);
        newTab.appendChild(newTab3);
        // newTab.appendChild(newTab4);
        // newTab.appendChild(newTab5);

        newTab.classList.add('tab');

        newTab.textContent = user.topics[0];
        newTab2.textContent = user.topics[1];
        newTab3.textContent = user.topics[2];


        return newTab
    }

    
