// -------------------------- Home work --------------------------
// -------------------------- Десятник Карина --------------------------
let string = 'some test string';
// Задачи.Строки 
// 1. Получить первую и последнюю буквы строки
let answer;
answer = string[0] + string[string.length - 1];
// 2. Сделать первую и последнюю буквы в верхнем регистре
answer = (string[0].toUpperCase() + string.slice(1, string.length - 1) + string[string.length - 1].toUpperCase()); 
// 3. Найти положение слова ‘string’ в строке 
answer = string.indexOf('string');
// 4. Найти положение второго пробела           
answer = string.indexOf(' ', 2);
// 5. Получить строку с 5-го символа длиной 4 буквы
answer = string.substr(5, 4);
// 6. Получить строку с 5-го по 9-й символы 
answer = string.slice(5, 9);
//7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
answer = string.substring(0, string.length - 6);
// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016” 
let a = 20;
let b = 16;
string = a.toString() + b.toString();
//Задачи.Числа
//1. Получить число pi из Math и округлить его до 2-х знаков после точки
answer = Math.PI.toFixed(2);
//2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
answer = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
answer = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
//3. Работа с Math.random:
//a. Получить случайное число и округлить его до двух цифр после запятой
answer = Math.random().toFixed(2);
//b. Получить случайное целое число от 0 до X. X - любое произвольное число. 
    answer = Math.floor(Math.random() * 8);      
//4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let num1 = 0.6;
let num2 = 0.7;
answer = (num1 *10 + num2*10) / 10; // 1.3
//5. Получить число из строки ‘100$’ 
answer = parseInt('100$'); // 100
//Задачи.Объекты
//1. Создать объект с полем product, равным ‘iphone’
let object = {
	product: 'iPhone'		
    }
//2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
object.price = '1000';
object.currency = 'dollar';
//3. Добавить поле details, которое будет содержать объект с полями model и color
object.details = {};
object.details.model = 'x5';
object.details.color = 'white';


