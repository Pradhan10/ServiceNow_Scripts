function() {
    /* widget controller */
    var c = this;
    console.log("USERS FROM CLIENT SCRIPT " + c.data.users);
    c.deleteUser = function (){
        c.data.operation = "delete";
        c.data.email = document.getElementById("delete_email").value;
        console.log("Val of email in delete user : " + c.data.email);
        c.server.update().then(function () {
            c.data.operation = "";
            c.data.email = "";
        })
    };

    c.addUser = function (){
        c.data.operation = "add";
        c.data.email = document.getElementById("add_email").value;
        console.log("OP ADD, email : " + c.data.email);
        c.data.active = document.getElementById("add_active").value;
        console.log("OP ADD, active : " + c.data.active);
        c.data.first_name = document.getElementById("add_first_name").value;
        console.log("Val of email in add user : " + c.data.first_name);
        c.server.update().then(function () {
            c.data.operation = "";
            c.data.email = "";
            c.data.active = "";
            c.data.first_name = "";
        })
    };

    c.editUser = function (){
        c.data.operation = "edit";
        c.data.email = document.getElementById("edit_email").value;
        c.data.active = document.getElementById("edit_active").value;
        c.data.first_name = document.getElementById("edit_first_name").value;
        console.log("Val of email in EDIT user : " + c.data.email);
        c.server.update().then(function () {
            c.data.operation = "";
            c.data.email = "";
            c.data.active = "";
            c.data.first_name = "";
        })
    };
}

