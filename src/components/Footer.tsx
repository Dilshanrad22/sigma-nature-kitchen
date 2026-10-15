import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "./Container";
import { business, nav, secondaryPages } from "@/lib/content";
import { FacebookIcon, InstagramIcon } from "./icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="grain-texture bg-forest text-ivory">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="relative mb-3 h-14 w-14 overflow-hidden rounded-full border border-gold/30">
            <Image src="/logo.jpeg" alt="Sigma House Nature Kitchen" fill sizes="56px" className="object-cover" />
          </div>
          <p className="font-display text-2xl">Sigma House</p>
          <p className="text-sm text-gold-light">Nature Kitchen</p>
          <p className="mt-4 max-w-xs text-sm text-ivory/75">
            A hands-on Sri Lankan village cooking experience — cook, learn, and
            taste together.
          </p>
          <a
            href={business.sisterSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-gold-light underline underline-offset-4 hover:text-gold"
          >
            Visit {business.sisterSiteName} →
          </a>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold-light">
            Explore
          </p>
          <ul className="space-y-2.5 text-sm">
            {[...nav.slice(1), ...secondaryPages].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ivory/80 hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/policies" className="text-ivory/80 hover:text-ivory">
                Policies
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold-light">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li className="flex items-start gap-2.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold-light" />
              <span>{business.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={18} className="shrink-0 text-gold-light" />
              <a href={`tel:+${business.whatsappNumber}`} className="hover:text-ivory">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={18} className="shrink-0 text-gold-light" />
              <a href={`mailto:${business.email}`} className="hover:text-ivory">
                {business.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold-light">
            Follow
          </p>
          <div className="flex gap-3">
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory/10 transition-colors hover:bg-ivory/20"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory/10 transition-colors hover:bg-ivory/20"
            >
              <FacebookIcon size={18} />
            </a>
          </div>
          <p className="mt-6 text-xs text-ivory/60">{business.schedule.display}</p>
        </div>
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-ivory/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Sigma House Nature Kitchen. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/policies" className="hover:text-ivory/90">
              Privacy &amp; Policies
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
