export interface JwtPayload {
    exp: number;
    iat: number;
    role: string;
    sub: string;
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"?: string;
    [key: string]: any;
}

export interface DecodedJwtData {
    payload: JwtPayload;
    role: 'Admin' | 'Customer';
    userId: string;
    isValid: boolean;
    isExpired: boolean;
}

/**
 * Decodes a JWT token and extracts payload data
 * @param token - The JWT token string
 * @returns Decoded JWT data with validation info
 */
export const decodeJwtToken = (token: string): DecodedJwtData | null => {
    try {
        const payload = JSON.parse(atob(token.split('.')[1])) as JwtPayload;
        const isExpired = payload.exp * 1000 < Date.now();

        // Handle different role formats
        const roleValue = payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || payload.role;
        const userId = payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
        let role: 'Admin' | 'Customer';

        if (roleValue === "1" || roleValue === "Admin") {
            role = "Admin";
        } else if (roleValue === "2" || roleValue === "Customer" || roleValue === "0") {
            role = "Customer";
        } else {
            role = "Customer"; // fallback
        }

        return {
            payload,
            role,
            userId: userId,
            isValid: !isExpired,
            isExpired
        };
    } catch (error) {
        console.error('Error decoding JWT token:', error);
        return null;
    }
};
