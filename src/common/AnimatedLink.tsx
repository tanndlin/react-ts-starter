import React from 'react';
import { useNavigate } from 'react-router';
import { smoothTransition } from './utils';

type Props = {
    to: string;
    children: React.ReactNode;
    className?: string;
};

const AnimatedLink = (props: Props) => {
    const { to, children, className } = props;
    const navigate = useNavigate();

    const handleClick = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        event.preventDefault();
        smoothTransition(() => {
            navigate(to);
        });
    };

    return (
        <a href={to} onClick={handleClick} className={className ?? ''}>
            {children}
        </a>
    );
};

export default AnimatedLink;
