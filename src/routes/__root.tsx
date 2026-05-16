import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Protocolo Termo Hormonal — Destrave seu metabolismo" },
      {
        name: "description",
        content:
          "Ative seu metabolismo e perca peso de forma natural com o Protocolo Termo Hormonal. +500 mil pessoas já destravaram resultados reais.",
      },
      { property: "og:title", content: "Protocolo Termo Hormonal — Destrave seu metabolismo" },
      {
        property: "og:description",
        content: "Desbloqueie o emagrecimento que seu corpo esconde.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Protocolo Termo Hormonal — Destrave seu metabolismo" },
      { name: "description", content: "Landing page de vendas TSL para o \"Protocolo Termo Hormonal\" foca em emagrecimento natural." },
      { property: "og:description", content: "Landing page de vendas TSL para o \"Protocolo Termo Hormonal\" foca em emagrecimento natural." },
      { name: "twitter:description", content: "Landing page de vendas TSL para o \"Protocolo Termo Hormonal\" foca em emagrecimento natural." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d02f0c8b-7b0a-459c-9b27-2aea23c367f5/id-preview-bfaf9c9c--cfcd1d6b-18c6-4a51-97ad-c7646ddf75f4.lovable.app-1778967166481.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d02f0c8b-7b0a-459c-9b27-2aea23c367f5/id-preview-bfaf9c9c--cfcd1d6b-18c6-4a51-97ad-c7646ddf75f4.lovable.app-1778967166481.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://go.perfectpay.com.br" },
      { rel: "dns-prefetch", href: "https://connect.facebook.net" },
      { rel: "dns-prefetch", href: "https://cdn.utmify.com.br" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Space+Grotesk:wght@600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        src: "https://cdn.utmify.com.br/scripts/utms/latest.js",
        async: true,
        defer: true,
        "data-utmify-prevent-xcod-sck": "",
        "data-utmify-prevent-subids": "",
      },
      {
        children: `window.addEventListener('load',function(){setTimeout(function(){!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1450652386098795');fbq('track','PageView');},1500);});`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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
  return <Outlet />;
}
