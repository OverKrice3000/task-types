/*
Типизируйте функцию getPersons, возвращающую массив объектов со следующими свойствами:
- name - строка
- age - число
- gender - 'male' или 'female'
 */
type Person = {
    name: string;
    age: number;
    gender: 'male' | 'female';
};

export function getPersons(): Person[];

/*
Типизируйте функцию personToString, возвращающую строку и принимающую объект одного из следующих форматов:
   1. Пользователь:
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   2. Сотрудник
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   - company- строка
 */
type User = {
    name: string;
    age: number;
    gender: 'male' | 'female';
};
type Employee = {
    name: string;
    age: number;
    gender: 'male' | 'female';
    company: string;
};

export function personToString(person: User | Employee): string;
