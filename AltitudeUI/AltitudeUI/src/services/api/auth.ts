import type { LoginData, LoginResponse } from '../../models/authModel';
import type { UserProfile } from '../../models/profileModel';
import axiosInstance from '../networkAxios';

const AUTH_URL = 'Auth';

export const loginAPI = async (data: LoginData): Promise<LoginResponse> => {
  const response = await axiosInstance.post(`/${AUTH_URL}/login`, data);
  return response.data;
};

export const getUserProfile = async (): Promise<UserProfile> => {
  const response = await axiosInstance.get(`/${AUTH_URL}/profile`);
  return response.data;
};

export const updateUserProfile = async (profileData: UserProfile): Promise<UserProfile> => {
  const response = await axiosInstance.put(`/${AUTH_URL}/profile`, profileData);
  return response.data;
};
