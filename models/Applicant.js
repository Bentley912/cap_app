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
        },
        household_adults: {
            type:DataTypes.STRING
        },
        household_children: {
            type:DataTypes.STRING
        },
        household_special_needs: {
            type:DataTypes.STRING
        },
        tanf_income: {
            type:DataTypes.STRING
        },
        medicaid_income: {
            type:DataTypes.STRING
        },
        snap_income: {
            type:DataTypes.STRING
        },
        socail_security_income: {
            type:DataTypes.STRING
        },
        other_income: {
            type:DataTypes.STRING
        },
        yearly_income: {
            type:DataTypes.STRING
        },
        employed: {
            type:DataTypes.STRING
        },
        work_months: {
            type:DataTypes.STRING
        },
        company1_name: {
            type:DataTypes.STRING
        },
        company1_role: {
            type:DataTypes.STRING
        },
        company1_start_date: {
            type:DataTypes.DATE
        },
        company1_end_date: {
            type:DataTypes.DATE
        },
        company1_hours: {
            type:DataTypes.STRING
        },
        company1_pay_rate: {
            type:DataTypes.STRING
        },
        company1_pay_frequency: {
            type:DataTypes.STRING
        },
        company1_reason: {
            type:DataTypes.STRING
        },
        company2_name: {
            type:DataTypes.STRING
        },
        company2_role: {
            type:DataTypes.STRING
        },
        company2_start_date: {
            type:DataTypes.DATE
        },
        company2_end_date: {
            type:DataTypes.DATE
        },
        company2_hours: {
            type:DataTypes.STRING
        },
        company2_pay_rate: {
            type:DataTypes.STRING
        },
        company2_pay_frequency: {
            type:DataTypes.STRING
        },
        company2_reason: {
            type:DataTypes.STRING
        },
        company3_name: {
            type:DataTypes.STRING
        },
        company3_role: {
            type:DataTypes.STRING
        },
        company3_start_date: {
            type:DataTypes.DATE
        },
        company3_end_date: {
            type:DataTypes.DATE
        },
        company3_hours: {
            type:DataTypes.STRING
        },
        company3_pay_rate: {
            type:DataTypes.STRING
        },
        company3_pay_frequency: {
            type:DataTypes.STRING
        },
        company3_reason: {
            type:DataTypes.STRING
        },
        job_skills: {
            type:DataTypes.STRING
        }
    })
    return Applicant;
}



