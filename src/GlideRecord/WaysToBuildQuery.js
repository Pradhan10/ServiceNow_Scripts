/*There are two ways to build queries
* 1 : Chain methods
* 2 : Encoded query
* */

/* CHAIN METHOD
Add GlideRecord methods onto the current GlideRecord object
*/
var incidentGR = new GlideRecord('incident');
var orCond1 = incidentGR.addQuery('priority','1');
/*addQuery method accepts 2 or 3 arguments
* incidentGR.addQuery('short_description','CONTAINS','Test');
* short_description = field_name
* CONTAINS = operator [optional]
* Test = field_value
* */

orCond1.addOrCondition('priority','2');
var orCond2 = incidentGR.addQuery('category','hardware');
orCond2.addOrCondition('category','software');
incidentGR.addQuery('sys_created_on','>','2017-01-01 12:00:00');
incidentGR.addNotNullQuery('short_description');
incidentGR.query();

/* ENCODED QUERY METHOD
* Build query in GUI, run query.
* After satisfied with result, right click filter and choose copy query option.
* Link to image : https://i.postimg.cc/Rh7FNjMp/query.png
* */

/*Query :
priority=1^NQpriority=2^NQcategory=hardware^NQcategory=software^NQsys_created_on>javascript:gs.dateGenerate('2017-01-01','23:59:59')^NQshort_descriptionISNOTEMPTY
*/
var queryString = 'category=inquiry^active=true^opened_by!=62826bf03710200044e0bfc8bcbe5df1';
var incidentGR = new GlideRecord('incident');
incidentGR.addEncodedQuery(queryString);
incidentGR.query();
while (incidentGR.next()){
    gs.print(incidentGR.number);
}