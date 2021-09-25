import request from "supertest";
import app from "./app";

const server = request(app);

describe("app.ts", () => {
  it("returns hello world on /health", async () => {
    await server
      .get("/health")
      .send()
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8");
    expect((res: { ok: true }) => {
      expect(res).toStrictEqual({ ok: true });
    });
  });
});
