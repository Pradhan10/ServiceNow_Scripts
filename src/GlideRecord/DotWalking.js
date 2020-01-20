
/*
* An important concept when dealing with Glide Record is Dot Walking.
* A Glide record is a wrapper around the MySQL RDBMS, so the developer
* does not needs to write the SQL code.
*
* Functions of a Glide Record :
* 1 : Perform CRUD operations.
* 2 : Generates SQL for us.
* 3 : 2 stages => a) Build a query b) Process records
* */

/*Example to get value from referenced table using dot walking*/
var incidentGR = new GlideRecord('incident');
/*supply sys_id of record to fetch*/
incidentGR.get('46e2fee9a9fe19810049b49dee0daf58');
gs.print(incidentGR.caller_id.location.name);


/*Example to get all priority 1 based records from incident table*/
var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('priority',1);
incidentGR.query();
while (incidentGR.next()){
    gs.print(incidentGR.number);
}