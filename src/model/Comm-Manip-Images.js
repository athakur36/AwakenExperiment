export const Experiment_Image_List = [
    [ //control group
        {
            experiment: {
                page: 1,
                type: 'RATING',
                images: [
                    { src: './images/pen6.png' },
                    { src: './images/pen499.png' },
                ],
                condition: "control",
                name: "PricePresentation",
            },
        },
        {
            experiment: {
                page: 2,
                type: 'RATING',
                images: [
                    { src: './images/fD1681.png' },
                    { src: './images/fD1981.png' },
                ],
                condition: "control",
                name: "CheapDecoyEffect",
            },
        },
        {
            experiment: {
                page: 3,
                type: 'RATING',
                images: [
                    { src: './images/oven147.png' },
                    { src: './images/oven199.png' },
                ],
                condition: "control",
                name: "ExpensiveDecoyEffect",
            },
        },
        {
            experiment: {
                page: 4,
                type: 'PICKUP',
                images: [
                    { src: './images/mileage15.png', text: 'Imagine that you are about to purchase a jacket for $125 and a tablet for $15. The e-commerce platforms informs you that the tablet you wish to buy is on sale for $10 at the store, located 20 minutes drive away. Would you make the trip to the other store?' },
                    { src: './images/mileage125.png', text: 'Imagine that you are about to purchase a jacket for $15 and a tablet for $125. The e-commerce platforms informs you that the tablet you wish to buy is on sale for $120 at the store, located 20 minutes drive away. Would you make the trip to the other store?' },
                ],
                condition: "control",
                name: "Embedding",
            },
        },
    ],
    [ //decoy group
        {
            experiment: {
                page: 1,
                type: 'RATING',
                images: [
                    { src: './images/pen6.png' },
                    { src: './images/pen5.png' },
                ],
                condition: "decoy",
                name: "PricePresentation",
            },
        },
        {
            experiment: {
                page: 2,
                type: 'RATING',
                images: [
                    { src: './images/fD1681.png' },
                    { src: './images/fD1981.png' },
                    { src: './images/fDG1981.png' },
                ],
                condition: "decoy",
                name: "CheapDecoyEffect",
            },
        },
        {
            experiment: {
                page: 3,
                type: 'RATING',
                images: [
                    { src: './images/oven439.png' },
                    { src: './images/oven147.png' },
                    { src: './images/oven199.png' },
                ],
                condition: "decoy",
                name: "ExpensiveDecoyEffect",
            },
        },
        {
            experiment: {
                page: 4,
                type: 'PICKUP',
                images: [
                    { src: './images/mileage15.png', text: 'Imagine that you are about to purchase a jacket for $125 and a tablet for $15. The e-commerce platforms informs you that the tablet you wish to buy is on sale for $10 at the store, located 20 minutes drive away. Would you make the trip to the other store?' },
                    { src: './images/mileage125.png', text: 'Imagine that you are about to purchase a jacket for $125 and a tablet for $15. The e-commerce platforms informs you that the tablet you wish to buy is on sale for $10 at the store, located 20 minutes drive away. Would you make the trip to the other store?' },
                ],
                condition: "decoy",
                name: "Embedding",
            },
        },
    ],
]