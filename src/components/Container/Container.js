import React from "react";
import ImageCard from "../ImageCard"


const Container = props => {
    return (
      
            <div className="row">
                {
                    props.images.map(image => (
                <div className="col-md-4 ">
                    <ImageCard
                        key={image.key}
                        id={image.id}
                        name={image.name}
                        image={image.image}
                        onClick={props.onClick}
                        class={props.class}
                    />
                </div>
                ) )
               
                }
                
       </div>
       )

}

export default Container;