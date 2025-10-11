
    window.addEventListener("load",   async function fetchDataFromAPI() {
        try {
            const response = await fetch("https://api.adviceslip.com/advice");
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = await response.json();
            console.log(data);
            console.log(data.slip.advice);
            // return data;

            const adviceContainer = document.getElementById("advice-container");
            adviceContainer.innerHTML = data.slip.advice
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    })