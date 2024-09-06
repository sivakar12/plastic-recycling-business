'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Collection Points', href: '/collection-points' },
  { name: 'Leaderboard', href: '/leaderboard' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
];

export default function NavigationBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen &&
          menuRef.current &&
          !menuRef.current.contains(event.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const NavItems = () => (
    <>
      {navItems.map((item) => (
        <li key={item.name} className="w-full">
          <Link 
            href={item.href} 
            className={`block w-full px-4 py-2 text-lg font-semibold text-center transition-all duration-300 ease-in-out hover:scale-105 bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-green-400 to-green-600
              ${isActive(item.href) 
                ? 'text-xl' 
                : 'text-green'
              }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <nav className="w-full py-4">
      {isMobile ? (
        <div className="flex justify-end items-center relative">
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-black text-4xl"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            ☰
          </button>
          {isMenuOpen && (
            <ul ref={menuRef} className="absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-2 z-50">
              <NavItems />
            </ul>
          )}
        </div>
      ) : (
        <ul className="flex items-center space-x-8">
          <NavItems />
        </ul>
      )}
    </nav>
  );
}