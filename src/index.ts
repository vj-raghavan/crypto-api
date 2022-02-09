import { Server } from "./server";

const port = 3000;
export const app = Server.boostrap().app;

export const server = app.listen(port, () => {
  console.log(`Crypto API is running on port : ${port}.`);
});
