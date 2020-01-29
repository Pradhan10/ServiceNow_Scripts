/*On this Glide Ajax example we will log status of an incident
* every 5 seconds to the browser's console using the UI page.
*
* STEP 1 : Add new method to our Script Include
* Script Include => ServiceNow201GlideAjax
*
* STEP 2 : Create a new UI Page named : ServiceNow 201 GlideAjax Example 2
* */

var ServiceNow201GlideAjax = Class.create();
ServiceNow201GlideAjax.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

    getIncidentStatus: function() {
        var incidentNumber = this.getParameter('sysparm_incident_number');
        if(!gs.nil(incidentNumber)){
            var incidentGR = new GlideRecord('incident');
            incidentGR.get('number', incidentNumber);
            return incidentGR.state.getDisplayValue();
        }else {
            return 'No incident was found';
        }
    },

    sayHello: function() {
        return "Hello World!";
    },
    type: 'ServiceNow201GlideAjax'
});

/*PASTE BELOW CODE IN UI PAGE*/
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
    <h1>Example 2</h1>
</j:jelly>

<!--In Client Script of same UI Page record-->
<!--Leverage browser's setInterval API that takes an annonymous function and time in milli seconds as arguments -->
var checkIncident = setInterval(function() {
    processRequest();
}, 5000);

function processRequest() {
    var ga = new GlideAjax('ServiceNow201GlideAjax');
    ga.addParam('sysparm_name', 'getIncidentStatus');
    ga.addParam('sysparm_incident_number','INC0000009');
    ga.getXML(ajaxProcessor);
}

function ajaxProcessor(response) {
    var answer = response.responseXML.documentElement.getAttribute('answer');
    console.log('Status : ' + answer);
}