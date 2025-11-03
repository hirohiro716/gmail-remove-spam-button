// ==UserScript==
// @name         Gmail Remove Spam Button
// @namespace    https://github.com/hirohiro716/
// @version      1.0
// @description  Remove the spam email report button.
// @author       hiro
// @match        https://mail.google.com/mail/*
// @icon         https://mail.google.com/favicon.ico
// @grant        none
// @updateURL    https://github.com/hirohiro716/gmail-remove-spam-button/raw/main/gmail-remove-spam-button.user.js
// @downloadURL  https://github.com/hirohiro716/gmail-remove-spam-button/raw/main/gmail-remove-spam-button.user.js
// ==/UserScript==

const removeButton1 = () => {
    const button = Array.from(window.document.querySelectorAll('div')).find(element => element.getAttribute('data-tooltip') === '迷惑メールを報告');
    if (button) {
        button.addEventListener('mousedown', () => {
            button.remove();
        });
        button.addEventListener('keydown', () => {
            button.remove();
        });
        button.remove();
    }
};
const removeButton2 = () => {
    const button = Array.from(window.document.querySelectorAll('span')).find(element => element.textContent.endsWith('をブロック'));
    if (button) {
        const parent = button.parentElement;
        const message = button.cloneNode();
        message.textContent = '[スパム報告は禁止です]';
        message.style.paddingLeft = '1em';
        message.style.color = '#ccc';
        message.style.fontSize = '0.8em';
        parent.replaceChild(message, button);
    }
};
const removeButton3 = () => {
    const button = Array.from(window.document.querySelectorAll('span')).find(element => element.textContent === 'スパムとして報告');
    if (button) {
        button.addEventListener('mousedown', () => {
            button.remove();
        });
        button.addEventListener('keydown', () => {
            button.remove();
        });
        button.remove();
    }
};
const removeButton4 = () => {
    const button = Array.from(window.document.querySelectorAll('span')).find(element => element.textContent === 'フィッシングを報告');
    if (button) {
        button.addEventListener('mousedown', () => {
            button.remove();
        });
        button.addEventListener('keydown', () => {
            button.remove();
        });
        button.remove();
    }
};
setInterval(removeButton1, 100);
setInterval(removeButton2, 150);
setInterval(removeButton3, 200);
setInterval(removeButton4, 250);
