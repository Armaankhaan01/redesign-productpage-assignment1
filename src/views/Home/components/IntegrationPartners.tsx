import React from 'react'
import {
    Hospital,
    FileText,
    CreditCard,
    Users,
    Mail,
    Video,
    Calendar,
    BarChart3,
    ChevronRight,
    Search,
} from 'lucide-react'
import { Button } from '@/components/ui'

const IntegrationPartners = () => {
    const integrations = [
        {
            name: 'Hospital Management Systems',
            icon: <Hospital className="text-primary" />,
            category: 'Healthcare',
            description: 'Seamlessly connect with major HMS platforms',
        },
        {
            name: 'Electronic Health Records',
            icon: <FileText className="text-green-600" />,
            category: 'Healthcare',
            description: 'Integrate with all popular EHR systems',
        },
        {
            name: 'Payment Gateways',
            icon: <CreditCard className="text-purple-600" />,
            category: 'Financial',
            description: 'Process payments through trusted providers',
        },
        {
            name: 'CRM Systems',
            icon: <Users className="text-orange-600" />,
            category: 'Business',
            description: 'Connect with your customer management tools',
        },
        {
            name: 'Email Marketing',
            icon: <Mail className="text-red-600" />,
            category: 'Marketing',
            description: 'Automate patient communications',
        },
        {
            name: 'Video Conferencing',
            icon: <Video className="text-indigo-600" />,
            category: 'Communication',
            description: 'Enable virtual consultations',
        },
        {
            name: 'Appointment Scheduling',
            icon: <Calendar className="text-teal-600" />,
            category: 'Healthcare',
            description: 'Sync with your scheduling software',
        },
        {
            name: 'Analytics Tools',
            icon: <BarChart3 className="text-amber-600" />,
            category: 'Business',
            description: 'Track performance and patient metrics',
        },
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Powerful Integrations
                </h2>
                <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                    Connect your AI front office with the tools you already use
                    to streamline your healthcare operations.
                </p>
            </div>

            <div className="relative mb-10 md:mb-12">
                <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                >
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-sm text-gray-500 flex items-center">
                        <Search className="w-4 h-4 mr-2" />
                        Find your perfect integration match
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {integrations.map((integration, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full justify-between hover:border-blue-200 group transform hover:-translate-y-1"
                    >
                        <div className="p-5 sm:p-6 text-center">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gray-100 group-hover:bg-blue-50 transition-colors duration-300 ">
                                {React.cloneElement(integration.icon, {
                                    size: 24,
                                })}
                            </div>
                            <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2 text-center">
                                {integration.name}
                            </h3>
                            <div className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-3 mx-auto ">
                                {integration.category}
                            </div>
                            <p className="text-xs sm:text-sm text-gray-500 text-center">
                                {integration.description}
                            </p>
                        </div>
                        <div className="bg-gray-50 px-4 sm:px-6 py-2 sm:py-3 group-hover:bg-blue-50 transition-colors duration-300 ">
                            <button className="text-primary text-xs sm:text-sm font-medium hover:text-blue-800 w-full text-center flex items-center justify-center">
                                <span>Learn more</span>
                                <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 lg:mt-16 text-center">
                <Button
                    icon={<ChevronRight className="w-5 h-5 ml-1" />}
                    variant="solid"
                    iconAlignment="end"
                >
                    <span>Explore all integrations</span>
                </Button>
                <p className="text-gray-500 mt-4 text-xs sm:text-sm">
                    Don&apos;t see what you&apos;re looking for? Contact us for
                    custom integrations.
                </p>
            </div>
        </div>
    )
}

export default IntegrationPartners
