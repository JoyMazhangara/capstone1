const inspos = require('./db.json');
let globalId = 4;

module.exports = {
 
    getInspos: (req,res) => {
        res.status(200).send(inspos);
    },
 
    deleteInspo: (req,res) => {
        let inspoIndex = inspos.findIndex((inspo) => inspo.id === +req.params.id);
        inspos.splice(inspoIndex,1);
        res.status(200).send(inspos);
    },
 
    createInspo: (req,res) => {
        let { title, text, imageURL } = req.body
        let newInspo = {
            id: globalId,
            title,
            text,
            imageURL
        }
        inspos.push(newInspo)
        res.status(200).send(inspos)
        globalId++
    },
 
 
}