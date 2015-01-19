Template.loggedout.helpers({});
Template.loggedout.events({
    'click #btn-login': function(e) {
        e.preventDefault();

        var username = $('input[name="username"]').val();
        var password = $('input[name="password"]').val();

        Meteor.loginWithPassword(username, password, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Success');
            }
        });
        return false;
    },
    'click #btn-signup': function(e) {
        e.preventDefault();

        var username = $('input[name="username"]').val();
        var password = $('input[name="password"]').val();

        Accounts.createUser({
            username: username,
            password: password
        });
        
        return false;
    }
});

Template.loggedin.events({
    'click a[href="/logout"]': function(e) {
        e.preventDefault();

        Meteor.logout();

        return false;
    }
});

// Accounts.loginWithPassword();