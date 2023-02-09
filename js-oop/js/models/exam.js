export default class Exam {
    // name;
    // points = 6;
    // teacher;
    // teacherImgUrl;
    #examId;

    constructor(name, points, teacher, teacherImgUrl) {
        this.name = name;
        this.points = points;
        this.teacher = teacher;
        this.teacherImgUrl = teacherImgUrl;
        this.#examId = this.#generateExamId();
    }

    #generateExamId() {
       return Math.floor(Math.random() * 100 + 1); 
    }

}