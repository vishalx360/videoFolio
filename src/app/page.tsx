import Image from "next/image";

import HeroImage from "@/../public/Hero.svg";
import Converter from "@/_component/Converter";
const features = [
    {
        number: 1,
        title: 'Seamless Resume Parsing',
        description: 'Upload your Resume PDF file, and let our intelligent parsing engine extract and organize key information with precision. No more manual data entry — streamline the process and save time.',
    },
    {
        number: 2,
        title: 'Dynamic Video Resumes',
        description: 'Experience the next level of resume presentation. Our platform utilizes Google PALM and other advanced technologies to dynamically showcase your skills, experience, and achievements through a personalized video resume.',
    },
    {
        number: 3,
        title: 'Tailored Content',
        description: 'Customize your video portfolio content based on the specifics of your resume. Ensure that recruiters see the most relevant and impactful details, giving you a competitive edge in the job market.',
    },
    {
        number: 4,
        title: 'Share with Ease',
        description: 'Effortlessly share your dynamic video resume portfolio with potential employers, colleagues, and across your professional network. Make a lasting impression that goes beyond the traditional paper resume.',
    },
];
const FeatureCard = (
    { number, title, description }
        :
        { number: number, title: string, description: string }
) => (
    <li className="mb-2 p-5 bg-white rounded-md shadow-md">
        <div>
            <h3 className="text-lg font-bold mb-1"> <span className="text-blue-500 font-bold mr-2">{number}.</span> {title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </li>
);
const LandingPage = () => {
    return (
        <main className="container mx-auto px-10 md:px-4 py-16">
            <div className="flex flex-col items-center justify-center min-h-screen">
                <section className="min-h-[90vh]">
                    <h1 className="text-3xl font-bold text-center mb-5">Elevate Your Resume with Dynamic Video Portfolios</h1>
                    <div className="text-lg text-gray-900 max-w-3xl">
                        <p className="text-lg text-center">Our cutting-edge software empowers you to transform your traditional resume into a dynamic video portfolio effortlessly.</p>
                    </div>
                    <Image className="mt-20 " alt="hero image" height={200} width={800} src={HeroImage}></Image>
                    <div>
                        <Converter />
                    </div>
                </section>
                <section className="flex max-w-4xl flex-col mt-16">
                    <h2 className="text-center text-2xl font-bold ">Key Features</h2>
                    <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 md:grid-flow-row gap-5">
                        {features.map((feature) => (
                            <FeatureCard
                                key={feature.number}
                                number={feature.number}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </ul>
                </section>

                <section className="flex max-w-3xl flex-col mt-16">
                    <h2 className="text-center text-2xl font-bold ">How It Works ?</h2>

                    <ol className="mt-4">
                        <li className="mb-2">
                            <span className="mr-2">1.</span> Upload Your Resume: Simply upload your Resume PDF file to get started.
                        </li>
                        <li className="mb-2">
                            <span className="mr-2">2.</span> Automatic Parsing: Our intelligent parser extracts key details, saving you time and effort.
                        </li>
                        <li className="mb-2">
                            <span className="mr-2">3.</span> Dynamic Video Creation: Watch as your resume comes to life in a dynamic video format.
                        </li>
                        <li className="mb-2">
                            <span className="mr-2">4.</span> Customize and Enhance: Tailor the content to highlight your strengths and achievements.
                        </li>
                        <li className="mb-2">
                            <span className="mr-2">5.</span> Share Your Success: Share your dynamic video resume portfolio confidently with anyone, anywhere.
                        </li>
                    </ol>
                </section>

                <section className="flex flex-col max-w-3xl mt-16">
                    <h2 className="text-center text-2xl font-bold ">Why Choose Videofolio?</h2>

                    <ul className="mt-4">
                        <li className="mb-2">
                            <span className="mr-2">1.</span> Innovative Technology: We leverage the power of Google PALM and other cutting-edge technologies to provide you with a unique and effective resume presentation.
                        </li>
                        <li className="mb-2">
                            <span className="mr-2">2.</span> Time-Efficient: Say goodbye to manual data entry and time-consuming formatting. Our platform streamlines the process, allowing you to focus on what matters most — showcasing your skills.
                        </li>
                        <li className="mb-2">
                            <span className="mr-2">3.</span> Professional Edge: Differentiate yourself in a competitive job market. A dynamic video resume portfolio adds a professional touch that captures attention and leaves a lasting impression.
                        </li>
                    </ul>
                </section>
                {/* <section className="mt-16">

                    <h2 className="text-2xl font-bold text-center">Team</h2>
                    <div className="flex  items-center gap-10">

                    </div>
                </section> */}
            </div>
        </main>
    );
};

export default LandingPage;
