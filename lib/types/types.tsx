export type Props = {
  children: React.ReactNode;
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
