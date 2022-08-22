let idiomaAp = 0;

function idioma() {
    if (idiomaAp == 0) {
        document.getElementById('dropcontent').style.display = 'block';
        idiomaAp = 1;
    } else if (idiomaAp == 1) {
        document.getElementById('dropcontent').style.display = 'none';
        idiomaAp = 0;
    } else {
        alert('Análise');
    }
}