# <center> TECNICAS_PARA_SOLUCION_ALGORITMOS</center>

## **Pattern: Sliding Window**

La ventana deslizante es una técnica de resolución de problemas para problemas que involucran matrices / listas. Estos problemas son fáciles de resolver utilizando un enfoque de fuerza bruta en O (n ^ 2) u O (n ^ 3). Usando la técnica de 'ventana deslizante', podemos reducir la complejidad del tiempo a O (n).

Entonces, lo primero que debe poder hacer es identificar un problema que utiliza un paradigma de ventana deslizante. Afortunadamente, hay algunos regalos comunes:

El problema implicará una estructura de datos ordenada e iterable como una matriz o una cadena.

Está buscando algún subrango en esa matriz / cadena, como el valor más largo, más corto u objetivo.

Existe una aparente solución ingenua o de fuerza bruta que se ejecuta en O (N²), O (2 ^ N) o alguna otra complejidad de tiempo grande.

Pero el mayor obsequio es que lo que está buscando es a menudo algún tipo de óptimo, como la secuencia más larga o la secuencia más corta de algo que satisfaga exactamente una condición dada.

En general, una ventana deslizante es una sub lista que se ejecuta sobre una colección subyacente. Es decir, si tienes una matriz como [a b c d e f g h] una ventana deslizante de tamaño 3 pasaría por encima como

[a b c] 
<br>  _[b c d]
<br>  __[c d e]
<br>  ___[d e f]
<br>  ____[e f g]
<br>  _____[f g h]

Esto es útil si, por ejemplo, desea calcular un promedio móvil, o si desea crear un conjunto de todos los pares adyacentes, etc.

La ventana deslizante es uno de los temas más frecuentes que se pregunta en las rondas de codificación en las principales empresas, por lo que definitivamente vale la pena pasar un tiempo y dominar esto.

## **Pattern: Two Pointers**

Dos punteros es realmente una técnica fácil y efectiva que generalmente se usa para buscar pares en una matriz ordenada.

Dada una matriz ordenada A (ordenada en orden ascendente), con N enteros, encuentre si existe algún par de elementos (A [i], A [j]) de modo que su suma sea igual a X.

**Veamos la solución ingenua.**

     // Naive solution to find if there is a <br>
    // pair in A[0..N-1] with given sum. 
  
    bool isPairSum(A[], N, X) 
    { 

    for (i = 0; i < N; i++) { 

    for (j = 0; j < N; j++) { 
        
            if (A[i] + A[j] == X) 
                return true; // pair exists 
  
            if (A[i] + A[j] > X) 
                break; // as the array is sorted 
        } 
    } 
  
    // No pair found with given sum. 
    return false; } 

La complejidad temporal de esta solución es O (n 2 ) .
Ahora veamos cómo funciona la técnica de dos punteros. Tomamos dos punteros, uno que representa el primer elemento y otro que representa el último elemento de la matriz, y luego agregamos los valores guardados en ambos punteros. Si su suma es menor que X, entonces cambiamos el puntero izquierdo a la derecha o si su suma es mayor que X, entonces cambiamos el puntero derecho a la izquierda, para acercarnos a la suma. Seguimos moviendo los punteros hasta obtener la suma como X.

    // Two pointer technique based solution to find 
    // if there is a pair in A[0..N-1] with a given sum. 
     bool isPairSum(A[], N, X) 
    {  
    // represents first pointer 
    int i = 0; 
  
    // represents second pointer 
    int j = N - 1; 
  
    while (i < j) { 
  
        // If we find a pair 
        if (A[i] + A[j] == X) 
            return true; 
  
        // If sum of elements at current 
        // pointers is less, we move towards 
        // higher values by doing i++ 
        else if (A[i] + A[j] < X) 
            i++; 
  
        // If sum of elements at current 
        // pointers is more, we move towards 
        // lower values by doing j-- 
        else
            j--; 
    } 
    return false; 
} 

La solución anterior funciona en O (n)

**¿Como funciona esto?**<br>
El algoritmo básicamente utiliza el hecho de que la matriz de entrada está ordenada. Comenzamos la suma de valores extremos (más pequeños y grandes) y condicionalmente movemos ambos punteros. Movimos el puntero izquierdo i cuando la suma de A [i] y A [j] es menor que X. No perdemos ningún par porque la suma ya es menor que X. La misma lógica se aplica al puntero derecho j.

## **Pattern: Fast & Slow pointers**
 Punteros rápidos y lentos (también conocido como Algoritmo de tortuga y liebre de Floyd ), que es muy útil cuando se trata de Listas o matrices cíclicas vinculadas .
Al moverse a diferentes velocidades, el algoritmo demuestra que los dos punteros se encontrarán eventualmente. El puntero rápido debería atrapar al puntero lento una vez que ambos punteros estén en un bucle cíclico.

### **Solución de punteros rápidos y lentos Enlace permanente**

