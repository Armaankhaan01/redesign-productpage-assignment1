import React from 'react'
import { Button } from '@/components/ui'
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup'

const CtaBanner: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="relative overflow-hidden rounded-3xl !bg-[#01052f] py-16 px-8 shadow-2xl">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to transform your healthcare facilitation
                            business?
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Join thousands of healthcare facilitators who have
                            streamlined their operations and increased patient
                            conversions with GoGetWell.AI.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
                            <HcfSignupPopup
                                popupButtonStatus
                                buttonChildren={
                                    <Button
                                        size="lg"
                                        variant="solid"
                                        className="bg-white text-[#01052f] hover:bg-gray-100 rounded-lg"
                                    >
                                        Get Started For Free
                                    </Button>
                                }
                            />
                            <button className="text-white font-medium hover:underline flex items-center">
                                <span>Schedule a demo</span>
                                <svg
                                    className="w-5 h-5 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaBanner
