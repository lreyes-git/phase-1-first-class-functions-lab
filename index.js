// Code your solution in this file!
const returnFirstTwoDrivers = arrayDrivers => arrayDrivers.slice(0,2);

const returnLastTwoDrivers = arrayDrivers => arrayDrivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fare) => {
    const fareMultiplier = multiplier => multiplier * fare;
    return fareMultiplier;
}

const fareDoubler = fare => createFareMultiplier(fare)(2);

const fareTripler = fare => createFareMultiplier(fare)(3);

const selectDifferentDrivers = (arrayDrivers, chosenFunction) => {
    if (chosenFunction === returnFirstTwoDrivers) {
       return returnFirstTwoDrivers(arrayDrivers);
    } else {
        return returnLastTwoDrivers(arrayDrivers);
    }
}
