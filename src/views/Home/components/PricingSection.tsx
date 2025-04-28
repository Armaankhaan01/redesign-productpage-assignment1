import React, { useState } from 'react'
import { BiCheck, BiX } from 'react-icons/bi'
import { Button } from '@/components/ui'
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup'

const PricingSection: React.FC = () => {
    const [annual, setAnnual] = useState(true)

    const plans = [
        {
            name: 'Starter',
            description: 'Perfect for individual healthcare facilitators',
            monthlyPrice: 49,
            annualPrice: 39,
            features: [
                'AI-powered chatbot',
                'Custom website builder',
                '5 patient leads per month',
                'Basic analytics',
                'Email support',
            ],
            notIncluded: [
                'Multi-language support',
                'Advanced marketing tools',
                'Premium integrations',
                'Priority support',
            ],
            cta: 'Get Started',
            popular: false,
        },
        {
            name: 'Professional',
            description: 'Ideal for growing healthcare businesses',
            monthlyPrice: 99,
            annualPrice: 79,
            features: [
                'Everything in Starter',
                'Unlimited patient leads',
                'Multi-language support (5 languages)',
                'Advanced marketing tools',
                'Basic integrations',
                'Priority email support',
            ],
            notIncluded: [
                'Premium hospital integrations',
                'Dedicated account manager',
            ],
            cta: 'Get Started',
            popular: true,
        },
        {
            name: 'Enterprise',
            description: 'For established medical tourism agencies',
            monthlyPrice: 199,
            annualPrice: 159,
            features: [
                'Everything in Professional',
                'Custom branding',
                'Multi-language support (15+ languages)',
                'Premium hospital integrations',
                'Advanced analytics and reporting',
                'Dedicated account manager',
                '24/7 priority support',
            ],
            notIncluded: [],
            cta: 'Contact Sales',
            popular: false,
        },
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Simple, Transparent Pricing
                </h2>
                <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Choose the plan that best fits your healthcare facilitation
                    needs. All plans include our core AI technology.
                </p>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center mt-8 space-x-4">
                    <span
                        className={`text-sm ${annual ? 'text-gray-500' : 'text-gray-900 font-medium'}`}
                    >
                        Monthly
                    </span>
                    <button
                        className="relative inline-flex h-6 w-12 items-center rounded-full"
                        onClick={() => setAnnual(!annual)}
                    >
                        <span
                            className={`absolute h-6 w-12 rounded-full transition ${annual ? 'bg-primary' : 'bg-gray-300'}`}
                        ></span>
                        <span
                            className={`absolute h-4 w-4 transform rounded-full bg-white transition ${annual ? 'translate-x-7' : 'translate-x-1'}`}
                        ></span>
                    </button>
                    <span
                        className={`text-sm ${annual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}
                    >
                        Annual{' '}
                        <span className="text-green-500 font-medium">
                            (Save 20%)
                        </span>
                    </span>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl transform hover:-translate-y-1 ${
                            plan.popular
                                ? 'border-2 border-primary md:scale-105'
                                : 'border border-gray-200'
                        }`}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                                MOST POPULAR
                            </div>
                        )}

                        <div className="p-8 flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {plan.description}
                                </p>
                                <div className="mb-6">
                                    <span className="text-5xl font-bold text-gray-900">
                                        $
                                        {annual
                                            ? plan.annualPrice
                                            : plan.monthlyPrice}
                                    </span>
                                    <span className="text-gray-600 ml-2">
                                        / month
                                    </span>
                                    {annual && (
                                        <div className="text-green-500 text-sm font-medium mt-1">
                                            Billed annually ($
                                            {plan.annualPrice * 12}/year)
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start"
                                        >
                                            <BiCheck className="w-5 h-5 text-green-500 flex-shrink-0 mr-2 mt-0.5" />
                                            <span className="text-gray-600">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}

                                    {plan.notIncluded.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start text-gray-400"
                                        >
                                            <BiX className="w-5 h-5 flex-shrink-0 mr-2 mt-0.5" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {plan.name === 'Enterprise' ? (
                                <Button
                                    block
                                    variant={plan.popular ? 'solid' : 'default'}
                                    className={`rounded-lg py-3 ${plan.popular ? 'bg-primary' : 'border-primary text-primary'}`}
                                >
                                    {plan.cta}
                                </Button>
                            ) : (
                                <HcfSignupPopup
                                    popupButtonStatus
                                    buttonChildren={
                                        <Button
                                            block
                                            variant={
                                                plan.popular
                                                    ? 'solid'
                                                    : 'default'
                                            }
                                            className={`rounded-lg py-3 ${plan.popular ? 'bg-primary' : 'border-primary text-primary'}`}
                                        >
                                            {plan.cta}
                                        </Button>
                                    }
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Money-back guarantee */}
            <div className="text-center mt-12 text-gray-600">
                All plans come with a 14-day money-back guarantee. No questions
                asked.
            </div>
        </div>
    )
}

export default PricingSection
