window.onload = () => {
    const btn = document.querySelector('#btn-click');
    const p = document.createElement('p');
    let count = 0;
    
    btn.addEventListener('click', () => {
        count++;
        p.innerHTML = `You clicked ${count} times`;
        document.body.appendChild(p);
        // let countClick = 0;
        // countClick++;
        // console.log(`Você clicou em mim ${countClick} vezes!`);
    })
    
}