# Estrategias para aplicar estilos a los componentes


## 1. Estilos en línea (Inline Styles)
### Descripción: 
Los estilos en línea en React se aplican directamente a los elementos HTML dentro del componente, utilizando el atributo style. En vez de escribir el CSS en otro archivo, se escriben como un objeto de JavaScript dentro del mismo archivo del componente.

### Ventajas:
- Para quienes están empezando, es práctico porque no se necesita crear archivos .css por separado ni preocuparse por clases.
- Se pueden usar con props, useState o useEffect para cambiar estilos dependiendo del estado del componente o alguna lógica.
- Como los estilos están encapsulados en el componente, no hay riesgo de que una clase CSS se sobreescriba o afecte a otro componente.

### Desventajas:
- No se pueden usar cosas como :hover, :focus, :nth-child, ni media queries para responsive design. Por ejemplo, no se puede hacer que el botón cambie de color cuando el cursor pasa encima.
- Si hay muchos estilos, el archivo JS se vuelve largo y difícil de leer. El estilo mezclado con la lógica puede hacer el código confuso.
- Cada componente debe tener su propio objeto de estilo. Si se quiere aplicar el mismo estilo a varios componentes, se debe copiar y pegar el mismo objeto o crear funciones adicionales.

### Perspectiva personal: 
Usar estilos en línea me ha resultado muy útil al inicio. Me ayuda a concentrarme en una sola parte del código sin tener que cambiar entre archivos. Sin embargo, ya me di cuenta de que no es práctico a largo plazo, sobre todo si quiero que mi aplicación tenga buen diseño, responda al tamaño de la pantalla o tenga interacciones (como animaciones o hover). Por eso, aunque está bien para practicar y hacer pruebas, preferiría usar otras estrategias.


## 2. Hojas de estilo CSS tradicionales
### Descripción: 
Esta estrategia consiste en escribir los estilos en un archivo .css por separado, como se hace normalmente en HTML y CSS, y luego importar ese archivo en el componente React que lo necesita. Dentro del JSX, simplemente se usan los nombres de clase CSS como lo harías en HTML tradicional.

### Ventajas:
- Para quienes vienen del desarrollo web tradicional (HTML + CSS), esta forma es muy familiar. No se necesita aprender una nueva sintaxis ni preocuparte por camelCase ni objetos JS.
- A diferencia de los estilos en línea, aquí sí es posible usar :hover, :focus, @media, animaciones, y todo lo que CSS permite.
- El archivo JS se enfoca en la funcionalidad del componente, y el archivo CSS en su diseño. Esto puede hacer el código más organizado, especialmente en componentes más grandes.

### Desventajas:
- Si no existe una convención de nombres clara, se puede terminar usando una clase .boton en varios archivos sin darte cuenta, lo cual puede causar que los estilos se sobreescriban entre componentes. React no aísla estos estilos por defecto.
- Una de las ideas clave de React es que cada componente sea autónomo y reutilizable. Pero con CSS global, los estilos afectan a todo el proyecto, lo que puede romper la independencia entre componentes.

### Perspectiva personal: 
Como estoy empezando en React y ya tenía algo de experiencia previa con HTML y CSS, usar hojas de estilo tradicionales me resultó muy cómodo al principio. Sin embargo, ahora que estoy entendiendo mejor cómo funciona React y sus componentes, me doy cuenta de que los estilos tradicionales pueden hacer que el código se vuelva desordenado si no tengo cuidado. Por eso, aunque me parece buena opción para proyectos pequeños o para aprender, probablemente en proyectos más grandes usaría otra técnica más moderna para evitar conflictos y organizar mejor el código.


## 3. CSS Modules
### Descripción: 
CSS Modules es una técnica para escribir archivos CSS que están limitados a un solo componente, es decir, las clases que defines en ese archivo no afectan a otros componentes porque los nombres se vuelven únicos automáticamente.
Esto se logra agregando la extensión .module.css al archivo CSS, y luego importándolo en el componente. Al hacerlo, los estilos se usan como propiedades de un objeto en JavaScript.

### Ventajas:
- Cada clase CSS queda "encapsulada" en el componente. Así, aunque haya dos clases llamadas .boton en diferentes archivos, no se sobreescriben.
- No es necesario aprender sintaxis nueva ni usar objetos en JavaScript como en los estilos en línea. Se pueden usar pseudoclases, media queries, animaciones, etc.
- Ideal para proyectos grandes, donde muchos componentes necesitan estilos propios sin interferir con los demás.
- Funciona muy bien con Create React App y otros sistemas de build como Vite.

### Desventajas:
- En lugar de usar simplemente "boton", ahora se tiene que importar el archivo como un objeto (styles) y luego acceder con styles.boton, lo cual puede parecer innecesario al principio.
- Si no se utiliza una herramienta como Create React App (CRA), configurar CSS Modules por cuenta propia puede requerir modificar el Webpack u otras configuraciones.
- CSS Modules está pensado para encapsular, así que si se quiere aplicar un estilo general, es necesario manejar eso de forma separada.

