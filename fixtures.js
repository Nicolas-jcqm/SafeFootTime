
require('./models/Shop');
var fixtures = require('node-mongoose-fixtures');
fixtures.clear();
fixtures({
    Shop: [
        {name:'Magasin1', lalitude:1, longitude:0,mountain:'Pyrénée',rating:1, id_shop:1, description:'okokokokoko'},
        {name:'Magasin2', lalitude:2, longitude:0,mountain:'Pyrénée 1',rating:1, id_shop:2, description:'okokokokoko'},
        {name:'Magasin3', lalitude:3, longitude:0,mountain:'Pyrénée 2',rating:1, id_shop:3, description:'okokokokoko'},
        {name:'Magasin4', lalitude:4, longitude:0,mountain:'Pyrénée 3',rating:1, id_shop:4, description:'okokokokoko'}

    ]
},function (err, data) {
    console.warn(err, data);
    }
);