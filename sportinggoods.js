//List of products

const bat = {
    id: 'bat',
    name: 'Baseball Bat',
    image: './baseballbat.png',
    category: 'Baseball',
    description: '20oz Wooden Bat',
    price: 50,
};

const mitt = {
    id: 'mitt',
    name: 'Baseball Mitt',
    image: './baseballmitt.png',
    category: 'Baseball',
    description: 'Leather Outfielders Mitt',
    price: 40,
};

const catchersMask = {
    id: 'catchersMask',
    name: 'Catcher\'s Mask',
    image: './mask.png',
    category: 'Baseball',
    description: 'Wire frame catchers mask',
    price: 30,
};

const hat = {
    id: 'hat',
    name: 'Hat',
    image: './hat.png',
    category: 'Baseball',
    description: 'Black Hat',
    price: 10,
};

const ball = {
    id: 'ball',
    name: 'Baseball',
    image: './ball.png',
    category: 'Baseball',
    description: '3pack of baseballs',
    price: 9,
};

export const inventory = [bat, mitt, catchersMask, hat, ball]