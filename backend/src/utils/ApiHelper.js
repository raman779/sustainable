function ApiResponse(status,data) {
    return { status:status,data: data};
  }

  module.exports = {
    ApiResponse,
  };