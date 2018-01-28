var Bar = require('../models/Bar');

function index(req, res) {
    Bar.find({}).then(bars => {
        res.render('bars/index', { bars });
    });
};

function newBar(req, res) {
    res.render('bars/new')
};

function create(req, res) {
    var bar = new Bar(req.body);
    console.log(req.body)
    bar.save(function(err) {
        if (err) return res.render('bars/new');
        console.log(bar);
        res.redirect('/bars');
    });
};

module.exports = {
    index,
    new: newBar,
    create
};