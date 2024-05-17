import './meal.css';
const Meal = (props) => {
    return (
        <div className="meal">
            <div className="image-container">
                <img src={props.image} alt="" width='80px' height='80px' />
            </div>
            <div className="text-container">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
export default Meal;