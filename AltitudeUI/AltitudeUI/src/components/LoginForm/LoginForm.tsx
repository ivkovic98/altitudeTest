import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '../../services/api/auth';
import * as Yup from 'yup';
import {
  PageWrapper,
  FormGroupContainer,
  HelloText,
  SignInText,
  InputContainer,
  InputWrapper,
  InputField,
  InputIcon,
  InputLabel,
  ErrorMessage,
  ForgotPasswordText,
  SubmitButton,
  ErrorText,
} from './LoginForm.styled';
import { decodeJwtToken } from '../../utils';

interface FormData {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
});

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [focusedField, setFocusedField] = useState<string>('');

  const navigate = useNavigate();

  const validateForm = async (): Promise<boolean> => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors: Partial<FormData> = {};
        error.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path as keyof FormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }

    if (errorMsg) {
      setErrorMsg('');
    }
  };

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login form submitted with:', formData);

    const isValid = await validateForm();
    if (!isValid) {
      console.log('Form validation failed');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      const response = await loginAPI({
        email: formData.email,
        password: formData.password
      });

      localStorage.setItem('token', response.token);
      const jwtData = decodeJwtToken(response.token);
      const role = jwtData?.role;
      localStorage.setItem('role', role || '');

      if (!role) {
        return null;
      }
      if (role === 'Admin') {
        navigate('/admin-dashboard');
      } else if (role === 'Customer') {
        navigate('/customer-dashboard');
      }

    } catch (error: any) {
      setErrorMsg(error.response?.data?.message || error.message || 'Error during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageWrapper>
      <FormGroupContainer>
        <HelloText>Hello</HelloText>
        <SignInText>Sign in to your account</SignInText>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <InputContainer>
            <InputWrapper $hasError={!!errors.email}>
              <InputIcon
                src="/images/circle-user.png"
                alt="Email"
              />
              <InputField
                type="email"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('email', e.target.value)}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                disabled={isLoading}
                placeholder=""
              />
              <InputLabel
                $isActive={Boolean(focusedField === 'email' || formData.email)}
              >
                Email
              </InputLabel>
            </InputWrapper>
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </InputContainer>

          {/* Password Input */}
          <InputContainer>
            <InputWrapper $hasError={!!errors.password}>
              <InputIcon
                src="/src/assets/icons/password.png"
                alt="Password"
              />
              <InputField
                type="password"
                value={formData.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('password', e.target.value)}
                onFocus={() => handleFocus('password')}
                onBlur={handleBlur}
                disabled={isLoading}
                placeholder=""
              />
              <InputLabel
                $isActive={Boolean(focusedField === 'password' || formData.password)}
              >
                Password
              </InputLabel>
            </InputWrapper>
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </InputContainer>

          <ForgotPasswordText>Forgot your password?</ForgotPasswordText>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </SubmitButton>

          {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
        </form>
      </FormGroupContainer>
    </PageWrapper>
  );
};

export default LoginForm;
