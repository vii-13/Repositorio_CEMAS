## Pilas

Una colección de datos a los cuales se les puede acceder mediante un extremo, que se conoce generalmente como tope. Las pilas no son estructuras fundamentales de datos; es decir no están definidas como tales en los lenguajes de programación. Para su representación requieren de otras Eds., como:  Arreglos y Listas.

Una pila representa una estructura lineal de datos en que se puede agregar o quitar elementos únicamente por uno de los dos extremos. En consecuencia, los elementos de una pila se eliminan en el orden inverso al que se insertaron. Debido a esta característica, se le conoce como estructura LIFO (last input, First output). Existen muchos casos prácticos en los que se utiliza la idea de pila: Ejemplo; pila de platos, en el supermercado latas. Las pilas con estructuras lineales como los arreglos, ya que sus componentes ocupan lugares sucesivos en la ED y c/u tienen un único sucesor/predecesor, con excepción del primero/último. 

En informática las pilas se usan muchísimo. Quizá la más famosa de todas sea la conocida como pilla de llamadas o call Stack. Gracias la existencia de esta pila los programas puedes guardar los puntos de retorno al llamar a subrutinas. También, en varios lenguajes, se usan pilas para guardar los datos que pasamos como parámetros. Esto se hace en forma automática y transporte para nosotros, y ayuda a usar la memoria disponible con eficiencia.

#### Propiedades de una pila
#### Estados
 ambos estados son booleanos (valen verdadero o falso)
-Pila Vacía, se da siempre que la estructura no contiene elementos
-Pila Llena, se da cuando no hay más lugar para almacenar elementos 
#### Acciones de una Pila
-Crear/Inicializar
-Destruir/Vaciar
-Agregar (Elemento), podemos agregar elementos, apilarlos, siempre que la pila no este llena. Se conoce también como Push o, en nuestro idioma Apilar.
-Extraer (Elemento), podemos extraer el ultimo elemento insertado des apilarlo, siempre y cuando la pila no este vacía. Se conoce también como Pop, en nuestro idioma, Des apilar. 
-Ver (Elemento) Tope, sin quitarlo, podemos ver el elemento que esta en la parte superior de la pila.

## Colas
Una cola es una estructura de datos, caracterizada por ser una secuencia de elementos en la que la operación de inserción Push se realiza por un extremo y la operación de extracción pop por el otro. También se le llama estructura FIFO (del inglés First In First Out), debido a que el primer elemento en entrar será también el primero en salir.
Las colas se utilizan en sistemas informáticos, transportes y operaciones de investigación (entre otros), dónde los objetos, personas o eventos son tomados como datos que se almacenan y se guardan mediante colas para su posterior procesamiento. Este tipo de estructura de datos abstracta se implementa en lenguajes orientados a objetos mediante clases, en forma de listas enlazadas.

Las pilas fueron pensadas para mantener elementos respetando siempre y directamente su orden de llegada. Las colas tienen un punto de inserción de elementos y otro para la extracción de los mismo, y están en extremos opuestos (cabecera-final, frente-fondo, o primero-último). En informática las colas también se usan con bastante frecuencia. Uno de los ejemplos puede ser la cola de mensajes del sistema.

#### Estados
 Ambos son booleanos (valen verdadero o falso)
-Cola vacía, se da siempre que la estructura no contiene elementos.
-Cola llena, se da cuando no hay más lugar para almacenar elementos.
#### Acciones de una Cola
-Crear/ inicializar
-Destruir/ Vaciar
-Agregar (Elemento), podemos agregar elementos siempre que la cola no este llena. Siempre agregarnos los elementos al final.
-Extraer (Elemento), podemos extraer el elemento insertado más antiguo, el cual se encuentra al frente, siempre y cuando la cola no esté vacía.
-Ver (Elemento) Cabecera, sin quitarlo, podemos ver el elemento que está próximo a salir (en la cabecera o frente de la cola), que no es otro que el primero.
Entonces una cola es un TDA dedicado al almacenamiento y manipulación de elementos. Como TDA, su funcionalidad es siempre la misma, independientemente de la implementación que se haya utilizado. Su funcionalidad cumple con la regla FIFO (el orden de salida de los elementos es el mismo que el de entrada).
Esto se debe a que las colas están diseñadas para devolver los elementos ordenados tal como llegan. Para esto, las colas poseen un punto de acceso y otro de salida que lógicamente están ubicados en extremos opuestos Siempre vemos el elemento que está primero o al frente.

