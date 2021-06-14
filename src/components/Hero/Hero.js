import React, {useState, useRef, useEffect} from 'react';
import { HeroSection, HeroWrapper, HeroSlide, HeroSlider, HeroImage, HeroContent, Arrow, SliderButtons, PrevArrow, NextArrow } from '../Hero/HeroElements';
import { Button } from '../Button';

const Hero = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    // useEffect(()=> {
    //     const nextSlide = () => {
    //         setCurrent(current => (current === length - 1 ? 0 : current + 1))
    //     }

    //     timeout.current = setTimeout(nextSlide, 4000);

    //     return function () {
    //         if(timeout.current) {
    //             clearTimeout(timeout.current);
    //         }
    //     }
    // },[current, length]);

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    const {title, price, path, label, image, alt} = slide;
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                    <HeroImage src={image} alt={alt}/>
                                    <HeroContent>
                                        <h1>{title}</h1>
                                        <p>{price}</p>
                                        <Button to={path} primary="true" style={{maxWidth: '180px'}}>
                                            {label}
                                            <Arrow/>
                                        </Button>
                                    </HeroContent>                               
                                </HeroSlider>
                            )}
                        </HeroSlide>
                    )
                })};
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
