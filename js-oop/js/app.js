class Exam {
    // name;
    // points = 6;
    // teacher;
    // teacherImgUrl;

    constructor(name, points, teacher, teacherImgUrl) {
        this.name = name;
        this.points = points;
        this.teacher = teacher;
        this.teacherImgUrl = teacherImgUrl;
    }
}

class List {
    name;
    items = [];

    constructor(listName, items) {
        this.name = listName;
        this.items = items;
    }

}

class ExamList extends List {

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

class ExamItem {
    constructor(exam) {
        this.exam = exam;
    }

    registerForExam() {
        // console.log(this);
        alert(`You have succesfully registered for exam: ${this.exam.name}`);
    }

    createExamData() {
        const examElement = document.createElement('li');
        examElement.className = 'exam js-exam';
        const {name, points, teacherImgUrl, teacher} = this.exam;
        examElement.innerHTML =
            `
                <div class="exam-item">
                    <div class="exam-main-data">
                        <h2> ${name} </h2>
                        <h5> Points: ${points} </h5>
                    <div>
                    <div class="exam-sub-data">
                        <img class="exam-item__image" src="${teacherImgUrl}" alt="${teacher}" />
                        <h2> Teacher: ${teacher} </h2>
                    </div>
                    <button class="register-exam js-register-exam">Register for the exam</button>
                </div>
            `;
        examElement.querySelector('.js-register-exam').addEventListener('click', this.registerForExam.bind(this));
        return examElement;
    }
}

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