## Arreglos
Es un conjunto de datos o una estructura de datos homogéneos que se encuentran ubicados en forma consecutiva en la memoria RAM (sirve para almacenar datos en forma temporal). Un arreglo puede definirse como un grupo o una colección finita, homogénea y ordenada de elementos. Los arreglos pueden ser de los siguientes tipos:
- De una dimensión (Arreglos unidimensionales).
- De dos dimensiones(Arreglos unidimensionales).
- De tres o más dimensiones (Arreglo con múltiples subíndices).

#### Arreglos unidimensionales
Es un tipo de datos estructurado que está formado de una colección finita y ordenada de datos del mismo tipo. Es la estructura natural para modelar listas de elementos iguales. Están formados por un conjunto de elementos de un mismo tipo de datos que se almacenan bajo un mismo nombre, y se diferencian por la posición que tiene cada elemento dentro del arreglo de datos. Al declarar un arreglo, se debe inicializar sus elementos antes de utilizarlos. Para declarar un arreglo tiene que indicar su tipo, un nombre único y la cantidad de elementos que va a contener.

#### Arreglos multidimensionales
Es un tipo de dato estructurado, que está compuesto por dimensiones. Para hacer referencia a cada componente del arreglo es necesario utilizar n índices, uno para cada dimensión. El término dimensión representa el número de índices utilizados para referirse a un elemento particular en el arreglo. Los arreglos de más de una dimensión se llaman arreglos multidimensionales.

#### Arreglos con múltiples subíndices
Es la representación de tablas de valores, consistiendo en información arreglada en renglones y columnas. Para identificar un elemento particular de la tabla, deberemos de especificar dos subíndices; el primero identifica el renglón del elemento y el segundo identifica la columna del elemento. A los arreglos que requieren dos subíndices para identificar un elemento en particular se conocen como arreglo de doble subíndice. Note que los arreglos de múltiples subíndices pueden tener más de dos subíndices. El estándar ANSI indica que un sistema ANSI C debe soportar por lo menos 12 subíndices de arreglo.


## Arboles
Los Árboles son las estructuras de datos más utilizadas, pero también una de las más complejas, Los Árboles se caracterizan por almacenar sus nodos en forma jerárquica y no en forma lineal como las Listas Ligadas, Colas, Pilas, etc., de las cuales ya hemos hablado en días pasados.

En ciencias de la computación , un árbol de sintaxis abstracta ( AST ), o simplemente árbol de sintaxis , es un árbol de representación de la sintáctica abstracta estructura del código fuente escrito en un lenguaje de programación. Cada nodo del árbol representa un constructo que ocurre en el código fuente. La sintaxis es "abstracto", en el sentido de que no representa a todos los detalles que aparecen en la sintaxis real sino sólo los detalles estructurales, de contenido relacionado. Por ejemplo, la agrupación paréntesis están implícitas en la estructura de árbol, y una construcción sintáctica como una si la condición de entonces la expresión pueden estar indicados por medio de un solo nodo con tres ramas.

Esto distingue a los árboles de sintaxis abstracta de árboles de sintaxis concretas, tradicionalmente designados árboles de análisis , que por lo general se construyen mediante un programa de análisis durante la traducción del código fuente y compilar proceso. Una vez construido, se añade información adicional a la AST mediante el procesamiento posterior, por ejemplo, análisis contextual.

Árboles de sintaxis abstracta también se utilizan en el análisis del programa y de transformación de programas sistemas.

Árbol de sintaxis abstracta son estructuras de datos ampliamente utilizados en los compiladores para representar la estructura del código del programa. Un AST es generalmente el resultado de la análisis de sintaxis fase de un compilador. A menudo sirve como una representación intermedia del programa a través de varias etapas que requiere el compilador, y tiene un fuerte impacto en el resultado final del compilador.

