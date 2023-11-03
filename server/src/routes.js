const BeverageController = require('./controllers/BeverageController')

module.exports = (app) => {
    /* RESFUL Api for users management */

    // Milk
    app.get('/beverages', BeverageController.index)
    
    app.post('/beverage', BeverageController.create)
    
    app.put('/beverage/:beverageId', BeverageController.put)
    
    app.delete('/beverage/:beverageId', BeverageController.delete)
    
    app.get('/beverage/:beverageId', BeverageController.show)

    
 
}