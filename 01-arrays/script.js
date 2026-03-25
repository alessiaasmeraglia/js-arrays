const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
/* const fourthTeacher = teachers[3];
 */
let fourthTeacher = '';

for (let i = 0; i < teachers.length; i++) {
  if (i === 3) {
    fourthTeacher = teachers[i];
  }
}
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
/* teachers[4] = 'Patrick'; */
const updatedTeachers1 = [];

for (let i = 0; i < teachers.length; i++) {
  if (i === 4) {
    updatedTeachers1.push('Patrick');
  } else {
    updatedTeachers1.push(teachers[i]);
  }
}
console.log(updatedTeachers1);


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
/* const lastTeacher = teachers.pop();
console.log(lastTeacher); */
const teachersWithoutLast = [];
let lastTeacher = '';

for (let i = 0; i < teachers.length; i++) {
  if (i === teachers.length - 1) {
    lastTeacher = teachers[i];
  } else {
    teachersWithoutLast.push(teachers[i]);
  }
}

console.log(lastTeacher);
console.log(teachersWithoutLast);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
/* const firstTeacher = teachers.shift();
console.log(firstTeacher); */
const teachersWithoutFirst = [];
let firstTeacher = '';

for (let i = 0; i < teachers.length; i++) {
  if (i === 0) {
    firstTeacher = teachers[i];
  } else {
    teachersWithoutFirst.push(teachers[i]);
  }
}

console.log(firstTeacher);
console.log(teachersWithoutFirst);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
/* teachers.push('Vanessa');
console.log(teachers); */
const teachersWithVanessa = [];

for (let i = 0; i < teachers.length; i++) {
  teachersWithVanessa.push(teachers[i]);
}
teachersWithVanessa.push('Vanessa');

console.log(teachersWithVanessa);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
/* teachers.unshift('Sarah');
console.log(teachers); */
const teachersWithSarah = ['Sarah'];

for (let i = 0; i < teachers.length; i++) {
  teachersWithSarah.push(teachers[i]);
}

console.log(teachersWithSarah);


// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
/* const lewisIndex = teachers.indexOf('Lewis');
console.log(lewisIndex); */
let lewisIndex = -1;

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Lewis') {
    lewisIndex = i;
  }
}

console.log(lewisIndex);


// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
/* const isTeachersEmpty = teachers.length === 0;
console.log(isTeachersEmpty); */
let isTeachersEmpty = true;

for (let i = 0; i < teachers.length; i++) {
  isTeachersEmpty = false;
}

console.log(isTeachersEmpty);
