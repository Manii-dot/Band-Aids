module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        // Location of event
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //Date of event
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        //User foreign key
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
};