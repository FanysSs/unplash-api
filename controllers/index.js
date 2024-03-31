const models = require("../database/models");

const createPhoto = async (req, res) => {
        try {
        const photo = await models.Photo.create(req.body);
        return res.status(201).json({
        photo
        });
} catch (error) {
        return res.status(500).json({ error: error.message });
}
};

const getAllPhotos = async (req, res) => {
        console.log('getting photos');
        try {
        const photos = await models.Photo.findAll({
        include: [
        ]
        });
        return res.status(200).json({ photos });
} catch (error) {
        return res.status(500).send(error.message);
        }
};

module.exports = {
        createPhoto,
        getAllPhotos
};

