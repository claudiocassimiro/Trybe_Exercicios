const { findUserById, getUserName, users } = require('./verifyPromises');


// TESTE UTILIZANDO ASYNC E AWAIT...
describe('testa o caso de sucesso e falha da requisição', () => {

    it('em caso de sucesso', async() => {
        expect.assertions(1);

        const name = await getUserName(2);
        expect(name).toEqual(users[1].name);
    });

    it('em caso de falha', async() => {
        expect.assertions(1);

        try {
            const name = await getUserName(3);
        } catch(error) {
            expect(error).toBe(error);
        }
    });
})

// TESTE UTILIZANDO .THEN E .CATCH...
// describe('testa o caso de sucesso e falha da requisição', () => {

//     it('em caso de sucesso', () => {
//         expect.assertions(1);

//         getUserName(1).then((name) => {
//             expect(name).toEqual(users[0].name);
//         });
//     });

//     it('em caso de falha', () => {
//         expect.assertions(1);

//         getUserName(3).catch((error) => {
//             expect(error).toBe(error);
//         })
//     });
// });

