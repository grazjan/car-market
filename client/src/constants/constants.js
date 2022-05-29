//constants.js


/* Production years */
/* ****************************************** */

//Create years array dynamically 
const createYears = () => {

    const date = new Date();
    const currentYear = date.getFullYear();

    let years = [];
    var createdYear;
    const offset = 1900; 


    for(let index = 0; index < 100; index++) {

        //To 1990 render only in 10 years steps
        //From 1990 show full years
        if (createdYear <= 1990) {
            createdYear = createdYear - 10;
        } else {
            createdYear = currentYear - index;
        }

        //Break the loop if the offset was reached
        if (createdYear === offset) break;

        //Push created year to array
        years.push({
            label: createdYear, 
            value: createdYear,
        })

    }

    return years;

}

export const productionYears =  createYears();


/* Price */
/* ****************************************** */

//Create years array dynamically 
const createPrice = () => {

    let price = [];
    let currentPrice;

    for(let index = 0; index < 100; index++) {

        if(currentPrice < 30000) {
            currentPrice = currentPrice + 1000;
        } else if (currentPrice < 60000) {
            currentPrice = currentPrice + 5000;
        } else {
            currentPrice = currentPrice + 10000;
        }
       
        //Break the loop if the offset was reached
        if (currentPrice === 100000) break;
        
        //Push created year to array
        price.push({
            label: currentPrice, 
            value: currentPrice,
        })

    }

    return price;

}

export const price =  createPrice();