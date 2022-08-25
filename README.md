# amTest
Evalución frontend AmTest

# Steps
1. Correr el comando "npm i" en la terminal para instalar las dependencias del proyecto.
2. Correr "npm start" para correr la aplicación y levantar el json server con la base de datos. Iniciará en automático en el navegador.

# ¿Qué es lo que más te gustó de tu desarrollo?
Fue un proyecto divertido, diferente a los demás test que comparten normalmente, además está muy completo en cuanto a front end, manejo de base de datos y utilización de redux, es un buen reto.

# Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?
Tuve el tiempo para poder añadir un par de campos en el formulario de agregar usuario, donde puedes elegir:
 - Casa
 - Vivo / muerto

Además añaí integración a Firebase para subir la imagen del personaje, utilizando el storage de Firebase.

Con más tiempo habría hecho la conexión para manejar la base de datos desde firebase también, al igual el manejo de los post, get, put, etc. Para tener un proyecto más completo.

También podría haber añadido funcionalidad para editar los campos de los personajes, lo imagino que al dar click en la card del personaje se abra un modal con los inputs para poder actualizar la info.
De igual manera se podría añadir la funcionalidad para eliminar personajes.
Agregar también más filtros para mostrar los personajes, como filtro por "Casa", "Especie", "Género".

# Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste
Tenía la duda de guardar la imagen del personaje en el proyecto al agregar usuario, pero preferí integrar firebase para manejar las imagenes desde servidor y solo guardar el nombre de la url en el json.