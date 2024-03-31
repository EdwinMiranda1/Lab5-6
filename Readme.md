## SOLID
SOLID es un acrónimo que representa cinco principios de diseño de software que se utilizan para crear sistemas más mantenibles, flexibles y escalables. Estos principios fueron introducidos por Robert C. Martin en su libro "Diseño Ágil de Software" ("Agile Software Development, Principles, Patterns, and Practices") y se consideran fundamentales en la programación orientada a objetos. A continuación, se describen brevemente los cinco principios SOLID:

S - Principio de responsabilidad única (Single Responsibility Principle): Este principio establece que una clase debe tener una única razón para cambiar, es decir, una única responsabilidad. Si una clase tiene más de una responsabilidad, se vuelve más difícil de entender, modificar y probar.

O - Principio de abierto/cerrado (Open/Closed Principle): Este principio establece que las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para su extensión pero cerradas para su modificación. Esto significa que se deben poder agregar nuevas funcionalidades sin cambiar el código existente.

L - Principio de sustitución de Liskov (Liskov Substitution Principle): Este principio establece que los objetos de un programa deben poder ser reemplazados por instancias de sus subtipos sin alterar la corrección del programa. En otras palabras, los objetos deben poder ser tratados como sus subtipos sin que el programa falle.

I - Principio de segregación de interfaces (Interface Segregation Principle): Este principio establece que una clase no debe verse obligada a implementar interfaces que no utiliza. En lugar de tener una sola interfaz grande, se deben preferir múltiples interfaces específicas.

D - Principio de inversión de dependencia (Dependency Inversion Principle): Este principio establece que los módulos de alto nivel no deben depender de módulos de bajo nivel, sino de abstracciones. Además, las abstracciones no deben depender de los detalles, sino que los detalles deben depender de las abstracciones.