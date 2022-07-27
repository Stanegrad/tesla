const openMenu = () => {
    document.getElementById("backdrop") = 'backdrop active';
    document.getElementById(".aside") = 'active';
}

const closeMenu = () => {
    document.getElementById("backdrop").className = 'backdrop';
    document.getElementById('.aside').className = '';
}

document.getElementById('menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();
}