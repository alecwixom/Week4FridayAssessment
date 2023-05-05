const complimentBtn = document.getElementById("complimentButton")
const newCompBtn = document.getElementById("newComp")

const moviesContainer = document.querySelector('#movies-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/movies`

const moviesCallback = ({ data: movies }) => displayMovies(movies)
const errCallback = err => console.log(err.response.data)

const getAllMovies = () => axios.get(baseURL).then(moviesCallback).catch(errCallback)
const createMovie = body => axios.post(baseURL, body).then(moviesCallback).catch(errCallback)
const deleteText = id => axios.delete(`${baseURL}/${id}`).then(moviesCallback).catch(errCallback)
const updateText = id => axios.put(`${baseURL}/${id}`).then(moviesCallback).catch(errCallback)


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getNewCompliment = () => {
    axios.get('http://localhost:4000/api/newCompliment')
    .then(res => {
        const data = res.data
        alert(data)
    })
}

newCompBtn.addEventListener('click', getNewCompliment)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')

    let bodyObj = {
        title: title.value,
    }

    createMovie(bodyObj)

    title.value = ''
}

function createMovieCard(movie) {
    const movieCard = document.createElement('div')
    movieCard.classList.add('movie-card')

    movieCard.innerHTML = `<p class="movie-title">${movie.title}</p>
    <div class="btns-container">
    <button onclick="updateText(${movie.id}, 'minus')">Change to Upper</button>
    </div>
    <button onclick="deleteText(${movie.id})">delete</button>
    `


    moviesContainer.appendChild(movieCard)
}

function displayMovies(arr) {
    moviesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createMovieCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllMovies()