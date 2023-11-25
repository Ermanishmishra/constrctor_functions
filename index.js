// function StudentDetails(nm,rl,cl,st,mk,a,b,c,d,e,f){
//     this.name = nm;
//     this.roll_no = rl;
//     this.class = cl;
//     this.section = st;
//     this.marks_of_5_Subjects = {
//         Science : a,
//         Math : b,
//         Social_science : c,
//         english : d,
//         hindi : e,
//     };
// }

// let p1 = new StudentDetails("Huzaifa",16,"x","A",72,75,79,80,67,67)
// console.log(p1)


function Student(name, roll_no, className, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    this.printTop3Subjects = function () {
        // Get an array of subjects sorted by marks in descending order
        const sortedSubjects = Object.keys(this.marks_of_5_subjects).sort(
            (a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]
        );

        // Print the top three subjects
        console.log("Top 3 Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(`${i + 1}. ${sortedSubjects[i]}`);
        }
    };

    this.printReportCard = function () {
        // Calculate percentage
        const totalMarks =
            this.marks_of_5_subjects.science +
            this.marks_of_5_subjects.maths +
            this.marks_of_5_subjects.social_science +
            this.marks_of_5_subjects.english +
            this.marks_of_5_subjects.hindi;

        const percentage = (totalMarks / 500) * 100;

        // Print the report card
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name} |`);
        console.log(`| Roll no. - ${this.roll_no}   |`);
        console.log(`| Class    - ${this.class}       |`);
        console.log(`| Section  - ${this.section}       |`);
        console.log(`| Science  - ${this.marks_of_5_subjects.science}    |`);
        console.log(`| S.Sc     - ${this.marks_of_5_subjects.social_science}    |`);
        console.log(`| Maths    - ${this.marks_of_5_subjects.maths}    |`);
        console.log(`| English  - ${this.marks_of_5_subjects.english}    |`);
        console.log(`| Hindi    - ${this.marks_of_5_subjects.hindi}    |`);
        console.log(`| Percentage - ${percentage.toFixed(2)} %  |`);
        console.log("+--------------------+");
    };
}

// Example usage:
const student1 = new Student("Huzaifa", 16, "X", "A", {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67,
});

student1.printTop3Subjects();
student1.printReportCard();