
interface HeaderProps
{
    message: string;
}

export default function Header (props: HeaderProps)
{
    return (
        <div>
            <header>
                <h1>{props.message}</h1>
                <h6>Made by Sebastian Whyte</h6>
            </header>
        </div>
    )
}