import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ContactCard = ({ text, number }) => {
    return (
        <div className="w-full p-4">
            <div className="flex flex-col items-center gap-4 w-full">
                <div className="h-full w-1/2 flex">
                    <Card
                        title="Darsh Shah (CP)"
                        subtitle="+91 97699 39040"
                        Icon={FiUser}
                    />
                </div>
                <div className="h-full w-full flex items-center gap-4">
                    <Card
                        title="Hrim Doshi (VCP)"
                        subtitle="+91 73038 21905"
                        Icon={FiUser}
                    />
                    <Card
                        title="Prathamesh Paradkar (VCP)"
                        subtitle="+91 86938 73153"
                        Icon={FiUser}
                    />
                </div>
                <div className="h-full w-full flex items-center gap-4">
                    <Card
                        title="Sejal Patil (VCP)"
                        subtitle="+91 96075 31374"
                        Icon={FiUser}
                    />
                    <Card
                        title="Nishant Chandeliya (VCP)"
                        subtitle="+91 98673 37208"
                        Icon={FiUser}
                    />
                </div>
            </div>
        </div>
    );
};

const Card = ({ title, subtitle, Icon }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000); // Revert after 1 second
    };

    return (
        <div
            className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white cursor-pointer"
            onClick={() => copyToClipboard(subtitle.replace(/\s/g, ''))}
        >
            <div className={`absolute inset-0 bg-gradient-to-r ${copied ? "from-green-500 to-green-800" : "from-primary-purple to-[#61269E]"} translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300`} />

            <Icon className={`absolute z-10 -top-12 -right-12 text-9xl text-slate-100 ${copied ? "group-hover:text-green-300" : "group-hover:text-secondary-purple"} group-hover:rotate-12 transition-transform duration-300`} />
            {!copied ?
                (<Icon className="mb-2 text-2xl text-primary-purple group-hover:text-white transition-colors relative z-10 duration-300" />)
                :
                (<CheckCircleIcon className="mb-2 text-2xl text-green-600 group-hover:text-white transition-colors relative z-10 duration-300" />)
            }
            {copied ?
                (
                    <>
                        <h3 className="font-medium text-lg text-green-600 group-hover:text-white relative z-10 duration-300">
                            Phone Number Copied!
                        </h3>
                        <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300 opacity-0">
                            {subtitle}
                        </p>
                    </>
                )
                :
                (<>
                    <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
                        {title}
                    </h3>
                    <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
                        {subtitle}
                    </p>
                </>)}
        </div>
    );
};

export default ContactCard;
