'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const table = await queryInterface.describeTable("students");
    
    if (!table.hasOwnProperty('father_contact_no')) { // ya 'father_contact_no' in table
      await queryInterface.addColumn('students', 'father_contact_no', {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      });
    }

    if (!table.hasOwnProperty('mother_contact_no')) {
      await queryInterface.addColumn('students', 'mother_contact_no', {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      });
    }

    if (!table.hasOwnProperty('contact_no')) {
      await queryInterface.addColumn('students', 'contact_no', {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
      });
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('students', 'father_contact_no');
    await queryInterface.removeColumn('students', 'mother_contact_no');
    await queryInterface.removeColumn('students', 'contact_no');
  }
};
