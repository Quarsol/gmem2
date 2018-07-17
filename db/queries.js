const knex = require('./knexConfig.js')

module.exports = {
    list(){
      return knex('coffee')
        .select()
        .orderBy('id')
    },
    read(id){
      return knex('coffee')
        .select()
        .where('id', id).first()
    },
    create(coffee){
      return knex('coffee')
        .select()
        .insert(coffee)
        .returning('*')
    },
    update(id, coffee){
      return knex('coffee')
        .select()
        .where('id', id)
        .update(coffee)
        .returning('*')
    },
    delete(id){
      return knex('coffee')
        .select()
        .delete()
        .where('id', id)
    }
};
