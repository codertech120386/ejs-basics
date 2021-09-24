const post = (model) => async (req, res) => {
    const item = await model.create(req.body);

    return res.status(201).send({item});
};

const get = (model) => async (req, res) => {
    const items = await model.find().lean().exec();

    return res.status(200).send({items});
}

const getOne = (model, filename = null) => async (req, res) => {
    const item = await model.findById(req.params.id).lean().exec();

    if (filename) return res.render(filename, {item});
    return res.status(200).send({item: item});
}

const updateOne = (model) => async (req, res) => {
    const item = await model.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();

    return res.status(200).send({item});
}

const deleteOne = (model) => async (req, res) => {
    const item = await model.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send({item});
}

module.exports = {
    post,
    get,
    getOne,
    updateOne,
    deleteOne
};