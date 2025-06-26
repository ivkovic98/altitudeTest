import React, { useState, useRef, useEffect } from 'react';
import Card from '../Card';
import ActionButton from '../ActionButton';
import {
    UploadCardContainer,
    UploadOption,
    UploadIcon,
    UploadLabel,
    UploadDescription,
    ButtonContainer,
    PreviewImageContainer,
    PreviewImage,
    PreviewText,
    UploadPhotoWrapper
} from './UploadOptionsCard.styled';

interface UploadOptionsCardProps {
    onUpload: (file: File) => void;
    onSkip: () => void;
}

const UploadOptionsCard: React.FC<UploadOptionsCardProps> = ({
    onUpload,
    onSkip,
}) => {
    const [previewImage, setPreviewImage] = useState<string>('');
    const [previewFile, setPreviewFile] = useState<File | null>(null);
    const [showPreview, setShowPreview] = useState<boolean>(false);
    const [showCamera, setShowCamera] = useState<boolean>(false);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Camera effects
    useEffect(() => {
        if (showCamera) {
            startCamera();
        } else {
            stopCamera();
        }
        return () => {
            stopCamera();
        };
    }, [showCamera]);

    const startCamera = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 640 },
                    height: { ideal: 480 },
                    facingMode: 'user' // Front camera
                }
            });
            setStream(mediaStream);
            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
            }
        } catch (error) {
            alert('Cannot access camera. Please check camera permissions.');
            setShowCamera(false);
        }
    };

    const stopCamera = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
        }
    };

    const handleFileUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleCameraClick = () => {
        setShowCamera(true);
    };

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Validate file type and size (same as before)
            const supportedTypes = [
                'image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif', 'image/bmp', 'image/tiff', 'image/heic', 'image/heif'
            ];
            const fileExtension = file.name.toLowerCase().split('.').pop();
            const supportedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp', 'tiff', 'heic', 'heif'];
            const isValidType = supportedTypes.includes(file.type) || file.type.startsWith('image/');
            const isValidExtension = supportedExtensions.includes(fileExtension || '');
            if (!isValidType && !isValidExtension) {
                alert('Please select a valid image file (JPG, PNG, WebP, GIF, BMP, TIFF, HEIC)');
                return;
            }
            const maxSize = (fileExtension === 'heic' || fileExtension === 'heif') ? 10 * 1024 * 1024 : 5 * 1024 * 1024;
            if (file.size > maxSize) {
                const maxSizeMB = maxSize / (1024 * 1024);
                alert(`File size must be less than ${maxSizeMB}MB`);
                return;
            }
            // Create preview
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewImage(e.target?.result as string);
                setShowPreview(true);
                setPreviewFile(file);
            };
            reader.onerror = () => {
                alert('Error reading file. Please try a different image.');
            };
            reader.readAsDataURL(file);
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const capturePhoto = () => {
        if (videoRef.current && canvasRef.current) {
            const canvas = canvasRef.current;
            const video = videoRef.current;
            const context = canvas.getContext('2d');
            if (context) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                canvas.toBlob((blob) => {
                    if (blob) {
                        const file = new File([blob], 'camera-capture.jpg', { type: 'image/jpeg' });
                        setPreviewFile(file);
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            setPreviewImage(e.target?.result as string);
                            setShowPreview(true);
                        };
                        reader.readAsDataURL(file);
                    }
                }, 'image/jpeg', 0.8);
                setShowCamera(false);
            }
        }
    };

    const handleUploadConfirm = () => {
        if (previewFile) {
            onUpload(previewFile);
        }
    };

    const handleSkipOrCancel = () => {
        if (showPreview) {
            setShowPreview(false);
            setPreviewImage('');
            setPreviewFile(null);
        } else if (showCamera) {
            setShowCamera(false);
        } else {
            onSkip();
        }
    };

    // Camera view
    if (showCamera) {
        return (
            <UploadCardContainer>
                <PreviewImageContainer style={{ borderRadius: '20px', overflow: 'hidden' }}>
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </PreviewImageContainer>
                <PreviewText>Position yourself and click capture</PreviewText>
                <ButtonContainer>
                    <ActionButton type="cancel" onClick={handleSkipOrCancel}>Cancel</ActionButton>
                    <ActionButton type="accept" onClick={capturePhoto}>📸 Capture</ActionButton>
                </ButtonContainer>
                <canvas ref={canvasRef} style={{ display: 'none' }} />
            </UploadCardContainer>
        );
    }

    // Preview view
    if (showPreview && previewImage) {
        return (
            <UploadCardContainer>
                <PreviewImageContainer>
                    <PreviewImage src={previewImage} alt="Preview" />
                </PreviewImageContainer>
                <PreviewText>Preview your new profile picture</PreviewText>
                <ButtonContainer>
                    <ActionButton type="cancel" onClick={handleSkipOrCancel}>Cancel</ActionButton>
                    <ActionButton type="accept" onClick={handleUploadConfirm}>Upload</ActionButton>
                </ButtonContainer>
            </UploadCardContainer>
        );
    }

    // Initial options view
    return (
        <UploadPhotoWrapper>
            <UploadCardContainer>
                {/* Hidden file input */}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileInputChange}
                    accept="image/jpeg,image/jpg,image/png,image/webp,image/gif,image/bmp,image/tiff,image/heic,image/heif,.jpg,.jpeg,.png,.webp,.gif,.bmp,.tiff,.heic,.heif"
                    style={{ display: 'none' }}
                />
                <UploadOption onClick={handleCameraClick}>
                    <UploadIcon>  <img
                        src="/images/circle-user.png"
                        alt="Upload"
                        style={{ width: '24px', height: '24px' }}
                    /></UploadIcon>
                    <UploadLabel>Take photo</UploadLabel>
                    <UploadDescription>with camera</UploadDescription>
                </UploadOption>
                <UploadOption onClick={handleFileUploadClick}>
                    <UploadIcon>
                        <img
                            src="/images/circle-user.png"
                            alt="Upload"
                            style={{ width: '24px', height: '24px' }}
                        />
                    </UploadIcon>
                    <UploadLabel>Upload Photo</UploadLabel>
                    <UploadDescription>from your phone</UploadDescription>
                </UploadOption>
                <ButtonContainer>
                    <ActionButton type="cancel" onClick={handleSkipOrCancel}>Cancel</ActionButton>
                </ButtonContainer>
            </UploadCardContainer>
        </UploadPhotoWrapper>
    );
};

export default UploadOptionsCard; 