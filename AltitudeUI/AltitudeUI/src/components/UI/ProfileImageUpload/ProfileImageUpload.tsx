import React, { useEffect, useState } from 'react';
import UploadOptionsCard from '../UploadOptionsCard';
import { uploadProfileImage } from '../../../services/api/users';
import { decodeJwtToken } from '../../../utils/jwt';
import {
    ProfileImageContainer,
    ProfileImage,
    EditButton,
    EditIcon,
    UploadOptionsOverlay,
    LoadingOverlay,
    Spinner
} from './ProfileImageUpload.styled';

interface ProfileImageUploadProps {
    profileImage?: string;
    onImageClick?: () => void;
    showEditButton?: boolean;
    className?: string;
}

const ProfileImageUpload: React.FC<ProfileImageUploadProps> = ({
    profileImage,
    onImageClick,
    showEditButton = true,
}) => {
    const [currentImage, setCurrentImage] = useState<string>(profileImage || '');
    const [originalImage, setOriginalImage] = useState<string>(profileImage || '');
    const [showUploadOptions, setShowUploadOptions] = useState<boolean>(false);
    const [isUploading, setIsUploading] = useState<boolean>(false);

    useEffect(() => {
        setCurrentImage(profileImage || '');
        setOriginalImage(profileImage || '');
    }, [profileImage]);

    const handleEditButtonClick = () => {
        setShowUploadOptions(true);
    };

    const handleSkip = () => {
        setShowUploadOptions(false);
    };

    // Called when UploadOptionsCard returns a file to upload
    const handleUpload = async (file: File) => {
        setIsUploading(true);
        setShowUploadOptions(false);
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('No token found');
            const decoded = decodeJwtToken(token);
            console.log('Decoded token:', decoded);
            if (!decoded || !decoded.userId) throw new Error('Invalid token');
            const imageUrl = await uploadProfileImage(decoded.userId, file);
            setCurrentImage(imageUrl);
            setOriginalImage(imageUrl);
        } catch (error) {
            alert('Failed to upload image: ' + error);
        } finally {
            setIsUploading(false);
        }
    };

    // Determine which image to show
    const imageToShow = currentImage ? currentImage : '/images/circle-user.png';

    return (
        <ProfileImageContainer>
            <ProfileImage
                onClick={onImageClick}
                style={{
                    backgroundImage: `url(${imageToShow})`,
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '50%',
                }}
            />
            {showEditButton && !isUploading && (
                <EditButton onClick={handleEditButtonClick}>
                    <EditIcon />
                </EditButton>
            )}
            {isUploading && (
                <LoadingOverlay>
                    <Spinner />
                </LoadingOverlay>
            )}
            {showUploadOptions && (
                <UploadOptionsOverlay onClick={handleSkip}>
                    <div onClick={e => e.stopPropagation()}>
                        <UploadOptionsCard
                            onUpload={handleUpload}
                            onSkip={handleSkip}
                        />
                    </div>
                </UploadOptionsOverlay>
            )}
        </ProfileImageContainer>
    );
};

export default ProfileImageUpload; 