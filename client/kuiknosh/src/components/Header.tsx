// Header.tsx
const Header = () => {
    return (
        <header className="bg-black shadow-md p-4 font-semibold">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-white">Kuiknosh</h1>
                <nav className="hidden md:flex space-x-8 items-center">
                    <a href="#about" className="text-gray-300 hover:text-white">About</a>
                    <a href="#gallery" className="text-gray-300 hover:text-white">Services</a>
                    <a href="#location" className="text-gray-300 hover:text-white">Contact</a>
                    <a href="#feedback" className="text-gray-300 hover:text-white">Feedback</a>

                </nav>
                <a href="https://www.instagram.com/kuiknosh?igsh=YzljYTk1ODg3Zg=="><button type="button" className="bg-red-600 cursor-pointer py-2 px-2 rounded-lg transition-all duration-500 hover:scale-105 text-white" >Order Now</button></a>
            </div>
        </header>
    );
};

export default Header;
// This code defines a functional React component named `Header` that renders a navigation bar with links to different sections of a website. The header has a black background and uses Tailwind CSS for styling. The links change color on hover, and the navigation is hidden on smaller screens (using the `md:flex` class).