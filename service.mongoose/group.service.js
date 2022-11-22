const { ObjectId } = require('mongodb');
const groupModel = require('../models/group.model');

module.exports = {
    getAllGroups: async () => {
        return groupModel.find();

    },
    getGroupById: async (id) => {
        return groupModel.findOne({ _id: id });
    },
    createGroup: async (group) => {
        const newGroup = await new groupModel(group);
        await newGroup.save();
    },
    deleteGroup: async (id) => {
        return groupModel.deleteOne({ _id: ObjectId(id) });
    },
    updateGroup: async (id, group) => {
        const { groupID,startDate,numberOfParticipants,isActive } = group;
        await groupModel.updateOne({ _id: id },
            {
                $set:
                {
                    groupID: groupID,
                    startDate: startDate,
                    numberOfParticipants: numberOfParticipants,
                    isActive: isActive,
                }
            });
    },
}

