export type AuthContextType = {
    user: object,
    signup: (email: string, password: string) => void;
    login: (email: string, password: string) => void;
    logout: (id: number) => void;
  };