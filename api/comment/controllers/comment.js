const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async delete(ctx) {

    const comment = await strapi.services.comment.findOne({id: ctx.params.id});
    // console.log(comment)
    const commentAuthorId = comment.authorComment.id

    if(ctx.state.user.id === commentAuthorId) {
      const entity = await strapi.services.comment.delete({id: ctx.params.id});
      return sanitizeEntity(entity, { model: strapi.models.comment });
    } else {
      return { "error" : "You are not authorized"}
    }
  },
};
