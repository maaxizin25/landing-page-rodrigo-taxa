import { ReactNode } from "react";

export interface iListMenu {
  img: string;
  title: string;
  subTitle: string;
}

export type iListMenuString = Array<iListMenu>;

export interface iUserValue {
  modalForm: (value: boolean) => void;
  modal: boolean;
}

export interface Props {
  children: ReactNode;
}

export interface formValues {
  nome: string;
  empresa: string;
  telefone: number;
  email: string;
  funcionarios: number;
}
