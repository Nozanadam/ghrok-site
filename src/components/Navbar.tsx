import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Cpu, Globe, MessageSquare, BrainCircuit } from 'lucide-react';
import { Link } from './ui/Link';

interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Início', href: '#' },
  { 
    label: 'Serviços', 
    href: '#services',
    subItems: [
      { label: 'Automações n8n', href: '#n8n' },
      { label: 'Landing Pages', href: '#landing-pages' },
      { label: 'Integrações IA', href: '#ai-integrations' },
      { label: 'Soluções Cloud', href: '#cloud' },
    ]
  },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Sobre Nós', href: '#about' },
  { label: 'Contato', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-blue-950/95 to-teal-950/95 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="#" className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                GORK TECNOLOGIA
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.subItems ? (
                  <div 
                    className="flex items-center cursor-pointer text-gray-100 hover:text-teal-400 transition-colors"
                    onClick={() => toggleDropdown(item.label)}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} className="ml-1" />
                    
                    {/* Dropdown Menu (Desktop) */}
                    <div 
                      className={`absolute top-full left-0 mt-2 bg-blue-950/95 backdrop-blur-md rounded-md shadow-xl p-2 min-w-48 transition-all duration-200 ${
                        activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-100 hover:bg-teal-900/50 hover:text-teal-400 rounded transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-100 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-100 hover:text-teal-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-3 pt-2 pb-4">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.subItems ? (
                  <div>
                    <div
                      className="flex items-center justify-between text-gray-100 hover:text-teal-400 transition-colors py-2"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    
                    {/* Dropdown Menu (Mobile) */}
                    <div
                      className={`pl-4 transition-all duration-200 space-y-2 overflow-hidden ${
                        activeDropdown === item.label ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block py-2 text-sm text-gray-300 hover:text-teal-400 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-gray-100 hover:text-teal-400 transition-colors py-2"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Link
                href="#contact"
                className="block w-full text-center px-6 py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300"
                onClick={toggleMenu}
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;