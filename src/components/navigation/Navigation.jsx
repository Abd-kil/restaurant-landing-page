import { useEffect, useState } from 'react';
import logo from '../../assets/mkani logo.svg';
import './navigation.css';
const Navigation = () => {
    const [offset, setOffset] = useState(window.pageYOffset);
    const [activeSection, setActiveSection] = useState('home');
    const [currentScroll, setCurrentScroll] = useState(window.pageYOffset + window.innerHeight / 2);
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [pageWidth, setPageWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const home = document.getElementById('home');
        const menu = document.getElementById('menu');
        const about = document.getElementById('about');
        const contact = document.getElementById('contact');

        const sections = [
            { id: 'home', offsetTop: home.offsetTop },
            { id: 'menu', offsetTop: menu.offsetTop },
            { id: 'about', offsetTop: about.offsetTop },
            { id: 'contact', offsetTop: contact.offsetTop }
        ];
        const updateActiveSection = () => {
            for (let i = sections.length - 1; i >= 0; i--) {
                if (currentScroll >= sections[i].offsetTop) {
                    setActiveSection(sections[i].id)
                    break;
                }
            }
        }
        const handleScroll = () => {
            const newOffset = window.pageYOffset;
            setCurrentScroll(newOffset + window.innerHeight / 2);
            updateActiveSection();
            if (offset > 80 && newOffset - offset > 30) {
                setIsNavVisible(false);
            }
            else if (offset - newOffset > 20) {
                setIsNavVisible(true);
            }
            setOffset(newOffset);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [offset,currentScroll]);

    useEffect(() => {
        window.onresize = () => {
            setPageWidth(window.innerWidth);
        }
    }, []);

    const toggleMenu = () => {
        isMenuOpened ? setIsMenuOpened(false) : setIsMenuOpened(true);
    }

    const anchorHandle = (e, path) => {
        e.preventDefault();
        window.scrollTo({ top: document.getElementById(path).offsetTop, behavior: 'smooth' })
    }
    useEffect(() => {
        const a = document.getElementsByTagName('a');
        for (let i = 0; i < a.length; i++) {
            if (a[i].hash.startsWith('#')) {
                a[i].addEventListener('click', e => {
                    anchorHandle(e, a[i].hash.substring(1, a[i].hash.length))
                })
            }
        }
    }, [])

    return (
        <nav
            id='navigation'
            style={
                isNavVisible || isMenuOpened ?
                    offset < 70 && pageWidth > 720 ?
                        { background: 'transparent', height: '55px' } :
                        { height: '55px' } :
                    { height: '0' }
            }
        >
            <button
                id='humberger'
                onClick={toggleMenu}
            >
                <hr />
                <hr />
                <hr />
            </button>
            <img src={logo} className='logo' alt="" width='90px' />
            <ul className={isMenuOpened ? 'open-nav' : ''}>
                <li>
                    <a href='#home' className={activeSection === 'home' ? 'active' : ''}>
                        <div className={activeSection === 'home' ? 'active-section-style' : ''}></div>
                        <span>الرئيسية</span>
                    </a>
                </li>
                <li>
                    <a href='#menu' className={activeSection === 'menu' ? 'active' : ''}>
                        <div className={activeSection === 'menu' ? 'active-section-style' : ''}></div>
                        <span>القوائم</span>
                    </a>
                </li>
                <li>
                    <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
                        <div className={activeSection === 'about' ? 'active-section-style' : ''}></div>
                        <span>عنا</span>
                    </a>
                </li>
                <li>
                    <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
                        <div className={activeSection === 'contact' ? 'active-section-style' : ''}></div>
                        <span>تواصل</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;