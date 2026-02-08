import './Card.css';

const Card = ({ children, className = '', hoverEffect = false, ...props }) => {
    return (
        <div
            className={`card glass-panel ${hoverEffect ? 'card-hover' : ''} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
