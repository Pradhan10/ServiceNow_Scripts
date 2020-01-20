/*
* After building and executing the query, we get records which we need to process.
* The next() method is an iterator
* */
var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('priority',1);
incidentGR.query();
while (incidentGR.next()){
    gs.print(incidentGR.number);
}


/*get method :
* Only grabs 1 record, commonly used with record sys_id
* */
var gr = new GlideRecord('incident');
gr.get('number','INC0000001');
gr.info(gr.short_description);