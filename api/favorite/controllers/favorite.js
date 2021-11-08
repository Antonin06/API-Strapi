const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async delete(ctx) {

    const favorite = await strapi.services.favorite.findOne({id: ctx.params.id});
    // console.log(favorite)
    const favoriteAuthorId = favorite.authorFavorite.id

    if(ctx.state.user.id === favoriteAuthorId) {
      const entity = await strapi.services.favorite.delete({id: ctx.params.id});
      return sanitizeEntity(entity, { model: strapi.models.favorite });
    } else {
      return { "error" : "You are not authorized"}
    }
  },
};
