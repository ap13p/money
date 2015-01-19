Data = new Meteor.Collection('data');

Meteor.publish('data', function(){
    return Data.find({
        userId: this.userId
    });
});
Meteor.methods({
    'insert_data': function(tgl, jml, ket) {
        check(tgl, Date);
        check(jml, Number);
        check(ket, String);

        return Data.insert({
            userId: this.userId,
            tanggal: tgl,
            jumlah: jml,
            keterangan: ket
        });
    }
});