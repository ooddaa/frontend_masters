const recordIdToString = ({ id, name, paid}) => console.log(`${name} (${id}): ${paid ? "Paid" : "Not Paid"}`)

const printRecords = recordIds => 
  recordIds
    .map(id => studentRecords.find(studentRecord => id == studentRecord.id)
)
    .sort((recordA, recordB) => recordA > recordB)
    .forEach(recordIdToString)

const getStudentId = ({ id }) => id 
const hasStudentPaid = ({ paid }) => paid
const getPaidStudents = () => studentRecords.filter(hasStudentPaid)
const notYetEnrolled = (id) => !currentEnrollment.includes(id)

const paidStudentsToEnroll = () => {
  const futureEnrollement = 
      getPaidStudents()
      .map(getStudentId)
      .filter(notYetEnrolled)

  return [...currentEnrollment, ...futureEnrollement] 
}

const hasNotPaidYet = () => 
  (id) => !getPaidStudents().map(getStudentId).includes(id) 

const remindUnpaid = recordIds => 
  printRecords(recordIds.filter(hasNotPaidYet()))


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
