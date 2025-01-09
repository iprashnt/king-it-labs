import React, { FC } from "react";

const MainHeading: FC<Props> = ({ className, text }) => {
    return <p className={`${className} xl:text-[4rem] lg:text-[4rem] md:text-[3rem] text-[1.7rem] font-[500] my-[2.5rem] text-white`}>{text}</p>;
};

export default MainHeading;

// TYPES
interface Props {
    className?: React.HTMLAttributes<HTMLParagraphElement> | string;
    text: string;
}
