import React, { useEffect, useRef, useState } from 'react'
import HeroSection from './components/HeroSection'
import HomeFAQs from './components/HomeFAQ'
import ContactForm from './components/ContactForm'
import MainFooter from './components/MainFooter'
import InfoSection from './components/InfoSection'
import FeaturesGrid from './components/FeaturesGrid'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import PricingSection from './components/PricingSection'
import IntegrationPartners from './components/IntegrationPartners'
import CtaBanner from './components/CtaBanner'
import HowItWorks from './components/HowItWorks'
import TrustedBy from './components/TrustedBy'
import AIChatbot from './components/AIChatbot'

const Home = () => {
    const contactRef = useRef(null)
    const aboutRef = useRef(null)
    const featuresRef = useRef(null)
    const pricingRef = useRef(null)
    const [isScrolled, setIsScrolled] = useState(false)

    const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const hcf = document.querySelector('.hcf-profile')

            if (scrollTop > 50) {
                setIsScrolled(true)
                if (hcf) {
                    hcf.classList.add('hcf-profile-fixed')
                }
            } else {
                setIsScrolled(false)
                if (hcf) {
                    hcf.classList.remove('hcf-profile-fixed')
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="overflow-x-hidden">
            {/* AI Chatbot */}
            <AIChatbot />

            {/* Hero Section */}
            <HeroSection
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            {/* Trusted By Logos Section */}
            <TrustedBy />

            {/* Features Section */}
            <div ref={featuresRef} className="bg-white relative">
                <FeaturesGrid />
            </div>

            {/* How It Works Section */}
            <HowItWorks />

            {/* About Section */}
            <div ref={aboutRef} className="bg-white relative ">
                <InfoSection />
            </div>

            {/* Testimonials Section */}
            <div className="bg-white py-16">
                <TestimonialsCarousel />
            </div>

            {/* Pricing Section */}
            <div ref={pricingRef} className="bg-white py-16 ">
                <PricingSection />
            </div>

            {/* Integration Partners */}
            <div className="bg-white py-16">
                <IntegrationPartners />
            </div>

            {/* FAQ Section */}
            <div ref={featuresRef} className="bg-white relative ">
                <HomeFAQs />
            </div>

            {/* CTA Banner */}
            <div className="bg-white py-16">
                <CtaBanner />
            </div>

            {/* Contact Section */}
            <div ref={contactRef} className="bg-white relative ">
                <ContactForm />
            </div>

            {/* Footer */}
            <div className="bg-white border-t border-gray-200">
                <MainFooter />
            </div>
        </div>
    )
}

export default Home
