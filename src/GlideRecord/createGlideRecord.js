/*New Record method creates a record in GlideRecord object*/
var newIncident = new GlideRecord('incident');
newIncident.newRecord();
newIncident.short_description = "Incident created from background script";
var newIncidentSysID = newIncident.insert();
gs.print(newIncidentSysID);


/*Insert new incidents using loop*/
var newIncidents = [];
var counter = 1;
var incidentGR = new GlideRecord('incident');
while(counter <= 5){
    incidentGR.newRecord();
    incidentGR.short_description = 'Incident #' + counter;
    counter++;
    newIncidents.push(incidentGR.insert());
}
gs.print(newIncidents);