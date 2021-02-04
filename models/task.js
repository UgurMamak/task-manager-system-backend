class Task{
    constructor(id,taskTitle,desc,assignedId,reporterId,dateOfIssue,completedDate){
        this.id=id;
        this.taskTitle=taskTitle;
        this.desc=desc;
        this.assignedId=assignedId;
        this.reporterId=reporterId;
        this.dateOfIssue=dateOfIssue;
        this.completedDate=completedDate;
    }
}
module.exports=Task;