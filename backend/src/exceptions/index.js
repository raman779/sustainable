
module.exports.ValidationError = function (errors = {}) {
    // errors ex. {"email": "email is not unique"}
    this.message = "validation errors occurred."
    this.code = 422;
    this.errors = errors
}

module.exports.UnauthorizedError = function () {
    this.message = 'Unauthorized';
    this.code = 401
}


module.exports.AccessDeniedError = function () {
    this.message = 'Access Denied';
    this.code = 403
}

module.exports.NotFoundError = function () {
    this.message = 'notFound';
    this.code = 404
}
