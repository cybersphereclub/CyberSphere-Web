import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    className = '',
    type = 'button',
    ...props
}) => {
    if (props.href) {
        return (
            <a
                className={`btn btn-${variant} btn-${size} ${className}`}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={`btn btn-${variant} btn-${size} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
