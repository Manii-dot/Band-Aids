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
        // Image of band
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // Description of event
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        //Event date
        date: {
            type: DataTypes.DATE,
            allowNull: false
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