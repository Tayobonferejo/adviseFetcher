
    window.addEventListener("load",   function(){

        const button = document.getElementById("button");
        const trigger= document.getElementById("mainSection");
        const adviceContainer = document.getElementById("advice-container");
        const numberID = document.createElement("p");
        const adviceText = document.createElement("h1");
        adviceContainer.appendChild(numberID);
        adviceContainer.appendChild(adviceText);


        async function fetchDataFromAPI() {
        try {
            const response = await fetch("https://api.adviceslip.com/advice");
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = await response.json();
            console.log(data);
            numberID.textContent = `ADVICE #${data.slip.id}`;

            adviceText.textContent = `"${data.slip.
            advice}"`;

            // Fade back in after updating text
            trigger.classList.remove("is-active");

        }
        catch (error) {
            console.error("Error fetching data:", error);
            adviceText.textContent = "Failed to fetch advice. Please try again.";
            trigger.classList.remove("is-active");
        }
    }

    fetchDataFromAPI();

     button.addEventListener("click", function(){
        trigger.classList.add("is-active");
     });

      // When transition (fade-out) ends, fetch new advice
        trigger.addEventListener("transitionend", function() {
                if (trigger.classList.contains("is-active")) {
                fetchDataFromAPI();
                }
            });

});



