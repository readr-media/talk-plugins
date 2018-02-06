module.exports = {
  resolvers: {
    RootQuery: {
      commentCount: async (_, { query }, { user, loaders: { Comments, Assets } }) => {
        const { asset_url, asset_id } = query;
        if (
          (!asset_id || asset_id.length === 0) &&
          asset_url &&
          asset_url.length > 0
        ) {
          let asset = await Assets.findByUrl(asset_url);
          if (asset) {
            query.asset_id = asset.id;
          } else {
            return null
          }
        }
    
        return Comments.getCountByQuery(query);
      }
    }
  }
}