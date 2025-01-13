// IMAGES
import FormBGLeftImage from "../../assets/images/form_bg_left.png";
import FormBGRightImage from "../../assets/images/form_bg_right.png";

// COMPONENTS
import Dropdown from "../Inputs/Dropdown";
import TextBox from "../Inputs/InputBox";
import TextArea from "../Inputs/TextArea";

const FormSection = () => {
    return (
        <div className="w-full relative mt-[10rem] flex justify-center items-center mb-20">
            <img src={FormBGLeftImage} className="absolute top-0 left-0 mt-[10rem]" />
            <div className="z-10 w-full xl:px-[8rem] lg:px-[4rem] md:px-[3rem] px-[1rem]">
                <div className="bg-[#202020] p-[2rem] rounded-lg border-[1px] border-[#808080]">
                    <div className="mb-[1.5rem]">
                        <p className="text-white font-medium text-[2rem] mb-[1rem]">Let’s Turn Your Ideas Into Reality</p>
                        <p className="text-[#EAEAEA] text-[1.125rem] font-extralight">
                            Share your project details — goals, challenges, and timelines with us and let’s craft the perfect solution together. We’ll
                            respond within 24 hours. NDA? We’ll sign it and start the discussion.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-[1rem]">
                        <div className="col-span-2 flex flex-col gap-[0.5rem] mb-[1.25rem]">
                            <TextArea placeholder="Type your message here" title="Describe Your Idea" />
                            <p className="text-sm text-[#A5A5A5]">Tell us more about your project, goals, or challenges.</p>
                        </div>
                        <TextBox
                            type="text"
                            placeholder="Name"
                            title="Name"
                            className="mb-[1.25rem] xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2"
                        />
                        <TextBox
                            type="tel"
                            placeholder="+1 123 456 7890"
                            title="Phone Number"
                            className="mb-[1.25rem] xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2"
                        />
                        <TextBox
                            type="email"
                            placeholder="name@office.com"
                            title="Email"
                            className="mb-[1.25rem] xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2"
                        />
                        <TextBox
                            type="text"
                            placeholder="@username"
                            title="Telegram"
                            className="mb-[1.25rem] xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2"
                        />

                        <Dropdown
                            title="What’s your budget range?"
                            optionList={[]}
                            className="mb-[1.25rem] xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2"
                        />
                        <Dropdown
                            title="How did you hear about us?"
                            optionList={[]}
                            className="xl:col-span-1 lg:col-span-1 md:col-span-2 col-span-2"
                        />

                        <div className="w-full flex justify-end col-span-2">
                            <button className="bg-white text-black font-medium text-[1.125rem] rounded-lg w-fit py-[0.5rem] px-[4rem] mt-[4rem]">
                                Enquire POC
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <img src={FormBGRightImage} className="absolute right-0 bottom-0 mb-[5rem]" />
        </div>
    );
};

export default FormSection;
