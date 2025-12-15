# 🌍 Country Search App

## 📌 Overview

The **Country Search App** is a JavaScript web application that allows users to search for countries dynamically. As users type in the search input, the app fetches country data from an API and displays results in real-time.

This project helps practice **fetch API**, **DOM manipulation**, **event handling**, and **dynamic filtering** in JavaScript.

---

## 🧩 Features

* Search countries dynamically as you type
* Displays country name, flag, and population
* Shows a loading spinner while fetching data
* Updates search results instantly

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (Fetch API)

---

## ⚙️ How It Works

1. On page load, `getCountries()` fetches country data from `https://apis.ccbp.in/countries-data`.
2. Data is stored in the `countriesList` array.
3. User types in the search input field.
4. `searchResult()` updates the `searchValue` and calls `displayResults()`.
5. `displayResults()` filters countries containing the search value and displays them using `createAndAppend()`.
6. Each country card shows the flag, name, and population.

---

## 📂 Project Structure

```
country-search-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
function createAndAppend(country) {
    let { name, flag, population } = country;

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
```

---

## 📚 Concepts Covered

* Fetch API to get data from external source
* DOM element creation and appending
* Event handling (`keyup` event)
* Filtering arrays dynamically
* Displaying loading spinners during API calls

---

## 🚀 Future Improvements

* Make search case-insensitive
* Add pagination for large datasets
* Add country region or capital information
* Add animations to country cards
* Enable sorting by population or name

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript Fetch API**, **dynamic filtering**, and **DOM manipulation skills**.

---

⭐ If you find this project useful, feel free to star the repository!
