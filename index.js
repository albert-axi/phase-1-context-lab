/* Your Code Here */

function createEmployeeRecord(employee){

    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees){ 
    return employees.map(employee => {
        const newEmployee = createEmployeeRecord(employee)
        return newEmployee
    })
}

function createTimeInEvent(timeStamp){
    const [date, hour] = timeStamp.split(" ") // ["YYYY-MM-DD", "HHMM"]
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour), // "HHMM"
        date // "YYYY-MM-DD"
    })

    return this
}

function createTimeOutEvent(timeStamp){
    const [date, hour] = timeStamp.split(" ") // ["YYYY-MM-DD", "HHMM"]
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour), // "HHMM"
        date // "YYYY-MM-DD"
    })

    return this
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find( t => t.date === date)
    const timeOut = this.timeOutEvents.find( t => t.date === date)

    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date){
    const hoursWorked = hoursWorkedOnDate.call(this, date)

    return Math.round(hoursWorked) * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(e=> e.firstName === firstName)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d) // 1500
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(srcArray) {
    const payable = srcArray.reduce(function (memo, cRecord) {
        return memo + allWagesFor.call(cRecord) // 10000
    }, 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
