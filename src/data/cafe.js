import { menuSourceUrl } from './menu.js';

export const cafe = {
  name: 'Shelbyville Café',
  address: 'Calle Juan Gil, 1',
  postcode: '41020 Sevilla, España',
  addressVerified: true,
  instagram: 'https://www.instagram.com/shelbyvillecafe/',
  justEat: 'https://www.just-eat.es/restaurants-shelbyville-cafe-sevilla/menu',
  maps: 'https://www.google.com/maps/search/?api=1&query=Shelbyville+Caf%C3%A9+Calle+Juan+Gil+1+Sevilla',
  menu: menuSourceUrl,
  phone: '613 03 66 31',
  email: 'contacto@shelbyvillecafe.es'
};

export const brandAssets = {
  logo: '/images/logo/shelbyville-logo.png',
  interior: '/images/local/shelbyville-interior.png',
  exterior: '/images/local/shelbyville-fachada.png',
  socialGallery: [
    { title: 'Interior y ambiente', image: '/images/social/shelbyville-local-interior-1.jpg' },
    { title: 'Zona de mesas y juegos', image: '/images/social/shelbyville-local-interior-2.jpg' },
    { title: 'Fachada oficial', image: '/images/social/shelbyville-local-fachada.jpg' },
    { title: 'Tortitas artesanas', image: '/images/social/shelbyville-tortitas-artesanas.jpg' },
    { title: 'Bali Pancakes con sirope', image: '/images/social/shelbyville-bali-pancakes.jpg' },
    { title: 'Gofres con toppings', image: '/images/social/shelbyville-waffles.jpg' },
    { title: 'Café de especialidad', image: '/images/social/shelbyville-cafe-especial.jpg' },
    { title: 'Platos de brunch y salados', image: '/images/social/shelbyville-brunch-dishes.jpg' }
  ]
};
