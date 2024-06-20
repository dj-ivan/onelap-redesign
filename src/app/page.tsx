import AboutSection from '@/components/AboutSection'
import EventDetailsSection from '@/components/EventDetailsSection'
import HeroSection from '@/components/HeroSection'
import NewsSection from '@/components/NewsSection'
import RegistrationSection from '@/components/RegistrationSection'
import ResultsSection from '@/components/ResultsSection'
import SponsorsSection from '@/components/SponsorsSection'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>One Lap of America</title>
        <meta name="description" content="One Lap of America official website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <AboutSection />
      <EventDetailsSection />
      <ResultsSection />
      <NewsSection />
      <RegistrationSection />
      <SponsorsSection />
    </div>
  )
}
