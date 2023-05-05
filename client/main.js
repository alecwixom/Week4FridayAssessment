const complimentBtn = document.getElementById("complimentButton")
const newCompBtn = document.getElementById("newComp")
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/db`

const textCallback = ({data: db}) => displayText(db)
const errCallback = err => console.log(err.response.data)

const createText = body => axios.post(baseURL, body).then(textCallback).catch(errCallback)


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

    let title = document.querySelector('#textName')

    let bodyObj = {
        title: title.value,
}
createText(bodyObj)

    title.value = ''
}

function createItem(item) {
    const itemCard = document.createElement('div')
    itemCard.classList.add('item-card')

    itemCard.innerHTML = `<p class="item-title">${item.textName}</p>`

}

function displayText(arr) {
    itemCard.innerHTML = ``
    for(let i = 0; i < arr.length; i++) {
        createItem(arr[i])
    }
}
form.addEventListener('submit', submitHandler)

