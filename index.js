function findMatching(namesArray, string) {
    return namesArray.filter(function(el) {
        return el.toLowerCase().indexOf(string.toLowerCase()) !== -1
})
}
console.log(findMatching(drivers, string))

// 

function fuzzyMatch(namesArray, letter) {
    return namesArray.filter((namesArray) => namesArray.startsWith(letter))
}
 
//

function matchName(driverObj, string) {
    return driverObj.filter((driverObj) => driverObj.name === string)
}

