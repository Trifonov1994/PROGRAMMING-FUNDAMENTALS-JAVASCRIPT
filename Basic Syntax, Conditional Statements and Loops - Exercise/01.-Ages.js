function ages(age) {
    let typeOfPerson = 0
    if (age >= 0 && age <= 2) {
        typeOfPerson = "baby"
    }
    else if (age > 2 && age <= 13) {
        typeOfPerson = "child"
    }
    else if (age > 13 && age <= 19) {
        typeOfPerson = "teenager"
    }
    else if (age > 19 && age <= 65) {
        typeOfPerson = "adult"
        
    }
    else if (age >= 66) {
        typeOfPerson = "elder"
    }
    else {
        typeOfPerson = "out of bounds"
    }

    console.log(typeOfPerson)
}
ages(0)