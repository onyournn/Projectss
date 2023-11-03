const MilkController = require('./controllers/MilkController')
const CoffeeController = require('./controllers/CoffeeController')
const TeaController = require('./controllers/TeaController')
const FruitjuiceController = require('./controllers/FruitjuiceController')
const SoftdrinkController = require('./controllers/SoftdrinkController')

module.exports = (app) => {
    /* RESFUL Api for users management */

    // Milk
    app.get('/milks', MilkController.index)
    
    app.post('/milk', MilkController.create)
    
    app.put('/milk/:milkId', MilkController.put)
    
    app.delete('/milk/:milkId', MilkController.delete)
    
    app.get('/milk/:milkId', MilkController.show)

    
    // Coffee
   
    app.get('/coffees', CoffeeController.index)
    
    app.post('/coffee', CoffeeController.create)

    app.put('/coffee/:coffeeId', CoffeeController.put)

    app.delete('/coffee/:coffeeId', CoffeeController.delete)

    app.get('/coffee/:coffeeId', CoffeeController.show)

    
    // Tea
    app.get('/teas', TeaController.index)
    
    app.post('/tea', TeaController.create)
    
    app.put('/tea/:teaId', TeaController.put)
    
    app.delete('/tea/:teaId', TeaController.delete)
    
    app.get('/tea/:teaId', TeaController.show)


    // Fruitjuice
    app.get('/fruitjuices', FruitjuiceController.index)
    
    app.post('/fruitejuice', FruitjuiceController.create)
    
    app.put('/fruitejuice/:fruitejuiceId', FruitjuiceController.put)
    
    app.delete('/fruitejuice/:fruitejuiceId', FruitjuiceController.delete)
    
    app.get('/fruitejuice/:fruitejuiceId', FruitjuiceController.show)

    // Softdrink
     app.get('/softdrinks', SoftdrinkController.index)
    
     app.post('/softdrink', SoftdrinkController.create)
     
     app.put('/softdrink/:softdrinkId', SoftdrinkController.put)
     
     app.delete('/softdrink/:softdrinkId', SoftdrinkController.delete)
     
     app.get('/softdrink/:softdrinkId', SoftdrinkController.show)
}