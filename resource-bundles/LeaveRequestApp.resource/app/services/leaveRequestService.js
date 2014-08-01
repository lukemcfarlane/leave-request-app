/**
 * Handle querying, inserting and updating Leave_Request__c
 * records in Salesforce.
 *
 * @author  https://github.com/lukemcfarlane
 * @date    July 2014
 */
app.factory('LeaveRequestService', ['sfrquery',
	function(sfrquery) {
		var LeaveRequestService = {
			getAllLeaveRequests: function() {
				var queryStr = 'SELECT Id, Start_Date__c, End_Date__c, Reason__c, Approved__c, Employee__r.Name ' +
					'FROM Leave_Request__c';
				var cacheEnabled = false;
				return sfrquery.query(queryStr, cacheEnabled);
			}
		};
		return LeaveRequestService;
	}
]);