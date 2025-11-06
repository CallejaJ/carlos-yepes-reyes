"use client";

import { useLanguage } from "./language-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="bg-background py-20 px-4">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance font-bold text-foreground text-4xl md:text-5xl">
            {t.pricing.title}
          </h2>
          <p className="text-balance text-muted-foreground text-xl">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Individual Pricing */}
          <Card className="border-2 border-secondary shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] hover:scale-105 relative overflow-hidden flex flex-col">
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-md">
              ¡PROMO!
            </div>
            <CardHeader className="text-center min-h-[120px] flex flex-col justify-center">
              <CardTitle className="text-3xl font-bold text-card-foreground">
                {t.pricing.individual}
              </CardTitle>
              <CardDescription className="text-lg">
                {t.pricing.perPerson}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-6 text-center">
                <span className="text-5xl font-bold text-primary">€10</span>
              </div>
              <div className="mb-4 text-center bg-secondary/20 rounded-lg py-2 px-3">
                <span className="text-secondary-foreground font-semibold">
                  + {t.pricing.freePartner}
                </span>
              </div>
              <ul className="space-y-3">
                {t.pricing.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6 shadow-md hover:shadow-lg transition-shadow">
                {t.pricing.cta}
              </Button>
            </CardFooter>
          </Card>

          {/* Private Pricing */}
          <Card className="border-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] hover:scale-105 flex flex-col">
            <CardHeader className="text-center min-h-[120px] flex flex-col justify-center">
              <CardTitle className="text-3xl font-bold text-card-foreground">
                {t.pricing.private}
              </CardTitle>
              <CardDescription className="text-lg">
                {t.pricing.privateDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-6 text-center">
                <span className="text-5xl font-bold text-primary">€25</span>
                <span className="text-muted-foreground text-xl">
                  {" "}
                  {t.pricing.perHour}
                </span>
              </div>
              <div className="mb-4 text-center bg-secondary/20 rounded-lg py-2 px-3">
                <span className="text-secondary-foreground font-semibold">
                  {t.pricing.privatePromo}
                </span>
              </div>
              <ul className="space-y-3">
                {t.pricing.privateFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6 shadow-md hover:shadow-lg transition-shadow">
                {t.pricing.cta}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
