import { ShortUser } from "./user"

export interface CardProduct {
    id: string,
    name: string,
    cost: number,
    location: string,
    createdAt: string,
    imagesIds: string[]
}

export interface Search {
    search: string,
    showNonActive: boolean,
    category: string
}

export interface Category {
    id: string,
    name: string,
    parentId: string,
    childs: Category[]
}
export interface CategoryActive {
    id: string,
    name: string,
    parentid: string,
}
export interface Advert {
    id: string,
    user: ShortUser
    name: string,
    description: string,
    isActive: boolean,
    imagesIds: ImagesId[],
    cost: number,
    email: string,
    phone: string,
    location: string,
    created: string,
    category: CategoryActive
}

export interface ImagesId {
    id: string
}