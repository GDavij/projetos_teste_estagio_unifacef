export enum EditoraStatus {
    Ativa = "Ativa",
    Inativa = "Inativa"
}

export enum EditoraStates {
    SP = "SP",
    MG = "MG",
    RJ = "RJ",
    MT = "MT",
    SC = "SC",
    RS = "RS"
}

export type TEditora = {
    id: number,
    name: string,
    state: EditoraStates, //Soon Transform to a ENUM
    status: EditoraStatus,
}