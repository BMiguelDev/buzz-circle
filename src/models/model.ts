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
