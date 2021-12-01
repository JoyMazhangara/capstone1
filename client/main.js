

const baseURL = `http://localhost:3000/api/inspo`


const message = document.querySelector("#message")

function addQuote(event) {
    event.preventDefault();
    const inputField = document.querySelector("input");
    const ul = document.querySelector("ul");
    const quote = document.createElement("li");
    const quoteText = document.createElement("span");
    quoteText.textContent = inputField.value;
    quote.appendChild(quoteText);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener('click',deleteQuote);
    quote.appendChild(deleteBtn);
    ul.appendChild(quote);
    inputField.value = " ";
}


const form2 = document.querySelector("#quotes");
form2.addEventListener('submit', addQuote)


function deleteQuote(event) {
    event.target.parentNode.remove();
    message.textContent = "Quote deleted!"
}

// INSPIRATIONAL CARDS CODE

const inspoContainer = document.querySelector('#inpos-container')
const form = document.querySelector('form')



function createInspoCard(inspo) {
    const inspoCard = document.createElement('div')
    inspoCard.classList.add('inspo-card')

    inspoCard.innerHTML = `<img alt='inspo cover image' src=${inspo.imageURL} class="inspo-cover-image"/>
    <p class="title">${inspo.title}</p>
    <div class="txt-container">
        <p class="inspo-text">${inspo.text} days</p>  
    </div>
    <button onclick="deleteInspo(${inspo.id})">delete</button>
    `


    inspoContainer.appendChild(inspoCard)
}



function displayInspos(arr) {
    inspoContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createInspoCard(arr[i])
    }
}

const inspoCallback = (res) => {
    {inspos = res.data}
    console.log(res)
    displayInspos(inspos)
}
const errCallback = err => console.log(err)

const getAllInspos = () => axios.get(baseURL).then(inspoCallback).catch(errCallback)
const createInspo = body => axios.post(baseURL, body).then(inspoCallback).catch(errCallback)
const deleteInspo = id => axios.delete(`${baseURL}/${id}`).then(inspoCallback).catch(errCallback)


function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let text = document.querySelector('#text')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        text: text.value, 
        imageURL: imageURL.value
    }

    axios.post(baseURL, bodyObj)
    .then(res => {
        let insposArr = res.data
        displayInspos(insposArr)
    })

    

    title.value = ''
    text.value = ''
    imageURL.value = ''
}

// function createInspoCard(inspo) {
//     const inspoCard = document.createElement('div')
//     inspoCard.classList.add('inspo-card')

//     inspoCard.innerHTML = `<img alt='inspo cover image' src=${inspo.imageURL} class="inspo-cover-image"/>
//     <p class="title">${inspo.title}</p>
//     <div class="txt-container">
//         <p class="inspo-text">${inspo.text} days</p>  
//     </div>
//     <button onclick="deleteInspo(${inspo.id})">delete</button>
//     `


//     inspoContainer.appendChild(inspoCard)
// }


form.addEventListener('submit', submitHandler)


getAllInspos()










