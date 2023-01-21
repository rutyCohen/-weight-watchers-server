const { ObjectId } = require('mongodb');
const managerModel = require('../models/manager.model');

module.exports = {
    getAllManagers: async () => {
        return managerModel.find();

    },
    getManagerById: async (id) => {
        return managerModel.findOne({ _id: id });
    },
    createManager: async (manager) => {
        const newManager = await new managerModel(manager).save();
        return newManager._id;
    },
    deleteManager: async (id) => {
        return managerModel.deleteOne({ _id: ObjectId(id) });
    },
    updateManager: async (id, manager) => {
        const { name, phone, email, description, numOfMembers } = manager;
        await managerModel.updateOne({ _id: id },
            {
                $set:
                {
                    name:name,
                    email: email,
                    phone: phone,
                    description:description,
                    numOfMembers:numOfMembers
                }
            });
    },
}

