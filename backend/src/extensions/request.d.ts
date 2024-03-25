// This will extend the express request type to fit additional properties.

export type User = {
    username: string;
    firstname: string;
    lastname: string;
}

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}