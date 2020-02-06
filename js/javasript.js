(function(){
    "use strict";

    function task1(){
        let userName = prompt("Введите имя");
        alert(`Hello, + ${userName}!`);
    }
    //task1();

    function task2(){
        let currentYear = 2020,
            birthYear = prompt("Введите год рождения");
        alert(`${currentYear} - ${birthYear}`);
    }
    //task2();

    function task3(){
        let sqrLenght = prompt("Введите длину стороны квадрата");
        alert(`Периметр квадрата равен ${sqrLenght * 4}`)
    }
    //task3();

    function task4(){
        let r = prompt("Введите радиус окружности");
        alert(`Площадь окружности равна ${r * 2 * Math.PI}`)
    }
    //task4();

    function task5(){
        let distance = prompt("Введите расстояние в км между двумя городами"),
            time = prompt("Введите желаемое время в пути");
        alert(`Необходимая скорость равна ${distance / time} км/ч`)
    }
    //task5();

    function task6(){
        let dollar = prompt("Введите количество долларов"),
            exchangeRate = 1.2;
        alert(`${dollar * exchangeRate} евро`)
    }
    //task6();
    
    function task7(){
        let volume = prompt("Введите объём");
        alert(`Количество файлов равно ${Math.floor(volume / 800.78)}`)
    }
    //task7();
    
    function task8(){
        let money = prompt("Введите сумму денег"),
            price = prompt("Введите цену шоколадки");
        alert(`Можно купить ${Math.floor(money / price)} шоколадок, останется ${money % price} денег)`)
    }
    //task8();
    
    function task9(){
        let num = prompt("Введите трёхзначное число"),
            units = num % 10;
            num = (num - units) / 10;
        let dozens = num % 10;
            num = (num - dozens) / 10;
        alert(`${units}${dozens}${num}`)
    }
    //task9();
    
    function task10(){
        let money = prompt("Введите сумму"),
            proc = 0.05;
        alert(`Будет начислено ${money * proc / 6}`)
    }
    task10();
})()