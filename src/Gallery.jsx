import HornedBeast from './HornedBeast';

const Gallery = () => {
  const hornedBeasts = [
    {
      title: 'Minotaurus',
      imageUrl: '/src/imgs/hornedbeast1.jpg',
      description: 'The Minotaurus, a mythical creature, features the fierce combination of a bull and a human, with a maze of intricate horns adorning its head. As a symbol of strength and mystery, the Minotaurus embodies the enigmatic and powerful forces of ancient legend.',
    },
    {
      title: 'Beastiarus Maximus',
      imageUrl: '/src/imgs/hornedbeast2.jpg',
      description: 'Beastiarus Maximus, a formidable being, boasts a remarkable array of horns, evoking both elegance and strength. Its imposing appearance and captivating allure make it a majestic figure, signifying the grandeur of the natural world.',
    },
    {
      title: 'Shadowhorn, the Cursed Equine',
      imageUrl: '/src/imgs/hornedbeast3.jpg',
      description: 'Shadowhorn is a mythical, eerie creature, a cursed unicorn with an aura of darkness and foreboding. Its ebony coat shimmers with an unsettling spectral glow, and its single horn is twisted and malevolent. A symbol of enchantment gone awry, it embodies the eerie beauty of the supernatural.'
    }
  ];

  return (
    <div className="gallery">
      {hornedBeasts.map((beast, index) => (
        <HornedBeast
          key={index}
          title={beast.title}
          imageUrl={beast.imageUrl}
          description={beast.description}
        />
      ))}
    </div>
  );
};

export default Gallery;
