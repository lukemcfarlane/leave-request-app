/**
 * Handle querying, inserting and updating Leave_Request__c
 * records in Salesforce.
 *
 * @author  https://github.com/lukemcfarlane
 * @date    July 2014
 */
app.factory('LeaveRequestService', ['sfr',
	function(sfr) {
		var LeaveRequestService = {
			getAllLeaveRequests: function() {
				var queryStr = 'SELECT Id, Start_Date__c, End_Date, Reason__c, Approved__c, Employee__r.Name ' +
					'FROM Leave_Request__c';
				var cacheEnabled = false;
				return sfr.query(queryStr, cacheEnabled);
			}
		};
		return LeaveRequestService;
	}
]);