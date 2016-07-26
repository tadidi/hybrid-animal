import React, { Component} from 'react'
import { DragSource } from 'react-dnd'

// DragSource, one animal object with 5 keys
const animalsSource = {
    beginDrag(props) {
        return {
            animal: props.animal
        }
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
        connectDragPreview: connect.dragPreview()
    }
}

// Animal icon component rendered in SVG
class Animal extends Component {
    componentDidMount() {
        // On desktop, replace ghost image from drag preview
        // by a transparent one. Without this we have two drag previews
        // because of the support for the Touch where we create one.
        const { connectDragPreview } = this.props;
        const img = new Image();
        img.src = '../img/transparent.gif';
        img.onload = () => connectDragPreview(img)
    }

    render() {
        const {animal, connectDragSource} = this.props;
        return (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 ">
                {
                    connectDragSource(
                        <div>
                            <svg className="animal" viewBox="-5 0 160 160" xmlns="http://www.w3.org/2000/svg">
                                <title>{animal.name}</title>
                                <g stroke="#333333" strokeWidth="2" fill="none">
                                    {animal.icon.map((data) =>
                                            <path d={data} key={Math.random(0, 10000000)}/>
                                    )}
                                </g>
                            </svg>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default DragSource('animal', animalsSource, collect)(Animal)
