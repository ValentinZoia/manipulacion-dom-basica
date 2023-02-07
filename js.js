//Manipulacion del dom
/* Selectores mas usados:  -querySelector para clases y id (. o #)
                            -getElementById para id 
*/
const h1 = document.querySelector('.h1');
const p = document.getElementById('parrafo');
const h2 = document.querySelector('.h2');
const container = document.querySelector('.container-1')

/*-----Propiedades----
  -inner.HTML convierte a codigo html
  -inner.Text convierte todo a texto
  -getAttribute lee valor de atributos
  -setAttribute moddifica o agrega el atributo ('atributo', 'nuevo valor')
  -classList modifica la clase
       classList.add agrega una clase
       classList.remove elimina una clase
       classList.toggle agrega o elimina una clase dependiendo si existe o no
       classList.contains devuelve booleano dependiendo si tiene o no la clase
*/
h1.innerHTML = 'modifico el txt <br> y inserto etiquetas';
p.innerText = 'modifico el txt';
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'contenedor');
h2.classList.add('rojo')
h2.classList.remove('h2')
h2.classList.toggle('verde')
h2.classList.contains('verde')

// crear elementos html
/* - createElement crea un elemento
   - append inserta un elemento dentro de otro, en este caso img a container
   -appendChild es igual
*/ 
const img = document.createElement('img');
img.setAttribute('src', 'https://images.justwatch.com/poster/200710768/s718/el-espectacular-spider-man.%7Bformat%7D')

container.appendChild(img);


