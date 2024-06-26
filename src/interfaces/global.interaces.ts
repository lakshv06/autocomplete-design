import { Dispatch, SetStateAction } from "react";

export type InputControlType = 'text' | 'number' | 'email' | 'password' | 'tel' | 'checkbox';

export interface ValidationObjectProps{
    required: boolean;
}

export interface AutoCompleteControlProps{
controlKey: string;
type: InputControlType;
validationObject: ValidationObjectProps;
searchTerm: string;
setSearchTerm: Dispatch<SetStateAction<string>>
}