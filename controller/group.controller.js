const service = require('../service/group.service');

module.exports = {
    getAllGroups: async (req, res, next) => {
        try {
                const groups = await service.getAllGroups();
                res.send(groups);
        }
        catch (error) {
            next(error)
        };
    },
    getGroupById: async (req, res, next) => {
        try {
            const id = req.params.id;
            const group = await service.getGroupById(id);
            res.send(group)
        }
        catch (error) {
            next(error)
        };
    },
    updateGroup: async (req, res, next) => {
        try {
            const id = req.params.id;
            const group = req.body;
            await service.updateGroup(id, group);
            res.status(200).json('put group successfully');

        }
        catch (error) {
            next(error)
        };
    },
    createGroup: async (req, res, next) => {
        try {
            const group = req.body;
            await service.createGroup(group);
            res.status(200).json('post group successfully');
        }
        catch (error) {
            next(error)
        };
    },
    deleteGroup: async (req, res, next) => {
        try {
            const id = req.params.id;
            await service.deleteGroup(id);
            res.status(200).json({
                message: `Group deleted`
            })
        }
        catch (error) {
            next(error)
        };
    }
}


