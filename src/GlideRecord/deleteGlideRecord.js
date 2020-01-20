var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('short_description','Incident #3');
incidentGR.query();
while (incidentGR.next()){
    incidentGR.deleteRecord();
}