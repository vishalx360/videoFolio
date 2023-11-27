import Link from 'next/link';
import React from 'react';

const TeamSection = () => {
    const teamMembers = [
        { name: 'Vishal Kumar', role: 'Project Technical Lead', responsibilities: ['Integration of Generative AI APIs.', 'Managing overall user experience.'] },
        { name: 'Shruti Mishra', role: 'Communication & Frontend Developer', responsibilities: ['Official communication with co-ordinators.', 'Frontend Development.'] },
        { name: 'Swastika Singh', role: 'Frontend Design & Documentation', responsibilities: ['Frontend Design.', 'Documentation of project progress.'] },
        { name: 'Abhishek Kumar Singh', role: 'Backend Developer', responsibilities: ['Backend development for APIs', 'Integration of FFmpeg for video processing.'] },
    ];

    return (
        <section className="mt-16">
            <h2 className="text-2xl font-bold text-center">About Team</h2>
            <div className="grid py-8 grid-cols-1 md:grid-cols-2 items-center gap-10">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col ">
                        <h3 className="text-lg font-bold">{member.name}</h3>
                        <p className="text-gray-600">{member.role}</p>
                        <ul className="text-sm text-gray-600">
                            {member.responsibilities.map((responsibility, i) => (
                                <li key={i}> - {responsibility}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <p>
                To get a more detailed overview of the project, please refer to the
                <Link target='_blank' className='ml-2 underline font-semibold' href={"/synopsis.pdf"}>Project Synopsis.</Link>
            </p>
        </section>
    );
};

export default TeamSection;
