import { ReactNode } from "react"

export interface UserType {
  id: string
  email: string
  username: string
  givenName: string
  locale: string
  avatar: string
}
export interface data {
  id: string
  email: string
  username: string
  givenName: string
  locale: string
  avatar: string
}

export interface SiteType {
  id: string
  clientId: string
  title: string
  createdAt: string
  updatedAt: string
  contacts: Contacts
  address: Address
  images: string[]
  tags: string[]
  client: Client
}

export interface Contacts {
  main: {
    id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  jobTitle: string
  address: Address
  }
}


export interface Address {
  zipCode: string
  city: string
  street: string
  country: string
  state: string
}



export interface Client {
  id: string
  givenName: string
  logo: string
  createdAt: string
  updatedAt: string
  tags: string[]
}

export interface IButtonProps {
  icon?: ReactNode,
  label:string;
  handleClick?: () => void;
  }