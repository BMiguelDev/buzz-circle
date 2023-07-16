// Type definition of the <posts> store variable
export interface PostType {
    id: number;
    title: string;
    body: string;
    userId: number;
    date?: string;
    reactions?: ReactionsType;
}

export interface ReactionsType {
    thumbsup: number;
    eyes: number;
    heart: number;
    celebration: number;
    mindblown: number;
}


export interface UserType {
    id: number;
    name: string;
}

// Type definition of the users received from the API call
export interface APIUserType {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string
    }
}

// Type definition for the theme used in styled components
export interface ThemeType {
    appBgColor: string;
    appBgColorTransparent: string;
    appTitleColor: string;
    appTextMainColor: string;
    appTextSupportColor: string;
    appPrimaryColor: string;
    appPrimaryColorTransparent: string;
    appSecondaryColor: string;
    appSecondaryColorTransparent: string;
    appSecondaryColorSupport: string;
    appSecondaryColorSupport2: string;
    appIntermediateColor: string;
    appIntermediateSupportColor: string;
}
