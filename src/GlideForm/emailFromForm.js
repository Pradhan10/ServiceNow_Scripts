function onLoad() {
    var cdref = g_form.getControl('u_cd_reference');
    cdref.onfocus = cdRefonFocus;
    cdref.onblur = cdRefonBlur;

    function cdRefonFocus() {
        g_form.hideAllFieldMsgs();
        g_form.showFieldMsg('u_cd_reference', 'Format must be: CD(L)-0000(L)', "info");
    }

    function cdRefonBlur() {
        g_form.hideAllFieldMsgs();
    }

}

function onSubmit() {
    g_form.hideAllFieldMsgs();
    g_form.clearMessages();
    var cdref = g_form.getValue('u_cd_reference');
    var pattern = "/^[C][D][A-Z]-\d{4}[A-Z]$/";
    var result = pattern.test(cdref);

    if (result){
        return true;
    }else {
        g_form.addErrorMessage("Invalid Update - Check values and re-submit");
        g_form.showFieldMsg("u_cd_reference","Incorrect data entered, Format must be CD(L)-0000(L)","error");
        return false;
    }

}