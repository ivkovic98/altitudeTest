import React, { useState } from 'react';
import LabeledInput from '../UI/LabeledInput';
import { ActionButton } from '../UI';
import * as Yup from 'yup';
import {
    FormContainer,
    ButtonContainer
} from './UserForm.styled';

interface UserFormData {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    number: string;
}

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First name is required')
        .min(2, 'First name must be at least 2 characters')
        .max(50, 'First name must be less than 50 characters'),
    lastName: Yup.string()
        .required('Last name is required')
        .min(2, 'Last name must be at least 2 characters')
        .max(50, 'Last name must be less than 50 characters'),
    username: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters')
        .max(30, 'Username must be less than 30 characters'),
    email: Yup.string()
        .required('Email is required')
        .email('Email format is invalid'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(100, 'Password must be less than 100 characters'),
    number: Yup.string()
        .required('Phone number is required')
        .matches(/^[+]?[\d\s\-\(\)]*$/, 'Phone number format is invalid'),
});

interface UserFormProps {
    onSubmit: (data: {
        FirstName: string;
        LastName: string;
        Username: string;
        Email: string;
        Password: string;
        Number: string;
    }) => Promise<void>;
    onCancel: () => void;
    isLoading?: boolean;
}

const UserForm: React.FC<UserFormProps> = ({
    onSubmit,
    onCancel,
    isLoading = false
}) => {
    const [formData, setFormData] = useState<UserFormData>({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        number: '',
    });
    const [errors, setErrors] = useState<Partial<UserFormData>>({});


    const validateForm = async (): Promise<boolean> => {
        try {


            await validationSchema.validate({ ...formData }, { abortEarly: false });

            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const newErrors: Partial<UserFormData> = {};
                error.inner.forEach((err) => {
                    if (err.path) {
                        newErrors[err.path as keyof UserFormData] = err.message;
                    }
                });
                setErrors(newErrors);
            }
            return false;
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name as keyof UserFormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async () => {
        const isValid = await validateForm();
        if (!isValid) {
            return;
        }

        try {
            const submitData = {
                FirstName: formData.firstName,
                LastName: formData.lastName,
                Username: formData.username,
                Email: formData.email,
                Password: formData.password,
                Number: formData.number,
            };
            await onSubmit(submitData);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit();
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <FormContainer>
                <LabeledInput
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    error={errors.firstName}
                    required
                />

                <LabeledInput
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    error={errors.lastName}
                    required
                />

                <LabeledInput
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Enter username"
                    error={errors.username}
                />

                <LabeledInput
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    required
                    error={errors.email}
                />

                <LabeledInput
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter password"
                    required
                    error={errors.password}
                />

                <LabeledInput
                    label="Phone Number"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    error={errors.number}
                />

                <ButtonContainer>
                    <ActionButton
                        type="cancel"
                        onClick={onCancel}
                        disabled={isLoading}
                    >
                        Cancel
                    </ActionButton>
                    <ActionButton
                        type="accept"
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Adding...' : 'Add User'}
                    </ActionButton>
                </ButtonContainer>
            </FormContainer>
        </form>
    );
};

export default UserForm; 