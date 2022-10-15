enum ButtonVariant
{
    'primary',
    'secondary',
}

// 'outline',
//     'ghost',
//     'light',

enum ButtonSize
{
    "small",
    "medium",
    "large",
    "x-large"
}
export interface ButtonProps
{
    children?: React.ReactNode;
    variant: keyof typeof ButtonVariant;
    size: keyof typeof ButtonSize;
    className?: string;
    user?: number;
}