import { useRef } from "react";
import { Circle, Line, Rhombus, Square } from "../Shapes";
import './styled-header.css';
const StyledHeader = (props) => {
    const text = useRef(null);
    const textWidth = text.current?.getBoundingClientRect()['width'];
    return (
        <div id="styled-header">
            <h5 ref={text}>
                {props.text}
            </h5>
            <div>
                <Circle radius={5} fill />
                <Line long={textWidth / 2}/>
                <Square rotate={45} />
                <Rhombus />
                <Square rotate={45} />
                <Line long={textWidth / 2}/>
                <Circle radius={5} fill />
            </div>
        </div>
    )
}
export default StyledHeader;