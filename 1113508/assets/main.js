var client = ZAFClient.init();

// Issue with org fields is present when the org field key is the same as an org system attribute, e.g. "id", "notes", "details". Replaced "id" on line 5 with any of those attributes to confirm during testing.

// This will not ever fire, so don't expect it to, this is just here to show that any changes to a system attribute field won't work.
client.on('organization.id.changed', function (e) {
    console.log("Event ", e)
});

// To show that this is a larger issue, a wildcard listener doesn't fire for any of those fields, even without explicitly calling them out. Uncomment lines 11-13 to test this.

client.on('*.changed', function (e) {
    console.log("Wildcard field changes ", e)
});

client.on('ticket.viewers.changed', function(e) {
    console.log(e)
});