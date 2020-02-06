(function () {
    /* populate the 'data' object */
    /* e.g., data.table = $sp.getValue('table'); */
    var userGR = new GlideRecord('sys_user');
    userGR.addQuery('name','STARTSWITH','m');
    data.users = [];
    userGR.setLimit(10);
    userGR.query();
    while (userGR.next()) {
        var userInstance = {};
        /*Get roles of this user*/
        var rolesGR = new GlideRecord('sys_user_has_role');
        rolesGR.addQuery('user', userGR.userID);
        rolesGR.query();
        if (rolesGR.next()) {
            while (rolesGR.next()) {
                userInstance.roles = rolesGR.role.name;
                console.log(userGR.userID + ' has roles ' + userInstance.roles);
            }
        } else {
            userInstance.roles = "Not assigned";
            console.log(userGR.userID + ' has roles ' + userInstance.roles);
        }
        /*end get roles*/

        /*Get groups of this user*/
        var groupGR = new GlideRecord('sys_user_grmember');
        groupGR.addQuery('user', 'SUPPLY SYS_ID OF USER HERE'); //userGR.userID
        groupGR.query();

        if (groupGR.next()) {
            while (groupGR.next()) {
                userInstance.groups = groupGR.group.name;
            }
        } else {
            userInstance.groups = "Does not belongs to any groups";
        }
        /*end get groups*/

        userInstance.active = userGR.getDisplayValue('active');
        userInstance.first_name = userGR.getDisplayValue('first_name');
        userInstance.email = userGR.getDisplayValue('email');
        data.users.push(userInstance);
        /*
        gs.print("USER act : " + userInstance.active);
        gs.print("USER fname : " + userInstance.first_name);
        gs.print("USER email : " + userInstance.email);
        */
    }
    if (input) {
        switch (input.operation) {
            case 'add' :
                var addUesrGR = new GlideRecord('sys_user');
                addUesrGR.first_name = input.first_name;
                addUesrGR.email = input.email;
                addUesrGR.active = input.active;
                addUesrGR.insert();
                break;
            case 'delete' :
                var deleteUserGR = new GlideRecord('sys_user');
                deleteUserGR.addQuery('email', input.email);
                deleteUserGR.query();
                while (deleteUserGR.next()) {
                    deleteUserGR.active = false;
                    deleteUserGR.update();
                }
                break;
            case 'edit' :
                var editUesrGR = new GlideRecord('sys_user');
                editUesrGR.addQuery('email', input.email);
                editUesrGR.query();
                while (editUesrGR.next()) {
                    editUesrGR.active = input.active;
                    editUesrGR.email = input.email;
                    editUesrGR.first_name = input.first_name;
                    editUesrGR.update();
                }
                break;
        }
    }
})();
