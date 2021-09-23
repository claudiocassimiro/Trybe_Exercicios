const getRepos = require('./fetchRepo');

test('Dada uma url o retorno é uma lista contendo os repos?', async() => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    const resp = await getRepos(url);

    expect.assertions(2);
    expect(resp).toContain('sd-01-week4-5-project-todo-list');
    expect(resp).toContain('sd-01-week4-5-project-meme-generator');
});