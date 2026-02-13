import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeatureCards = () => {
    return (
        <section className="w-full py-32 px-4 flex flex-col items-center justify-center bg-background relative z-20 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-6xl font-zilla font-bold text-foreground mb-6">
                    Creation Station
                </h2>
                <p className="text-[#7EACB5] font-mono text-sm tracking-[0.2em] uppercase font-bold">
                    Select a tool to begin
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full">
                <Card
                    title="Captions"
                    description="Craft engaging social media captions with AI assistance."
                    to="/captions"
                    windowColor="bg-[#F28B82]" // Retro Coral/Red
                    delay={0.1}
                />
                <Card
                    title="Letters"
                    description="Generate professional letters for any occasion instantly."
                    to="/letters"
                    windowColor="bg-[#81C995]" // Retro Green
                    delay={0.2}
                />
                <Card
                    title="MoM"
                    description="Record and summarize minutes of meetings automatically."
                    to="/mom"
                    windowColor="bg-[#A7C7E7]" // Retro Blue
                    delay={0.3}
                />
            </div>
        </section>
    );
};

interface CardProps {
    title: string;
    description: string;
    to: string;
    windowColor: string;
    delay: number;
    disabled?: boolean;
}

const Card = ({ title, description, to, windowColor, delay, disabled }: CardProps) => {

    const handleClick = () => {
        if (!disabled) {
            window.scrollTo(0, 0);
        }
    };

    const Content = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.4 }}
            className={`relative h-[400px] w-full bg-white border-2 border-[#7EACB5] rounded-xl overflow-hidden flex flex-col group transition-all duration-300 shadow-[4px_4px_0px_0px_#7EACB5] hover:shadow-[8px_8px_0px_0px_#7EACB5] ${disabled ? "opacity-50 grayscale cursor-not-allowed" : "cursor-pointer"}`}
        >
            {/* Window Header */}
            <div className={`h-12 w-full border-b-2 border-[#7EACB5] flex items-center px-4 justify-between bg-white`}>
                <span className="font-mono text-sm font-bold text-[#7EACB5] truncate max-w-[150px]">{title}.exe</span>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full border border-[#7EACB5] bg-[#F28B82]"></div>
                    <div className="w-3 h-3 rounded-full border border-[#7EACB5] bg-[#FDD663]"></div>
                    <div className="w-3 h-3 rounded-full border border-[#7EACB5] bg-[#81C995]"></div>
                </div>
            </div>

            {/* Window Content */}
            <div className="flex-1 p-8 flex flex-col justify-center items-center bg-[#FFFdf9]">
                {/* Retro Icon Placeholder */}
                <div className={`w-20 h-20 rounded-full border-2 border-[#7EACB5] mb-6 flex items-center justify-center ${windowColor} bg-opacity-30`}>
                    <div className={`w-12 h-12 rounded-full ${windowColor} border border-[#7EACB5]`} />
                </div>

                <h3 className="text-3xl font-zilla font-bold text-gray-800 mb-4 text-center">
                    {title}
                </h3>
                <p className="text-gray-600 font-zilla text-lg leading-relaxed text-center px-4">
                    {description}
                </p>

                {/* Button-like visual at bottom */}
                <div className="mt-8 px-6 py-2 bg-[#EDDCC6] text-slate-800 font-mono text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#7EACB5] font-bold">
                    OPEN PROGRAM
                </div>
            </div>
        </motion.div>
    );

    if (disabled) {
        return (
            <div className="w-full">
                {Content}
            </div>
        );
    }

    return (
        <Link to={to} onClick={handleClick} className="w-full block no-underline focus:outline-none">
            {Content}
        </Link>
    );
};

export default FeatureCards;
