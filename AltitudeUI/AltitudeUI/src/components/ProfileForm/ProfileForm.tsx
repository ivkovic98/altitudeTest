import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import LabeledInput from '../UI/LabeledInput';
import { ActionButton } from '../UI';
import {
  FormWrapper,
  FormCard,
  FormTitle,
  FormContent,
  InputRow,
  InputGroup,
  FormTitleContainer,
  ButtonContainer
} from './ProfileForm.styled';
import { UserProfile } from '../../models/profileModel';
import { ProfileImageUpload } from '../UI';
import { updateUser } from '../../services/api/users';
import { decodeJwtToken } from '../../utils/jwt';
import { toastService } from '../../utils/toast';

const profileSchema = yup.object().shape({
  firstName: yup
    .string()
    .optional()
    .nullable()
    .min(2, 'First name must be at least 2 characters')
    .max(25, 'First name must be less than 25 characters'),
  lastName: yup
    .string()
    .optional()
    .nullable()
    .min(2, 'Last name must be at least 2 characters')
    .max(25, 'Last name must be less than 25 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  username: yup
    .string()
    .optional()
    .nullable()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers and underscores'),
  password: yup
    .string()
    .optional()
    .nullable()
    .test('min-length', 'Password must be at least 6 characters', function (value) {
      if (!value || value.trim() === '') {
        return true;
      }
      return value.length >= 6;
    }),
  contactNumber: yup
    .string()
    .optional()
    .nullable()
    .matches(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
});

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  contactNumber: string;
}

interface ProfileFormProps {
  initialData?: Partial<UserProfile>;
  onSubmit?: (data: ProfileFormData) => void;
  onUpdateSuccess?: () => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ initialData, onSubmit, onUpdateSuccess }) => {
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    contactNumber: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ProfileFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    if (initialData) {
      setFormData({
        firstName: initialData.firstName || '',
        lastName: initialData.lastName || '',
        email: initialData.email || '',
        username: initialData.username || '',
        password: initialData.password || '',
        contactNumber: initialData.contactNumber || ''
      });
    }
  }, [initialData]);

  const handleInputChange = (field: keyof ProfileFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const validateField = async (field: keyof ProfileFormData, value: string) => {
    try {
      const fieldSchema = yup.reach(profileSchema, field) as yup.StringSchema;
      await fieldSchema.validate(value);
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setErrors(prev => ({
          ...prev,
          [field]: error.message
        }));
      }
    }
  };

  const handleBlur = (field: keyof ProfileFormData) => () => {
    validateField(field, formData[field]);
  };



  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  const handleSubmit = async () => {

    setIsSubmitting(true);

    try {
      await profileSchema.validate(formData, { abortEarly: false });

      setErrors({});
      const jwtData = decodeJwtToken(localStorage.getItem('token') || '');

      const userId = jwtData?.userId;
      const role = jwtData?.role;
      if (!userId || !role) {
        toastService.error('Unable to identify current user. Please log in again.');
        return;
      }

      const updateData: any = {
        FirstName: formData.firstName,
        LastName: formData.lastName,
        Email: formData.email,
        Username: formData.username,
        Number: formData.contactNumber,

      };


      if (formData.password && formData.password.trim() !== '') {
        updateData.Password = formData.password;
      }

      await updateUser(userId, updateData);

      if (onUpdateSuccess) {
        onUpdateSuccess();
      }

      if (onSubmit) {
        onSubmit(formData);
      }

      toastService.success('Profile updated successfully!');

    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const fieldErrors: Partial<Record<keyof ProfileFormData, string>> = {};
        error.inner.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path as keyof ProfileFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        console.error('Error updating profile:', error);
        toastService.error('Failed to update profile. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {

    if (initialData) {
      setFormData({
        firstName: initialData.firstName || '',
        lastName: initialData.lastName || '',
        email: initialData.email || '',
        username: initialData.username || '',
        password: initialData.password || '',
        contactNumber: initialData.contactNumber || ''
      });
    } else {

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        contactNumber: ''
      });
    }


    setErrors({});

    console.log('Form cancelled, reverted to initial values');
  };

  return (
    <FormWrapper>
      <FormCard>
        <FormTitleContainer>
          <FormTitle>Edit Profile</FormTitle>

          <ProfileImageUpload
            profileImage={initialData?.profileImage}
            showEditButton={true}
          />

        </FormTitleContainer>

        <form onSubmit={handleFormSubmit}>
          <FormContent>

            <InputRow>
              <InputGroup>
                <LabeledInput
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  placeholder="Enter your first name (optional)"
                  error={errors.firstName}
                />
              </InputGroup>
              <InputGroup>
                <LabeledInput
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  placeholder="Enter your last name (optional)"
                  error={errors.lastName}
                />
              </InputGroup>
            </InputRow>

            <InputRow>
              <InputGroup>
                <LabeledInput
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="Enter your email address"
                  error={errors.email}
                  required
                />
              </InputGroup>
            </InputRow>

            <InputRow>
              <InputGroup>
                <LabeledInput
                  label="Username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange('username')}
                  onBlur={handleBlur('username')}
                  placeholder="Enter your username"
                  error={errors.username}
                />
              </InputGroup>
            </InputRow>
            <InputRow>
              <InputGroup>

                <LabeledInput
                  label="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="Leave blank to keep current password"
                  error={errors.password}
                />
              </InputGroup>
            </InputRow>
            <InputRow>
              <InputGroup>
                <LabeledInput
                  label="Contact Number"
                  type="tel"
                  value={formData.contactNumber}
                  onChange={handleInputChange('contactNumber')}
                  onBlur={handleBlur('contactNumber')}
                  placeholder="Enter your phone number"
                  error={errors.contactNumber}
                />
              </InputGroup>
            </InputRow>

            <ButtonContainer>

              <ActionButton
                type="cancel"
                onClick={handleCancel}
                disabled={isSubmitting}
              >
                Cancel
              </ActionButton>
              <ActionButton
                type="accept"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Updating...' : 'Update '}
              </ActionButton>

            </ButtonContainer>
          </FormContent>
        </form>
      </FormCard>
    </FormWrapper>
  );
};

export default ProfileForm; 