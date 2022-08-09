type coolString = string // не сужаем тип, просто дополнительный алиас

// можно, единожды описав объект, использовать это описание повсеместно
type User = {
  name: string,
  age: number,
  skills: string[],
}

type Role = {
  roleId: number
}

// intersection
type UserWithRole = User & Role

// если у intersection есть пересекающиеся поля ( с одинаковыми названиями), то такоие данные будут не консистентными, одно из полей удалится, 
// хотя они наверняка предназначались для разного
// в этом случае лучше использовать композицию объектов с помощью отдельного типа
// Допустим у Role  тоже есть поле name
// type UserWithRole = {
//   user: User,
//   role: Role,
// }


let user: UserWithRole = {
  name: 'adam',
  age: 99,
  skills: ['1', '2'],
  roleId: 1,
}

export {}