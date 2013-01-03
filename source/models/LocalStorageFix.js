// FROM: https://gist.github.com/3172860
// AUTHOR: jonotron

var _create = window.Store.prototype.create; // reference to original create

/**
 * Create a slightly more compliant UUID generator
 * credit: http://stackoverflow.com/posts/2117523/revisions
 *
 * @returns generated UUID
 */
var generateId = window.Store.prototype.generateId = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

/**
 * Generate an UUID for a model and related models
 *
 * Recuresively decends into the related models generating
 * UUID's for each model
 *
 * @param model   Model to generate UUID for
 * @param memo    list of cids already processed by this function 
 */
function idRelatedModel(model, memo) {
  if (!_.isObject(model)) return;

  // init the memo if undefined, i.e. first call
  memo = !memo ? [] : memo; 

  // if we've already iterated over this model, return
  if (_.find(memo, function(cid) { return cid == model.cid })) {
    return; 
  }

  // note that the model has been processed 
  memo.push(model.cid); 

  if (!model.id) {
    model.set(model.idAttribute, generateId()); 
    console.log('iding ' + model.id);
  }

  // recursively generate ids for all related models
  // if the relation points to a collection (i.e. it has models)
  // recursively `idRelatedModel` on each model in the collection
  // if the relation points to a model
  // recursively `idRelatedModel` that relation
  _.each(model.getRelations(), function(relation) {
    if (relation.related.models) { 
      _.each(relation.related.models, function(related) {
        idRelatedModel(related, memo); 
      });
    } else { 
      idRelatedModel(relation.related, memo); 
    } 
  });
}

/** 
 * Overrides dualstorage create to generate ids on related models
 *
 * @param model   Model to create in localstorage
 */
function createRelational(model) {
  idRelatedModel(model);
  _create.call(this, model);
}

window.Store.prototype.create = createRelational;