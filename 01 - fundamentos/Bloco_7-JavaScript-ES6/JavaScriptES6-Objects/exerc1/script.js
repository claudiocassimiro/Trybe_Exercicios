const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
        total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const custumerName = order.name;
    const custumerPhoneNumber = order.phoneNumber;
    const custumerAddress = `${order.address.street} ${order.address.number} ${order.address.apartment}`;

    console.log((`Olá ${deliveryPerson}, entrega para: ${custumerName}, Telefone: ${custumerPhoneNumber}, ${custumerAddress}`));
  }
  
  customerInfo(order);

  order.name = 'Luiz Silva';
  order.payment.total = 50;
  
  const orderModifier = (order) => {
    const custumerName = order.name;
    const pizza1 = Object.keys(order.order.pizza)[0];
    const pizza2 = Object.keys(order.order.pizza)[1];
    const drink = order.order.drinks.coke.type;
    const totalPrice = `R$${order.payment.total},00`;
  
    console.log(`Olá ${custumerName}, o total do seu pedido de ${pizza1}, ${pizza2} e ${drink} é de ${totalPrice}`);
  }
  
  orderModifier(order);

