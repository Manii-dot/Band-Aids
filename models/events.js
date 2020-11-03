module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        // Band playing at event
        band: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Location of event
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Date of event
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        // Description of event
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // User foreign key
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
};