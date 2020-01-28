function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    // Modified the if to return if the newValue == oldValue to avooid
    // unnecessary trips to server
    if (isLoading || newValue === '' || newValue == oldValue) {
        return;
    }

    // Instantiate the GetEmailAddress Script Include
    var getEmailAddr = new GlideAjax('GetEmailAddress');
    // Specify the getEmail method
    getEmailAddr.addParam('sysparm_name','getEmail');
    // Pass the requested for sys_id
    getEmailAddr.addParam('sysparm_userID',g_form.getValue('u_requested_for'));
    // Send the request to the server
    getEmailAddr.getXML(populateEmailField);

    // When the reponse is back from the server
    function populateEmailField(response){
        // Extract email address from response, clear any value from email field,
        // set new value in email field
        var emailFromScriptInclude = response.responseXML.documentElement.getAttribute("answer");
        g_form.clearValue('u_requested_for_email');
        g_form.setValue('u_requested_for_email',emailFromScriptInclude);
    }

}