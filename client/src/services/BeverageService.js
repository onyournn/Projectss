import Api from '@/services/Api'

export default {
    index(search) {
        return Api().get('beverages')
    },
    show(beverageId) {
        return Api().get('beverage/' + beverageId)
    },
    post(beverage) {
        return Api().post('beverage', beverage)
    },
    put(beverage) {
        return Api().put('beverage/' + beverage.id, beverage)
    },
    delete(beverage) {
        return Api().delete('beverage/' + beverage.id,beverage)
    },
}