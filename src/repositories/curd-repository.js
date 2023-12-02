const { Logger } = require('../config');
class CurdRepository{
    constructor(model)
    {
          this.model=model;
    }
    async create(data)
    {
        try{
            const response=this.model.create(data);
            return response;
        }
        catch(error)
        {
            Logger.error('something went wrong in Curd Repo: create');
            throw error;

        }
    }
    async destroy(data)
    {
        try{
            const response=this.model.destroy({
                where:{
                    id:data
                }
            });
            return response;
        }
        catch(error)
        {
            Logger.error('something went wrong in Curd Repo: destroy');
            throw error;

        }
    }
    async get(data)
    {
        try{
            const response=this.model.findByPk(data);
            
            return response;
        }
        catch(error)
        {
            Logger.error('something went wrong in Curd Repo: get');
            throw error;

        }
    }

    async getAll()
    {
        try{
            const response=this.model.findAll();
            
            return response;
        }
        catch(error)
        {
            Logger.error('something went wrong in Curd Repo: getAll');
            throw error;

        }
    }
    async update(id,data)
    {
        try{
            const response=this.model.findByPk(data,{
                where:{
                    id:id
                }
        })
            
            return response;
        }
        catch(error)
        {
            Logger.error('something went wrong in Curd Repo: update');
            throw error;

        }
    }
}
module.exports=CurdRepository;