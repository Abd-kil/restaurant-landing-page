import { useRef } from "react";

export const Rhombus = (props) => {
    props = {
        width: 10,
        fill: false,
        angle: 25,
        ...props
    }
    const background = props.fill ? '#2e918c' : 'transparent';
    const rhombus = useRef(null);
    const longRadius = rhombus.current?.getBoundingClientRect()['width'];
    return (
        <div className="rhombus" style={{
            width: `${longRadius}px`
        }}>
            <div ref={rhombus} style={{
                transform: `rotateZ(45deg) skew(${props.angle - 45}deg, ${props.angle - 45}deg)`,
                width: `${props.width}px`,
                height: `${props.width}px`,
                border: 'solid #2e918c 1.5px',
                margin: 'auto',
                background: { background }
            }}></div>
        </div>
    );
}

export const Square = (props) => {
    props = {
        width: 5,
        rotate: 0,
        fill: false,
        ...props
    }
    const background = props.fill ? '#2e918c' : 'transparent';
    return (
        <div className="square" style={{
            width: `${props.width}px`,
            height: `${props.width}px`,
            transform: `rotateZ(${props.rotate}deg)`,
            border: 'solid #2e918c 1px',
            background: { background }
        }}></div>
    )
}
export const Circle = (props) => {
    props = {
        radius: 10,
        fill: false,
        ...props,
    }
    const background = props.fill ? '#2e918c' : 'transparent';
    return (
        <div className="circle" style={{
            width: `${props.radius}px`,
            height: `${props.radius}px`,
            border: 'solid #2e918c 1px',
            borderRadius: '50%',
            background: `${background}`
        }}></div>
    )
}

export const Line = (props) => {
    props = {
        width: 1,
        long: 10,
        virtical: false,
        ...props
    }
    if (props.virtical) {
        const x = props.long;
        props.long = props.width;
        props.width = x;
    }
    return (
        <div className="line" style={{
            width: `${props.long}px`,
            height: `${props.width}px`,
            background: '#2e918c'
        }}></div>
    )
}