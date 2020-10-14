export const findAll = async (table, res) => {
    table.find({}, (err, data) => {
        if (err) {
            return res.status(200).send({ error: err.message || 'Unknown error occurred!' });
        }
        res.json(data);
    });
}

export const deleteAll = async (table, res) => {
    table.deleteMany({}, (err) => {
        if (err) {
            return res.status(200).send({ error: err.message || 'Unknown error occurred!' });
        }
        res.send({
            message: "Successfully deleted all data from the table"
        });
    });
}

export const findByQuery = async (table, query, res) => {
    table.find(query, (err, data) => {
        if (err) {
            return res.status(200).send({ error: err.message || 'Unknown error occurred!' });
        }
        res.json(data);
    });
}

export const deleteByQuery = async (table, query, res) => {
    table.deleteMany(query, (err) => {
        if (err) {
            return res.status(200).send({ error: err.message || 'Unknown error occurred!' });
        }
        res.send({
            message: "Successfully deleted all data from the table by query"
        });
    });
}

export const updateTable = async (table, id, updatedValues, res) => {
    table.findOne(id).then(data => {
        for (const key in updatedValues) {
            data[key] = updatedValues[key];
        }

        data.save().then(saved => {
            res.json(saved);
        }).catch(err => {
            return res.status(200).send({ error: err.message || 'Unknown error occurred!' });
        });
    }).catch(err => {
        return res.status(200).send({ error: err.message || 'Unknown error occurred!' });
    });
}

export const create = async (table, data, res) => {
    await new table(data).save().then((data) => {
        res.json(data);
    }).catch((err) => {
        return res.status(200).send({ error: err.message || 'Unknown error occurred!' });
    });
}