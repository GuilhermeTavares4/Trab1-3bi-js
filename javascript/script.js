let ext = document.querySelectorAll('.extensao');

for (let i = 0; i < ext.length; i++) {
    ext[i].children[0].addEventListener('click', () => {
        for (let j = 0; j < ext[i].children[1].children.length; j++) {
            ext[i].children[1].children[j].classList.toggle('yo');
        }
    })
}