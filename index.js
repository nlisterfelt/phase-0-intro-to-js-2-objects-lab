// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj}
    newObj[key]=value
    return newObj
}

updateEmployeeWithKeyAndValue(employee, "streetAddress", "new")

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]=value
    return obj
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Al")

function deleteFromEmployeeByKey(obj,key){
    const newObj = {...obj}
    delete newObj[key]
    return newObj
}
const newEmployee = deleteFromEmployeeByKey(employee, "name")

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}
newEmployee = destructivelyDeleteFromEmployeeByKey(employee,"name")