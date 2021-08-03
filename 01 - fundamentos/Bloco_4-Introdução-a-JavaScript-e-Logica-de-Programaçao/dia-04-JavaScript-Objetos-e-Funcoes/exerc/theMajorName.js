// Exercicio 9

function majorName(names) {
    let majorNameFound = names[0].length;
    let majorName = names[0];
    
    for (let index = 0; index < names.length; index += 1) { 
        if (names[index].length > majorNameFound) {
            majorNameFound = names[index].length;
            majorName = names[index];
        }
    }
    return majorName;  
}

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(majorName(names));