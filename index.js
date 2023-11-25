function StudentDetails(nm,rl,cl,st,mk,a,b,c,d,e,f){
    this.name = nm;
    this.roll_no = rl;
    this.class = cl;
    this.section = st;
    this.marks_of_5_Subjects = {
        Science : a,
        Math : b,
        Social_science : c,
        english : d,
        hindi : e,
    };
}

let p1 = new StudentDetails("Huzaifa",16,"x","A",72,75,79,80,67,67)
console.log(p1)
