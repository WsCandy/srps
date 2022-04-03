import { NextPage } from "next";

export type Resources = {
    [key: string]: {
        [key: string]: string
    }
}

export interface ResourceProp {
    readonly resources: Resources;
}

export type LocalisedPage<T = {}, IP = T> = NextPage<T & ResourceProp, IP>