let isOpen = JSON.parse(window.sessionStorage.getItem('isOpen'));
if (isOpen) {
    window.sessionStorage.clear();
    window.location.href = "../index.html";
} else {
    JSON.stringify(window.sessionStorage.setItem('isOpen', '1'));
}