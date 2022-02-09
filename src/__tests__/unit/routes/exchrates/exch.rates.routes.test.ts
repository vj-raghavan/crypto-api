const request = require("supertest");
import { Server } from "../../../../../src/server";

const app = Server.boostrap().app;

describe("Unit testing the /exchRates route", () => {
  it("should return OK status", async () => {
    const res = await request(app).get("/api/exchrates");
    expect(res.statusCode).toBe(200);
  });
  it("should return a 404 http status code", async () => {
    const res = await request(app).get("/api/iamnotthere");
    expect(res.statusCode).toBe(404);
  });
});
