var GetEmailAddress = Class.create();
// Extend the global.AbstractAjaxProcessor class
GetEmailAddress.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
   // Define the getEmail function
    // Create a GlideRecord for user table.
    // Use the sysparm_userID passed from client side to retrieve a record from user table.
    // Return the email address for requested record.
    getEmail: function() {
        var userRecord = new GlideRecord("sys_user");
        userRecord.get(this.getParameter("sysparm_userID"));
        return userRecord.email + '';
    },
    type: 'GetEmailAddress'
});