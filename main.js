//массив городов
const cities = [
  "Москва",
  "Санкт-Петербург",
  "Дубай",
  "Токио",
];

//массив температур для каждого города
const temps = [];

//цикл для ввода температуры пользователем и вывода информации в виде элементов списка
for (let i = 0; i < cities.length; i++) {
  let temp = +prompt(
    `Введите температуру для города ${cities[i]}: `,
    ""
  );

  //проверка корректности ввода значения температуры
  //минимальная температура на Земле -91,2, максимальная +56,7
  while (temp < -92 || temp > 57 || (!temp && temp != 0)) {
    alert(
      "Вы не ввели значение или введенное значение меньше/больше минимально/максимально возможной температуры. Пожалуйста, введите корректное значение"
    );
    temp = +prompt(
      `Введите температуру для города ${cities[i]}: `,
      ""
    );
  }

  //добавление введенных данных в массив
  temps.push(temp);

  //создание элементов списка
  const citiesTempsList =
    document.getElementById("citiesList");
  let itiesTempsListItem = document.createElement("li");
  itiesTempsListItem.innerText =
    "Температура в городе " + cities[i] + ": " + temps[i];
  console.log(itiesTempsListItem);
  citiesTempsList.append(itiesTempsListItem);
}

//вывод информации о максимальной температуре
const maxTempBox = document.getElementById("max_temp");
const maxTemp = Math.max(...temps);
const maxTempText = document.createElement("h2");
maxTempText.innerText = `Максимальная температура: ${maxTemp}`;
maxTempBox.append(maxTempText);

//вывод информации о миниальной температуре
const minTempBox = document.getElementById("min_temp");
const minTemp = Math.min(...temps);
const minTempText = document.createElement("h2");
minTempText.innerText = `Минимальная температура: ${minTemp}`;
minTempBox.append(minTempText);
