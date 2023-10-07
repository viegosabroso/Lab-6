export type Observer = { render: () => void } & HTMLElement;

export type Appstate = {
    head: string
    body: string
    feet: string
}

export enum actions {
    "CHANGEHEAD" = "changehead",
    "CHANGEBODY" = "changebody",
    "CHANGEFEET" = "changefeet"
}

export interface CHANGEHEADaction {
    action: actions.CHANGEHEAD
    payload: ``
}
export interface CHANGEBODYaction {
    action: actions.CHANGEBODY
    payload: ``
}
export interface CHANGEFEETaction {
    action: actions.CHANGEFEET
    payload: ``
}

export type Actions = CHANGEHEADaction | CHANGEBODYaction | CHANGEFEETaction
