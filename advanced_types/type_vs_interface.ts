interface User {
  name: string,
}

// один интерфейс дополняет другой -- merge definition
interface User {
  age: number,
}

// type User = {} // error -- type так не умеет, будет ругаться, т.к. User уже определен

const user = {
  name: 'qweqwe',
  age: 12,
}
// минус в том, что доопределение можно потерять, поэтому если это наш интерфейс, так делать не надо, лучше в одном месте определять
// полезно, если используем, например, библиотеку, но не можем расширить используемый в ней интерфейс, но можем доопределить



type ID = string | number  // интерфейс так не умеет, мы не можем заэкстендить интерфейс от примитивных типов, тожем только внутри добавить свойство
interface IDI {
  ID: string | number,
}

/**
 * Итого:
 * Если есть интерсекшн или юнион с простым типом, то только type
 * Для примитивных типов -- type
 * Если работаем с объектами -- использовать интерфейсы, кроме тех случаев, когда нужен type alias с примитивными типами
 * Для классов -- интерфейсы
 */


export {}