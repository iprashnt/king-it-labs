// IMAGES
import HostingSupportBanner from "../../assets/images/hosting_support_banner.png";

const HostingSupportCard = () => {
    return (
        <div className="bg-[#202020] border-[1px] border-[#808080] p-[2rem] rounded-md mt-[3rem]">
            <p className="text-white text-[3rem] font-extralight text-center">Hosting Cost Analysis & Management</p>
            <div className="w-full flex justify-center items-center mt-[1.5rem]">
                <img src={HostingSupportBanner} className=" w-full" />
            </div>
            <div>
                <div>
                    <p className="font-bold text-white text-[1.5rem] mt-[1rem] mb-[0.5rem]">Cost Analysis</p>
                    <div className="ml-10">
                        <p className="text-white font-medium">
                            <span className="text-lg">a. </span>Transparent Evaluation
                        </p>
                        <p className="ml-4 font-extralight text-white">
                            Detailed assessment of current hosting costs to identify savings opportunities.
                        </p>
                    </div>
                    <div className="ml-10">
                        <p className="text-white font-medium">
                            <span className="text-lg">b. </span>Optimized Recommendations
                        </p>
                        <p className="ml-4 font-extralight text-white">Cost-effective solutions tailored to your performance and business goals.</p>
                    </div>
                </div>

                <div>
                    <p className="font-bold text-white text-[1.5rem] mt-[1rem] mb-[0.5rem]">Cost Management</p>
                    <div className="ml-10">
                        <p className="text-white font-medium">
                            <span className="text-lg">a. </span>Real-Time Billing Insights
                        </p>
                        <p className="ml-4 font-extralight text-white">Proactive tracking of AWS billing to avoid unexpected expenses.</p>
                    </div>
                    <div className="ml-10">
                        <p className="text-white font-medium">
                            <span className="text-lg">b. </span>Cost Optimization
                        </p>
                        <p className="ml-4 font-extralight text-white">
                            Implementation of rightsizing, Savings Plans, and Reserved Instances for sustainable savings.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HostingSupportCard;
