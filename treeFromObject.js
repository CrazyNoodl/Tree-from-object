let data = {
  "Рыбы:": {
    "Форель": {},
    "Лосось": {}
  },
  "Деревья:": {
    "Огромные:": {
      "Секвойя": {},
      "Дуб": {}
    },
    "Цветковые:": {
      "Яблоня": {},
      "Магнолия": {}
    }
  }
};

const section = document.querySelector('#section');

function createList(arr) {
  let ul = document.createElement('ul');

  if (Object.keys(arr).length == 0) return;

  for (let key in arr) {
    let li = document.createElement('li');
    li.textContent = key;

    if (createList(arr[key])) {
      li.append(createList(arr[key]));
    }
    ul.append(li);
  }

  return ul;
}

function createTree(section, data) {
  section.append(createList(data));
}

createTree(section, data);
