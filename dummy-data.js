/*

//1-firmanın sahip olduğu departmanlar
export const departments = [
    {"name": "frontend"},
    {"name": "backend"},
    {"name": "devops"},
    {"name": "account manager"},
    {"name": "product manager"},
    {"name": "finans"},
    {"name": "muhasebe"}
];

//2-kullanıcılar
export const user = [
    {
        "firstName": "Uğur",
        "lastName": "Mamak",
        "email": "ugurmamak@gmail.com",
        "userName": "ugurmamak",
        "password": "12345",
        "phone": "010-692-6593 x09125",
        "role": "yönetici",
        "deparmentId": "-MS96wx1d3ujT_Lko1vo"
    },
    {
        "firstName": "Clementine",
        "lastName": "Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "password": "12345",
        "phone": "1-463-123-4447",
        "role": "yönetici",
        "deparmentId": "-MS96wx4dC2TCLxZmZG3"
    },
    {
        "firstName": "Patricia",
        "lastName": " Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "password": "12345",
        "role": "kullanıcı",
        "phone": "010-692-6593 x09125",
        "deparmentId": "MS96wx51TYHkXa2AEBB"
    },
    {
        "firstName": "berkan",
        "lastName": "Bauch",
        "username": "berkan",
        "email": "Nathan@yesenia.net",
        "password": "12345",
        "phone": "1-463-123-4447",
        "role": "kullanıcı",
        "deparmentId": "-MS96wx51TYHkXa2AEBC"
    },
    {
        "firstName": "furkan",
        "lastName": "Bauch",
        "username": "furkan",
        "email": "Nathan@yesenia.net",
        "password": "12345",
        "phone": "1-463-123-4447",
        "role": "kullanıcı",
        "deparmentId": "-MS96wx61kc1W3P1X6LX"
    },
    {
        "firstName": "zeynep",
        "lastName": " yıldız",
        "username": "zeynepyildiz",
        "email": "Julianne.OConner@kory.org",
        "password": "12345",
        "role": "kullanıcı",
        "phone": "010-692-6593 x09125",
        "deparmentId": "-MS96wx61kc1W3P1X6LY"
    },
    {
        "firstName": "ipek",
        "lastName": "coşkun",
        "username": "ipekcoskun",
        "email": "Julianne.OConner@kory.org",
        "password": "12345",
        "role": "kullanıcı",
        "phone": "010-692-6593 x09125",
        "deparmentId": "-MS96wx61kc1W3P1X6LZ"
    },
    {
        "firstName": "sıla",
        "lastName": "gezer",
        "username": "silagezer",
        "email": "Julianne.OConner@kory.org",
        "password": "12345",
        "role": "kullanıcı",
        "phone": "010-692-6593 x09125",
        "deparmentId": "-MS96wx1d3ujT_Lko1vo"
    },
];


//3-verilen işin tamamlanma aşamaları
export const progressStatus = [{
    "name": "in progress"
}, {
    "name": "todo"
}, {
    "name": "done"
}]


//4-görevleri tutar
export const tasks = [
    {
        "assigneeId": "-MS98mO3hdceMtL9cPLC", //görevi yapacak
        "taskTitle": "title11111", //görev başlığı
        "desc": "descriptipmmmm", //görev açılması
        "reporterId": "-MS98mNzai8Du3DHtbzd", //görevi atayan
        "dateOfIssue": "2021-01-28T23:28:56.782Z",//görevin verildiği zaman bilgisi
        "completedDate": "", //görevin tamamlanma zamanı
        "imagePath": [{"path": "image path 1"}, {"path": "image path2"}] //resim yollarını tutar.
    }, {
        "assignee": "-MS98mO55bT1yztH8wmt",
        "taskTitle": "title222222",
        "desc": "descriptipmmmmhgdhfghd",
        "reporterId": "-MS98mNzai8Du3DHtbzd",
        "dateOfIssue": "2021-01-26T12:28:56.782Z",
        "completedDate": "",
        "imagePath": [{"path": ""}, {"path": ""}]
    }, {
        "assignee": "-MS98mO55bT1yztH8wmu",
        "taskTitle": "title222222",
        "desc": "descriptipmmmm",
        "reporterId": "-MS98mO28A_ZVCcIHa4f",
        "dateOfIssue": "2021-01-28T21:28:15.782Z",
        "completedDate": "",
        "imagePath": [{"path": ""}, {"path": ""}]
    }, {
        "assignee": "-MS98mO6pNLPWO2t96mL",
        "taskTitle": "title2hgfdgfghf2",
        "desc": "descriptipmmmjhgkjhgkjhkm",
        "reporterId": "-MS98mO28A_ZVCcIHa4f",
        "dateOfIssue": "2021-01-27T23:28:56.782Z",
        "completedDate": "",
        "imagePath": [{"path": ""}, {"path": ""}]
    }
]

//5-görevlere yapılan yorumlar
export const comments = [
    {
        "comment": "dsjkhdsakıhfdsa",
        "userId": "-MS98mO28A_ZVCcIHa4f", //yorumu yazan kişiId
        "taskId": "-MSCLcBqnSeFJ47-JsDt", //hangi görev
        "date": "2021-01-28T23:28:56.782Z", //yorumun yazıldığı zaman bilgisi
        "imagePath": [{"path": "https://firebasestorage.googleapis.com/v0/b/taskmanager-54ef1.appspot.com/o/images%2Fgenetik-hastaliklar.png?alt=media&token=4eb4d149-332a-4aa6-a6ca-72ff714fd524"}, {"path": ""}]

    }, {
        "comment": "dsjkhdsakıhfdsa",
        "userId": "-MS98mO3hdceMtL9cPLC",
        "taskId": "-MSCLcBpmUWtDkltQob6",
        "date": "2021-01-28T23:28:56.782Z",
        "imagePath": [{"path": ""}, {"path": ""}]
    }
]


//hesapların sahip olabileceği yetkiler
export const roles = [
    {id: 1, name: "yönetici"}, {id: 2, name: "kullanıcı"}
]

*/
