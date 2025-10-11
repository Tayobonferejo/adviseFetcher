
    window.addEventListener("load",   function(){

        const button = document.getElementById("button");
        const adviceContainer = document.getElementById("advice-container");
        const numberID = document.createElement("p");
        const adviceText = document.createElement("h1");

        async function fetchDataFromAPI() {
        try {
            const response = await fetch("https://api.adviceslip.com/advice");
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = await response.json();
            console.log(data);
            console.log(data.slip.advice);
            console.log(data.slip.id);
            numberID.textContent = data.slip.id;

            adviceContainer.appendChild(numberID);
            adviceContainer.appendChild(adviceText);

            adviceText.textContent = data.slip.advice
        }
        catch (error) {
            console.error("Error fetching data:", error);
            adviceContainer.innerHTML = "Failed to fetch advice. Please try again.";
        }
    }

    fetchDataFromAPI();
     button.addEventListener("click", fetchDataFromAPI);
});

