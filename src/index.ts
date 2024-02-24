import { initServer } from "./app";
async function init() {
  const app = await initServer();

  app.listen(8000, () => console.log("server started in 8000"));
}
init();