Un Árbol consiste en un nodo (r, denominado nodo raíz) y una lista o conjunto de subárboles (A 1, A 2, ... A k). Si el orden de los subárboles importa, entonces forman una lista, y se denomina árbol ordenado (por defecto un árbol se supone que es ordenado). En caso contrario los subárboles forman un conjunto, y se denomina árbol no ordenado. Se definen como nodos hijos de r a los nodos raíces de los subárboles A 1, A 2, ... A k Si b es un nodo hijo de a entonces a es el nodo padre de b Un nodo puede tener cero o más hijos, y uno o ningún padre. El único nodo que no tiene padre es el nodo raíz del árbol. Un nodo sin hijos se denomina nodo hoja o externo. En caso contrario se denomina nodo interno.





## Listas enlazadas
En ciencias de la computación, una lista enlazada es una de las estructuras de datos fundamentales, y puede ser usada para implementar otras estructuras de datos. Consiste en una secuencia de nodos, en los que se guardan campos de datos arbitrarios y una o dos referencias, enlaces o punteros al nodo anterior o posterior. El principal beneficio de las listas enlazadas respecto a los vectores convencionales es que el orden de los elementos enlazados puede ser diferente al orden de almacenamiento en la memoria o el disco, permitiendo que el orden de recorrido de la lista sea diferente al de almacenamiento.

Una lista enlazada es un tipo de dato autor referenciado porque contienen un puntero o enlace (en inglés link, del mismo significado) a otro dato del mismo tipo. Las listas enlazadas permiten inserciones y eliminación de nodos en cualquier punto de la lista en tiempo constante (suponiendo que dicho punto está previamente identificado o localizado), pero no permiten un acceso aleatorio. Existen diferentes tipos de listas enlazadas: listas enlazadas simples, listas doblemente enlazadas, listas enlazadas circulares y listas enlazadas doblemente circulares.

Las listas enlazadas pueden ser implementadas en muchos lenguajes. Lenguajes tales como Lisp, Scheme y Haskell tienen estructuras de datos ya construidas, junto con operaciones para acceder a las listas enlazadas. Lenguajes imperativos u orientados a objetos tales como C o C++ y Java, respectivamente, disponen de referencias para crear listas enlazadas. Las listas enlazadas son usadas como módulos para otras muchas estructuras de datos, tales como pilas, colas y sus variaciones.

El campo de datos de un nodo puede ser otra lista enlazada. Mediante este mecanismo, podemos construir muchas estructuras de datos enlazadas con listas; esta práctica tiene su origen en el lenguaje de programación Lisp, donde las listas enlazadas son una estructura de datos primaria (aunque no la única), y ahora es una característica común en el estilo de programación funcional.

A veces, las listas enlazadas son usadas para implementar vectores asociativos, y estas en el contexto de las llamadas listas asociativas. Hay pocas ventajas en este uso de las listas enlazadas; hay mejores formas de implementar estas estructuras, por ejemplo, con árboles binarios de búsqueda equilibrados. Sin embargo, a veces una lista enlazada es dinámicamente creada fuera de un subconjunto propio de nodos semejante a un árbol, y son usadas más eficientemente para recorrer esta serie de datos.

Como muchas opciones en programación y desarrollo, no existe un único método correcto para resolver un problema. Una estructura de lista enlazada puede trabajar bien en un caso, pero causar problemas en otros. He aquí una lista con algunas de las ventajas más comunes que implican las estructuras de tipo lista. En general, teniendo una colección dinámica donde los elementos están siendo añadidos y eliminados frecuentemente e importa la localización de los nuevos elementos introducidos se incrementa el beneficio de las listas enlazadas.

