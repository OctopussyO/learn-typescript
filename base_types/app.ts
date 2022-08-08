const a = 100

let revenue: number = 1000
let bonus: number = 500
let testStr: string = 'test'
let testBool: boolean = true

let res: number = revenue + bonus
console.log('test res', res)

function getFullName(firstname: string, surname: string): string {
  return `${firstname} ${surname}`
}

const user = {
  firstname: 'Harry',
  surname: 'Potter',
  city: 'Little Whinging',
  age: 15,
  skills: {
    parseltongue: true,
    immortality: false,
  }
}

const getFullNameArrow = ({ 
  firstname, 
  surname,
}: { 
  firstname: string, 
  surname: string,
} = {
  firstname: 'John', 
  surname: 'Doe',
}): string => {
  return `${firstname} ${surname}`
}


let officeInfo: {
  officeId: number;
  isOpen: false;
  contacts: {
    phone: string;
    email: string;
    address: {
      city: string;
    };
  };
} = {
  officeId: 45,
  isOpen: false,
  contacts: {
    phone: '+79100000000',
    email: 'my@email.com',
    address: {
      city: 'Moscow',
    }
  }
}

let skills: string[] = ['Dev', 'DevOps']

for (const skill of skills) {
  console.log(skill.toLowerCase())
}

skills
  .filter((s: string) => s !== 'DevOps')
  .map(s => s + '!')

// Tupples -- кортежи
// tupple -- массив ограниченной длины, где каждый элемент типизирован

const testTupple: [number, string] = [1, 'Dev']
const id = testTupple[0]
const skillName = testTupple[1]
// const q = testTupple[2] // -- error
testTupple.push('2131231') // -- ошибки не будет
// const q = testTupple[2] // -- всё равно error

// можно использовать spread-оператор на типах
// т.е. после 1-го и 2-го эл-тов м.б. сколько угодно boolean
const arr: [number, string, ...boolean[]] = [1, 'str', true, true, false]


// ReadOnly -- модификатор
let b = 5
b = 6
testTupple[0] = 2
// чтобы нельзя было переопределить значение, используем readonly

const skill: readonly [number, string] = [1, 'dev']
const skillsAgain: readonly string[] = ['dev', 'devops'] // зафиксировали модификацию массива

// skill[0] = 2 // error
// skillsAgain[0] = 'sdsf' // error
// skillsAgain.push('kek') // error

// Array<string>, ReadonlyArray -- generics
const skillsGenericType: ReadonlyArray<string> = ['dev', 'devops'] // Array<string>, ReadonlyArray -- generics



// Enums <3
// во многом ведут себя похоже с объектами
// что он из себя представляет -- зависит от того, как мы его определим
// если это обычный енам, то это функция
// если это константный енам, то это просто константа, которая подставляется в нужные места (там, где это использовалось)

// 1 - успех
// 2 - в процессе
// 3 - отклонен

enum StatusCode {
  SUCCESS = 1, // default -- 0
  IN_PROCESS = 2, // default -- 1
  FAILED = 3, // default -- 2
}

const result = {
  massage: 'Платеж успешен',
  statusCode: 1,
}

// enum м.б. строковым
// 's' - успех
// 'p' - в процессе
// 'f' - отклонен

enum StatusCodeStr {
  SUCCESS = 's',
  IN_PROCESS = 'p',
  FAILED = 'f',
}

// enum м.б. гетерогенным (числа и строки)
// 1 - успех
// 'p' - в процессе
// 'f' - отклонен

enum StatusCodeTest {
  SUCCESS = 1,
  IN_PROCESS = 'p',
  FAILED = 'f',
}
// но с ними надо быть аккуратными, т.к. он ведет себя как числовой и можно обратиться к несуществующему числу

function action(status: StatusCodeTest) {

}

action(StatusCodeTest.SUCCESS)
action(1)
action(3) // Опа! а такого и нет
// action('p') // а вот тут ошибка, хотя значение валидное
// это связано с особенностью enum, т.к. если он гетерогенный, то по умолчанию он продолжает быть числовым

enum Roles {
  ADMIN,
  USER,
}

// Числовые enums м.б. расчетными
function compute() {
  return 3
}

enum ComputedEnum {
  ADMIN = 1,
  USER = ADMIN * 2,
  TEST = compute(),
}

function test(x: { ADMIN: number }) {

}

test(ComputedEnum) // это валидно, но реальных кейсов таких нет, просто enum тут ведет себя как объект

// если посмотреть скомпилированный код, то мы увидим, что enum -- это функция

// можно также использовать константные enums,
// при этом в скомпилированном коде ничего из него сделано не будет, но во всех местах, где этот енам использован, значение будет заменено на константу

const enum RolesConst {
  ADMIN = 1,
  USER = 2,
}

const res2 = RolesConst.ADMIN // см. скомпилированный код