Si necesita actualizar sus conocimientos en Listas vinculadas , le sugiero que lo haga antes de saltar a la solución.

Imagina a dos corredores corriendo en una pista de carreras circular . Si un corredor es más rápido que el otro, el corredor más rápido está obligado a alcanzar y cruzar al corredor más lento por detrás. En cada iteración, Tortoise   ( puntero lento ) se mueve un paso y Hare   ( puntero rápido ) se mueve dos pasos.

Si las Listas vinculadas no tienen un ciclo, Hare   llegará al final de las Listas vinculadas antes de la Tortuga   y esto revelará que no hay ningún ciclo en las Listas vinculadas .

La tortuga   nunca alcanzará a la liebre   si no hay un ciclo en las listas enlazadas .

Si en algún momento la Tortuga   ( puntero lento ) se encuentra con la Liebre   ( puntero rápido ), podemos concluir que las Listas Vinculadas son cíclicas . Aquí está la prueba:

- Si la Liebre   ( puntero rápido ) está un paso detrás de la Tortuga   ( puntero lento ): el puntero rápido se mueve dos pasos y el puntero lento se mueve un paso , y ambos se encuentran .

- Si la liebre   ( puntero rápido ) está dos pasos detrás de la tortuga   ( puntero lento ): el puntero rápido se mueve dos pasos y el puntero lento se mueve un paso . Después de los movimientos, el puntero rápido estará un paso detrás del puntero lento , lo que reduce este escenario al primer escenario. Esto significa que los dos punteros se encontrarán en la próxima iteración.

      class ListNode:
      def __init__(self, val):
      self.val = val
        self.next = None


      class Solution:
      def hasCycle(self, head: ListNode) -> bool:
        slow, fast = head, head
        while fast is not None and fast.next is not None:
            fast = fast.next.next
            slow = slow.next
            if slow == fast:
                return True  # found the cycle
        return False

Complejidad de tiempo: O (N) donde Nes el número de nodos en las Listas vinculadas .

Complejidad espacial: O (1) , el algoritmo se ejecuta en espacio constante.


## **Pattern: Merge Intervals**

 Intervalos de fusión , que es muy útil para resolver los problemas que implican intervalos, elementos superpuestos que deben fusionarse, etc.
Dada una colección de intervalos, combine todos los intervalos superpuestos .

Ejemplo 1:

    Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
    Output: [[1, 6], [8, 10], [15, 18]]
    Explanation: Since intervals [1, 3] and [2, 6] overlaps, merge them into [1, 6].

Ejemplo 2

    Input: [[1, 4], [4, 5]]
    Output: [[1, 5]]
    Explanation: Intervals [1, 4] and [4, 5] are considered overlapping.

**Solución de intervalos de fusión**

Dados dos intervalos A y B , habrá seis formas diferentes en que los dos intervalos pueden relacionarse entre sí:

Si a.start <= b.start, solo 1 , 2 y 3 son posibles de los escenarios anteriores.

Nuestro objetivo es fusionar los intervalos cada vez que se superponen. Para los dos escenarios superpuestos 2 y 3 , así es como los fusionaremos:

Vamos a fusionarlos en un nuevo intervalo ctal que;

    c.start = a.start
    c.end = max(a.end, b.end)

Así es como se verá nuestro código:

      class Solution:
       def merge(self, intervals):
        if len(intervals) < 2:
            return intervals
        
        intervals.sort(key=lambda x: x[0])
        
        merged = []
        start = intervals[0][0]
        end = intervals[0][1]
        
        for i in range(1, len(intervals)):
            interval = intervals[i]
            if interval[0] <= end:  # overlapping intervals
                end = max(interval[1], end)
            else:  # non-overlapping interval, add the previous interval and reset
                merged.append([start, end])
                                start = interval[0]
                end = interval[1]
            
        merged.append([start, end])  # add the last interval
        return merged

Complejidad de tiempo: O (N * log N) donde N es el número total de intervalos. Al principio, dado que clasificamos los intervalos, nuestro algoritmo tomará O (N * log N) para ejecutarse.

Complejidad espacial: O (N) , ya que necesitamos devolver una lista que contenga todos los intervalos combinados.

## **Pattern: Cyclic Sort**
La clasificación por ciclos es un algoritmo de clasificación inestable e inestable , una clasificación de comparación que es teóricamente óptima en términos del número total de escrituras en la matriz original , a diferencia de cualquier otro algoritmo de clasificación en el lugar. Se basa en la idea de que la permutación a clasificar puede factorizarse en ciclos , que pueden rotarse individualmente para dar un resultado ordenado.

A diferencia de casi cualquier otro tipo, los elementos nunca se escriben en otra parte de la matriz simplemente para apartarlos de la acción. Cada valor se escribe cero veces, si ya está en su posición correcta, o se escribe una vez en su posición correcta. Esto coincide con el número mínimo de sobreescrituras requeridas para una ordenación in situ completada.

