'use strict';

function createUserInterface() {

    const form = document.querySelector('[data-form]');

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.setAttribute('disabled', 'disabled');
    submitBtn.disabled = true;

    const inputs = Array.from(form.querySelectorAll('input'));

    const searchInput = document.querySelector('#searchInput');

    searchInput.addEventListener('input', () => {
        renderContactList();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { target } = e;

        // Get data from the form
        const data = inputs.reduce((acc, { name, value }) => {
            acc[name] = value;
            return acc;
        }, {});

        target.reset();

        dataBase.setData(data);

        console.log(dataBase.getData());

        renderContactList();
    });

    const disabledHandler = (e) => {
        let isInputFilled = true;
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value.trim().length) {
                isInputFilled = false;
                break;
            }
        }

        if (isInputFilled) {
            submitBtn.removeAttribute('disabled')
            submitBtn.disabled = false;
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtn.disabled = true;
        }
    }
    form.addEventListener('input', disabledHandler);

    function filterContacts(query) {
        const normalizedQuery = query.toLowerCase();
        return dataBase.getData().filter(({ firstName, lastName, phone }) => {
            return (
                firstName.toLowerCase().includes(normalizedQuery) ||
                lastName.toLowerCase().includes(normalizedQuery) ||
                phone.includes(normalizedQuery)
            );
        });
    }

    function renderContactList() {
        const contactList = document.querySelector('.list-group');
        const query = searchInput?.value || '';
        const contacts = filterContacts(query);

        contactList.innerHTML = '';

        contacts.forEach(({ id, firstName, lastName, phone }) => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex align-items-center justify-content-between';

            const contactInfo = document.createElement('div');
            contactInfo.className = 'text-black';
            contactInfo.innerHTML = `<b>${firstName} ${lastName}</b> <span>${phone}</span>`;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-danger btn-sm';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                dataBase.deleteData({ id });
                renderContactList();
            });

            listItem.appendChild(contactInfo);
            listItem.appendChild(deleteButton);

            contactList.appendChild(listItem);
        });
    }
    addSearchFunctionality();
    renderContactList();
}

createUserInterface();
