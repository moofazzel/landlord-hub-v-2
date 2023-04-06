import { FunctionDeclaration } from "typescript";

export type Props = {
  children: React.ReactNode;
};

export type String = {
  className: string;
};

export type btn = {
  title: string;
  type: "button" | "submit" | "reset";
};

export type divide = {
  divide: string;
};

export type FormValues = {
  fullName: string;
  email: string;
  password: string | number;
};

export type navLinkProps = {
  href: string;
  children: React.ReactNode;
};

export type Properties = {
  name: string;
};

export type PropertiesObject = {
  properties: object;
};

export type PropertiesCardValue = {
  img: any;
  location: string;
  rent: number;
  bath: number;
  bed: number;
};

export type SinglePropertiesCardValue = {
  img: string;
  location: string;
  rent: number;
  bath: number;
  bed: number;
  setIsOpen: boolean;
};
