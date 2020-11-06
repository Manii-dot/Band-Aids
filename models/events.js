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
        // Description of event
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        //Event date
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        // State the genre of the band
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    // Event.associate = models => {
    //     Event.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: true
    //         }
    //     });
    // }

    return Event;
};