import './about.css';
import facebook from '../../assets/socialMedia/facebook.svg';
import instagram from '../../assets/socialMedia/instagram.svg';
import X from '../../assets/socialMedia/X.svg';
import StyledHeader from '../../components/styled-header/StyledHeader';
const About = () => {
    return (
        <section id="about">
            <StyledHeader text="لـمـحـة عـنـا" />
            <div className='container'>
                <img src={require('../../assets/mkani-3.jpg')} alt="" />
                <div>
                    <p>
                        مرحبًا بكم في مطعم ومقهى "مكاني"،
                        الوجهة المثالية لمحبي الطعام الفاخر والأجواء الدافئة.
                        نقدم لكم مجموعة متنوعة من الأطباق الشهية المحضرة بعناية باستخدام أجود المكونات الطازجة.
                        سواء كنت تبحث عن وجبة فطور لذيذة، غداء مشبع، أو عشاء راقٍ، ستجد في "مكاني" كل ما يرضي ذوقك.
                        لا تنسَ تجربة حلوياتنا الفاخرة وقهوتنا المختصة التي تحضر بكل حب وإتقان.
                        اجعل "مكاني" مكانك المفضل للاجتماعات، اللقاءات العائلية، أو حتى للاستمتاع بوقت هادئ مع نفسك.
                        نعدكم بتجربة طعام لا تُنسى، حيث يجتمع الطعم الأصيل مع الخدمة الرفيعة.
                        أهلاً وسهلاً بكم في "مكاني"!
                    </p>
                    <div className="social-media">
                        <a href='facebook.com'>
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a href='instagram.com'>
                            <img src={instagram} alt="" />
                        </a>
                        <a href='x.com'>
                            <img src={X} alt="X" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;