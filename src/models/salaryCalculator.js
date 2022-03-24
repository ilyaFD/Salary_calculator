


const getSalary = (occupation, experience) => {
    let salary;
    switch(occupation) {
        case 'Programmer':
            salary = 30000
        break;
        case 'Teacher':
            salary = 27000
        break;
        case 'Cashier':
            salary = 25000
        break;
        default:
    }

    let extra = 0;
    switch(true) {
        case 3 < experience && experience < 8 :
            extra = (salary / 100) * 20
        break;
        case 7 < experience && experience < 11 :
            extra = (salary / 100) * 40
        break;
        case 10 < experience :
            extra = (salary / 100) * 60
        break;
        default:
    }

    return salary + extra
}


const getBasicTxes = (salary, city, year) => {
    let basicTaxes;
    switch(city) {
        case "Stockholm" :
            if (year === "2019") {
                basicTaxes = (salary / 100) * 30
            } else if (year === "2020") {
                basicTaxes = (salary / 100) * 29
            }
        break;
        case "Gothenburg" :
            if (year === "2019") {
                basicTaxes = (salary / 100) * 25
            } else if (year === "2020") {
                basicTaxes = (salary / 100) * 22
            }
        break;
        default:
    }
    return basicTaxes
}

const getTaxes = (salary, city, year) => {
    let totalTaxes
    switch(true) {
        case salary <= 36000 :
            totalTaxes = getBasicTxes(salary, city, year)
        break;
        case salary > 36000 && salary <= 45000 :
            totalTaxes = getBasicTxes(36000, city, year) + (((salary - 36000) / 100) * 50)
        break;
        case salary > 45000 :
            totalTaxes = getBasicTxes(36000, city, year) + (((45000 - 36000) / 100) * 50) + (((salary - 45000) / 100) * 70)
        break;
        default:
    }
    return totalTaxes;
}

const salaryCalculator = (occupation, experience, city, year) => {
    if (!occupation || !experience || !city || !year) return;

    const salary = getSalary(occupation, experience);
    const taxes = getTaxes(salary, city, year);

    return {
      gross: salary,
      net: salary - taxes,
    }
}

export default salaryCalculator;