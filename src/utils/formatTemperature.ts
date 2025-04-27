const formatTemperature = (temp?: number): string => {
    if (typeof temp !== 'number') {
        return '--';
    }
    return `${temp.toFixed(1)}°C`;
};

export default formatTemperature;
