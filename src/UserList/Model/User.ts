export type User = {
    id?: number;
    email?:string;
    first_name?:string;
    last_name?:string;
    avatar?:string;
}

export type UserResponse = {
    data?:User[];
    total_pages?: number;
}