Minimizar la cantidad de escrituras es útil cuando hacer escrituras en un conjunto de datos enorme es muy costoso, como ocurre con las EEPROM como la memoria Flash, donde cada escritura reduce la vida útil de la memoria .

Para ilustrar la idea del ciclo de clasificación, considere una lista con elementos distintos. Dado un elemento a , podemos encontrar el índice en el que ocurrirá en la lista ordenada simplemente contando el número de elementos en la lista completa que son más pequeños que a. <br>Ahora:

1. Si el elemento ya está en la posición correcta, no haga nada.

2.	Si no es así, lo escribiremos en su posición prevista. Esa posición está habitada por un elemento diferente b , que luego tenemos que mover a su posición correcta. Este proceso de desplazar elementos a sus posiciones correctas continúa hasta que un elemento se mueve a la posición original de a . Esto completa un ciclo.

Ciclo de desplazamiento para la lista "bdeac", al cambiar la primera letra b a su posición correcta:

La repetición de este proceso para cada elemento ordena la lista, con una sola operación de escritura si y solo si un elemento aún no está en su posición correcta. Al calcular las posiciones correctas toma{\ displaystyle O (n)}  tiempo para cada elemento individual, lo que resulta en un algoritmo de tiempo cuadrático, el número de operaciones de escritura se minimiza.

**Implementación**

Para crear una implementación funcional a partir del esquema anterior, se deben abordar dos problemas:

1.	Al calcular las posiciones correctas, debemos asegurarnos de no contar dos veces el primer elemento del ciclo.

2.	Si hay elementos duplicados presentes, podríamos intentar mover un elemento a a su posición correcta, que ya está habitada por una a . Simplemente intercambiando estos causaría que el algoritmo realice un ciclo indefinido. En cambio, tenemos que insertar el elemento después de cualquiera de sus duplicados.

La siguiente implementación de Python [1] [ referencia circular ] realiza la ordenación por ciclo en una matriz, contando el número de escrituras en esa matriz que fueron necesarias para ordenarla.

    def  cycle_sort ( array )  ->  int : 
    "" "Ordenar una matriz en su lugar y devolver el número de escrituras." "" 
    writes  =  0

    # Recorrer la matriz para encontrar ciclos para rotar. 
    para  cycle_start  en el  rango ( 0 ,  len ( array )  -  1 ): 
        item  =  array [ cycle_start ]

        # Encuentra dónde colocar el artículo. 
        pos  =  cycle_start 
        para  i  en el  rango ( cycle_start  +  1 ,  len ( array )): 
            if  array [ i ]  <  item : 
                pos  + =  1

        # Si el artículo ya está allí, esto no es un ciclo. 
        if  pos  ==  cycle_start : 

                    continuar

        # De lo contrario, coloque el elemento allí o justo después de cualquier duplicado. 
        while  item  ==  array [ pos ]: 
            pos  + =  1

        array [ pos ],  item  =  item ,  array [ pos ] 
        escribe  + =  1

        # Rotar el resto del ciclo. 
        while  pos  ! =  cycle_start : 
            # Encuentra dónde colocar el elemento. 
            pos  =  cycle_start 
            para  i  en el  rango ( cycle_start  +  1 ,  len ( array )): 
                if  array [ i ]  <  item : 
                    pos  + =  1

            # Coloque el elemento allí o justo después de cualquier duplicado. 
            mientras  item  ==  array [ pos ]: 
                pos  + =  1 
            array [ pos ],  item  =  item ,  array [ pos ] 
            escribe  + =  1

    volver  escribe

## **Pattern: In-place Reversal of a LinkedList**

Vamos a revertir un nodo a la vez. Comenzaremos con una variable current que inicialmente apuntará a la head Lista enlazada y una variable previous que apuntará al nodo anterior que hemos procesado; inicialmente previous apuntará a null.

Revertiremos el current nodo apuntándolo al previous antes de pasar al siguiente nodo. Además, actualizaremos previous para que siempre apunte al nodo anterior que hemos procesado.

    class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None


    class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if head is None:
            return head

        previous, current, next = None, head, None
        while current is not None:
            next = current.next  # temporarily store the next node
            current.next = previous  # reverse the current node
            previous = current  # point previous to the current node
            current = next  # move on
        return previous

Complejidad de tiempo: O (N) donde Nes el número de nodos en las Listas vinculadas.

Complejidad espacial: O (1) , el algoritmo se ejecuta en espacio constante.

## **Pattern: Tree Breadth First Search**

Hay muchas formas de recorrer gráficos. BFS es el enfoque más utilizado.

BFS es un algoritmo de desplazamiento en el que debe comenzar a recorrer desde un nodo seleccionado (origen o nodo de inicio) y recorrer el gráfico en capas para explorar los nodos vecinos (nodos que están directamente conectados al nodo de origen). Luego debe moverse hacia los nodos vecinos del siguiente nivel.

Como sugiere el nombre BFS, debe atravesar el gráfico de la siguiente manera:

