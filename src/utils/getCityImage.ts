const getCityImage = (city: string) => {
    const formatted = city.trim().toLowerCase();

    switch (formatted) {
      case 'brasov':
        return require('../assets/CityImages/brasov.jpg');
      case 'cluj-napoca':
        return require('../assets/CityImages/cluj-napoca.jpg');
      default:
        return require('../assets/background.jpg'); // fallback image
    }
  };

  export default getCityImage;
