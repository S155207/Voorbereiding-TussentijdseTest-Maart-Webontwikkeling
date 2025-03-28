import * as readline from "readline-sync"

const fetchCollegesByCountry = async (country: string) => {
    const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
    const data = await response.json();
    return data;
}

const printColleges = async (country: string) => {
    const colleges = await fetchCollegesByCountry(country);
    console.log(`Colleges in ${country}:`);
    for (let i = 0; i < colleges.length; i++) {
        console.log(colleges[i].name);
    };
};

const countries = ["France", "Netherlands", "United Kingdom", "Belgium", "Luxemburg", "Ireland", "Spain", "Portugal"];
const country = countries[readline.keyInSelect(countries, "Which country would you like to list its Colleges with high school education degrees?")];
printColleges(country);