1.	Primero muévase horizontalmente y visite todos los nodos de la capa actual.

2.	Moverse a la siguiente capa.

Considere el siguiente diagrama:

https://he-s3.s3.amazonaws.com/media/uploads/fdec3c2.jpg

La distancia entre los nodos en la capa 1 es comparativamente menor que la distancia entre los nodos en la capa 2. Por lo tanto, en BFS, debe atravesar todos los nodos en la capa 1 antes de pasar a los nodos en la capa 2.

**Atravesar nodos secundarios**

Un gráfico puede contener ciclos, lo que puede llevarlo nuevamente al mismo nodo mientras recorre el gráfico. Para evitar el procesamiento del mismo nodo nuevamente, use una matriz booleana que marque el nodo después de que se procese. Mientras visita los nodos en la capa de un gráfico, almacénelos de manera tal que pueda atravesar los nodos secundarios correspondientes en un orden similar.

En el diagrama anterior, comience a recorrer desde 0 y visite sus nodos secundarios 1, 2 y 3. Almacénelos en el orden en que se visitan. Esto le permitirá visitar los nodos secundarios de 1 primero (es decir, 4 y 5), luego de 2 (es decir, 6 y 7), y luego de 3 (es decir, 7), etc.

Para facilitar este proceso, use una cola para almacenar el nodo y márquelo como 'visitado' hasta que todos sus vecinos (vértices que están directamente conectados a él) estén marcados. La cola sigue el método de cola Primero en entrar, primero en salir (FIFO) y, por lo tanto, los vecinos del nodo se visitarán en el orden en que se insertaron en el nodo, es decir, el nodo que se insertó primero se visitará primero, y así en.

    BFS (G, s)                   //Where G is the graph and s is the source node
      let Q be queue.
      Q.enqueue( s ) //Inserting s in queue until all its neighbour vertices are marked.

      mark s as visited.
      while ( Q is not empty)
           //Removing that vertex from queue,whose neighbour will be visited now
           v  =  Q.dequeue( )

          //processing all the neighbours of v  
          for all neighbours w of v in Graph G
               if w is not visited 
                        Q.enqueue( w )             //Stores w in Q to further visit its neighbour
                        mark w as visited.

**Pattern: Tree Depth First Search**

La búsqueda de profundidad primero ( DFS ) es un algoritmo para atravesar o buscar estructuras de datos de árbol o gráfico . El algoritmo comienza en el nodo raíz (seleccionando algún nodo arbitrario como nodo raíz en el caso de un gráfico) y explora lo más posible a lo largo de cada rama antes de retroceder .

Para el siguiente gráfico:

https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRi9NL_VC_16L-GDRbZLpN3uGwmy5M-60vpNxQAjjGFXgTd-u22&usqp=CAU

Una búsqueda de profundidad primero que comienza en A, suponiendo que los bordes izquierdos en el gráfico que se muestran se eligen antes que los bordes derechos, y suponiendo que la búsqueda recuerda los nodos visitados anteriormente y no los repetirá (ya que este es un gráfico pequeño), visitará los nodos en el siguiente orden: A, B, D, F, E, C, G. Los bordes atravesados en esta búsqueda forman un árbol Trémaux , una estructura con importantes aplicaciones en la teoría de grafos . Realizar la misma búsqueda sin recordar los nodos visitados anteriormente resulta en nodos de visita en el orden A, B, D, F, E, A, B, D, F, E, etc. para siempre, atrapados en A, B, D, F , Ciclo E y nunca alcanzando C o G.

La profundización iterativa es una técnica para evitar este bucle infinito y llegaría a todos los nodos.

## **Pattern: Two Heaps**

**Solución de dos montones enlace permanente**<br>
Una solución de fuerza bruta podría ser mantener una lista ordenada de todos los números y devolver la mediana siempre que sea necesario. Insertar un número en una lista ordenada llevará tiempo O (N) si hay N números en la lista.

Un mejor enfoque es usar el patrón Two Heaps con a max_heapy min_heap.

Asumamos que esa xes la mediana de la lista. Esto significa que, la mitad de los elementos en la lista son más pequeños que (o iguales a) xy la otra mitad es mayor que (o igual a) x.

1.	Podemos almacenar la parte más pequeña de la lista en a max_heap. Estamos usando max_heapporque solo estamos interesados en conocer el número más grande en la primera mitad de la lista.

2.	Podemos almacenar la mayor parte de la lista en a min_heap. Estamos usando min_heapporque solo estamos interesados en conocer el número más pequeño en la segunda mitad de la lista.

3.	Insertar un número en un montón tomará O (log N) (mejor que el enfoque de fuerza bruta)

4.	La mediana de la lista actual de números se puede calcular a partir del elemento superior de los dos montones

Por ejemplo

1- addNum(3) : podemos insertarlo en max_heap. Después de cada inserción, equilibraremos el número de elementos en ambos montones para que los elementos en ellos sean iguales . Si el recuento de elementos es impar , decidamos tener más elementos max_heapque el min_heap

       # max_heap # ----- # max_heap # 
          3                 null

