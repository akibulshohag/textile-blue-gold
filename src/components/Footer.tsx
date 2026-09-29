import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Youtube } from "lucide-react";
import logoIconObj from "@/assets/logo/textile-blue-gold-icon-footer.png";

const logoIcon = logoIconObj.src;

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img src={logoIcon} alt="Textile Blue Gold" className="h-10 w-10" />
              <h3 className="text-xl font-bold">
                Textile <span className="text-accent">Blue Gold</span>
              </h3>
            </div>
            <p className="mb-4 text-sm text-primary-foreground/80">
              Delivering top-tier technical services and high-quality industrial machinery to textile factories and manufacturing plants across Bangladesh since 2008.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/18FPpRPTHY/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Textile Blue Gold on Facebook"
                className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-accent"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com/@yonthinbangladesh?si=avJQDJvTg6iYcyt5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Textile Blue Gold on YouTube"
                className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-accent"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/about/company-profile" className="transition-colors hover:text-accent">About Us</Link></li>
              <li><Link href="/products" className="transition-colors hover:text-accent">Products</Link></li>
              <li><Link href="/media/news" className="transition-colors hover:text-accent">News & Media</Link></li>
              <li><Link href="/support/faq" className="transition-colors hover:text-accent">Support</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-accent">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Products</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/products/air-compressors" className="transition-colors hover:text-accent">Air Compressors</Link></li>
              <li><Link href="/products/knitting-machines" className="transition-colors hover:text-accent">Knitting Machines</Link></li>
              <li><Link href="/products/embroidery-machines" className="transition-colors hover:text-accent">Embroidery Machines</Link></li>
              <li><Link href="/products/generators" className="transition-colors hover:text-accent">Generators</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Gousul Azam Avenue, House-24, Sector-13, Uttara, Dhaka-1230</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span>+880 1713-273990</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span>bangladeshyonthin@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Textile Blue Gold. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
