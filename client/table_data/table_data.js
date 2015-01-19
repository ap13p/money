
Template.table_data.helpers({
    data: function() {
        return Data.find({
            userId: Meteor.userId()
        }, {}, {
            order: {
                tanggal: -1
            }
        });
    },
    money: function(data) {
        return numeral(data).format('0,0');
    }
});