2- addNum(1) : Dado que 1 es menor que 3 , insértelo max_heap.

      #max_heap # ----- #max_heap # 
           3               null
           
           |
           |
           > // ese signo va con el menor para abajo
           1

3- En este punto necesitamos equilibrar los montones. Tomemos el elemento más grande del max_heape insértelo en el min_heap.
 
      # max_heap # ----- # max_heap # 
          1                 3

4- findMedian() : Como tenemos un número par de elementos, la mediana será el promedio de los elementos superiores de los montones:

    (1 + 3) / 2 = 2.0

5- addNum(5) : Como 5 es mayor que el elemento superior de la max_heap, insertemos en el min_heap. Después de la inserción, el recuento total de elementos será impar . Como habíamos decidido (paso 1 ) tener más números en el max_heap caso de un conteo impar , podemos tomar el número superior (el más pequeño ) min_heape insertarlo en el max_heap.

      #max_heap # ----- #max_heap # 
           3               5
           
           |
           |
           > // ese signo va con el menor para abajo
           1

6- findMedian() : Dado que tenemos un número impar de elementos, la mediana será el elemento superior de los max_heapcuales es 3 . Número impar de elementos siempre significa que max_heaptiene un elemento adicional que min_heap.

7- insertNum(4) : Insertar 4 en min_heap.

    #max_heap # ----- #max_heap # 
           3               4               
           |               |
           |               |
           >               > 
           1               5

8- findMedian() : Hay un número par de elementos, la mediana será el promedio del elemento superior de ambos montones.
           
    (3 + 4) / 2 = 3.5


**Un ejmplo de codigo:**

    from heapq import *


     class MedianFinder:

    def __init__(self):
        self.max_heap = []  # containing first half of numbers
        self.min_heap = []  # containing second half of numbers

    def addNum(self, num: int) -> None:
        if not self.max_heap or -self.max_heap[0] >= num:
            heappush(self.max_heap, -num)
        else:
            heappush(self.min_heap, num)

        # either both heaps will have equal number of elements or max-heap will have one more element
        if len(self.max_heap) > len(self.min_heap) + 1:
            heappush(self.min_heap, -heappop(self.max_heap))
        elif len(self.max_heap) < len(self.min_heap):
            heappush(self.max_heap, -heappop(self.min_heap))

    def findMedian(self) -> float:
        # we have even number of elements, take the average of middle two elements
        if len(self.max_heap) == len(self.min_heap):
            return -self.max_heap[0] / 2.0 + self.min_heap[0] / 2.0
        # we have odd number of elements, the first element in max-heap is the median element
        return -float(self.max_heap[0])

Complejidad de tiempo: O (log N) para addNum()y O (1) para findMedian().

Complejidad espacial: O (N)

## **Pattern: Subsets**

Patrón de Subconjuntos , que es muy útil para resolver los problemas que implican tratar con Permutaciones y Combinaciones de un conjunto de elementos dado.

Este patrón describe un enfoque eficiente de Breadth First Search (BFS) para manejar todos estos problemas.

Dado un conjunto de enteros distintosnums , devuelve todos los subconjuntos posibles (el conjunto de potencia).

**Solución de subconjuntosEnlace permanente**

Para generar todos los subconjuntos posibles , podemos usar el enfoque Breadth First Search (BFS) . Comenzando con un conjunto vacío, iteraremos por todos los números uno por uno y los agregaremos a los conjuntos existentes para crear subconjuntos.

1.	Comience con un conjunto vacío: [[]]

2.	Agregue num( 1 ) a los conjuntos existentes: [[], [1] ]

3.	Agregue num( 2 ) a los conjuntos existentes: [[], [1], [2], [1, 2] ]

4.	Agregue num( 3 ) a los conjuntos existentes: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3] ]
 
        from typing import List


        class Solution:
        def subsets(self, nums: List[int]) -> List[List[int]]:
        subsets = [[]]

        for num in nums:
            for i in range(len(subsets)):
                subsets.append(subsets[i] + [num])
        return subsets

Complejidad de tiempo: O (2 N ) ya que, en cada paso, se duplica el número de subconjuntos.

Complejidad espacial: O (2 N ).


## **Pattern: Modified Binary Search**

Patrón de búsqueda binaria modificada que es muy útil para resolver los problemas cada vez que se nos da una matriz ordenada o una lista o matriz vinculada , y se nos pide que encontremos un determinado elemento.

Este patrón describe una forma eficiente de manejar todos los problemas relacionados con la búsqueda binaria.

**Solución de búsqueda binariaEnlace permanente**

1- Supongamos que startes el primer elemento y endes el último elemento en nums.

    start = 0
    end = len(nums) - 1

2- Hay que encontrar el valor medio, mid. Una manera fácil de hacerlo en Python es

    mid = (start + end) // 2

