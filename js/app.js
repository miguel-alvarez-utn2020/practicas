const tarjetas = [
    new Tarjeta('cara vieja', 'ese es david')
];

function insertCard(){
    const form = document.forms['form'];
    const titulo = form['titulo'];
    const descripcion = form['descripcion'];
    console.log(titulo.value+' '+descripcion.value);
    if (titulo.value != '' && descripcion.value != '') {
        const tarjeta = new Tarjeta(titulo.value, descripcion.value);
        tarjetas.push(tarjeta);
    }
    else{
        alert('Complete la información');
    }
}









