import apiSlice from "../../apiSlice";
import { Operation } from "../../helper/Operation";
import { UserResponse } from "../Model/User";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getUsers:builder.query({
            query:()=>({
                url:'/users',
                method:Operation.GET
            }),
            transformResponse: (response: UserResponse)=> response,
            providesTags: ['Users']
        })
    })
})

export const {
    useGetUsersQuery
} = userApiSlice