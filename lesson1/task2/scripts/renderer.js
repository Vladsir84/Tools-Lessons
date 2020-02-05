const listItem = document.querySelector('.list');

export const renderListElements = tasks => {
    listItem.innerHTML = '';

    const listItemsElements = tasks
        .sort((a, b) => b.date - a.date)
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxItem = document.createElement('input');
            checkboxItem.setAttribute('type', 'checkbox');
            checkboxItem.setAttribute('id', id);
            checkboxItem.checked = done;
            checkboxItem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxItem, text);
            return listItemElem;
        });
    listItem.append(...listItemsElements);
};