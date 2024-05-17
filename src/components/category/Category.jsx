import './category.css';
import styleImage from './style.svg';
const Category = (props) => {
    return (
        <div className="category">
            <img src={styleImage} alt="" height='17px' width='80px' className='style-image'/>
            <div style={{ height: 200, overflow: 'hidden' }} className='image-container'>
                <img src={props.image} alt="" width='170px' height='200px' style={{ objectFit: 'cover' }} />
            </div>
            <img src={styleImage} alt="" height='17px' width='80px' className='style-image' />
            <h3>{props.category}</h3>
            <button onClick={props.onClick}>
                تصفح القائمة
                <hr />
                <hr />
            </button>
        </div>
    );
}
export default Category;