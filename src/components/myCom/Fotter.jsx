import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <div className='text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <Link to="/">
                        <img 
                            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg" 
                            alt="logo" 
                            className='mb-4 h-8 md:h-9' 
                        />
                    </Link>
                    <p className='text-sm'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        <Link to="https://instagram.com" target="_blank" aria-label="Instagram">
                            <Instagram className="w-6 h-6" />
                        </Link>
                        <Link to="https://facebook.com" target="_blank" aria-label="Facebook">
                            <Facebook className="w-6 h-6" />
                        </Link>
                        <Link to="https://x.com" target="_blank" aria-label="Twitter (X)">
                            <Twitter className="w-6 h-6" />
                        </Link>
                        <Link to="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                            <Linkedin className="w-6 h-6" />
                        </Link>
                    </div>
                </div>

                <div>
                    <p className='text-lg text-gray-800'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/press">Press</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/partners">Partners</Link></li>
                    </ul>
                </div>

                <div>
                    <p className='text-lg text-gray-800'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><Link to="/help-center">Help Center</Link></li>
                        <li><Link to="/safety">Safety Information</Link></li>
                        <li><Link to="/cancellations">Cancellation Options</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/accessibility">Accessibility</Link></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='text-lg text-gray-800'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input 
                            type="email" 
                            className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none flex-1' 
                            placeholder='Your email' 
                        />
                        <button 
                            className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r hover:bg-gray-800 transition-colors'
                            aria-label="Subscribe"
                        >
                            <ArrowRight className="w-4 h-4 text-white" />
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><Link to="/privacy">Privacy</Link></li>
                    <li><Link to="/terms">Terms</Link></li>
                    <li><Link to="/sitemap">Sitemap</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;