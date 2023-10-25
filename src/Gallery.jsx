import {useState} from 'react'
import HornedBeast from './HornedBeast'

const Gallery = ({ data }) => {

  return (
    <div className="gallery">
      {data.map((beast) => (
        <HornedBeast
          key={beast._id}
          id={beast._id}
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
        />
      ))}
    </div>
  );
};

export default Gallery;
