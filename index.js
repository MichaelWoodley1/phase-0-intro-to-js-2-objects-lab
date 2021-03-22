// Write your solution in this file!
let employee = {
    name: 
        'Mike',
    streetAddress: 
        'Easy Street'
    
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
   const newEmployee = { ...employee};
   //will create a clone of original object and save it into a new variable
   newEmployee[key] = value;
   return newEmployee;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(obj, key){
    const employee = Object.assign({}, obj);
    delete employee[key];
    return employee

}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}