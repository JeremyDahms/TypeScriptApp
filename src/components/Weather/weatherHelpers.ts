import clearday from '../../assets/clear-day.svg';
import cloudy from '../../assets/cloudy.svg';
import fog from '../../assets/fog.svg';
import partlycloudyday from '../../assets/partly-cloudy-day.svg';
import partlycloudynight from '../../assets/partly-cloudy-night.svg';
import rain from '../../assets/rain.svg';
import snow from '../../assets/snow.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getIcon = (icon: string): any => {
    switch (icon) {
        case 'clear-day':
            return clearday;
        case 'cloudy':
            return cloudy;
        case 'fog':
            return fog;
        case 'partly-cloudy-day':
            return partlycloudyday;
        case 'partly-cloudy-night':
            return partlycloudynight;
        case 'rain':
            return rain;
        case 'snow':
            return snow;
    }
    return null;
};
