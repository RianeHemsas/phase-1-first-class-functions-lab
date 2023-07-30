// Code your solution in this file!
const namesArray = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function (array) {
    const newArray = [...array.slice(0, 2)];
    return newArray;

}
// console.log(returnFirstTwoDrivers(namesArray));

const returnLastTwoDrivers = function (array) {
    const newArray = [...array.slice(2)];
    return newArray;

}
// console.log(returnLastTwoDrivers(namesArray));
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(int) {

    return function (fare) {
        return fare * int;
    }
}
const  fareDoubler= function (fare) {
    return createFareMultiplier(2)(fare);
}
const   fareTripler = function (fare) {
    return createFareMultiplier(3)(fare);
}


function selectDifferentDrivers(arrayOfDrivers, paraFunction){
    return paraFunction(arrayOfDrivers);
}
console.log(selectDifferentDrivers(namesArray,returnFirstTwoDrivers));
console.log(selectDifferentDrivers(namesArray,returnLastTwoDrivers));
