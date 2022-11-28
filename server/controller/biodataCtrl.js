const findAll = async (req, res) => {
    try {
        const result = await req.context.models.data_diri.findAll()
        return res.send(result)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req, res) => {
    const { files, fields } = req.fileAttrb
    try {
        const result = await req.context.models.data_diri.create({
            url_enpoint: fields[0].value,
            nama: fields[1].value,
            ttl: fields[2].value,
            usia: fields[3].value,
            wa: fields[4].value,
            kota: fields[5].value,
            pendidikan: fields[6].value,
            foto: files[0].file.newFilename
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async (req, res) => {
    try {
        const result = await req.context.models.data_diri.findOne({
            where: { id_data: req.params.id }
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async (req, res) => {
    const { files, fields } = req.fileAttrb
    try {
        const result = await req.context.models.data_diri.update({
            url_enpoint: fields[0].value,
            nama: fields[1].value,
            ttl: fields[2].value,
            usia: fields[3].value,
            wa: fields[4].value,
            kota: fields[5].value,
            pendidikan: fields[6].value,
            foto: files[0].file.newFilename
        }, { returning: true, where: { id_data: req.params.id } })
        return res.send(result)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req, res) => {
    try {
        const result = await req.context.models.data_diri.destroy({
            where: { id_data: req.params.id }
        })
        return res.send('delete ' + result + ' rows')
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    create,
    findOne,
    update,
    deleted
}