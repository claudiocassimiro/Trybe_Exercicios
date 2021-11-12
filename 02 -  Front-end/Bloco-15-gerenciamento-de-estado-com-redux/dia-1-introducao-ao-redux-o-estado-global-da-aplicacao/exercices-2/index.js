const ESTADO_INICIAL_1 = {
    nome: 'Rodrigo',
    sobrenome: 'Santos da Silva',
    endereco: 'Rua Soldado Mathias, 765',
    cidade: 'Belo Horizonte',
  };

  const ESTADO_INICIAL_2 = {
    nome: 'Bruna',
    sobrenome: 'Santana Oliveira',
    endereco: 'Rua Holanda, 332',
    cidade: 'São Paulo',
  };

//   const actionChangeName1 = {
//       type: 'CHANGE_NAME-1',
//   };

//   const actionChangeName2 = {
//       type: 'CHANGE_NAME-2',
//   };

  const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
    switch (action.type) {
      case 'CHANGE_NAME-1':
        return {
            ...state,
            nome: action.nome,
            sobrenome: action.sobrenome,
        };
      default:
        return state;
    }
  };

  const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
    switch (action.type) {
      case 'CHANGE_NAME-2':
        return {
            ...state,
            nome: action.nome,
            sobrenome: action.sobrenome,
        };
      default:
        return state;
    }
  };

  const reducersCombined = Redux.combineReducers({
      meuPrimeiroReducer,
      meuSegundoReducer,
  });
    
  const store = Redux.createStore(reducersCombined);

  window.onload = () => {
    setTimeout(() => {
        store.dispatch({
          type: 'CHANGE_NAME-1',
          nome: 'Milena',
          sobrenome: 'Mayara',
        });
        store.dispatch({
          type: 'CHANGE_NAME-2',  
          nome: 'Cláudio',
          sobrenome: 'Cassimiro',
        });
    }, 3000);
  };
  
  store.subscribe(() => {
    const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();
    const nome1 = document.querySelector('#nome-1');
    const sobreNome1 = document.querySelector('#sobrenome-1');
    const nome2 = document.querySelector('#nome-2');
    const sobreNome2 = document.querySelector('#sobrenome-2');
    
    nome1.innerHTML = meuPrimeiroReducer.nome;
    sobreNome1.innerHTML = meuPrimeiroReducer.sobrenome;

    nome2.innerHTML = meuSegundoReducer.nome;
    sobreNome2.innerHTML = meuSegundoReducer.sobrenome;
  });
  