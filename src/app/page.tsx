import { LandingPage } from "@/templates/landing-page/landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site.Set',
  description: 'Venda seus produtos como afiliado em um único lugar',
  robots: 'index, follow',
  openGraph: {
    title: 'Site.Set',
    description: 'Venda seus produtos como afiliado em um único lugar',
    siteName: 'Site.Set',
    locale: 'pt-BR',
    type: 'website'
  },
};

export default function HomePage() {
  return <LandingPage />
}