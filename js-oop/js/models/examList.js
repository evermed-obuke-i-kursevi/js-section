import List from './list.js';
import ExamItem from './examItem.js';

export default class ExamList extends List {

    constructor(listName, exams) {
        super(listName, exams); // ! mora biti prva linija u pozivu konstruktora nad-klase
    }

    get allExams() {
       return this.items; 
    }

    set setExams(exams) {
        this.items = exams;
    }

    renderExamsList() {
        const renderHook = document.querySelector('.js-exams-list-wrapper');
        const list = document.createElement('ol');
        list.className = 'exams-list js-exams-list';
        for (const exam of this.allExams) {
            const examItem = new ExamItem(exam);
            const createdExam = examItem.createExamData();
            list.append(createdExam);
        }
        renderHook.append(list);
    }

}