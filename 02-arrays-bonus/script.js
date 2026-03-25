const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
/* const reversedTeachers = teachers.reverse();
/* //Se voglio evitare di modificare l'array originale
const reversedTeachers = [...teachers].reverse(); */
const reversedTeachers = [];

for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers.push(teachers[i]);
}
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
/* const longNames = teachers.filter(teacher => teacher.length >= 5);
console.log(longNames); */
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
/* const removeEd = teachers.filter(teacher => teacher !== 'Ed');
*/
const removeEd = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] !== 'Ed') {
    removeEd.push(teachers[i]);
  }
}
console.log(removeEd); 
// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
/* const isFabioPresent = teachers.includes('Fabio'); */
let isFabioPresent = false;

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Fabio') {
    isFabioPresent = true;
  }
}
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
/* const teachersString = teachers.join(', '); */
let teachersString = '';

for (let i = 0; i < teachers.length; i++) {
  teachersString += teachers[i];

  if (i < teachers.length - 1) {
    teachersString += ', ';
  }
}
console.log(teachersString);