module.exports = function(sequelize, DataTypes){
    var Applicant = sequelize.define("Applicant", {
        first_name: {
            type:DataTypes.STRING,
            allowNull:false
        },
        last_name:{
        type:DataTypes.STRING,
        allowNull:false
        },
        middle: {
            type:DataTypes.STRING
        },
        birth_date: {
            type:DataTypes.STRING,
            allowNull:false
        },
        street_address: {
            type:DataTypes.STRING,
            allowNull:false
        },
        apt: {
            type:DataTypes.STRING,
        }, 
        phone: {
            type:DataTypes.STRING,
        }, 
        email: {
            type:DataTypes.STRING
        },
        alt_phone: {
            type:DataTypes.STRING
        }, 
        gender: {
            type:DataTypes.STRING
        },
        ethnicity: {
            type: DataTypes.STRING
        },
        race:
        {
            type: DataTypes.STRING
        }
    })
    return Applicant;
}



