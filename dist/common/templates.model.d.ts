export declare enum FoodType {
    'Breakfast' = 0,
    'Show All' = 1,
    'Lunch' = 2,
    'Dinner' = 3
}
export declare class IFood {
    id: string;
    name: string;
    description: string;
    price: number;
    type: FoodType;
}
export declare class ISocialIcon {
    iconUrl: string;
    socialUrl: string;
}
