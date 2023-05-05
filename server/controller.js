let db = []
let globalId = 1

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
    
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
    
        res.status(200).send(randomCompliment);
    },

    getNewCompliment: (req, res) => {
        const newCompliments = ["You can do anything you put your mind too...", "Let your mind guide you, do not guide your own mind", "In JavaScript we trust", "You can lead a Horse to water but you cannot make it drink", "You will find an A on your next assessment"];
    
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * newCompliments.length);
        let randomCompliment = newCompliments[randomIndex];
    
        res.status(200).send(randomCompliment);
    },

    getItems: (req, res) => {
        res.status(200).send(db)
    },

    addItem: (req, res) => {
        if(!title){
            res.send(400).send('New text must have a text')
        } else{
        let newItem = {
            textName,
            id:globalId
        }
        db.push(newItem)

        res.status(200).send(db)

        globalId++
        }
    },

    deletItem: (req, res) => {
        let {id} = req.params

        let index = db.findIndex(item => +db.id === +id)

        db.splice(index, 1)

        res.status(200).send(db)
    }

}