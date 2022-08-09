"use strict";
exports.__esModule = true;
// если у intersection есть пересекающиеся поля ( с одинаковыми названиями), то такоие данные будут не консистентными, одно из полей удалится, 
// хотя они наверняка предназначались для разного
// в этом случае лучше использовать композицию объектов с помощью отдельного типа
// Допустим у Role  тоже есть поле name
// type UserWithRole = {
//   user: User,
//   role: Role,
// }
var user = {
    name: 'adam',
    age: 99,
    skills: ['1', '2'],
    roleId: 1
};
