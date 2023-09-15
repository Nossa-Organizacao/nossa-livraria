export interface IEmail {
  email: string;
}

export interface ILoginValidate {
  sub: string;
  email: string;
  resetToken: null | string;
}
