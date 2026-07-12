import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-[160px] w-full border-t border-outline-variant mt-auto">
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px] grid grid-cols-12 gap-[32px]">
        <div className="col-span-12 md:col-span-6 mb-16 md:mb-0">
          <div className="font-display-lg text-[48px] md:text-display-lg font-black text-on-surface opacity-10 leading-none mb-8 select-none">
            BeyondWebCo
          </div>
          <p className="text-on-surface-variant max-w-md text-lg">
            We build fast, modern, SEO-friendly websites that help businesses grow online.
          </p>
          <div className="flex gap-6 mt-12">
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">public</span>
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">mail</span>
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">terminal</span>
            </Link>
          </div>
        </div>
        
        <div className="col-span-6 md:col-span-2">
          <h5 className="font-bold text-on-surface mb-8 uppercase tracking-widest text-xs">Solutions</h5>
          <ul className="flex flex-col gap-4">
            <li><Link href="/services" className="text-on-surface-variant hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/work" className="text-on-surface-variant hover:text-primary transition-colors">Portfolio</Link></li>
          </ul>
        </div>
        
        <div className="col-span-6 md:col-span-2">
          <h5 className="font-bold text-on-surface mb-8 uppercase tracking-widest text-xs">Studio</h5>
          <ul className="flex flex-col gap-4">
            <li><Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div className="col-span-12 md:col-span-2 mt-12 md:mt-0">
          <h5 className="font-bold text-on-surface mb-8 uppercase tracking-widest text-xs">Legal</h5>
          <ul className="flex flex-col gap-4">
            <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        
        <div className="col-span-12 mt-24 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between text-on-surface-variant text-sm">
          <p>© {new Date().getFullYear()} BeyondWebCo. All rights reserved.</p>
          <p>Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
}
