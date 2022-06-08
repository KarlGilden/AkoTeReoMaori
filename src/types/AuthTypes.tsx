export type AuthContextType = {
    user: any,
    signup: (email: string, password: string) => void;
    login: (email: string, password: string) => void;
    logout: (id: number) => void;
  };