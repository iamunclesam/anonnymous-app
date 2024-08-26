
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="flex items-center p-4 bg-gray-900 border-b border-gray-700">
            {/* Logo */}
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <h1 className="ml-2 text-2xl font-bold text-white">Deep Circle</h1>
        </header>
    );
};

export default Header;
