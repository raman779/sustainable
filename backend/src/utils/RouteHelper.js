module.exports = {
    resource: (router, resourceName, controller = {}, ...middlewares) => {
        const routeParam = `${resourceName}_id`.replace(/[^A-Za-z0-9]/g, '')
        controller.index && router.get(`/${resourceName}`, ...middlewares, controller.index)
        controller.show && router.get(`/${resourceName}/:${routeParam}`, ...middlewares, controller.show)
        controller.create && router.post(`/${resourceName}`, ...middlewares, controller.create)
        controller.update && router.put(`/${resourceName}/:${routeParam}`, ...middlewares, controller.update)
        controller.update && router.patch(`/${resourceName}/:${routeParam}`, ...middlewares, controller.update)
        controller.delete && router.delete(`/${resourceName}/:${routeParam}`, ...middlewares, controller.delete)
    }
}