// Дано:

// var amount = 100;
// var monday = [
//   ['Write a tutorial',180],
//   ['Some web development',120]
// ];
// var tuesday = [
//   ['Keep writing that tutorial',240],
//   ['Some more web development',180],
//    ['A whole lot of nothing',240]
// ];
// var tasks = [monday,tuesday];
// Для массива tasks необходимо выполнить следующую цепочку методов:

// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
// Отфильтровать задачи, на выполнение, которых ушло два часа или больше.
// Умножить результат на часовую ставку.
// Вывести в html таблицу, которая состоит из ячеек с отфильтрованными задачами в виде:
// <tr>
//   <td>Task name: Write a tutorial</td>
//   <td>Taks duration: 3 hours</td>
//   <td>Task amount: $300</td>
// </tr>


var amount = 100;
var monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
var tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',180],
   ['A whole lot of nothing',240]
];
itemForWrite='';
let tasks =monday.concat(tuesday)

                  //переводим время в часы
                  .map(item =>{
                    item[1]=item[1]/60;
                    return item
                  })
                  // фильтруем по времени работы
                  .filter(item => item[1]>=2)
                  //Добавляем стоимость
                  .map(item =>{
                    item.push(item[1]*amount)
                    return item
                  })
                  //Выводим в таблицу
                  .forEach(function(item){
                    itemForWrite+=`<tr><td> Task name: ${item[0]}</td><td>Taks duration: ${item[1]} hours</td> <td>Task amount:$ ${item[2]} </td></tr>`
                  })

document.write('<table>'+itemForWrite+'</table>')