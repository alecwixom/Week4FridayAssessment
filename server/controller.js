let movies = []
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

    getMovies: (req,res) => {
        res.status(200).send(movies)
    },
    
    addText: (req, res) => {
        let {title} = req.body

        if(!title) {
            res.send(400).send('Invalid Movie')
        } else {
            let newMovie = {
                title,
                id:globalId
            }
            movies.push(newMovie)

            res.status(200).send(movies)

            globalId++
        }
    },

    deleteText: (req, res) => {
        let {id} = req.params

        let index = movies.findIndex(movie => +movies.id === +id)

        movies.splice(index, 1)
        
        res.status(200).send(movies)
    },

    updateText: (req, res) => {
        let {id} = req.params

        let index = movies.findIndex(movie => +movie.id === +id)

        let newArr = []

        newArr.push(movies[index])
        movies.splice(index, 1)
        newArr.toUpperCase()
        movies.push(newArr[index])

        res.status(200).send(movies)
    }

}