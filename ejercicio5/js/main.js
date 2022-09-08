function agregar_elemento() {    
    // OBTENEMOS LA LISTA 
    var lista = document.getElementById("lista");
    // CREEMOS UN NUEVO ITEM DENTRO DEL UL
    var elemento_nuevo = document.createElement("li");
    // ELEMENTO X = DONDE X = LONGITUD DE LA LISTA + 1
    var texto ="Elemento " + (lista.children.length + 1);
     // CREMAOS EL ELEMENTO NUEVO 
    elemento_nuevo.appendChild(document.createTextNode(texto));
    // AÑADIMOS EL ELEMENTO NUEVO A LA LISTA 
    lista.appendChild(elemento_nuevo);
  }