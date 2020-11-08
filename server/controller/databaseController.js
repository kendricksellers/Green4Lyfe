export const findAll = async (table, res) => {
    return findByQuery(table, {}, res);
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
    return table.find(query, (err, data) => {
        if (err) {
            return res.status(200).send({ error: err.message || 'Unknown error occurred!' });
        } else if (data.length == 0) {
            return res.status(200).send( { error: "No query items found"});
        }
        return data;
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
    return table.findOne(id).then(data => {
        for (const key in updatedValues) {
            data[key] = updatedValues[key];
        }

        return data.save().then(saved => {
            return saved;
        }).catch(err => {
            return res.status(200).send({ error: err.message || 'Unknown error occurred!' });
        });
    }).catch(err => {
        return res.status(200).send({ error: err.message || 'Unknown error occurred!' });
    });
}

export const create = async (table, data, res) => {
    return await new table(data).save().then((data) => {
        return data;
    }).catch((err) => {
        return res.status(200).send({ error: err.message || 'Unknown error occurred!' });
    });
}