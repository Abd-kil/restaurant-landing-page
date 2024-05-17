import { useEffect, useRef, useState } from 'react';
import './home.css';
import StyledHeader from '../../components/styled-header/StyledHeader';
const Home = () => {
    const slides = [
        {
            header: 'أشـهى الوجـبات',
            title: 'أطيب أكل ، أفضل خدمة',
            subtitle: '',
            image: require('../../assets/mkani.jpg')
        },
        {
            header: 'تجـربـة فـريـدة',
            title: 'فطور مكاني المميز',
            subtitle: 'فطور ملكي بامتياز',
            image: require('../../assets/mkani-breakfast.jpg')
        },
        {
            header: 'خدمات راقية',
            title: 'لقمة شهية ، وكرم ودلال',
            subtitle: '',
            image: require('../../assets/mkani-2.jpg')
        },
        {
            header: 'مشـروبات منعشـة',
            title: 'للقهوة عشاق ..',
            subtitle: 'يحبون الفن في تقديمها',
            image: require('../../assets/mkani-coffee.jpg')
        }

    ];
    const [currentSlide, setCurrentSlide] = useState(null);
    useEffect(() => {
        setCurrentSlide(0);
    }, [])
    const scrollSlide = (direction) => {
        if (direction === 'left')
            setCurrentSlide((currentSlide + 1) % slides.length);
        else if (direction === 'right')
            setCurrentSlide((slides.length + currentSlide - 1) % slides.length);
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            scrollSlide('left');
        }, 6000);
        return () => clearTimeout(timeout);
    }, [currentSlide])

    /*--- animations & styles ---*/
    const slider = {
        transform: `translateX(${currentSlide * 100}%)`
    }

    const scaler = {
        transform: 'scale(1.1)',
        transition: 'transform 6s',
        transitionDelay: '1s'
    }

    const slideTextContainer = useRef(null);
    const removeSlideTextContainer = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            for (let i = 0; i < slideTextContainer.current.children.length; i++) {
                setTimeout(() => {
                    slideTextContainer.current.children[i].style.transform = 'translateY(0)';
                    slideTextContainer.current.children[i].style.opacity = '1';
                    slideTextContainer.current.children[i].style.transition = 'transform 1s';
                }, 500 + i * 500);
            }
            for (let i = 0; i < removeSlideTextContainer.current?.children.length; i++) {
                setTimeout(() => {
                    removeSlideTextContainer.current.children[i].style.transform = 'translateY(30px)';
                    removeSlideTextContainer.current.children[i].style.opacity = '0';
                    removeSlideTextContainer.current.children[i].style.transition = 'transform 0';
                }, 500 + i * 500);
            }
        }, 300)
    }, [currentSlide]);

    return (
        <section id="home">
            <button
                className='slide-scroller-right hover-style'
                onClick={() => scrollSlide('right')}
            >
                <span>&rarr;</span>
            </button>
            {
                slides.map((slide, index) => (
                    <div
                        className={'slide'}
                        style={slider}
                        key={index}
                    >
                        <img src='' alt=""
                            style={
                                index === currentSlide ? Object.assign(scaler, {
                                    backgroundImage: `url(${slide.image})`
                                }) :
                                    {
                                        backgroundImage: `url(${slide.image})`,
                                    }}
                        />
                        <div
                            className='slide-text-container'
                            ref={index === currentSlide ? slideTextContainer : removeSlideTextContainer}
                        >
                            <StyledHeader text={slide.header} />
                            <h1>{slide.title}</h1>
                            <p>{slide.subtitle}</p>
                            <a href='#menu' className='hover-style'>تصفح القوائم</a>
                        </div>
                    </div>
                ))
            }
            <button
                className='slide-scroller-left hover-style'
                onClick={() => scrollSlide('left')}
            >
                <span>&larr;</span>
            </button>
        </section>
    )
}
export default Home;