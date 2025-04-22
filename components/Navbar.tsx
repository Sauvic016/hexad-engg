"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

interface NavItemProps {
  href: string;
  label: string;
  pathname: string;
}

const NavItem = ({ href, label, pathname }: NavItemProps) => {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`group relative flex py-2 text-base font-medium transition-colors duration-200
      ${
        isActive
          ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-primary after:transition-transform after:duration-200 after:scale-x-100"
          : "text-muted-foreground hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100"
      }`}
    >
      <span>{label}</span>
    </Link>
  );
};

interface NavbarProps {
  onMenuClick?: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  const pathname = usePathname();

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onMenuClick) {
      onMenuClick();
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="md:container md:mx-auto px-4">
        <div className="flex h-20 justify-between items-center">
          <div className="flex">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
              <Image src="/logo.png" alt="HEXAD Engineering LLP" width={145} height={50} priority />
            </Link>
          </div>

          <div className="hidden md:flex w-full items-center justify-end lg:justify-center gap-4 lg:gap-10  ">
            <NavItem href="/" label="Home" pathname={pathname} />
            {/* <NavItem href="/about" label="Who We Are" pathname={pathname} /> */}
            <NavItem href="/about" label="About us" pathname={pathname} />
            <NavItem href="/our-expertise" label="Our Expertise" pathname={pathname} />
            <NavItem href="/what-we-do" label="What We Do" pathname={pathname} />
            <NavItem href="/careers" label="Careers" pathname={pathname} />
            <NavItem href="/contact" label="Contact" pathname={pathname} />
          </div>

          <div className="md:hidden flex-1 flex items-center justify-end gap-4">
            <Button
              aria-label="Toggle menu"
              className="md:hidden rounded-md transition-colors duration-200 text-muted-foreground hover:bg-accent hover:text-accent-foreground h-auto w-auto bg-transparent"
              onClick={handleMenuClick}
            >
              <Menu className="h-14 w-14 text-black" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
