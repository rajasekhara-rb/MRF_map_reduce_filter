var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        // 1.Print all the countries from the Asia continent or region using filter function.
        let asiaCont = data.filter((asiaCont) => asiaCont.region == "Asia");
        console.log("Countries in Asia");
        console.log(asiaCont);
        // 2.Get all the countries with population having less than 2lakh using filter function.
        console.log("Countries having population less than 2 lakhs");
        let lessPopulationContries = data.filter((lessPopulationContries) => lessPopulationContries.population < 200000);
        console.log(lessPopulationContries);
        // 3.print the details name,capital,flag using for Each and map function.
        console.log("Countries name, capital, flag");
        let details = data.map((details) => console.log(`
        Name: ${details.name}
        Capital: ${details.capital}
        Flag: ${details.flags.png}
        `))

        // 4.Print the total population of all counties using reduce function.
        console.log("Countries total population");
        let totalPopulation = data.reduce((prev, curr) => { return prev + curr.population; }, 0);
        console.log(totalPopulation);

        // 5.print the country name uses USD as currency.
        console.log("Countries name that uses usd as currency");
        let countriesUsesUSD = data.filter((countriesUsesUSD) => countriesUsesUSD.currencies[code] = "USD");
        console.log(countriesUsesUSD);

    }
}