Para Java y C ++ , esta ecuación funciona para la mayoría de los casos, pero cuando starto endes grande , esta ecuación nos dará un resultado erróneo debido al desbordamiento de enteros . Para resolver este problema, haremos nuestro cálculo un poco diferente;

    int mid = start + (end - start) / 2;

3- A continuación, veremos si el targetvalor es igual al número en el midvalor. Si es igual, retornamos midcomo el índice requerido.

4- Si targetno es igual al número en el índice mid, hay dos posibilidades que debemos verificar:

Si target < nums[mid], entonces podemos concluir que targetserá más pequeño que todos los números después del índice a midmedida que la matriz se ordena en orden ascendente. Podemos reducir nuestra búsqueda a end = mid - 1.

Si target > nums[mid], entonces podemos concluir que targetserá mayor que todos los números antes del índice a midmedida que la matriz se ordena en orden ascendente. Podemos reducir nuestra búsqueda a start = mid + 1.

**Un ejmplo de codigo:**

    from typing import List


    class Solution:
    def search(self, nums: List[int], target: int) -> int:
        start, end = 0, len(nums) - 1
        while start <= end:
            mid = (start + end) // 2

            if target == nums[mid]:
                return mid

            if target < nums[mid]:
                end = mid - 1
            else:
                start = mid + 1
        return -1

Complejidad de tiempo: O (log N) donde N es el total de elementos en la matriz dada.

Complejidad espacial: O (1)

## **Pattern: Bitwise XOR**

Patrón Bitwise XOR que es muy sorprendente para conocer los enfoques que el el operador XOR (^) nos permite resolver ciertos problemas.
Recuerde las siguientes dos propiedades de XOR :

1.	Devuelve 0 si tomamos XOR de dos mismos números.
2.	Devuelve el mismo número si XOR con 0.

Entonces podemos XOR todos los números en la entrada; los números duplicados se pondrán a cero entre sí y nos quedaremos con el número único.

    from typing import List

    class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        num = 0
        for i in nums:
            num ^= i
        return num

Complejidad de tiempo: O (N) donde N es el número total de elementos en la matriz de entrada.

Complejidad espacial: O (1)

Conocer bien las propiedades XOR abre algunas puertas sorprendentes en sus habilidades para resolver problemas. Para poder identificar los problemas relacionados con XOR provienen principalmente de experiencias anteriores. Pero si necesita eliminar los mismos números de una matriz de enteros, usar Trucos de manipulación de bits es extremadamente útil.

## **Pattern: Top 'K' Elements**

Patrón Top K Numbers , que es muy útil para resolver los problemas que nos pide encontrar los elementos K superiores / más pequeños / frecuentes entre un conjunto dado.

La mejor estructura de datos para realizar un seguimiento de los principales elementos K es Heap.

Si nos iterar a través de un elemento de la matriz a la vez y mantener k-ésimo elemento más grande en un montón de tal manera que cada vez que nos encontramos con un mayor número que el más pequeño número en el montón , que hacer dos cosas:

- Saca el número más pequeño del montón.

- Inserte el número más grande en el montón.

Esto asegurará que siempre tengamos los k números más grandes en el montón . Usaremos un montón mínimo para esto;

from heapq import *


    class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        min_heap = []
        
        for i in range(k):
            heappush(min_heap, nums[i])
        
        for i in range(k, len(nums)):
            if nums[i] > min_heap[0]:
                heappop(min_heap)
                heappush(min_heap, nums[i])
            
        return min_heap[0]

Complejidad del tiempo: O (N log K).

Complejidad espacial: O (K)

## **Pattern: K-way merge**
Patrón K-way Merge que es muy útil para resolver los problemas cada vez que se nos dan arreglos K ordenados, podemos usar un Heap para realizar eficientemente unRecorrido ordenado de todos los elementos de todas las matrices.

Podemos empujar el elemento más pequeño ( primero ) de cada matriz ordenada en un Montón mínimo para obtener el mínimo general. Al insertar elementos en el montón mínimo, hacemos un seguimiento de qué matriz proviene el elemento.

También podemos eliminar el elemento superior del montón para obtener el elemento más pequeño y empujar el siguiente elemento de la misma matriz, a la que pertenecía este elemento más pequeño , al montón . Podemos repetir este proceso para hacer un recorrido ordenado de todos los elementos.

Necesitamos encontrar el elemento más pequeño de todas las listas de entrada. Para hacerlo, primero tenemos que comparar solo el elemento más pequeño de todas las listas. Una vez que tenemos el elemento más pequeño , podemos ponerlo en la lista fusionada.

Siguiendo un patrón similar, podemos encontrar el siguiente elemento más pequeño de todas las listas para agregarlo a la lista fusionada.

