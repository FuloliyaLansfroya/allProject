/**
 * 路由扁平化
 * @param routers
 * @returns {*}
 */
export const flattenRouters = (routers) => routers.reduce((prev, item) => {
    prev.push(item);
    return prev.concat(
      Array.isArray(item.childRoutes) ? flattenRouters(item.childRoutes) : [],
    );
  }, []);