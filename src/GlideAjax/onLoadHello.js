/*Snippet to be written inside Client Script
* We can define the table on which to execute this client script.
* 
* */
function onLoad() {
    var ga = new GlideAjax('ServiceNow201GlideAjax');
    ga.addParam('sysparm_name', 'sayHello');
    ga.getXML(ajaxProcessor);
}

function ajaxProcessor(response) {
    var answer = response.responseXML.documentElement.getAttribute('answer');
    g_form.setValue('short_description', answer);
}