const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const changeLessons = (object, key, value) => {
  const lessonTemporary = {
    [key]: value,
  };
  const newLesson = Object.assign(object, lessonTemporary);
};

const readerKeys = (object) => Object.keys(object);

const lengthOfArray = (object) => Object.keys(object);

const allValues = (object) => Object.values(object);

const allLessons = (object, object2, object3) => {
  // const lessonsReunited = {
  //     Lesson1: object,
  //     Lesson2: object2,
  //     Lesson3: object3
  // };

  const lessonReunited = Object.assign(
    {},
    { lesson1: object, lesson2: object2, lesson3: object3 }
  );
  return lessonReunited;
};

// changeLessons(lesson2, 'turno', 'noite');

// console.log(lesson2);

// console.log(readerKeys(lesson2));

// console.log(lengthOfArray(lesson3));

// console.log(allValues(lesson3));

const counterMathStudents = (object, object3) => {
  const key = Object.keys(object)[1];
  const lessonReunited = Object.values(object)[1] + Object.values(object3)[1];
  const newObject = {
    [key]: lessonReunited,
  };
  console.log(newObject);
  const lesson4 = Object.assign(object, newObject);
  console.log(lesson4);
};

counterMathStudents(lesson1, lesson3);

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons(lesson1,lesson2,lesson3), 'Maria Clara'));
