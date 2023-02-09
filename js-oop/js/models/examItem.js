export default class ExamItem {
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