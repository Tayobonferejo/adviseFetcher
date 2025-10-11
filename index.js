
    async function fetchDataFromAPI() {
        try {
            const response = await fetch("https://api.adviceslip.com/advice");
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = await response.json();
            console.log(data)
            // return data;
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    fetchDataFromAPI();