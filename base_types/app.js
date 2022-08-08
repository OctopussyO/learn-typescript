var a = 100;
var revenue = 1000;
var bonus = 500;
var testStr = 'test';
var testBool = true;
var res = revenue + bonus;
console.log('test res', res);
function getFullName(firstname, surname) {
    return "".concat(firstname, " ").concat(surname);
}
var user = {
    firstname: 'Harry',
    surname: 'Potter',
    city: 'Little Whinging',
    age: 15,
    skills: {
        parseltongue: true,
        immortality: false
    }
};
var getFullNameArrow = function (_a) {
    var _b = _a === void 0 ? {
        firstname: 'John',
        surname: 'Doe'
    } : _a, firstname = _b.firstname, surname = _b.surname;
    return "".concat(firstname, " ").concat(surname);
};
var officeInfo = {
    officeId: 45,
    isOpen: false,
    contacts: {
        phone: '+79100000000',
        email: 'my@email.com',
        address: {
            city: 'Moscow'
        }
    }
};
var skills = ['Dev', 'DevOps'];
for (var _i = 0, skills_1 = skills; _i < skills_1.length; _i++) {
    var skill_1 = skills_1[_i];
    console.log(skill_1.toLowerCase());
}
skills
    .filter(function (s) { return s !== 'DevOps'; })
    .map(function (s) { return s + '!'; });
// Tupples -- кортежи
// tupple -- массив ограниченной длины, где каждый элемент типизирован
var testTupple = [1, 'Dev'];
var id = testTupple[0];
var skillName = testTupple[1];
// const q = testTupple[2] // -- error
testTupple.push('2131231'); // -- ошибки не будет
// const q = testTupple[2] // -- всё равно error
// можно использовать spread-оператор на типах
// т.е. после 1-го и 2-го эл-тов м.б. сколько угодно boolean
var arr = [1, 'str', true, true, false];
// ReadOnly -- модификатор
var b = 5;
b = 6;
testTupple[0] = 2;
// чтобы нельзя было переопределить значение, используем readonly
var skill = [1, 'dev'];
var skillsAgain = ['dev', 'devops']; // зафиксировали модификацию массива
// skill[0] = 2 // error
// skillsAgain[0] = 'sdsf' // error
// skillsAgain.push('kek') // error
// Array<string>, ReadonlyArray -- generics
var skillsGenericType = ['dev', 'devops']; // Array<string>, ReadonlyArray -- generics
// Enums <3
// во многом ведут себя похоже с объектами
// 1 - успех
// 2 - в процессе
// 3 - отклонен
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
var result = {
    massage: 'Платеж успешен',
    statusCode: 1
};
// enum м.б. строковым
// 's' - успех
// 'p' - в процессе
// 'f' - отклонен
var StatusCodeStr;
(function (StatusCodeStr) {
    StatusCodeStr["SUCCESS"] = "s";
    StatusCodeStr["IN_PROCESS"] = "p";
    StatusCodeStr["FAILED"] = "f";
})(StatusCodeStr || (StatusCodeStr = {}));
// enum м.б. гетерогенным (числа и строки)
// 1 - успех
// 'p' - в процессе
// 'f' - отклонен
var StatusCodeTest;
(function (StatusCodeTest) {
    StatusCodeTest[StatusCodeTest["SUCCESS"] = 1] = "SUCCESS";
    StatusCodeTest["IN_PROCESS"] = "p";
    StatusCodeTest["FAILED"] = "f";
})(StatusCodeTest || (StatusCodeTest = {}));
// но с ними надо быть аккуратными, т.к. он ведет себя как числовой и можно обратиться к несуществующему числу
function action(status) {
}
action(StatusCodeTest.SUCCESS);
action(1);
action(3); // Опа! а такого и нет
// action('p') // а вот тут ошибка, хотя значение валидное
// это связано с особенностью enum, т.к. если он гетерогенный, то по умолчанию он продолжает быть числовым
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USER"] = 1] = "USER";
})(Roles || (Roles = {}));
// Числовые enums м.б. расчетными
function compute() {
    return 3;
}
var ComputedEnum;
(function (ComputedEnum) {
    ComputedEnum[ComputedEnum["ADMIN"] = 1] = "ADMIN";
    ComputedEnum[ComputedEnum["USER"] = 2] = "USER";
    ComputedEnum[ComputedEnum["TEST"] = compute()] = "TEST";
})(ComputedEnum || (ComputedEnum = {}));
function test(x) {
}
test(ComputedEnum); // это валидно, но реальных кейсов таких нет, просто enum тут ведет себя как объект
var res2 = 1 /* RolesConst.ADMIN */; // см. скомпилированный код
