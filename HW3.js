"use stict"

//Task 1

{

  for (let i = 1; i <= 50; i++){
    console.log(i);
  }

  for ( let i =35; i>= 8 ; i--){
    console.log(i)
  }
}

// Task 2

/*{
  let i=89;
 while( i>=11){
 document.write(`<br>${i}`);
 i--;
}

}*/

//Task 3

/*{
  var sum = 0;

  for (var i = 1; i <= 100; i++) {
  sum += i;
  }
  console.log(sum);
}*/

//Task 4


/*{
  let n = 5;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = 0;
    for (let j = 1; j <= i; j++) {
      sum += j;
    }
    console.log(`Sum ${i} = ${sum}`)
  }
}*/




//Task 5

/*{
 for (let i = 8; i <= 56; i++) {
  if (i % 2 == 0) {
    console.log( i );
  }
}
}
{
let i=8;
while(i<=56){
  if (i % 2 == 0) console.log(i);
  i++;
}
}*/

//Task 6

/*{
for (let i=2; i<=9; i++){
  for (let j=1; j<=9; j++)
  document.write(`<br>${i}*${j}=${i*j}`);
  document.write(`<br>`);
}
}*/


//Task 7

/*{
  let n = 1000;
  let num = 0;
  while (n >= 50) {
    n /= 2;
    num++;
  }
  console.log(`Результат деления: ${n}\n`);
  console.log(`Количество итераций: ${num}\n`);

}*/

//Task 8

/*{

  let total = 0;
  let a = 0;

  while (true) {

    let num = +prompt("Введите чило:");

    if (num === 0) break;

    if (isFinite(num)) {

      total += num;
      a++;

    } else {
      alert("Введенные данные не являются числом")
    }
  }
  console.log(total);
  console.log(total / a);
}*/


// Task 9


/*{

  let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57"

  let max = str[0];
  let min = str[0];
  let y = '';

  console.log(`Исходная строка ${str}`);

  for (let i = 1; i < str.length; i++) {
    if (str[i + 1] === ' ') {
      y = Number(str[i - 1] + str[i]);
      if (y > max) {
        max = y;
      }
      if (y < min) {
        min = y;
      }
    }
  }
console.log(` min = ${min}, max =${max} `);

}*/


// Task 10


/*{

  let num = prompt("Введите чило:");
  let str = String(num);
  let sum = 0;
  let reverse = "";

  console.log(` Цифры ${str}`);
  console.log(`Количество цифр ${str.length}`);

  for (let i = 0; i < str.length; i++) {
    let g = Number(str[i]);
    sum += g;
    reverse = g + reverse;
  }
  console.log(`Сумма цифр ${sum}`);
  console.log(`Обратный порядок цифр ${reverse}`);

}*/


