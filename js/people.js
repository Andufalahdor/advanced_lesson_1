let db = ['Ivan', 'Petro', 'Abdula']
let addName, addBtn, deleteBtn, user;

function cacheDom() {
    addName = document.querySelector('.add-name');
    addBtn = document.querySelector('.add-btn');
    user = document.querySelector('.main-right');
    user.addEventListener('DOMNodeInserted', () => {
        deleteBtn = document.querySelectorAll('.del-btn');
    })
}

function render() {
    let content = ``;
    db.forEach((elem, id) => {
        content += `<div class="user">
        <div class="user-name">${elem}</div>
        <input type="button" class="del-btn" value="Удалить" data-id="${id}">
        </div>`;
    })
    user.innerHTML = content;
    bindEvent()
}

function bindEvent() {
    cacheDom()
    addBtn.addEventListener('click', () => {
        addPersonName();
    })
    deleteBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            delPersonName(event.target.dataset.id)
        })
    })

}

function addPersonName() {
    if (addName.value) {
        db.push(addName.value);
        addName.value = '';
        render();
    }
}

function delPersonName(id) {
    db.splice(id, 1);
    render();
}

export function init() {
    cacheDom();
    render()
}