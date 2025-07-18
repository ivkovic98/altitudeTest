export interface LoginData {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    token: string;
    role: 'Admin' | 'Customer';
  }