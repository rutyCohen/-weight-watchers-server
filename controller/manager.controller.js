const service = require('../service/manager.service');

module.exports = {
    getAllManagers: async (req, res, next) => {
        try {
            const managers = await service.getAllManagers();
            res.send(managers);
        }
        catch (error) {
            next(error)
        };
    },
    getManagerById: async (req, res, next) => {
        try {
            const id = req.params.id;
            const manager = await service.getManagerById(id);
            res.send({ manager })
        }
        catch (error) {
            next(error)
        };
    },
    updateManager: async (req, res, next) => {
        try {
            const id = req.params.id;
            const manager = req.body;
            await service.updateManager(id, manager);
            res.status(200).json('put manager successfully');

        }
        catch (error) {
            next(error)
        };
    },
    createManager: async (req, res, next) => {
        try {
            const manager = req.body;
            await service.createManager(manager);
            res.status(200).json('post manager successfully');
        }
        catch (error) {
            next(error)
        };
    },
    deleteManager: async (req, res, next) => {
        try {
            const id = req.params.id;
            await service.deleteManager(id);
            res.status(200).json({
                message: `manager deleted`
            })
        }
        catch (error) {
            next(error)
        };
    }
}