### Perspectiva personal:
Aunque todavía me cuesta un poco entender bien cómo funciona eso de importar los estilos como objetos en JavaScript, me parece una opción muy ordenada y segura. Me gusta que los estilos estén bien organizados y que no haya riesgo de romper otros componentes sin querer.
Cuando tenga más experiencia o esté trabajando en un proyecto más grande (o con más personas), sí me gustaría usar CSS Modules para evitar errores y mantener todo limpio.


## 4. CSS-in-JS (Styled Components)
### Descripción:
CSS-in-JS es una técnica donde los estilos se escriben directamente dentro del archivo JavaScript, usando una sintaxis especial que mezcla CSS con código JS. Una de las librerías más populares para esto es Styled Components.
Con Styled Components, creas componentes React que ya incluyen sus estilos, todo en un solo lugar. En vez de usar archivos CSS separados, defines estilos dentro de tu archivo .js usando plantillas literales de ES6.

### Ventajas:
- No hay necesidad de cambiar entre archivos, todo está junto, lo que facilita ver el diseño y la lógica al mismo tiempo.
- Es posible cambiar los estilos dinámicamente según las propiedades del componente, por ejemplo, cambiar colores o tamaños sin crear clases nuevas.
- Styled Components genera nombres únicos para los estilos, por lo que no hay necesidad de preocuparse por conflictos con otras clases.
- Todo lo que CSS permite, funciona aquí.

### Desventajas:
- Hay que aprender cómo funcionan las plantillas literales, cómo se pasan props, y entender la API de la librería.
- No viene con React por defecto, se debe instalar la librería (npm install styled-components).
- Mezclar CSS con JavaScript puede parecer confuso si no se encuentra acostumbrado, especialmente cuando los estilos crecen en tamaño.
- Por ser una librería extra, puede hacer que la aplicación ocupe un poco más de espacio.

### Perspectiva personal:
Me llama mucho la atención esta forma porque tiene un diseño muy moderno y práctico: puedo tener toda la información del componente en un solo archivo y hacer estilos dinámicos usando props, lo que parece muy poderoso.
Sin embargo, para mí ha sido un poco complicado porque a veces daba errores y no entendía por qué. Siento que necesito entender mejor React y JavaScript para sacarle todo el provecho.


## 5. Preprocesadores CSS (SASS/SCSS)
### Descripción:
SASS (Syntactically Awesome Style Sheets) y su versión más popular SCSS son extensiones del CSS que permiten agregar funcionalidades que el CSS tradicional no tiene, como:
- Variables: para almacenar colores, tamaños o cualquier valor y reutilizarlos fácilmente.
- Anidamiento: escribir selectores dentro de otros para que el código sea más limpio y organizado.
- Mixins: bloques de estilos reutilizables que puedes insertar en cualquier lugar.
- Funciones y operaciones: para hacer cálculos o manipular valores.
Estas características ayudan a escribir estilos más organizados, fáciles de mantener y reutilizables, especialmente en proyectos grandes.

### Ventajas:
- Gracias al anidamiento y variables, el código es más limpio y fácil de leer.
- Con mixins y variables, no es necesario repetir estilos similares en diferentes partes.
- Cuando hay muchos estilos y componentes, ayuda a evitar errores y facilita mantener el código.
- Especialmente fácil si se utiliza Create React App, que ya trae soporte para SCSS con solo instalar una dependencia.

### Desventajas:
- Aunque es similar a CSS, hay que entender conceptos nuevos como variables, mixins y la sintaxis.
- Si no se utiliza Create React App, se tiene que configurar herramientas como Webpack para que compile SCSS, lo que puede ser un poco más técnico.
- No se puede cambiar estilos directamente con props o estados en React, aunque sí es posible desarrollar código más limpio y mantenible.

### Perspectiva personal:
Creo que SASS/SCSS es muy útil para proyectos complejos porque permite tener los estilos bien organizados y fácilmente reutilizables, algo que no es tan fácil con CSS tradicional o estilos en línea.
Además, lo que me gusta de esta opción y que la diferencia de las demás es que, aunque no es dinámica en tiempo real como CSS-in-JS, ayuda a mantener el código limpio y escalable, lo cual es fundamental cuando se trabaja en equipos grandes o proyectos que crecen mucho.
Por ahora, como todavía estoy aprendiendo, me siento más cómoda con métodos más simples, pero sé que aprender SASS me abrirá la puerta para trabajar en proyectos profesionales más grandes y con mejores prácticas.


## Referencias bibliográficas
- Gastwiri, V. (abril, 2023). Cómo dar estilo a tus aplicaciones React con CSS como un profesional. https://www.freecodecamp.org/espanol/news/como-dar-estilo-a-tus-aplicaciones-react-con-css-como-un-profesional/
- Luca, D. (s.f.). Estilos con React. https://damiandeluca.com.ar/estilos-con-react
- W3Schools. (s.f.). Styling React Using CSS. https://www.w3schools.com/react/react_css.asp
- Ighodaro, N. (mayo, 2024). Styling in React: 6 ways to style React apps. https://blog.logrocket.com/styling-react-6-ways-style-react-apps/