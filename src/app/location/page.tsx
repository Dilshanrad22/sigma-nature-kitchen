import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Button from "@/components/Button";
import EnquiryForm from "@/components/EnquiryForm";
import { business, whatsappLink } from "@/lib/content";
import { bannerImages } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book a Cooking Class in Kananke, Imaduwa",
  description:
    "Find Sigma House Nature Kitchen in Kananke, Imaduwa, down south near Galle, Weligama and Ahangama. Reserve your Sri Lankan cooking class by WhatsApp or enquiry form.",
  path: "/location",
  extraKeywords: ["book cooking class Sri Lanka", "Kananke Imaduwa"],
});

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Location & book"
        title={`Find us, ${business.nearbyLandmark}`}
        description={business.schedule.display}
        image={bannerImages.kitchenPavilion}
      />

      <section className="bg-charcoal py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <PhotoPlaceholder
              label="Map embed goes here once the exact address is confirmed"
              icon={MapPin}
              tone="forest"
              className="aspect-[4/3]"
            />
            <div className="mt-6 space-y-4 text-sm text-ivory/80">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-terracotta-light" />
                <div>
                  <p className="font-medium text-ivory">Address</p>
                  <p>{business.address}</p>
                  <a
                    href={business.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-light underline underline-offset-4"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-terracotta-light" />
                <div>
                  <p className="font-medium text-ivory">Phone / WhatsApp</p>
                  <p>{business.phoneDisplay}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-terracotta-light" />
                <div>
                  <p className="font-medium text-ivory">Email</p>
                  <p>{business.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 shrink-0 text-terracotta-light" />
                <div>
                  <p className="font-medium text-ivory">Hours</p>
                  <p>{business.openingHours}</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button
                href={whatsappLink("Hi! I'd like to ask about directions and timing.")}
                external
                variant="secondary"
                icon={<MessageCircle size={16} />}
              >
                Message on WhatsApp
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ivory/10 bg-white/5 p-6 sm:p-8">
              <h2 className="font-display text-2xl text-ivory">
                Request a booking
              </h2>
              <p className="mt-2 text-sm text-ivory/60">
                This sends your details straight to us on WhatsApp   we&rsquo;ll
                confirm availability, final price, and the meeting point.
              </p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
