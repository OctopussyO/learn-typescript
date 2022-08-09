// Type literal - это частный случай Union типа, где элементами являются литералы.

enum RequestType {
  GET = 'get', 
  POST = 'post',
}

// для типизации `method` можно использовать либо enum:
//    method: RequestType
// либо литеральный тип:
function fetchWithAuth(url: string, method: 'get' | 'post'): 1 | -1 {
  // return fetch()
  // return 0 // error
  return 1
  // return -1
}

fetchWithAuth('sesf', 'post')
// fetchWithAuth('asds', 'qwe') // error

const a = 1 // type -- 1

let c = 'sdfsfsf' // type string
let b: 'lolkek' = 'lolkek' // можно присвоить только 'lolkek', т.е. всё равно что константа в данном случае

// НЮАНС

let method = 'post'
// fetch('wewr', method) // error -- method Тип string
// можно либо сделать из method константу 
//     const method = 'post'
// либо кастануть метод к определенному типу (ведь method м.б., например, внутри объекта):
fetchWithAuth('wewr', method as 'post')  
// Но это надо использовать осторожно, потому что если в method на самом деле что-то другое, то типизация не сломается, но работать всё будет не так, как мы ожидаем
// если `as` используется как некий фикс, чтобы избавиться от TS, то это неверное его использование

export {}