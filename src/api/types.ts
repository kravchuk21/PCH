export type LoginDto = {
        email: string;
        password: string;
};

export type SupportDto = {
        text: string;
};

export type CreateUserDto = {
        fullName: string;
} & LoginDto;

export type ResponseUser = {
        createdAt: string;
        email: string;
        fullName: string;
        id: number;
        token: string;
        updatedAt: string;
};


export type SizeType = {
        title: string,
        price: number
}
