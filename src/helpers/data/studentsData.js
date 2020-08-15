const students = [
  {
    id: 'student1',
    firstName: 'Austin',
    lastName: 'Phy',
    isDead: false,
  },
  {
    id: 'student2',
    firstName: 'Brooke',
    lastName: 'Nemchak',
    isDead: false,
  },
  {
    id: 'student3',
    firstName: 'Gene',
    lastName: 'McNew',
    isDead: false,
  },
  {
    id: 'student4',
    firstName: 'Gwynne',
    lastName: 'Meeks',
    isDead: false,
  },
  {
    id: 'student5',
    firstName: 'Jeanine',
    lastName: 'Beckle',
    isDead: false,
  },
  {
    id: 'student6',
    firstName: 'Jeremiah',
    lastName: 'Vasquez',
    isDead: false,
  },
  {
    id: 'student7',
    firstName: 'Jim',
    lastName: 'Browning',
    isDead: false,
  },
  {
    id: 'student8',
    firstName: 'Jonathan',
    lastName: 'Shearon',
    isDead: false,
  },
  {
    id: 'student9',
    firstName: 'Joshua',
    lastName: 'Medlan',
    isDead: false,
  },
  {
    id: 'student10',
    firstName: 'Kamiran',
    lastName: 'Ibrahim',
    isDead: false,
  },
  {
    id: 'student11',
    firstName: 'Mark',
    lastName: 'Young',
    isDead: false,
  },
  {
    id: 'student12',
    firstName: 'Matt',
    lastName: 'Logan',
    isDead: false,
  },
  {
    id: 'student13',
    firstName: 'Michael',
    lastName: 'Dotson',
    isDead: false,
  },
  {
    id: 'student14',
    firstName: 'Nate',
    lastName: 'Owens',
    isDead: false,
  },
  {
    id: 'student15',
    firstName: 'Nick',
    lastName: 'Walters',
    isDead: false,
  },
  {
    id: 'student16',
    firstName: 'Nikhil',
    lastName: 'Gaikward',
    isDead: false,
  },
  {
    id: 'student17',
    firstName: 'Ola',
    lastName: 'Oladinni',
    isDead: false,
  },
  {
    id: 'student18',
    firstName: 'Pete',
    lastName: 'Stewart',
    isDead: false,
  },
  {
    id: 'student19',
    firstName: 'Phonesalo',
    lastName: 'Sihanorak',
    isDead: false,
  },
  {
    id: 'student20',
    firstName: 'Ryan',
    lastName: 'Beiden',
    isDead: false,
  },
  {
    id: 'student21',
    firstName: 'William',
    lastName: 'Campbell',
    isDead: false,
  },
];

const livingStudents = () => students.map((student) => {
  if (student.isDead === false) {
    return student;
  }
  return false;
});

const dearlyBeloved = () => students.map((student) => {
  if (student.isDead === true) {
    return student;
  }
  return false;
});

// This file should export a function called followTheLight that takes in an id,
//  finds that student, and changes student.isDead to true

const followTheLight = () => {
  const livingStudentsId = livingStudents().map((student) => student.id);
  const randomStudent = Math.floor(Math.random() * (livingStudentsId.length));
  students.find((student) => student.id === livingStudentsId[randomStudent]).isDead = true;
};
// const followTheLight = (studentId) => {
//   students.forEach((response) => {
//     if (response.id === studentId) {
//       response.isDead = true;
//     }
//   });
// };

const getStudents = () => students;

export default {
  getStudents, livingStudents, dearlyBeloved, followTheLight,
};
