import { useState } from 'react';
const HornedBeast = (props) => {
  const { title, imageUrl, description, horns } = props;
  
  const [favourite, setFavourite] = useState(0);

  const handleClickImage = () => {
    setFavourite(favourite + 1);
  };
  
  
  return (
    <div className="horned-beast">
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} title={title} onClick={handleClickImage} />
      <p className="horned-beast-description">{description}</p>
      <p>Horns: {horns}</p>
      <p>Favourites: {favourite}⭐️ </p>
    </div>
  );
};

export default HornedBeast;
