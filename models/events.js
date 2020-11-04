module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        // Band playing at event
        band: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Location of event
        place: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Date of event
        image: {
            type: DataTypes.DATE,
            allowNull: false
        },
        // Description of event
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // State the genre of the band
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // User foreign key
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Event;
};