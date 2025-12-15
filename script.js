let searchInput = document.getElementById("searchInput");
let searchResultsContainer = document.getElementById("resultCountries");
let spinner = document.getElementById("spinner");
let searchValue = "";
let countriesList = [];

function createAndAppend(country) {
    let {
        name,
        flag,
        population
    } = country;


    let resultItemContainer = document.createElement("div");
    resultItemContainer.classList.add("country-card", "d-flex", "flex-row");
    searchResultsContainer.appendChild(resultItemContainer);

    let flagEl = document.createElement("img");
    flagEl.classList.add("country-flag");
    flagEl.src = flag;
    resultItemContainer.appendChild(flagEl);

    let countryInfoEl = document.createElement("div");
    countryInfoEl.classList.add("d-flex", "flex-column");
    resultItemContainer.appendChild(countryInfoEl);


    let nameEl = document.createElement("p");
    nameEl.classList.add("country-name");
    nameEl.textContent = name;
    countryInfoEl.appendChild(nameEl);



    let populationEl = document.createElement("p");
    populationEl.classList.add("country-population");
    populationEl.textContent = population;
    countryInfoEl.appendChild(populationEl);

}

function displayResults() {
    searchResultsContainer.textContent = "";

    for (let country of countriesList) {
        let name = country.name;
        if (name.includes(searchValue)) {
            createAndAppend(country);
        }
    }
}

function getCountries() {
    let url = "https://apis.ccbp.in/countries-data";
    let options = {
        method: "GET"
    }
    spinner.classList.toggle("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            spinner.classList.toggle("d-none");
            countriesList = data;
            displayResults();
        });

}

function searchResult(event) {
    searchValue = event.target.value;
    displayResults();
}
getCountries();
searchInput.addEventListener("keyup", searchResult);
