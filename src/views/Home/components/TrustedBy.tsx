const TrustedBy = () => {
    return (
        <div className="bg-white py-8 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-center text-gray-500 text-sm mb-6">
                    TRUSTED BY HEALTHCARE PROVIDERS WORLDWIDE
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                    {/* Actual hospital logos */}
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Cleveland_Clinic_logo.svg"
                        alt="Cleveland Clinic"
                        className="h-8"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/92/Mayo_Clinic_2023_logo.svg"
                        alt="Mayo Clinic"
                        className="h-8"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/c/c4/Johns_Hopkins_Medicine_logo.svg"
                        alt="Johns Hopkins Medicine"
                        className="h-8"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Mount_Sinai_Health_System_logo.svg"
                        alt="Mount Sinai"
                        className="h-8"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/UCSF_Medical_Center_logo.svg"
                        alt="UCSF Health"
                        className="h-8"
                    />
                </div>
            </div>
        </div>
    )
}
export default TrustedBy
