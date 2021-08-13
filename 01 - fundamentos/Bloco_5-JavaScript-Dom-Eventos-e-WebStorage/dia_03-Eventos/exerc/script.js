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
        dayNumListItem.addEventListener('mouseover', zoomDays);
        dayNumListItem.addEventListener('mouseout', noZoomDays);
        dayNumListItem.addEventListener('click', setClass); 
    }
    function zoomDays(event) {
        event.target.style.fontSize = '2em';
    }

    function noZoomDays(event) {
        event.target.style.fontSize = '1em';
    }

    function setClass(event) {
        if (event.target.classList.contains('selected')) {
            event.target.classList.remove('selected');
            event.target.style.color = '#777777';

        }
        else {
            event.target.classList.add('selected');
            event.target.style.color = '#FFABCD';
        }

        
    }

    // function setColor() {
    //     let selected = document.getElementsByClassName('selected');
    //     for (let index of selected) {
    //         index.style.color = '#FFABCD';
    //     }
        
    // }
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

    if (string === 'Sexta-feira') {
        let btnSexta = document.createElement('button');
        btnSexta.innerText = 'Sexta-feira';
        btnSexta.id = 'btn-friday';
        btnSexta.addEventListener('click', changeFridays);
        return div.appendChild(btnSexta);
    }

    function changeFridays() {
        let friday = document.getElementsByClassName('friday');
        let sextou = 'SEXTOU';
        let normalDays = [4, 11, 18, 25];
        for (let index in friday) {
            if (friday[index].innerText !== sextou) {
                friday[index].innerText = sextou;
            }
            else {
                friday[index].innerText = normalDays[index];
            }
        }
    }
}

createBtn('Feriados');
createBtn('Sexta-feira');

function addTask() {
    let task = document.createElement('span');
    let br = document.createElement('br');
    task.innerText = 'Estudar';

    let taskList = document.querySelector('.my-tasks');
    taskList.appendChild(task);
    
    function createTag(color) {
        let div = document.createElement('div');
        div.className = 'task';
        div.style.backgroundColor = color;
    
        let taskList = document.querySelector('.my-tasks');
        taskList.appendChild(div);

        div.addEventListener('click', selected);

        function selected() {
            if (div.classList.contains('selected')) {
                div.classList.remove('selected');
            }
            else {
                div.classList.add('selected');
            }
        }
    }
    createTag('#FFABCD');
}
addTask()

