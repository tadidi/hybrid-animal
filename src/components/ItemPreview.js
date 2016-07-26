import React, { Component } from "react";
import { DragLayer } from "react-dnd";

// To know who's animal is being drag and it's position
function collect(monitor) {
    return {
        item: monitor.getItem(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging()
    };
}
// Give back the Mouse or Touch position
function getItemStyles(currentOffset) {
    if (!currentOffset) {
        return {
            display: 'none'
        };
    }
    // http://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/
    var x = currentOffset.x;
    var y = currentOffset.y;
    var transform = `translate(${x}px, ${y}px)`;

    return {
        pointerEvents: 'none',
        transform: transform,
        WebkitTransform: transform
    };
}

class ItemPreview extends Component {
    render() {
        const { item } = this.props;
        if (!this.props.isDragging) {
            return false;
        }
        return (
            <div className="item preview" style={getItemStyles(this.props.currentOffset)}>
                <svg viewBox="-5 0 160 160" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#333333" strokeWidth="2" fill="none">
                        {item.animal.icon.map((data) =>
                                <path d={data} key={Math.random(0, 10000000)}/>
                        )}
                    </g>
                </svg>
            </div>
        );
    }
}

export default DragLayer(collect)(ItemPreview);