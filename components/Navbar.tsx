import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='bg-white text-black p-4 sm:p-4 md:flex md:justify-between md:items-center border-b-2 border-solid border-gray-300'>
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-bold font-Faustina" style={{ fontSize: '2.4375rem', lineHeight: '120%', color: '#000' }}>
                    Logo
                </a>
                <div className='hidden md:flex space-x-4'>
                    <Link href="/" className="hover:text-gray-300"> 
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-gray-300"> 
                        Calculators
                    </Link>
                    <Link href="/contact" className="hover:text-gray-300"> 
                        Blog
                    </Link>
                    <Link href="/contact" className="hover:text-gray-300"> 
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
