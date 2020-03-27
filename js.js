// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
let car ={
    brand:"BMW",
    model:"X5",
    year: 2008,
    averageSpeed: 100,
    output: function(){
        document.write(this.brand+"<br>"+this.model+"<br>")
    },
    countingTimeForDistance: function(distance, averageSpeed){
        let timeToGo = distance/this.averageSpeed;
        return timeToGo+Math.floor(timeToGo/4)*1
    }
};

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.

// Два об'єкти
let fractions_1={
    numerator:2,
    denominator:5,
// Множення
    multiplication: function(numerator_2, denominator_2){
    let multiplicationNumerator=this.numerator*numerator_2;
    let multiplicationDenominator=this.denominator*denominator_2;
    if(multiplicationNumerator%multiplicationDenominator==0){
        return multiplicationNumerator/multiplicationDenominator
    }
    else{
        return this.reduction(multiplicationNumerator, multiplicationDenominator) 
    }
    },
// Ділення
    division : function(numerator_2, denominator_2){
    let divisionNumerator=this.numerator*denominator_2;
    let divisionDenominator=this.denominator*numerator_2;
    if(divisionNumerator%divisionDenominator==0){
        return divisionNumerator/divisionDenominator
    }
    else{
        return  this.reduction(divisionNumerator, divisionDenominator)
    }
    },
// Додавання
    addition : function(numerator_2, denominator_2){
    if(this.denominator==denominator_2){
        additionNumerator=this.numerator+numerator_2;
        additionDenominator=denominator_2;  
    }
    else {
        additionNumerator=this.numerator*denominator_2+numerator_2*this.denominator;//Якщо що, то це какби спільний знаменник
        additionDenominator=this.denominator*denominator_2
    }
    if(additionNumerator%additionDenominator==0){
        return additionNumerator/additionDenominator
    }
    else{
        return this.reduction(additionNumerator, additionDenominator)
    }
    },
// Віднімання
    subtraction :function(numerator_2, denominator_2){
    if(this.denominator==denominator_2){
        subtractionNumerator=this.numerator-numerator_2;
        subtractionDenominator=denominator_2;  
    }
    else {
        subtractionNumerator=this.numerator*denominator_2-numerator_2*this.denominator;
        subtractionDenominator=this.denominator*denominator_2
    }
    if(subtractionNumerator%subtractionDenominator==0){
        return subtractionNumerator/subtractionDenominator
    }
    else{
        return this.reduction(subtractionNumerator, subtractionDenominator)
    }
    },
// Скорочення
    reduction:function(numerator_r, denominator_r){
    let num = numerator_r;
    let den = denominator_r;
    for(let d=2; d<=denominator_r; d++){
        if(numerator_r%d==0 && denominator_r%d==0){
            num=numerator_r/d;
            den=denominator_r/d
        }
    }
    return num+"/"+den
    }
};

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов. 

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let time = {
    hours:08,
    minuts:25,
    seconds:30,
    // Вивод на екран
    timeOutput: function(){
        document.write(this.hours+":"+this.minuts+":"+this.seconds);
    },
    // Зміна часу на секунди
    timePlusSecond: function(plusSeconds){
       let timeInSeconds=this.hours*3600+this.minuts*60+this.seconds;
       let newTimeInSeconds=timeInSeconds+plusSeconds;
       let newHours = Math.trunc(newTimeInSeconds/3600);
       let newMinuts = Math.trunc(newTimeInSeconds/60)-newHours*60;
       let newSeconds = newTimeInSeconds-newHours*3600-newMinuts*60;
       return newHours+":"+newMinuts+":"+newSeconds
    },
    // Зміна часу на хвилини
    timePlusMinuts: function(plusMinuts){
        let plusMinutsInSecond=plusMinuts*60;
        return this.timePlusSecond(plusMinutsInSecond)
    },
    // Зміна часу на години
    timePlusHours: function(plusHours){
        let plusHoursInSecond=plusHours*3600;
        return this.timePlusSecond(plusHoursInSecond)
    }
};

