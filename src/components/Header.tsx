
interface HeaderProps
{
    message: string;
}

export default function Header (props: HeaderProps)
{
    return (
        <header>
            <h1>{props.message}</h1>
        </header>
    )
}