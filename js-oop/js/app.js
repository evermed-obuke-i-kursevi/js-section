import Exam from './models/exam.js';
import ExamList from './models/examList.js';

const examList = {
    exams: [
        // * Code with OOP implementation
        new Exam('Mathematics 1', 6, 'Sara Saric', 'https://www.worldatlas.com/r/w768/upload/da/f0/cf/female-professor.jpg'),
        new Exam('Statistics and Analysis', 4, 'Petar Petrovic', 'https://dailyutahchronicle.com/wp-content/uploads/2017/11/birger-kollmeier-910261_960_720-900x598.jpg')
    ]
};

class StudentServiceApp {
    static counter = 0;
    static init() {
        const examsList = new ExamList('List of Exams', examList.exams);    
        // const examsList = new ExamList();
        // examsList.setExams = examList.exams;
        examsList.renderExamsList();    
    }
}

StudentServiceApp.init();
console.log(StudentServiceApp.counter);