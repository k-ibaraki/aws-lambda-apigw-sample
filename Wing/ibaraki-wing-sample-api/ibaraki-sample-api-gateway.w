bring cloud;

let api = new cloud.Api();

api.get("/", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
    return cloud.ApiResponse {
      status: 200,
      body: "Hello, Wing!"
    };
});