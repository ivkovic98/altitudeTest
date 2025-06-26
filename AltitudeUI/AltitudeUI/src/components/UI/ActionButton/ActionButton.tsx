import React from 'react';
import { StyledActionButton } from './ActionButton.styled';

export type ActionButtonType = 'accept' | 'cancel';

interface ActionButtonProps {
    type: ActionButtonType;
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
    type,
    onClick,
    children,
    disabled = false,
    className
}) => {
    return (
        <StyledActionButton
            $type={type}
            onClick={onClick}
            disabled={disabled}
            className={className}
        >
            {children}
        </StyledActionButton>
    );
};

export default ActionButton; 