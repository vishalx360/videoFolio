import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Mdx } from './mdx';
import { FaAlignRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function Preview({ slides }: { slides: Record<string, any> }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <div className=''>
            <div className='flex gap-5 items-start'>
                <div className='flex-1'>
                    <div className='flex flex-col text-ellipsis '>
                        {slides.map((slide: Record<string, any>, index: number) => (
                            <Button key={index} onClick={() => { setCurrentSlide(index) }} variant={currentSlide === index ? "default" : "outline"} className={"w-full"}>{index + 1}. {slide.title}</Button>
                        ))}
                    </div>
                </div>
                <div id="slide" className='relative bg-[url("/slide-bg.jpg")] bg-no-repeat bg-cover aspect-video w-[960px] flex-2 p-8 border-2 border-blue-100 rounded-sm'>
                    <Mdx key={slides[currentSlide].title} code={slides[currentSlide].content} />
                    <div className='bg-black/10 px-2 py-1 rounded-xl text-sm absolute bottom-2'>
                        <Button onClick={() => {
                            setCurrentSlide(prev => {
                                if (prev === 0) return prev;
                                return prev - 1;
                            })
                        }} size="sm" className='p-0 px-2' variant="ghost"> <FaAngleLeft /> </Button>
                        {currentSlide + 1} of {slides.length}
                        <Button onClick={() => {
                            setCurrentSlide(prev => {
                                if (prev === slides.length - 1) return prev;
                                return prev + 1;
                            })
                        }}
                            size="sm" className='p-0 px-2' variant="ghost"> <FaAngleRight /> </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Preview