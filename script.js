var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all#");
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        var data = JSON.parse(xhr.responseText); 
        // 1.Print all the countries from the Asia continent or region using filter function.
        let asiaCont = data.filter((asiaCont) => asiaCont.region == "Asia");
        console.log("Countries in Asia");
        console.log(asiaCont);
        // 2.Get all the countries with population having less than 2lakh using filter function.
        let lessPopulationContries = data.filter((lessPopulationContries) => lessPopulationContries.population<200000);
        console.log(lessPopulationContries);
    }
}






// 3.print the details name,capital,flag using for Each and map function.
// 4.Print the total population of all counties using reduce function.
// 5.print the country name uses USD as currency.