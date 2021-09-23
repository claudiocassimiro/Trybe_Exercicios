const { findUserById, getUserName, users } = require('./verifyPromises');

describe('testa o caso de sucesso e falha da requisição', () => {

    it('em caso de sucesso', () => {
        expect.assertions(1);

        getUserName(1).then((name) => {
            expect(name).toEqual(users[0].name);
        });
    });

    it('em caso de falha', () => {
        expect.assertions(1);

        getUserName(3).catch((error) => {
            expect(error).toBe(error);
        })
    });
});

