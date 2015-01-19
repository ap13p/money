Template.form.rendered = function() {
    $('input[type="date"]').pickadate();
};

Template.form.events({
    'submit #add-data': function(e) {
        e.preventDefault();

        var tanggal = new Date(e.target.tanggal.value);
        var jumlah = Number(numeral(e.target.jumlah.value).value());
        var keterangan = String(e.target.keterangan.value);

        Meteor.call('insert_data', tanggal, jumlah, keterangan, function(err, res){
            if (err) console.log(err);
            if (res) console.log(res);
        });
        $('#add-data-modal').modal('hide');
        return false;
    },
    'blur input[name="jumlah"]': function(e) {
        e.preventDefault();

        var jml = numeral(e.target.value).format('0,0');
        e.target.value = jml;

        return false;
    }
});