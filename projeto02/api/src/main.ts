import { setup } from "./application/setup/setup";
const app = setup();
const PORT = process.env["PORT"] || 8080;
app.listen(PORT, () => console.info(`Running at port ${PORT}`))