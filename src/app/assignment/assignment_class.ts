export class assignment_class{
    constructor(
        public student_id?:string,
       public student_password?:string,
       public student_name?:string,
       public student_image?:string,
       public date_of_birth?:Date,
       public joining_date?:Date,
       public fk_work_id?:number,
       public sub_id?:number,
       public subject_id?:number,
       public subject_name?:string,
        public assignment_id?:number,
        public assignment_pdf?:string,
        public fk_subject_id?:number,
        public fk_standard_id?:number,
        public fk_batch_id?:number,
        public title?:string,
        public submisson_date?:Date,
        public fk_student_id?:string
    ){}
}