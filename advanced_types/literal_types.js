"use strict";
// Type literal - это частный случай Union типа, где элементами являются литералы.
exports.__esModule = true;
var RequestType;
(function (RequestType) {
    RequestType["GET"] = "get";
    RequestType["POST"] = "post";
})(RequestType || (RequestType = {}));
// для типизации `method` можно использовать либо enum:
//    method: RequestType
// либо литеральный тип:
function fetchWithAuth(url, method) {
    // return fetch()
    // return 0 // error
    return 1;
    // return -1
}
fetchWithAuth('sesf', 'post');
// fetchWithAuth('asds', 'qwe') // error
var a = 1; // type -- 1
var c = 'sdfsfsf'; // type string
var b = 'lolkek'; // можно присвоить только 'lolkek', т.е. всё равно что константа в данном случае
// НЮАНС
var method = 'post';
// fetch('wewr', method) // error -- method Тип string
// можно либо сделать из method константу 
//     const method = 'post'
// либо кастануть метод к определенному типу (ведь method м.б., например, внутри объекта):
fetchWithAuth('wewr', method);
