let select = document.querySelector('#select-state');
let states = ['Acre',
'Alagoas',
'Amapá',
'Amazonas',
'Bahia',
'Ceará',
'Distrito Federal',
'Espírito Santo',
'Goiás',
'Maranhão',
'Mato Grosso',
'Mato Grosso do Sul',
'Minas Gerais',
'Pará',
'Paraíba',
'Paraná',
'Pernambuco',
'Piauí',
'Rio de Janeiro',
'Rio Grande do Norte',
'Rio Grande do Sul',
'Rondônia',
'Roraima',
'Santa Catarina',
'São Paulo',
'Sergipe',
'Tocantins'];

function createOptions() {
    for (let i = 0; i < states.length; i += 1) {
        let option = document.createElement('option');
        option.innerHTML = states[i];

        select.appendChild(option);
    }
}

createOptions();