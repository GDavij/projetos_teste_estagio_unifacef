import express, { Express } from "express";
import { useEditorasController } from "../../controllers/EditorasController";

export function setup(): Express {
    const app = express();
    setupRoutes(app);
    return app;
}


function setupRoutes(app: Express) {
    app.use("/editoras", useEditorasController());
}