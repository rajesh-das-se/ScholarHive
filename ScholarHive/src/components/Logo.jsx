import { Link } from "react-router-dom";

const Logo = ({size=3}) => {
    return (
        <Link to='/' className={`text-${size}xl font-bold`}>
            <span className='text-blue-900'>Scholar</span>
            <span className='text-blue-600'>Hive</span>
        </Link>
    )
}

export default Logo;