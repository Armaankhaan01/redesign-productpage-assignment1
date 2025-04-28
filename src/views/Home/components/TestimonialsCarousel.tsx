import React, { useState, useEffect } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

// Testimonial data
const testimonials = [
    {
        id: 1,
        quote: 'GoGetWell.AI transformed my healthcare facilitation business. The AI assistant handles all my patient inquiries, allowing me to focus on delivering exceptional care.',
        author: 'Dr. Sarah Johnson',
        position: 'Medical Tourism Consultant',
        avatar: 'img/clients/demo-1.webp',
    },
    {
        id: 2,
        quote: 'Setting up my medical tourism website with GoGetWell.AI was incredibly easy. Within days, I started receiving international patient inquiries that converted to actual bookings.',
        author: 'Michael Chen',
        position: 'Healthcare Facilitator',
        avatar: 'img/clients/demo-3.webp',
    },
    {
        id: 3,
        quote: 'The multilingual support feature has been a game-changer for my international patients. They can communicate in their native language, which builds trust from the start.',
        author: 'Ananya Patel',
        position: 'Medical Coordinator',
        avatar: 'img/clients/demo-2.webp',
    },
]

const TestimonialsCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    // Auto-scroll testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length)
        }, 8000)
        return () => clearInterval(interval)
    }, [])

    const goToNext = () => {
        setActiveIndex((current) => (current + 1) % testimonials.length)
    }

    const goToPrev = () => {
        setActiveIndex(
            (current) =>
                (current - 1 + testimonials.length) % testimonials.length,
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    What Our Clients Say
                </h2>
                <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="relative">
                {/* Testimonial Cards */}
                <div className=" ">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${activeIndex * 100}%)`,
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="min-w-full px-4"
                            >
                                <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
                                    <div className="flex items-center mb-8">
                                        <div className="flex-shrink-0 mr-5">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.author}
                                                className="w-16 h-16 rounded-full object-cover border-4 border-primary"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900">
                                                {testimonial.author}
                                            </h4>
                                            <p className="text-gray-600">
                                                {testimonial.position}
                                            </p>
                                        </div>
                                    </div>

                                    <blockquote className="text-gray-700 text-lg italic leading-relaxed">
                                        {testimonial.quote}
                                    </blockquote>

                                    <div className="mt-6 flex justify-center">
                                        <svg
                                            className="w-8 h-8 text-primary opacity-50"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none z-10"
                    onClick={goToPrev}
                >
                    <BiLeftArrowAlt className="w-6 h-6 text-primary" />
                </button>

                <button
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none z-10"
                    onClick={goToNext}
                >
                    <BiRightArrowAlt className="w-6 h-6 text-primary" />
                </button>

                {/* Dots */}
                <div className="flex justify-center mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                                index === activeIndex
                                    ? 'bg-primary'
                                    : 'bg-gray-300'
                            }`}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TestimonialsCarousel
