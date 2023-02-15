export const navLinks = [
  { id: 1, title: 'Home', link: '/', end: true }, 
  { id: 2, title: 'Red', link: '/red' }, 
  { id: 3, title: 'Yellow', link: '/yellow' }, 
  { id: 4, title: 'Green', link: '/green' }, 
];

export const LIGHTS = {
  red: 'red',
  yellow: 'yellow',
  green: 'green',
};

export const SCHEDULE = {
  red: {
    duration: 10,
    wink: 3,
    next: LIGHTS.yellow,
  },
  yellow: {
    duration: 5,
    wink: 0,
    next: LIGHTS.green,
  },
  green: {
    duration: 10,
    wink: 3,
    next: LIGHTS.red,
  },
};
