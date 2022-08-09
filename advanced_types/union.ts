function logId(id: string | number) {
  console.log('id', id) // здесь мы не можем использовать методы строк, например, потому что будет ошибка, т.к. тип м.б. number
  // но можно использовать сужение типов
  if (typeof id === 'string') {
    console.log('string id', id.toLocaleLowerCase())
  } else {
    // здесь строка уже исключена, остался только number
    console.log('number', id)
  }
}

logId(1113)
logId('21141')
// logId(false) // error

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log('logError: array')
    err.map(e => console.log(e))
  } else {
    console.log('logError: string', err)
  }
}

function logObject(obj: { a: number } |  { b: number }) { // есть либо `a`, либо `b`
  // проверку можно сделать с помощью оператора `in`
  if ('a' in obj) {
    console.log('logObject has `a` property', obj.a)
  } else {
    console.log('logObject has `b` property', obj.b)
    // console.log(obj.a) // error -- такого свойства нет
  }
}

function logMultipleIds(a: string | number, b: string | boolean) {
  if (a === b) { // не только по значению, но и по типу, т.к. строгое равенство
    console.log('logMultipleIds: both args are strings', a, b)
  } else {
    console.log('logMultipleIds: else', a, b)    
  }
}
