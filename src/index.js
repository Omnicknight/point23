const { default: Axios } = require("axios");
const { last } = require("lodash");
// const axios = require('axios');

const apiUrl = 'http://localhost:3000';

const addBtn = document.getElementById('add'),
deleteBtn = document.getElementById('delete'),
wrapper = document.getElementById('data');

const createDataElement = (element) => `<div data-user-id="${element.id}">
    <span>ID: ${element.id}</span>
    <span>Name: ${element.name}</span>
    <span data-user-id="${element.id}" class="delete">X</span>
    </div>`;

const createData = (data) => 
    data.map((element) => createDataElement(element)).join('');

const drawData = (data, wrapper = document.body) => 
    (wrapper.innerHTML = createData(data));    

axios.get(apiUrl).then((data) => drawData(data, wrapper));

wrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        axios.get(`${apiUrl}/delete?id=${e.target.dataset.userId}`).then((data) => drawData(data, wrapper));
    }
});

addBtn.addEventListener('click', () => {
    axios.get(`${apiUrl}/add`).then((data) => drawData(data, wrapper));
})

deleteBtn.addEventListener('click', () => {
    axios.get(`${apiUrl}/delete`).then((data) => drawData(data, wrapper));
})

console.log(last([1, 2, 3]));
console.log(axios);