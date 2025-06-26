import React from 'react';
import {
    DashboardCardContainer,
    CardContent,
    CardNumber,
    CardIcon,
    CardDescription,
    DashboardGrid
} from './DashboardCard.styled';

interface DashboardCardProps {
    content?: React.ReactNode;
    description: string;
    onClick?: () => void;
    color?: string;
    className?: string;
    iconSrc?: string;
    iconAlt?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
    content,
    description,
    onClick,
    color,
    className,
    iconSrc,
    iconAlt
}) => {
    return (
        <DashboardCardContainer onClick={onClick} className={className}>
            <CardContent>
                {iconSrc ? (
                    <CardIcon>
                        <img
                            src={iconSrc}
                            alt={iconAlt || description}
                            style={{ width: '48px', height: '48px' }}
                        />
                    </CardIcon>
                ) : typeof content === 'string' || typeof content === 'number' ? (
                    <CardNumber style={{ color }}>{content}</CardNumber>
                ) : (
                    <CardIcon style={{ color }}>{content}</CardIcon>
                )}
            </CardContent>
            <CardDescription>{description}</CardDescription>
        </DashboardCardContainer>
    );
};

export default DashboardCard;
export { DashboardGrid }; 