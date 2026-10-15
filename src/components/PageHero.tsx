import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden py-20 text-ivory sm:py-28">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/65 to-charcoal/85" />
        </>
      ) : (
        <div className="grain-texture absolute inset-0 bg-gradient-to-br from-forest via-forest to-charcoal" />
      )}

      <Container className="relative text-center">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            {eyebrow}
          </p>
          <h1 className="font-display text-balance text-4xl sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-balance text-ivory/80">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
