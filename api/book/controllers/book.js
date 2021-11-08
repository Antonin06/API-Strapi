const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async comment(ctx) {
    let entity;
      ctx.request.body.authorComment = ctx.state.user.id;
      ctx.request.body.book = ctx.params.id;
      entity = await strapi.services.comment.create(ctx.request.body);
    return sanitizeEntity(entity, { model: strapi.models.comment });
  },
  async favorite(ctx) {
    let entity;
    ctx.request.body.authorFavorite = ctx.state.user.id;
    ctx.request.body.book = ctx.params.id;
    entity = await strapi.services.favorite.create(ctx.request.body);
    return sanitizeEntity(entity, { model: strapi.models.favorite });
  },
};
