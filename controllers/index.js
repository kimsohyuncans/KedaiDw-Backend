const transactions = require('../models').transactions
const menus = require('../models').menus
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
            model : menus,
            as : 'menus'
        }]
    })
    .then(r => {
        res.send(r)
    }).catch(e => {
        res.send(e)
    })
}

exports.orders = async (req,res) => {
    id = req.body[0].transaction_id
    await orders.bulkCreate(req.body,{returning: true})
    const myorder = await orders.findAll({
        attributes : [
            'qyt',
            'price',
            'status'
        ],
        where : { transaction_id : id},
        include : [{
            model : menus,
            as : "menus_info",
            attributes : [
                'name',
            ]
        }]
    })
    .then(r => res.send(r)).catch(r => res.send(r))
    
    res.send(myorder)
}

// change status orders
exports.ChangeStatus = async(req,res) => {
    await orders.update(
        {
            status : req.body.status
        },
        {
            where : { transaction_id : req.body.transaction_id}
        }
    )
    
    r = await orders.findAll({
        attributes : [
            'qyt',
            'price',
            'status'
        ],
        where : { transaction_id : req.body.transaction_id},
        include : [{
            model : menus,
            as : "menus_info",
            attributes : [
                'name',
            ]
        }]
    })

    try {
        res.send(r)
    } catch (error) {
        res.send(error)
    }

    
    
    

    
}

exports.myOrder = (req,res) => {
    orders.findAll({
        attributes : [
            'status'
        ],
        where : { transaction_id : 5},
        include : [{
            model : menus,
            as : "menus_info",
            attributes : [
                'name',
                'price'
            ]
        }]
    }).then(r => res.send(r)).catch(r => res.send(r))
}

exports.complete_transaction = async(req,res) => {
    result = await transactions.update(req.body,{
        where : { id : req.body.id}
    })
    try {
        res.send({
            status : 'ok',
            output : result
        })
    } catch (error) {
        res.send(error)
    }
}

exports.test = (req,res) => {
    res.send(req.body)
}

