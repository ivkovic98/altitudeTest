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
    // Kreiraj FormData
    const formData = new FormData();
    formData.append('FirstName', userData.FirstName);
    formData.append('LastName', userData.LastName);
    formData.append('Username', userData.Username);
    formData.append('Email', userData.Email);
    formData.append('Password', userData.Password);
    formData.append('Number', userData.Number);
    formData.append('UserRole', userData.UserRole.toString());


    const response = await axiosInstance.post(`/${USER_URL}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    // Debug: loguj šta vraća backend
    console.log('Backend response za addUser:', response.data);

    // Mapiranje iz PascalCase u camelCase
    const responseUser = response.data;
    const mappedUser = {
        id: responseUser.Id || responseUser.id,
        firstName: responseUser.FirstName || responseUser.firstName,
        lastName: responseUser.LastName || responseUser.lastName,
        email: responseUser.Email || responseUser.email,
        username: responseUser.Username || responseUser.username,
        number: responseUser.Number || responseUser.number,
        userRole: responseUser.UserRole || responseUser.userRole,
        profileImageUrl: responseUser.ProfileImageUrl || responseUser.profileImageUrl,
        createdAt: responseUser.CreatedAt || responseUser.createdAt,
        isDeleted: responseUser.IsDeleted || responseUser.isDeleted
    };

    console.log('Mapped user:', mappedUser);
    return mappedUser;
};

export const updateUser = async (id: string, userData: any): Promise<void> => {
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

    // Debug: loguj šta vraća backend
    console.log('Backend response za getCurrentUserProfile:', response.data);

    // Mapiranje iz PascalCase u camelCase
    const responseUser = response.data;
    const mappedUser = {
        id: responseUser.Id || responseUser.id,
        firstName: responseUser.FirstName || responseUser.firstName,
        lastName: responseUser.LastName || responseUser.lastName,
        email: responseUser.Email || responseUser.email,
        username: responseUser.Username || responseUser.username,
        number: responseUser.Number || responseUser.number,
        userRole: responseUser.UserRole || responseUser.userRole,
        profileImageUrl: responseUser.ProfileImageUrl || responseUser.profileImageUrl,
        createdAt: responseUser.CreatedAt || responseUser.createdAt,
        isDeleted: responseUser.IsDeleted || responseUser.isDeleted
    };

    console.log('Mapped current user:', mappedUser);
    return mappedUser;
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