class Tarjeta{
    constructor(titulo, descripcion){

        this._contenedor = document.getElementById('conteiner');
        this._elementoH1 = document.createElement('h1');
        this._elementoH1.classList = 'tarjeta__heading';
        this._contenidoH1 = document.createTextNode(titulo);
        this._elementoH1.appendChild(this._contenidoH1);
    
        this._elementoP = document.createElement('p');
        this._elementoP.classList = 'descripcion';
        this._contenidoP = document.createTextNode(descripcion);
        this._elementoP.appendChild(this._contenidoP);
    
        this._divTarjeta = document.createElement('div');
        this._divTarjeta.classList = 'tarjeta';
    
        this._divTarjeta.appendChild(this._elementoH1);
        this._divTarjeta.appendChild(this._elementoP);
        this._contenedor.appendChild(this._divTarjeta);
      }
      get titulo(){
          return this._elementoH1;
      }
      set titulo(titulo){
          this._elementoH1 = titulo;
      }
      get descripcion(){
          return this._elementoP;
      }
      set descripcion(descripcion){
          this._elementoP = descripcion;
      }
}