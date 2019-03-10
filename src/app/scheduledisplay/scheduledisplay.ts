export class scheduledisplay{
    constructor(
      public schedule_id:number,
      public fk_subject_id:number,
      public fk_batch_id:number,
      public fk_standard_id:number,
      public fk_faculty_id:string,
      public timings:string,
      public schedule_date?:Date,
      public batch_name?:string,
      public subject_name?:string
  
    ){
  
    }
  }
  