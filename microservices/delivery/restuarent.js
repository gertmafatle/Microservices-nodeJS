const cote = require('cote')

const deliveryResponder = new cote.Responder({ name: 'delivery responder', key: 'deliveries' })
deliveryResponder.on('*', req => req.type && console.log(req))

const deliveriesArray = []
let counterId = 0

deliveryResponder.on('create delivery', req => {
    const delivery = { id: counterId++, orderId: req.order.id, eta: 30, status: 'pending' }

    deliveriesArray.push(delivery)
    return Promise.resolve(delivery)
})