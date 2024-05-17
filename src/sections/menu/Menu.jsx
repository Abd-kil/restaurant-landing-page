import Category from '../../components/category/Category';
import Meal from '../../components/meal/Meal';
import StyledHeader from '../../components/styled-header/StyledHeader';
import './menu.css';
import { useEffect, useRef, useState } from 'react';

const Menu = () => {
    const mainMeal = [
        {
            name: 'كباب',
            image: require('../../assets/mkani-2.jpg'),
            description: 'كباب مشوي مع مقبلات'
        },
        {
            name: 'كباب',
            image: require('../../assets/mkani-2.jpg'),
            description: 'كباب مشوي مع مقبلات'
        },
        {
            name: 'كباب',
            image: require('../../assets/mkani-2.jpg'),
            description: 'كباب مشوي مع مقبلات'
        },
        {
            name: 'كباب',
            image: require('../../assets/mkani-2.jpg'),
            description: 'كباب مشوي مع مقبلات'
        },
        {
            name: 'كباب',
            image: require('../../assets/mkani-2.jpg'),
            description: 'كباب مشوي مع مقبلات'
        },
    ];
    const breakfast = [
        {
            name: 'كباب',
            image: require('../../assets/mkani-2.jpg'),
            description: 'كباب مشوي مع مقبلات'
        },
        {
            name: 'كباب',
            image: require('../../assets/mkani-2.jpg'),
            description: 'كباب مشوي مع مقبلات'
        },
        {
            name: 'كباب',
            image: require('../../assets/mkani-2.jpg'),
            description: 'كباب مشوي مع مقبلات'
        },
    ];
    const drinks = [
        {
            name: 'كباب',
            image: require('../../assets/mkani-2.jpg'),
            description: 'كباب مشوي مع مقبلات'
        },
        {
            name: 'كباب',
            image: require('../../assets/mkani-2.jpg'),
            description: 'كباب مشوي مع مقبلات'
        },
        {
            name: 'كباب',
            image: require('../../assets/mkani-2.jpg'),
            description: 'كباب مشوي مع مقبلات'
        },
    ];
    const [currentMenu, setCurrentMenu] = useState([]);
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const menu = useRef(null);
    const openMealMenu = (m)=>{
        setIsMenuOpened(true);
        setCurrentMenu(m);
        setTimeout(() => {
            menu.current.style.overflow = 'auto';
        }, 400);
        window.location.hash = '#open-menu';
    }
    const closeMealMenu = ()=>{
        setCurrentMenu([]);
        setIsMenuOpened(false);
        menu.current.style.overflow = 'hidden';
        if(window.location.hash === '#open-menu')window.history.back();
    }
    useEffect(()=>{
        document.documentElement.style.overflow = isMenuOpened?'hidden':'auto';
    },[isMenuOpened])

    // this for closing menu when clicking back button on mobile 
    useEffect(()=>{
        const handleBackButton = e=>{
            if(isMenuOpened && window.location.hash !== '#open-menu'){
                closeMealMenu();
            }
        }
        window.addEventListener('popstate',handleBackButton);
        return()=> window.removeEventListener('popstate',handleBackButton);
    },[isMenuOpened])
    return (
        <>
            <div ref={menu} id={isMenuOpened?'open-menu':'close-menu'}>
                <button id='closing-button' onClick={() => closeMealMenu()}>×</button>
                <div className='meals-container'>
                {
                    currentMenu.map((meal, index) => (
                        <Meal name={meal.name} image={meal.image} description={meal.description} key={index}/>
                    ))
                }
                </div>
            </div>
            <section id="menu">
                <StyledHeader text="نكهات الملوك" />
                <div className="text-container">
                    <h2>استمتع بتجربة مكاني الفريدة</h2>
                    <p>
                        حيث يلتقي الطعم الرفيع بالأجواء المريحة .  <br />
                        تذوق مجموعة متنوعة من الأطباق الشهية المعدة بعناية ، واستمتع بقهوة لذيذة وحلوى فاخرة . 
                        اكتشف الطعم الحقيقي للتميز في مكاني اليوم.
                    </p>
                </div>
                <div className="categories-container">
                    <Category
                        category="الوجبات الرئيسية"
                        image={require('../../assets/mkani-2.jpg')}
                        onClick={() => openMealMenu(mainMeal)}
                    />
                    <Category
                        category="وجبات الفطور"
                        image={require('../../assets/mkani-breakfast.jpg')}
                        onClick={() => openMealMenu(breakfast)}
                    />
                    <Category
                        category="المشروبات"
                        image={require('../../assets/mkani-coffee.jpg')}
                        onClick={() => openMealMenu(drinks)}
                    />
                </div>
            </section>
            <section className="special-menu">
                <StyledHeader text='الأكثر طلباً'/>
                <h1>أطباق مميزة</h1>
                <div className="meals-container">
                {
                    mainMeal.map((meal, index) => (
                        <Meal name={meal.name} image={meal.image} description={meal.description} key={index}/>
                    ))
                }
                </div>
                <a href='#menu' className='hover-style'>تصفح جميع القوائم</a>
            </section>
        </>
    );
}
export default Menu;