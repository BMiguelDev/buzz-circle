export interface PostType extends PostInfoType{
    id: string;
    date: string;
    reactions: ReactionsType;
}

export interface PostAPIType extends PostInfoType{
    _id: string;
    date: string;
    reactions: ReactionsType;
}

export interface PostInfoType extends PostFieldsType{
    userId: string;
}

export interface PostFieldsType {
    title: string;
    body: string;
}

export interface ReactionsType {
    thumbsup: string[];
    eyes: string[];
    heart: string[];
    celebration: string[];
    mindblown: string[];
}

export interface UserAPIType {
    _id: string;
    username: string,
    roles: {
        User: number;
        Editor?: number;
        Admin?: number;
    },
    password: string,
    refreshToken?: string
}

export interface UserType {
    id: string;
    username: string
}

export interface UserCredentialsType {
    user: string;
    pwd: string;
}

export interface UserAuthType {
    user: string;
    accessToken: string;
}

// Type definition for the theme used in styled components
export interface ThemeType {
    appBgColor: string;
    appBgColorSupport: string;
    appBgColorTransparent: string;
    appTitleColor: string;
    appTextMainColor: string;
    appTextSupportColor: string;
    appTextInputColor: string;
    appWarningColor1: string;
    appWarningColor2: string;
    appWarningColor3: string;
    appWarningColor4: string;
    appWarningColor5: string;
    appWarningColor6: string;
    appPrimaryColor: string;
    appPrimaryColorTransparent: string;
    appSecondaryColor: string;
    appSecondaryColorTransparent: string;
    appSecondaryColorSupport: string;
    appSecondaryColorSupport2: string;
    appSecondaryColorSupport3: string;
    appSecondaryColorSupport4: string;
    appIntermediateColor: string;
    appIntermediateSupportColor: string;
}