## Grafos
Los grafos, los objetos y el lenguaje cuyo estudio iniciamos aquí, resultan ser extremadamente útiles para representar primero, y luego analizar, problemas muy diversos. De una manera informal, un grafo es una colección de vértices y de aristas que unen estos vértices. Los vértices los dibujaremos como puntos (o pequeños círculos) sobre el plano; las aristas serán líneas que unen estos puntos. Adelantándonos a las definiciones formales, y para que el lector vaya comprobando la amplia capacidad de representación de este lenguaje, describimos ya algunas cuestiones que pueden ser planteados con él.

 Permiten representar relaciones binarias entre elementos de un conjunto, Desde un punto de vista práctico, los grafos permiten estudiar las interrelaciones entre unidades que interactúan unas con otras. Por ejemplo, una red de computadoras puede representarse y estudiarse mediante un grafo, en el cual los vértices representan terminales y las aristas representan conexiones (las cuales, a su vez, pueden ser cables o conexiones inalámbricas). En primera instancia debemos entender que es un grafo. Un grafo es una composición de un conjunto de objetos conocidos como nodos que se relacionan con otros nodos a través de un conjunto de conexiones conocidas como aristas.

Los grafos permiten estudiar las relaciones que existen entre unidades que interactúan con otras. Podemos representar diversas situaciones o elementos con grafos. Estos son extraordinariamente útiles en situaciones complejas, es por esto, que es común conseguir la implementación de análisis de grafos en estudios de ciencias exactas, ciencias sociales y en aplicaciones informáticas.

Entre las principales propiedades que posee un grafo está la adyacencia. La adyacencia se trata de la relación que existe entre dos aristas que comparten la conexión o relación con un vértice común. La incidencia, se trata simplemente de cuando un vértice está unido a otro.

También debemos entender las propiedades de ponderación de los grafos que corresponden a una función en la que cada arista es clasificada, cuantificada en diversos términos para aumentar la expresividad de modelo. Esta característica en especial es muy útil en estudios de optimización.

Por último, pero no menos importante destacamos al etiquetado. Esta trata de la distinción que se realiza en los vértices mediante una marca que los hace distinguible de otros.

Sus características permiten un sinfín de posibilidades en análisis y soluciones de datos a nivel empresarial, es por esto por lo que es importante sumergirse en estos conceptos y ver cómo podemos sacarle el mayor provecho.


## Heap
El Heap se utiliza para el ordenamiento de elementos (HeapSort) y para implementar colas de prioridad. Es una estructura de datos del tipo árbol con información perteneciente a un conjunto ordenado. Los montículos máximos tienen la característica de que cada nodo padre tiene un valor mayor que el de cualquiera de sus nodos hijos, mientras que, en los montículos mínimos, el valor del nodo padre es siempre menor al de sus nodos hijos.

Un árbol cumple la condición de montículo si satisface dicha condición y además es un árbol binario casi completo. Un árbol binario es completo cuando todos los niveles están llenos, con la excepción del último, que se llena desde la izquierda hacia la derecha.

En un montículo de prioridad, el mayor elemento (o el menor, dependiendo de la relación de orden escogida) está siempre en el nodo raíz. Por esta razón, los montículos son útiles para implementar colas de prioridad. Una ventaja que poseen los montículos es que, por ser árboles completos, se pueden implementar usando arreglos (arrays), lo cual simplifica su codificación y libera al programador del uso de punteros.

El montículo libre, zona libre, almacenamiento libre o Heap es una estructura dinámica de datos utilizada para almacenar datos en ejecución. A diferencia de la pila de ejecución que solamente almacena las variables declaradas en los bloques previo a su ejecución, el Heap permite reservar memoria dinámicamente, es decir, es el encargado de que la «magia» de la memoria dinámica ocurra. Las variables globales y estáticas también son almacenadas en él.

Como esta estructura de datos no sigue ninguna metodología, es un poco complicado mantener el control de los bloques de memoria reservados puesto que se pueden ocupar y liberar espacios en cualquier momento. 

El montículo se emplea en lenguajes de alto y medio nivel, muchas veces sin darnos cuenta. En Java, por ejemplo, se implementa a través de la clase PriorityQueue, la cual permite, a través de un comparador, implementar la ordenación interna del montículo. En otros lenguajes puede aparecer igualmente como cola de prioridad (PriorityQueue) o como montículo (Heap).

