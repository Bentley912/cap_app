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
        },
        citizen: {
            type: DataTypes.STRING
        },
        work_auth: {
            type:DataTypes.STRING
        },
        sel_service: {
            type:DataTypes.STRING
        },
        veteran: {
            type:DataTypes.STRING
        },
        source: {
            type:DataTypes.STRING
        },
        marital_status: {
            type:DataTypes.STRING
        },
        primary_language: {
            type:DataTypes.STRING
        },
        driving: {
            type:DataTypes.STRING
        },
        license: {
            type:DataTypes.STRING
        },
        contact_name: {
            type:DataTypes.STRING
        },
        contact_phone: {
            type:DataTypes.STRING
        },
        contact_address: {
            type:DataTypes.STRING
        } 
    })
    return Applicant;
}



