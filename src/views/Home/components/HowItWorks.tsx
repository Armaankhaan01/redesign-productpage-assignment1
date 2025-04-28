const HowItWorks = () => {
    return (
        <div className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        How GoGetWell.AI Works
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Our platform makes it simple to automate your healthcare
                        facilitation business
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center relative">
                    {/* Steps */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-1 bg-gray-200 z-0"></div>

                    {/* Step 1 */}
                    <div className="md:w-1/3 relative z-10 bg-white p-6 rounded-lg shadow-lg text-center transition-all hover:-translate-y-2 duration-300">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                            1
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            Create Your AI Agent
                        </h3>
                        <p className="text-gray-600">
                            Set up your AI assistant in minutes with our simple
                            onboarding wizard
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="md:w-1/3 relative z-10 bg-white p-6 rounded-lg shadow-lg text-center transition-all hover:-translate-y-2 duration-300">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                            2
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            Customize Your Website
                        </h3>
                        <p className="text-gray-600">
                            Personalize your healthcare website with our
                            drag-and-drop builder
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="md:w-1/3 relative z-10 bg-white p-6 rounded-lg shadow-lg text-center transition-all hover:-translate-y-2 duration-300">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                            3
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            Start Converting Patients
                        </h3>
                        <p className="text-gray-600">
                            Watch as your AI assistant handles inquiries and
                            books appointments
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HowItWorks
