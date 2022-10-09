enum ButtonVariant
{
    'primary',
    'outline',
    'ghost',
    'light',
    'dark',
}
export interface ButtonProps
{
    children?: React.ReactNode;
    variant?: keyof typeof ButtonVariant;
    className?: string;
    user?: number;
}