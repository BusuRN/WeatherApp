const getCityBackgroundImage = (city: string) => {
    const formatted = city.trim().toLowerCase();

    switch (formatted) {
      case 'bucuresti':
        return require('../assets/citiesBackround/bucuresti.jpg');
      case 'brasov':
        return require('../assets/citiesBackround/brasov.jpg');
      case 'cluj':
      case 'cluj-napoca':
        return require('../assets/citiesBackround/cluj.jpg');
      case 'craiova':
        return require('../assets/citiesBackround/craiova.jpg');
      case 'timisoara':
        return require('../assets/citiesBackround/timisoara.jpg');
      default:
        return null;
    }
  };

  export default getCityBackgroundImage;
