const transactions = require('../models').transactions
const listmenu = require('../models').menus
const categories = require('../models').categories
const orders = require('../models').orders


// create transactions
exports.transactions = (req,res) => {
    
    transactions.create({
        table_number : req.body.table_number,
        finished_time : req.body.finished_time,
        subtotal : req.body.subtotal,
        discount : req.body.discount,
        service_charge : req.body.service_charge,
        tax : req.body.tax
    }).then(r => {
        res.send({
            status : 'success',
            output : r
        })
    })
}

// list menu with categorie
exports.listmenu = (req,res) => {
    categories.findAll({
        attributes : [
            'name'
        ],
        include : [{
            model : listmenu,
            as : 'menus'
        }]
    })
    .then(r => {
        res.send(r)
    }).catch(e => {
        res.send(e)
    })
}

exports.orders = (req,res) => {
    orders.create({
        menu_id : req.body.menu_id,
        transaction_id : req.body.transaction_id,
        qyt : req.body.qyt,
        price : req.body.price,
        status : req.body.status
    }).then(r => {
        res.send(r)
    })
}

// change status orders
exports.ChangeStatus = (req,res) => {
    orders.update(
        {
            status : req.body.status
        },
        {
            where : { id : req.params.id}
        }
    ).then(() =>{
        orders.findAll({
            where : { transaction_id : req.body.transaction_id}
        }).then(r => res.send(r)).catch(r => res.send(r))
    }).catch(r => res.send(r))
}