1.	Podemos empujar el elemento más pequeño ( primero ) de cada matriz ordenada en un Montón mínimo para obtener el mínimo general.
2.	Después de esto, podemos sacar el elemento más pequeño (superior) del montón y agregarlo a la lista fusionada.
3.	Después de eliminar el elemento más pequeño del montón , podemos insertar el siguiente elemento de la misma lista en el montón .
4.	Podemos repetir los pasos 2 y 3 para completar la lista combinada en orden ordenado.

        class ListNode(object):
        def __init__(self, x):
        self.val = x
        self.next = None


        class ListNodeExtension(ListNode):
        def __lt__(self, other):
        return self.val < other.val


        class Solution: 
        def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        ListNode.__lt__ = ListNodeExtension.__lt__
        min_heap = []
        for root in lists:
            if root is not None:
                heappush(min_heap, root)

        head = tail = ListNode(0)
        while min_heap:
            tail.next = heappop(min_heap)
            tail = tail.next
            if tail.next:
                heappush(min_heap, tail.next)

        return head.next

Complejidad de tiempo: O (N log K) donde N es el número total de elementos en todas las K matrices de entrada.

Complejidad espacial: O (K)

## **Pattern : 0/1 Knapsack (Dynamic Programming)**

Patrón 0/1 Knapsack que es muy útil para resolver el famoso problema de Knapsack utilizando técnicas de programación dinámica .
Dada una matriz no vacía que contiene solo enteros positivos , encuentre si la matriz puede dividirse en dos subconjuntos de modo que la suma de elementos en ambos subconjuntos sea igual .

**Nota:**
Cada uno de los elementos de la matriz no excederá de 100 . El tamaño de la matriz no excederá de 200.

**Solución de fuerza bruta**
 
Una solución básica de fuerza bruta podría ser probar todas las combinaciones de partición de los números dados en dos conjuntos para ver si algún par de conjuntos tiene una suma igual.

Esto esencialmente transforma nuestro problema en: Encontrar un subconjunto de los números dados que tiene una suma total de sum / 2.

    class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        s = sum(nums)
        
        if s % 2 != 0:
            return False
        
        return self.can_partition_recursive(nums, s/2, 0)
    
    def can_partition_recursive(self, nums, sum, current_index):
        if sum == 0:
            return True
        
        if len(nums) == 0 or current_index >= len(nums):
            return False
        
        if nums[current_index] <= sum:
            if (self.can_partition_recursive(nums, sum - nums[current_index], current_index + 1)):
                return True
        
        return self.can_partition_recursive(nums, sum, current_index + 1)

Complejidad de tiempo : O (2 N ) donde N representa el número total.

Complejidad espacial : O (N) que se utilizará para almacenar la pila de recursión.

**Programación dinámica de arriba hacia abajo con memorizaciónEnlace permanente**

Podemos usar la memorización para superar los subproblemas superpuestos. Dado que necesitamos almacenar los resultados para cada subconjunto y para cada posible sum, por lo tanto, utilizaremos una matriz bidimensional para almacenar los resultados de los subproblemas resueltos.

    class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        s = sum(nums)
        
        if s % 2 != 0:
            return False
        
        # initialize two-dimensional dp array, -1 for default
        dp = [[-1 for x in range(int(s/2)+1)] for y in range(len(nums))]
        
        if self.can_partition_recursive(dp, nums, int(s / 2), 0) == 1:
            return True  # return True for 1
        else:
            return False  # return False for 0
        
    def can_partition_recursive(self, dp, nums, sum, current_index):
        if sum == 0:
            return 1
        
        if len(nums) == 0 or current_index >= len(nums):
            return 0
        
        if dp[current_index][sum] == -1:  # if we have not processed this sub-problem
                if nums[current_index] <= sum:
                    if self.can_partition_recursive(dp, nums, sum - nums[current_index], current_index + 1) == 1:
                        dp[current_index][sum] = 1
                        return 1

                # recursive call after excluding the number at the current_index
                dp[current_index][sum] = self.can_partition_recursive(dp, nums, sum, current_index + 1)

        return dp[current_index][sum]

Complejidad del tiempo: O (N * S) donde N representa los números totales y S es la suma total de todos los números.

Complejidad espacial: O (N * S)

**Programación dinámica de abajo hacia arriba con tabulaciónEnlace permanente**

Intentemos completar nuestra dp[][]matriz a partir de la solución anterior trabajando de abajo hacia arriba utilizando la técnica de programación dinámica de tabulación.

Esencialmente, queremos encontrar si podemos hacer todo lo posible sumcon cada subconjunto. Esto significa, dp[i][s]será Truesi podemos hacer la suma sde los primeros inúmeros.

Para cada número en el índice iy la suma s, tenemos estas dos opciones:

Excluir el número. En este caso, veremos si podemos obtener sdel subconjunto excluyendo este número:dp[i-1][s]