El montículo en sí permite:

Ordenar elementos de un vector de forma fácil y óptima, pudiendo implementar un comparador a medida.
Búsquedas el máximo, mínimos, o cualquier otro factor a tener en cuenta en la selección de búsqueda de elementos.
En problemas específicos de grafos como el recubrimiento mínimo de Prim o el camino más corto de Dijkstra.

## Stack (Pilas o Stack)  
El Stack se utiliza para almacenar las variables denominadas automáticas, ellas existen durante la ejecución de la función que las referencia. Los argumentos y variables locales son asignados y desasignados en forma dinámica durante la ejecución de las funciones; pero en forma automática por código generado por el compilador, el programador no tiene responsabilidad en ese proceso. Esta organización permite direccionar eficientemente variables que serán usadas frecuentemente; a la vez posibilita ahorrar espacio de direccionamiento ya que se puede reutilizar el espacio de memoria dedicado a la función cuando ésta termina; y también posibilita el diseño de funciones recursivas y reentrantes, asociando un espacio diferente para las variables por cada invocación de la función. Es importante notar que varias funciones pueden emplear los mismos nombres para las variables locales y argumentos y esto no provoca confusión; existe independencia temporal de las variables de una función.

 Es una estructura de datos que consta de una seria de valores en el cual las inserciones y eliminaciones se hacen por un extremo llamado cima o tope. Esta estructura se conoce también como LIFO o Stack (apilamiento).

Como su nombre lo indica, esta estructura va "apilando" los datos. A diferencia de las colas, los datos son extraídos en el orden inverso al que se introdujeron.
Son idénticas a las pilas ordinarias de la vida real: una pila de libros, una pila de ropa, etc.

#### Las pilas suelen emplearse en los siguientes contextos:

Evaluación de expresiones en notación postfija (notación polaca inversa).

Reconocedores sintácticos de lenguajes independientes del contexto.

Implementación de recursividad.

En un sistema operativo cada proceso tiene un espacio de memoria (pila) para almacenar valores y llamadas a funciones.

Una pila acotada es una pila limitada a un tamaño máximo impuesto en su especificación.

Por analogía con objetos cotidianos, una operación apilar equivaldría a colocar un plato sobre una pila de platos, y una operación retirar equivaldría a retirarlo.



# Opinion personal

##  Pilas

Podemos decir que una pila es como si fuera una lista o array, en el sentido que es una colección, pero a diferencia de los arrays y otras colecciones, en las pilas solo accedemos al elemento que esté “encima de la pila”, el último elemento. Nunca manipulamos ni accedemos a valores por debajo del último elemento.

La secuencia de las pilas nos ayudan ya que el ultimo dato es el primero en irse.

## Colas

Con la optimización de cola, conseguimos crear funciones recursivas que operan con un número de argumentos y memoria constante evitando caer en desbordamientos de pila o realizando una y otra vez cálculos intermedios innecesarios.

## Arreglos

Los arrays son tan importantes y siempre que programamos de alguna manera u otra nos sirven de mucha utilidad, ya que nos permiten guardar varias variables y acceder a ellas de manera independiente, es como tener una variable con distintos compartimentos donde podemos introducir datos distintos

## Arboles

Los arboles son estructuras bastante complejas, tiene una gran aplicaciones en la ciencia y en la programación convencional.

Adiferencia de las pilas, colas y listas enlazadas, el arbol no es lineal si no, que su estructura es jerárquica. Por esa razon diriamos que es un tanto mas complejo.

## Las listas enlazadas 

Las listas enlazadas son estructuras de datos semejantes a los arrrelos pero la diferencia es que el acceso a un elemento no se hace mediante un indice sino mediante un puntero.
La asignación de memoria es hecha durante la ejecución.

Con eso diria que las listas enlazadas son igual de eficientes que los arreglos.


## Grafos

Los grafos son por asi decirlo una forma de elazar vertices para asi obtener un dibujo o forma. Nos ayudaria mucho si queremos programar algun dibujo.





