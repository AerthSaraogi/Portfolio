import React from 'react'
import Globe from 'react-globe.gl';
import Button from '../component/Button';
import { useState } from 'react';


const About = () => {
    const [copy, setCopy] = useState(false)
    const handelCopy =()=>{
        navigator.clipboard.writeText('aerthsaraogi9@gmail.com');
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 2000);
        
    }

  return (
    <section className='c-space my-20' id="about">
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-col-1 gap-5 h-full '>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container xl:gap-10'>
                    <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit xl:h-[350px] object-contain' />
                    <div>
                        <p className='grid-headtext xl:text-3xl'>
                            Hi,I'm Aerth
                        </p>
                        <p className='grid-subtext xl:text-xl'>
                        I'm a Computer Science student at MIT World Peace University with a strong foundation in Java and full-stack development. I build scalable web applications and constantly explore new technologies to enhance my skills.
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[266px] xl:h-[370px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext xl:text-3xl'>
                            Tech Stack
                        </p>
                        <p className='grid-subtext xl:text-xl'>
                        I specialize in Java and full-stack development, with expertise in JavaScript and TypeScript. My primary focus is on React for frontend development and Node.js for backend development. 
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                <div className="rounded-3xl w-full sm:h-[326px] xl:h-[535px] h-fit flex justify-center items-center">
                    <Globe
                        height={426}
                        width={426}
                        backgroundColor="rgba(0, 0, 0, 0)"
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        
                    />
                </div>
                    <div>
                        <p className='grid-headtext xl:text-3xl' >
                            I'm very flexible with time zone communication & locations
                        </p>
                        <p className='grid-subtext xl:text-xl'>
                            I'm based in India, Pune and open to remote work worldwide 
                        </p>
                        <Button name='Contact Me' isBeam containerClass="w-full mt-10 "></Button>
                    </div>
                </div>
            </div>
            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[260px] xl:h-[350px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext xl:text-3xl'>
                        Internship Experience
                        </p>
                        <p className='grid-subtext xl:text-xl'>
                        I am currently working as an Intern at JISA Soft Tech, where I am gaining hands-on experience in software development. This internship allows me to enhance my technical skills, collaborate with industry professionals, and work on real-world projects. Through this opportunity, I am improving my expertise in React, unit testing, and software development best practices, preparing me for a strong career in the tech industry.
                        </p>
                    </div>
                </div>
            </div>
            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <img src="/assets/grid4.png" alt="grid-4" className='w-full sm:h-[266px] h-fit object-cover sm:object-top' />
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center xl:text-3xl'>
                          Contact Me
                        </p>
                        <div className='copy-container' onClick={handelCopy}>
                            <img src={copy?"assets/tick.svg":"assets/copy.svg"} alt="copy" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white xl:text-xl">aerthsaraogi9@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About