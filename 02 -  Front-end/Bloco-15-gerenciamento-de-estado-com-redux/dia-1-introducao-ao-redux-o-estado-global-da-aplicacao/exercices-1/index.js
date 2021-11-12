const ESTADO_INICIAL = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
};

const NEXT_COLOR = {
    type: 'NEXT_COLOR',
};

const PREVIOUS_COLOR = {
    type: 'PREVIOUS_COLOR',
};

const RADOM_COLOR = {
    type: 'RADOM_COLOR',
};

function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}

const reducer = (state = ESTADO_INICIAL, action) => {
    switch(action.type) {
        case 'NEXT_COLOR':
            return {
                ...state,
                index: ((state.index > 4) ? 0 : state.index + 1),
            };
        case 'PREVIOUS_COLOR':
            return {
                ...state,
                index: ((state.index < 1) ? 0 : state.index - 1),
            };
        case 'RADOM_COLOR':
            return {
                ...state,
                colors: [...state.colors, criarCor()],
                index: state.colors.length,
            };
        default:
            return state
    };
};

const store = Redux.createStore(reducer);

store.subscribe(() => {
    const { colors, index } = store.getState();
    const div = document.querySelector('#container');
    const value = document.querySelector('#value');
    value.innerHTML = colors[index];
    div.style.backgroundColor = colors[index];
});

const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#previous');
const radomButton = document.querySelector('#random');

nextButton.addEventListener('click', () => {
    store.dispatch(NEXT_COLOR);
});

prevButton.addEventListener('click', () => {
    store.dispatch(PREVIOUS_COLOR);
});

radomButton.addEventListener('click', () => {
    store.dispatch(RADOM_COLOR);
});
