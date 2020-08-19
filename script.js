let ageContainer = document.getElementById('my-age');

const ageCalculator = () => {
    const now = new Date();
    const thisYear = now.getFullYear();
    const birthdayThisYear = new Date(thisYear, 8, 22);
    
    return now >= birthdayThisYear
        ? thisYear - 2000 : thisYear - 2001;
}

ageContainer.innerText = ageCalculator();