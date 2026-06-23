import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { SITE } from "@/lib/site";
import logoAsset from "@/assets/logo.jpg.asset.json";

function NotFoundComponent() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center bg-royal-grad px-4 pt-24">
        <div className="max-w-md text-center">
          <h1 className="font-display text-8xl text-saffron-grad">404</h1>
          <h2 className="mt-4 font-display text-2xl uppercase text-[color:var(--cream)]">
            Page Not Found
          </h2>
          <p className="mt-3 text-sm text-[color:var(--cream)]/70">
            The royal court could not locate this page. Let us guide you back.
          </p>
          <div className="mt-7">
            <Link
              to="/"
              className="btn-shimmer inline-flex items-center justify-center rounded-full bg-saffron-grad px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--royal-deep)] glow-saffron"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-royal-grad px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl uppercase tracking-tight text-[color:var(--cream)]">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-[color:var(--cream)]/70">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-saffron-grad px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--royal-deep)]"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--gold)]/50 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--cream)]"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shahi Pind — The Royal Taste of Punjab · Bhopal" },
      { name: "description", content: "Authentic Punjabi cuisine, royal ambience, and unforgettable celebrations on Ayodhya Bypass Road, Bhopal. 4.7★ on Google · 523+ reviews." },
      { name: "author", content: "Shahi Pind" },
      { name: "theme-color", content: "#1A0445" },
      { property: "og:site_name", content: "Shahi Pind" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@shahipind" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/jpeg", href: logoAsset.url },
      { rel: "apple-touch-icon", href: logoAsset.url },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: SITE.name,
          description: "Royal Punjabi fine dining in Bhopal — celebrations, family dining, drive-through and delivery.",
          servesCuisine: ["Punjabi", "North Indian", "Tandoor", "Indo-Chinese"],
          priceRange: "₹₹",
          image: logoAsset.url,
          telephone: SITE.phoneIntl,
          url: "/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ayodhya Bypass Road, K-Sector",
            addressLocality: "Bhopal",
            addressRegion: "Madhya Pradesh",
            postalCode: "462010",
            addressCountry: "IN",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            opens: "12:00",
            closes: "23:30",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: SITE.rating,
            reviewCount: SITE.reviews,
          },
          hasMenu: "/menu",
          acceptsReservations: "True",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </QueryClientProvider>
  );
}
