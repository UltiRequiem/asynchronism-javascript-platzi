# El Asíncronismo

El asincronismo es básicamente una manera de aprovechar el tiempo y los recursos de nuestra aplicación,
ejecutando tareas y procesos mientras otros son resueltos en background (como la llegada de la información de una API),
para posteriormente continuar con las tareas que requerían esa información que no tenías de manera instantánea.

Un ejemplo fácil es comparando asincronismo vs sincronismo: En lenguajes síncronos al hacer un temporizador
para ejecutar una función, todo el código se pausa hasta terminar el tiempo,
mientras que en Javascript u otros lenguajes asíncronos, podemos estar aprovechando ese tiempo para ejecutar
otros procesos hasta que ese tiempo finaliza.

## Glosario

### API

Interfaz de programación de aplicaciones (Application Programming Interface). Es un conjunto de
rutinas que provee acceso a funciones de un determinado software.

### Concurrencia

Cuando dos o más tareas progresan simultáneamente.

### Paralelismo

Cuando dos o más tareas se ejecutan, literalmente, a la vez, en el mismo instante de tiempo.

### Bloqueante

Una llamada u operación bloqueante no devuelve el control a nuestra aplicación hasta que se ha
completado. Por tanto el thread queda bloqueado en estado de espera.

### Síncrono

Es frecuente emplear ‘bloqueante’ y ‘síncrono’ como sinónimos, dando a entender que toda la
operación de entrada/salida se ejecuta de forma secuencial y, por tanto, debemos esperar a que
se complete para procesar el resultado.

### Asíncrono

La finalización de la operación I/O se señaliza más tarde, mediante un mecanismo específico
como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta
sea procesada en diferido.

### Call Stack

La pila de llamadas, se encarga de albergar las instrucciones que deben ejecutarse. Nos indica en
que punto del programa estamos, por donde vamos.

### Heap

Región de memoria libre, normalmente de gran tamaño, dedicada al alojamiento dinámico de
objetos. Es compartida por todo el programa y controlada por un recolector de basura que se
encarga de liberar aquello que no se necesita.

### Cola o Queue

Cada vez que nuestro programa recibe una notificación del exterior o de otro contexto distinto al
de la aplicación, el mensaje se inserta en una cola de mensajes pendientes y se registra su
callback correspondiente.

### Eventloop o Loop de eventos

Cuando la pila de llamadas (call stack) se vacía, es decir, no hay nada más que ejecutar, se
procesan los mensajes de la cola. Con cada ‘tick’ del bucle de eventos, se procesa un nuevo
mensaje.

### Hoisting

Sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del
código en tiempo de compilación.

### DOM

DOM permite acceder y manipular las páginas XHTML como si fueran documentos XML. De
hecho, DOM se diseñó originalmente para manipular de forma sencilla los documentos XML.

### XML

Lenguaje de marcado creado para la transferencia de información, legible tanto para seres
humanos como para aplicaciones informáticas, y basado en una sencillez extrema y una rígida
sintaxis. Así como el HTML estaba basado y era un subconjunto de SGML, la reformulación del
primero bajo la sintaxis de XML dio lugar al XHTML; XHTML es, por tanto, un subconjunto de
XML.

### Events

Comportamientos del usuario que interactúa con una página que pueden detectarse para lanzar
una acción, como por ejemplo que el usuario haga click en un elemento (onclick), que elija una
opción de un desplegable (onselect), que pase el ratón sobre un objeto (onmouseover), etc.

### Compilar

Compilar es generar código ejecutable por una máquina, que puede ser física o abstracta como
la máquina virtual de Java.

### Transpilar

Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un
programa produce otro programa en otro lenguaje cuyo comportamiento es el mismo que el
original.

## Links Utiles

- [Event Loop](https://platzi.com/clases/1642-javascript-profesional/22169-event-loop)
- [Loupe](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
- [Lista de APIS Publicas](https://github.com/public-apis/public-apis)
- [Rubber duck One](https://keepcoding.io/blog/soluciona-los-bugs-de-tu-codigo-con-un-pato-de-goma)
- [Rubber duck Two](https://www.youtube.com/watch?v=TinCWH9uuQ0)
