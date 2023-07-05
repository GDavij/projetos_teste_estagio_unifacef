import express, { response } from "express";


const controller = express.Router();


controller.get("/:id", (req, res) => {
    const { id } = req.params;
    return res.json({ id });
})

controller.get("/", (req, res) => {
    const { registers, page } = req.query as { page?: string, registers?: string };
    if (!registers) {
        console.log(registers)
        res.status(500).json({ message: "Registers are Missing" });
        res.end();
        return;
    }

    if (!page) {
        res.status(400).json({ message: "Page is Missing" })
        res.end();
        return;
    }


    res.status(200).json({ registers, page })
    res.end();
    return;

})

export const useEditorasController = () => controller;