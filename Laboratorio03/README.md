# Herramientas para realizar pruebas unitarias en JavaScript

## 1. Jest

#### Descripción:
Jest es un framework de pruebas unitarias desarrollado por Facebook, muy popular en el ecosistema JavaScript, especialmente en proyectos con React. Jest incluye un corredor de pruebas (test runner), un motor de aserciones, soporte para mocks y espías, y un entorno de pruebas muy completo sin necesidad de configuración adicional. También ofrece informes de cobertura de código integrados y es compatible con pruebas síncronas y asíncronas.

#### Casos donde aplica:
- Proyectos modernos de JavaScript y TypeScript, especialmente React y Node.js.
- Cuando se desea una herramienta "todo en uno" sin configuración complicada.
- Para pruebas que requieren mocks y pruebas asíncronas.

#### Casos donde no es recomendable:
- Proyectos muy simples o pequeños donde solo se requiere hacer pruebas básicas sin funcionalidades avanzadas.
- Cuando se busca una herramienta ligera y mínima, ya que Jest puede ser un poco pesada.

#### Ejemplo:
```ts
  // multiplica.js
  function multiplica(a, b) {
    return a * b;
  }
  module.exports = multiplica;

  // multiplica.test.js
  const multiplica = require('./multiplica');

  test('multiplica 5 * 6 es igual a 30', () => {
    expect(multiplica(5, 6)).toBe(30);
  });
```


## 2. Mocha

#### Descripción:
Mocha es un framework de pruebas flexible para JavaScript que permite definir pruebas con sintaxis BDD (Behavior Driven Development) o TDD (Test Driven Development). No incluye un motor de aserciones, por lo que generalmente se usa junto a bibliotecas como Chai, que proveen funciones como expect, should o assert.

#### Casos donde aplica:
- Proyectos que requieren una configuración personalizada o usar otras librerías de aserción/mocks.
- Cuando se prefiere separar el runner de las librerías de aserción.
- Ideal para entornos Node.js y pruebas de integración.

#### Casos donde no es recomendable:
- Para quienes buscan una solución lista para usar sin configuración extra.
- Proyectos pequeños que no requieren mucha personalización.

#### Ejemplo:
```js
  // multiplica.js
  function multiplica(a, b) {
    return a * b;
  }
  module.exports = multiplica;

  // prueba/multiplica.test.js
  const multiplica = require('../multiplica');
  const { expect } = require('chai');

  describe('multiplica()', () => {
    it('debería multiplicar dos números', () => {
      expect(multiplica(5, 6)).to.equal(30);
    });
  });
```


## 3. Jasmine

#### Descripción:
Jasmine es un framework de pruebas unitarias independiente para JavaScript. No requiere otras bibliotecas para funcionar y viene con todo lo necesario: corredor de pruebas, motor de aserciones, y herramientas de espías (spies). Es muy usado en proyectos Angular y se caracteriza por su enfoque en pruebas BDD.

#### Casos donde aplica:
- Proyectos frontend que requieren pruebas rápidas y sin configuraciones complicadas.
- Cuando se desea un framework con todo incluido (runner + assertions + mocks).
- Para pruebas de código en navegadores o con Karma.

#### Casos donde no es recomendable:
- Proyectos Node.js que requieren una integración más personalizada con otros paquetes.
- Cuando se prefiere un ecosistema más moderno o con mejor soporte para TypeScript.

#### Ejemplo:
```ts
  // multiplica.js
  function multiplica(a, b) {
    return a * b;
  }
  module.exports = multiplica;

  // multiplicaSpec.js
  const multiplica = require('./multiplica');

  describe('multiplica', () => {
    it('debería multiplicar dos números', () => {
      expect(multiplica(5, 6)).toBe(30);
    });
  });
```

# Referencias bibliográficas
- Pérez, B. (2020). Test unitarios en Javascript: una pequeña introducción. https://www.paradigmadigital.com/dev/test-unitarios-javascript-introduccion/
- 4Geeks. (s.f.). Cómo crear pruebas unitarias con JEST. https://4geeks.com/es/lesson/como-crear-pruebas-unitarias-con-javascript-y-jest
- Testim. (2025). Jasmine JS: Una guía para empezar a hacer pruebas desde cero. https://www.testim.io/blog/jasmine-js-a-from-scratch-tutorial-to-start-testing/
- DesarrolloWeb. (2024). Mocha, un nuevo sabor en pruebas unitarias de Javascript. https://desarrolloweb.com/articulos/mocha-pruebas-unitarias-javascript.html