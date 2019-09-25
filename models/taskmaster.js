"use strict";
module.exports = (sequelize, DataTypes) => {
  const TaskMaster = sequelize.define(
    "TaskMaster",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      priority: DataTypes.STRING,
      time: DataTypes.DATE,
      startTime: DataTypes.DATE,
      endTime: DataTypes.DATE,
      createdTime: DataTypes.DATE,
      status: DataTypes.STRING
    },
    {}
  );
  TaskMaster.associate = function(models) {
    // associations can be defined here
    TaskMaster.belongsTo(model.User, {
      foreignKey: "userId"
    });
  };
  return TaskMaster;
};
