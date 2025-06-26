import axiosInstance from '../networkAxios';

const STATISTICS_URL = 'Statistics';

export const getStatistics = async () => {
  const response = await axiosInstance.get(`/${STATISTICS_URL}`);
  return response.data;
}; 