Incluya el número si su valor no es mayor que s. En este caso, veremos si podemos encontrar un subconjunto para obtener la suma restante:dp[i-1][s-num[i]]

    class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        s = sum(nums)
        
        if s % 2 != 0:
            return False
        
        s = int(s / 2)
        dp = [[False for x in range(s + 1)] for y in range(len(nums))]
        
        # populate s = 0 columns
        for i in range(0, len(nums)):
            dp[i][0] = True
            
        # form a subset only when the required sum is equal to its value
        for j in range(1, s + 1):
            dp[0][j] = nums[0] == j
        
        # process all subsets for all sums
        for i in range(1, len(nums)):
            for j in range(1, s + 1):
                # if we can get the sum 'j' without the number at index 'i'
                if dp[i - 1][j]:
                    dp[i][j] = dp[i - 1][j]
                    
                # else if we can find a subset to get the remaining sum
                elif j >= nums[i]:
                    dp[i][j] = dp[i - 1][j - nums[i]]
        
        # the bottom-right corner will have our answer
        return dp[len(nums) - 1][s]

Complejidad del tiempo: O (N * S) donde N representa los números totales y S es la suma total de todos los números.

Complejidad espacial: O (N * S).

## **Pattern: Topological Sort (Graph)**

 Patrón Topological Sort que es muy útil para encontrar un orden lineal de elementos que dependen entre sí.

Hay un total de n cursos que debe tomar, etiquetados de 0 a n - 1 .

Algunos cursos pueden tener requisitos previos, por ejemplo, para tomar el curso 0 primero debe tomar el curso 1 , que se expresa como un par: [0, 1]

Dado el número total de cursos y una lista de pares de requisitos previos, ¿es posible que termine todos los cursos?

**Solución de clasificación topológicaEnlace permanente**

El objetivo de tipo topológico es proporcionar una ordenación parcial entre los vértices de la gráfica de tal manera que si hay un borde de Ua Vcontinuación U <= V, lo que significa, Uviene antes Ven la ordenación.

**Fuente:** cualquier nodo que no tenga borde entrante y solo tenga bordes salientes se llama fuente.

**Sumidero:** cualquier nodo que solo tiene bordes entrantes y ningún borde saliente se llama sumidero.

El ordenamiento topológico comienza con una de las fuentes y termina en uno de los sumideros.

Un orden topológico es posible solo cuando el gráfico no tiene ciclos dirigidos , es decir, si el gráfico es un Gráfico Acíclico Dirigido (DAG) . Si el gráfico tiene un ciclo , algunos vértices tendrán dependencias cíclicas, lo que hace imposible encontrar un orden lineal entre los vértices.

Para encontrar el tipo topológico de un gráfico , podemos atravesarlo en forma de Breadth First Search (BFS).

**Inicialización**
 
Almacenaremos el gráfico en Listas de adyacencia , lo que significa que cada vértice padre tendrá una lista que contiene todos sus hijos. Haremos esto usando una tabla hash donde keyserá el número de vértice padre y valueserá una lista que contenga vértices hijos.

Para encontrar las fuentes, mantendremos una tabla hash para contar los grados en (recuento de los bordes entrantes de cada vértice). Cualquier vértice con 0 grados será una fuente.

**si. Construye el gráfico y encuentra en grados de todos los vértices**

Construiremos el gráfico a partir de la entrada y completaremos la tabla hash en grados.

**Encuentra todas las fuentes**

Todos los vértices con 0 en grados serán nuestras fuentes y los almacenaremos en una cola.

**re. Ordenar**
Para cada fuente:

- Agréguelo a la lista ordenada.

- Obtenga todos sus elementos secundarios del gráfico.

-- Disminuya el grado de cada niño en 1.

- Si el grado de un niño se convierte en 0 , agréguelo a la cola de fuentes.

- Repita estos pasos, hasta que la cola de origen esté vacía.

      from collections import deque
      from typing import List


      class Solution:
      def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        sorted_list = []

        if numCourses <= 0:
            return False

        # a. Initialization
        graph = {i: [] for i in range(numCourses)}  # adjacency list graph
        in_degree = {i: 0 for i in range(numCourses)}  # count of incoming edges

        # b. Build the graph
        for prerequisite in prerequisites:
            parent, child = prerequisite[0], prerequisite[1]
            graph[parent].append(child)  # put the child into it's parent's list
            in_degree[child] += 1

        # c. Find all sources
        sources = deque()
        for key in in_degree:
            if in_degree[key] == 0:
                sources.append(key)

        # d. Sort
        while sources:
            vertex = sources.popleft()
            sorted_list.append(vertex)
            for child in graph[vertex]:  # get the node's children to decrement their in-degrees
                in_degree[child] -= 1
                if in_degree[child] == 0:
                    sources.append(child)

        # if sorted_list does not contain all the courses, there is a cyclic dependency between courses
        # scheduling is not possible if there is a cyclic dependency
        return len(sorted_list) == numCourses

Complejidad del tiempo: O (V + E) donde V es el número total de cursos y E es el número total de prerequisites.

Complejidad espacial: O (V + E) ya que estamos almacenando todo prerequisites para cada curso en una lista de adyacencia .




