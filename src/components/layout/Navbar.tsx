import Logo from '@/assets/react.svg'
import { Link } from 'react-router'
import { ModeToggle } from '../mode-toggler'
export default function Navbar() {
    return (
        <nav className="max-w-7xl mx-auto h-16 items-center gap-3 px-5 flex justify-between">
            <div className=''>
                <div className="flex items-center">
                    <img src={Logo} alt="" /> <span className="font-bold ml-2">Task</span>Master
                </div>
            </div>
            <div>
                <Link className='mr-3' to='/'>Tasks</Link>
                <Link to='/users'>User</Link>
            </div>
            <div>
                <ModeToggle />
            </div>
        </nav>
    )
}