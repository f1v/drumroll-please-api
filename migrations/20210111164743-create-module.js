'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Modules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      loopId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Loops',
          key: 'id',
          as: 'loopId',
        }
      },
      name: {
        type: Sequelize.STRING
      },
      instrument: {
        type: Sequelize.STRING
      },
      volume: {
        type: Sequelize.INTEGER
      },
      beat_1_1: {
        type: Sequelize.BOOLEAN
      },
      beat_1_2: {
        type: Sequelize.BOOLEAN
      },
      beat_1_3: {
        type: Sequelize.BOOLEAN
      },
      beat_1_4: {
        type: Sequelize.BOOLEAN
      },
      beat_2_1: {
        type: Sequelize.BOOLEAN
      },
      beat_2_2: {
        type: Sequelize.BOOLEAN
      },
      beat_2_3: {
        type: Sequelize.BOOLEAN
      },
      beat_2_4: {
        type: Sequelize.BOOLEAN
      },
      beat_3_1: {
        type: Sequelize.BOOLEAN
      },
      beat_3_2: {
        type: Sequelize.BOOLEAN
      },
      beat_3_3: {
        type: Sequelize.BOOLEAN
      },
      beat_3_4: {
        type: Sequelize.BOOLEAN
      },
      beat_4_1: {
        type: Sequelize.BOOLEAN
      },
      beat_4_2: {
        type: Sequelize.BOOLEAN
      },
      beat_4_3: {
        type: Sequelize.BOOLEAN
      },
      beat_4_4: {
        type: Sequelize.BOOLEAN
      },
      effects: {
        type: Sequelize.JSONB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Modules');
  }
};