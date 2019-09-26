'use strict';
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    time: DataTypes.DATE,
    starttime: DataTypes.DATE,
    endtime: DataTypes.DATE,
    createdtime: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    //disable automatic modifications to table names. This flag prevents the table to
    //automatically be referenced as a plural name
    // freezeTableName: true,
    define: {timestamps: false}
  });
  task.associate = function(models) {
    // associations can be defined here
  };
  return task;
};