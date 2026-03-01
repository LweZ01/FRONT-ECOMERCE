import { useUser } from '../../Context/UserContext'
import toast from 'react-hot-toast'
import { logoutService } from '../../Services/authServices'
const UserDropDown = () => {
    const { setUserInfo } = useUser()

    const handleLogout = async () => {
        try {
            await logoutService()
            setUserInfo({})
            toast.success('Sesión cerrada correctamente')
        } catch (error) {
            console.error('Error al cerrar sesión', error)
            toast.error('Error al cerrar sesión intente más tarde')
        }
    }

    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
            >
                <div className="w-10 rounded-full">
                    <img
                        src="https://avatars.githubusercontent.com/u/144471422?s=400&u=3b9979fec256da1a6007731d76c0209858250e7c&v=4"
                        alt="avatar"
                    />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow"
            >
                <li>
                    <a onClick={handleLogout} className="justify-between">
                        Cerrar sesión
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default UserDropDown
