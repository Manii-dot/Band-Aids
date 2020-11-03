module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("Event", {
        // Location of event
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //Date of event
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
};