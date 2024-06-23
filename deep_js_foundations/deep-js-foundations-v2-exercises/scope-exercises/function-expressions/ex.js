function recordIdToString({ id, name, paid}) {
  return console.log(`${name} (${id}): ${paid ? "Paid" : "Not Paid"}`)
};
function matchId(id) {
 return function (studentRecord) { return id == studentRecord.id }
}
function matchIdToRecord(id) {
  return studentRecords.find(matchId(id))
}

function sortRecordsByName(recordA, recordB) {
  return recordA.name > recordB.name
} 

function printRecords(recordIds) {
  const result = 
    recordIds
    .map(matchIdToRecord)
    .sort(sortRecordsByName)

  result.forEach(recordIdToString)
}

function getStudentId({ id }) { return id } 
function hasStudentPaid({ paid }) { return paid }
function getPaidStudents() {
  return studentRecords.filter(hasStudentPaid)
}
function notYetEnrolled(id) {
  return !currentEnrollment.includes(id)
}

function paidStudentsToEnroll() {
  const futureEnrollement = 
    getPaidStudents()
    .map(getStudentId)
    .filter(notYetEnrolled)

  return [...currentEnrollment, ...futureEnrollement] 
}

function isAmongPaidStudentIds(paidStudentsIds) {
  return function (id) {
    return !paidStudentsIds.includes(id)
  }
}

function remindUnpaid(recordIds) {
  const paidStudentsIds = getPaidStudents().map(getStudentId)
  const unpaidStudents = recordIds.filter(isAmongPaidStudentIds(paidStudentsIds))
  printRecords(unpaidStudents)
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
