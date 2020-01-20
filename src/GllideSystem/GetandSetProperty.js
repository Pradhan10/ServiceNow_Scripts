/*Pass the name of property as string
* as seen on System Property table
* */
gs.info(gs.setProperty('x_435824_my_custom.snow201.hello.world','Banker\'s Algorithm'));
gs.info(gs.getProperty('x_435824_my_custom.snow201.hello.world'));

/*
* Get Encoded query
* */
var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('caller',gs.getUserID());
incidentGR.query();
gs.print(incidentGR.getEncodedQuery());


/*Check has role*/
if (gs.hasRole()) 