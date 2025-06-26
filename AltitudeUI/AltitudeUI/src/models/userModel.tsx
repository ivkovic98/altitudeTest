export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    number: string;
    userRole: number; // 1 = Admin, 2 = Customer
    profileImageUrl?: string;
    createdAt: string;
    isDeleted: boolean;
}