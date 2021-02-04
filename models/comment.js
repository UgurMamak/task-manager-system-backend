class Comment {
    constructor(id, comment, taskId, userId, date) {
        this.id = id;
        this.comment = comment;
        this.taskId = taskId;
        this.userId = userId;
        this.date = date;
    }
}

module.exports = Comment;