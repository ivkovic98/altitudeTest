import React from 'react';
import { ShapesContainer, TopRightShape, LeftShape } from './BackgroundShapes.styled';

const BackgroundShapes: React.FC = () => {
    return (
        <ShapesContainer>
            {/* Top Right Shape */}
            <TopRightShape>
                <svg width="840" height="119" viewBox="0 0 840 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M640.257 118.946C720.379 117.406 740.445 74.8318 820.566 73.2746C828.149 73.1272 840 73.2746 840 73.2746V0H0C0 0 55.7524 43.327 112.288 59.7238C215.313 89.6039 307.018 43.3626 423.239 59.7238C517.296 72.9649 542.065 120.832 640.257 118.946Z" fill="url(#paint0_linear_7_1947)" />
                    <defs>
                        <linearGradient id="paint0_linear_7_1947" x1="840" y1="0" x2="806.947" y2="233.317" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#EECE13" />
                            <stop offset="1" stopColor="#B210FF" />
                        </linearGradient>
                    </defs>
                </svg>
            </TopRightShape>

            {/* Left Side Shape */}
            <LeftShape>
                <svg width="247" height="383" viewBox="0 0 247 383" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-271.955 214.155C-273.229 256.589 -247.633 315.344 -194.941 304.737C-155.113 296.719 -191.352 256.364 -142.376 233.543C-93.4005 210.722 -29.5048 217.581 1.05667 255.155C23.5616 282.825 -16.325 309.231 1.05667 339.062C41.0096 407.632 239.186 392.536 246.767 317.45C251.792 267.678 174.186 260.441 150.194 214.155C121.044 157.918 180.804 107.514 133.488 59.3728C97.7044 22.9661 56.8396 -11.1021 1.05667 3.43492C-71.3895 22.3144 70.3286 130.891 1.05667 155.993C-31.1259 167.655 -54.7118 160.068 -89.8113 155.993C-132.717 151.011 -152.853 119.833 -194.941 128.024C-245.953 137.951 -270.723 173.158 -271.955 214.155Z" fill="url(#paint0_linear_7_1939)" fillOpacity="0.6" />
                    <defs>
                        <linearGradient id="paint0_linear_7_1939" x1="-272" y1="0" x2="93.9733" y2="495.927" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF6FD8" />
                            <stop offset="1" stopColor="#3813C2" />
                        </linearGradient>
                    </defs>
                </svg>
            </LeftShape>
        </ShapesContainer>
    );
};

export default BackgroundShapes; 