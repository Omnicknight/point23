import { last } from "lodash";
import {drawData} from "./utils/dom";


const apiUrl = 'http://localhost:3000';

const addBtn = document.getElementById('add'),
deleteBtn = document.getElementById('delete'),
wrapper = document.getElementById('data');

  

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
