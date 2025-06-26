import { User } from "../../models/userModel";
import axiosInstance from "../networkAxios";


const USER_URL = 'User';

export const fetchAllUsers = async (): Promise<User[]> => {
    const response = await axiosInstance.get(`/${USER_URL}/get-all`);

    // Debug: loguj šta vraća backend
    console.log('Backend response za fetchAllUsers:', response.data);

    // Mapiranje iz PascalCase u camelCase
    const mappedUsers = response.data.map((user: any) => ({
        id: user.Id || user.id,
        firstName: user.FirstName || user.firstName,
        lastName: user.LastName || user.lastName,
        email: user.Email || user.email,
        username: user.Username || user.username,
        number: user.Number || user.number,
        userRole: user.UserRole || user.userRole,
        profileImageUrl: user.ProfileImageUrl || user.profileImageUrl,
        createdAt: user.CreatedAt || user.createdAt,
        isDeleted: user.IsDeleted || user.isDeleted
    }));

    console.log('Mapped users:', mappedUsers);
    return mappedUsers;
};

export const addUser = async (userData: {
    FirstName: string;
    LastName: string;
    Username: string;
    Email: string;
    Password: string;
    Number: string;
    UserRole: number;
}): Promise<User> => {
    console.log('User data za addUser:', userData);
    const response = await axiosInstance.post(`/${USER_URL}`, userData);

    return response.data;
};

export const updateUser = async (id: string, userData: any): Promise<void> => {
    console.log('Updating user:', userData);
    await axiosInstance.put(`/${USER_URL}/${id}`, userData);
};

export const deleteUser = async (id: string): Promise<void> => {
    await axiosInstance.delete(`/${USER_URL}/${id}`);
};


export const uploadProfileImage = async (userId: string, imageFile: File): Promise<string> => {
    console.log('Uploading profile image for user:', userId);
    console.log('Image file:', imageFile);
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('ProfilePhoto', imageFile);

    const response = await axiosInstance.post(`/${USER_URL}/upload-image`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    localStorage.setItem('profileImageUrl', response.data.imageUrl);

    return response.data.imageUrl;
};

// Funkcija za dobijanje trenutnog korisničkog profila
export const getCurrentUserProfile = async (): Promise<User> => {
    const response = await axiosInstance.get(`/${USER_URL}/profile`);

    return response.data;
};



// Funkcija za konvertovanje base64 u File objekat
export const base64ToFile = (base64String: string, fileName: string): File => {
    const arr = base64String.split(',');
    const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/jpeg';
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
};