// IMAGES
import ApplicationSupportBanner from "../../assets/images/application_support_banner.png";

const ApplicationSupportCard = () => {
    return (
        <div className="bg-[#202020] border-[1px] border-[#808080] p-[2rem] rounded-md mt-[3rem]">
            <p className="text-white text-[3rem] font-extralight text-center">Application Support</p>
            <div className="w-full flex justify-center items-center mt-[1.5rem]">
                <img src={ApplicationSupportBanner} className=" w-full" />
            </div>
            <div>
                <div>
                    <p className="font-bold text-white text-[1.5rem] mt-[1rem] mb-[0.5rem]">24/7 Monitoring and Support</p>
                    <div className="ml-10">
                        <p className="text-white font-medium">
                            <span className="text-lg">a. </span>Proactive Monitoring
                        </p>
                        <p className="ml-4 font-extralight text-white">Continuous monitoring to ensure application uptime and optimal performance.</p>
                    </div>
                    <div className="ml-10">
                        <p className="text-white font-medium">
                            <span className="text-lg">b. </span>Rapid Incident Resolution
                        </p>
                        <p className="ml-4 font-extralight text-white">
                            Expert incident management for quick identification and resolution of issues.
                        </p>
                    </div>
                    <div className="ml-10">
                        <p className="text-white font-medium">
                            <span className="text-lg">b. </span>Seamless Team Integration
                        </p>
                        <p className="ml-4 font-extralight text-white">
                            Collaboration with your internal teams to deliver a seamless support experience.
                        </p>
                    </div>
                </div>

                <div>
                    <p className="font-bold text-white text-[1.5rem] mt-[1rem] mb-[0.5rem]">AWS Cloud Infrastructure </p>

                    <div>
                        <p className="ml-3 text-white font-medium text-lg mb-3">
                            <span>1. </span>Infrastructure Design & Deployment:
                        </p>
                        <div className="ml-9">
                            <p className="text-white font-medium">
                                <span className="text-lg">a. </span>Tailored Cloud Architecture
                            </p>
                            <p className="ml-4 font-extralight text-white">Solutions designed to meet specific business objectives.</p>
                        </div>
                        <div className="ml-9">
                            <p className="text-white font-medium">
                                <span className="text-lg">b. </span>Scalable and Resilient Infrastructure
                            </p>
                            <p className="ml-4 font-extralight text-white">
                                Leveraging AWS services for high availability, performance, and security.
                            </p>
                        </div>
                        <div className="ml-9">
                            <p className="text-white font-medium">
                                <span className="text-lg">b. </span>Comprehensive Best Practices
                            </p>
                            <p className="ml-4 font-extralight text-white">Detailed documentation for smooth implementation and management.</p>
                        </div>
                    </div>

                    <div className="mt-2">
                        <p className="ml-3 text-white font-medium text-lg mb-3">
                            <span>2. </span>Hosting and Management:
                        </p>
                        <div className="ml-9">
                            <p className="text-white font-medium">
                                <span className="text-lg">a. </span>Effortless Deployment
                            </p>
                            <p className="ml-4 font-extralight text-white">Simplified hosting processes to quickly launch and manage applications.</p>
                        </div>
                        <div className="ml-9">
                            <p className="text-white font-medium">
                                <span className="text-lg">b. </span>Automated Scaling
                            </p>
                            <p className="ml-4 font-extralight text-white">Intelligent scaling solutions to adapt to your workload needs.</p>
                        </div>
                        <div className="ml-9">
                            <p className="text-white font-medium">
                                <span className="text-lg">b. </span>Continuous Maintenance
                            </p>
                            <p className="ml-4 font-extralight text-white">
                                Regular updates, security patches, and optimizations to ensure system health.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationSupportCard;
