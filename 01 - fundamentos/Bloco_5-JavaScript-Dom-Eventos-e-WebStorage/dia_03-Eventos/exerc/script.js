function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    }
}
  
createDaysOfTheWeek();

function createDaysOfThemMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const calendarList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const dayNumListItem = document.createElement('li');
        dayNumListItem.innerHTML = dezDaysList[index];
        if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
            dayNumListItem.className = 'day holiday';
        }
        else if (dezDaysList[index] === 25) {
            dayNumListItem.className = 'day holiday friday'
        }
        else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
            dayNumListItem.className = 'day friday';
        }
        else {
            dayNumListItem.className = 'day'; 
        }
        calendarList.appendChild(dayNumListItem);
    }
}

createDaysOfThemMonth();

function createBtn(string) {
    let div = document.querySelector('.buttons-container');
    if (string === 'Feriados') {
        let btnFeriado = document.createElement('button');
        btnFeriado.innerText = 'Feriados';
        btnFeriado.id = 'btn-holiday';
        btnFeriado.addEventListener('click', changeColor);

        return div.appendChild(btnFeriado);
    }

    function changeColor() {
        let holiday = document.getElementsByClassName('holiday');
        let colorActualy = 'rgb(238,238,238)';
        let newColor = 'rgba(102, 102, 102, 0.1)';

        for (let index in holiday) {
            if (holiday[index].style.backgroundColor !== newColor) {
                holiday[index].style.backgroundColor = newColor;
            }
            else {
                holiday[index].style.backgroundColor = colorActualy;
            }
        }
    } 
}

createBtn('Feriados');






