import logo from "../assets/Final-logo 1.png"

export default function Navbar() {
    return (
        <div className="bg-gray-800 text-white">
            <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
                <div className="flex space-x-6 items-center">
                    <img src={logo} alt="Al Hathboor Group" class="h-24 top-0 z-10" />
                    <img
                        src="https://file.rendit.io/n/E5WYXaxWoq1Atl7xFkdq.svg"
                        alt="Facebook"
                        className="w-6"
                    />
                    <img
                        src="https://file.rendit.io/n/GZei1X17dnm9IES525QH.svg"
                        alt="Instagram"
                        className="w-6"
                    />
                    <img
                        src="https://file.rendit.io/n/6gaT3XiTsangAeN3Q7EP.svg"
                        alt="Flickr"
                        className="w-6"
                    />
                    <img
                        src="https://file.rendit.io/n/hNqrqEgtyCThGpYs8E1h.svg"
                        alt="LinkedIn"
                        className="w-6"
                    />
                </div>
                <nav className="hidden md:flex space-x-8">
                    <a href="#" className="hover:text-red-600 transition-colors duration-300">HOME</a>
                    <a href="#" className="hover:text-red-600 transition-colors duration-300">ABOUT US</a>
                    <a href="#" className="hover:text-red-600 transition-colors duration-300">SERVICES</a>
                    <a href="#" className="hover:text-red-600 transition-colors duration-300">CAREERS</a>
                    <a href="#" className="hover:text-red-600 transition-colors duration-300">CONTACT US</a>
                </nav>
                <div className="hidden md:block">
                    <button className="flex items-center px-6 py-3 bg-[#a52323] hover:bg-red-700 transition-colors">
                        <img
                            src="https://file.rendit.io/n/dJonEfmq3HTGjJmt0jc9.svg"
                            alt="Call to action"
                            className="w-6 h-6 mr-2"
                        />
                        <span className="text-white text-sm font-bold uppercase tracking-[0.16] leading-[24px]">
                            Let's Talk
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

