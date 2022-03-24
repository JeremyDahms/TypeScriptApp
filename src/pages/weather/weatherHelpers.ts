import clearday from '../../assets/clear-day.svg';
import cloudy from '../../assets/cloudy.svg';
import fog from '../../assets/fog.svg';
import partlycloudyday from '../../assets/partly-cloudy-day.svg';
import partlycloudynight from '../../assets/partly-cloudy-night.svg';
import rain from '../../assets/rain.svg';
import snow from '../../assets/snow.svg';

const daysOfTheWeek = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
};

export const getDayOfWeek = (dayOffset: number): string => {
    if (dayOffset === 0) return 'TODAY';
    const dayOfTheWeek = new Date().getDay();
    let day = dayOfTheWeek + dayOffset;
    if (day > 6) day -= 7;
    switch (day) {
        case daysOfTheWeek.SUNDAY:
            return 'Sunday';
        case daysOfTheWeek.MONDAY:
            return 'Monday';
        case daysOfTheWeek.TUESDAY:
            return 'Tuesday';
        case daysOfTheWeek.WEDNESDAY:
            return 'Wednesday';
        case daysOfTheWeek.THURSDAY:
            return 'Thursday';
        case daysOfTheWeek.FRIDAY:
            return 'Friday';
        case daysOfTheWeek.SATURDAY:
            return 'Saturday';
    }
};

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
