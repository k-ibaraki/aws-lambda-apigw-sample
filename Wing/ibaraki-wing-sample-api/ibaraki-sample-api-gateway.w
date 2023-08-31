bring cloud;

let api = new cloud.Api() as "ibaraki-sample-api";

api.get("/", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
    return cloud.ApiResponse {
      status: 200,
      body: "Hello, Wing!"
    };
});

api.get("/hoge", inflight (request: cloud.ApiRequest): cloud.ApiResponse => {
    return cloud.ApiResponse {
      status: 200,
      body: "Hello, ほげ!"
    };
});