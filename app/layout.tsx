import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import WhatsAppWidget from "@/components/whatsapp-widget";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Bachata al Aire Libre - Clases de Salsa y Bachata | Carlos yépez",
  description:
    "Clases de salsa y bachata al aire libre en Barcelona. Aprende a bailar con Carlos yépez en grupos reducidos (5-20 personas). Ambiente divertido y atención personalizada.",
  keywords:
    "bachata al aire libre, clases de salsa Barcelona, clases de bachata Barcelona, Carlos yépez, baile latino, salsa, bachata",
  generator: "jorgecalleja.dev",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Bachata al Aire Libre - Clases de Salsa y Bachata",
    description:
      "Aprende salsa y bachata con Carlos yépez en Barcelona. Clases al aire libre en grupos reducidos.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${poppins.variable} font-sans antialiased overflow-x-hidden`}
      >
        {children}
        <WhatsAppWidget
          phoneNumber="34698501676"
          message="Hola Carlos, me gustaría información sobre las clases de bachata al aire libre"
          companyName="Bachata al Aire Libre"
        />
        <Analytics />
      </body>
    </html>
  );
}
