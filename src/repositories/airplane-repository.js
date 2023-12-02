const CurdRepository = require('./curd-repository');
const { Airplane } = require('../models');
class AirplaneRepository extends CurdRepository{
     constructor(){
        super(Airplane);

     }    
}