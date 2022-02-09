const request = require("supertest");
import { Server } from "../../../../../src/server";

const app = Server.boostrap().app;

describe("Unit testing the /ping route", () => {
  it("should return OK status", async () => {
    const res = await request(app).get("/api/ping");
    expect(res.statusCode).toBe(200);
  });
  it("should return pong text as response", async () => {
    const res = await request(app).get("/api/ping");
    expect(res.text).toBe('"pong"');
  });
  it("should return a 404 http status code", async () => {
    const res = await request(app).get("/api/pingpong");
    expect(res.statusCode).toBe(404);
  });
});
