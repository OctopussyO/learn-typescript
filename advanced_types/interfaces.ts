// Interface -- альтернативная запись описания объекта
// интерфейсы можно эффективно использовать в классах
interface User {
  name: string,
  age: number,
  skills: string[],
  log: (id: number) => string;
}

// тут различия между типом и интерфейсом нет
type User2 = {
  name: string,
  age: number,
  skills: string[],
  log: (id: number) => string;
}

interface Role {
  roleId: number,
}

// interface UserWithRole extends User {
//   roleId: number,
// }
// аналогично
// interface UserWithRole extends User, Role {}
// при этом ГыукЦшерКщду может добавлять ещё какие-то свои свойства:
interface UserWithRole extends User, Role {
  createdAt?: Date;
}


let user: User = {
  name: 'adam',
  age: 99,
  skills: ['1', '2'],
  log(id) {
    return ''
  },
}

let userWithRole: UserWithRole = {
  name: 'adam',
  age: 99,
  skills: ['1', '2'],
  roleId: 1,
  // createdAt: new Date(),
  log(id) {
    return ''
  },
}

// еще одна возможность -- индексные свойства (как в типе, так и в интерфейсе)
// можно использовать для словарей 
interface UserDict {
  [index: number]: User
}

type UserDict2 = {
  [index: number]: User
}

// такая запись нечасто будет встречаться, т.к. уже появился тип Record
type UserDict3 = Record<number, User> // generic

export {}