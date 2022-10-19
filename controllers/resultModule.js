const result = require("../schemas/resultSchema");

exports.displayEntries = async(req, res) => {
    try {
        const response = await result.find({});
        res.send(response);
    } catch (err) {
        const response = await new result(req.body).save();
        res.send(response);
    }
}

exports.createEntry = async (req, res) => {
    try {
        const existEntry = await result.findOne({ name: req.body.name });
        if(existEntry) {
            existEntry.marks += req.body.marks; 
            existEntry.save();
            res.send(existEntry);
        } else {
            const response = await new result(req.body).save();
            res.send(response);
        }
    } catch (err) {
        console.error(err);
        res.status(403).send(err);
    }
};

exports.updateEntry = async (req, res) => {
    try {
        const response = await result.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        res.send(response);
    } catch (err) {
        console.error(err);
        res.status(403).send(err);
    }
};

exports.deleteEntry = async (req, res) => {
    try {
        const response = await result.deleteOne({_id: req.params.id});
        res.send(response);
    } catch (err) {
        console.error(err);
        res.status(403).send(err);
    }
};

