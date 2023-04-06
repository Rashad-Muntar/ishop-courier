import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDateTime: any;
  AWSTimestamp: any;
};

export type Category = {
  __typename?: 'Category';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  image: Scalars['String'];
  stores?: Maybe<ModelStoreConnection>;
  title: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
};


export type CategoryStoresArgs = {
  filter?: InputMaybe<ModelStoreFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type Client = {
  __typename?: 'Client';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  createdAt: Scalars['AWSDateTime'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  orders?: Maybe<ModelOrderConnection>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
};


export type ClientOrdersArgs = {
  filter?: InputMaybe<ModelOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type CreateCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  image: Scalars['String'];
  title: Scalars['String'];
};

export type CreateClientInput = {
  _version?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

export type CreateOrderInput = {
  _version?: InputMaybe<Scalars['Int']>;
  clientId?: InputMaybe<Scalars['String']>;
  clientOrdersId?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['Int']>;
  distance?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  isCancel?: InputMaybe<Scalars['Boolean']>;
  isComplete?: InputMaybe<Scalars['Boolean']>;
  isDelivered?: InputMaybe<Scalars['Boolean']>;
  isPicked?: InputMaybe<Scalars['Boolean']>;
  isReject?: InputMaybe<Scalars['Boolean']>;
  onGoing?: InputMaybe<Scalars['Boolean']>;
  orderNote: Scalars['String'];
  shopperId?: InputMaybe<Scalars['String']>;
  shopperOrdersId?: InputMaybe<Scalars['ID']>;
  startTime: Scalars['String'];
  storeId?: InputMaybe<Scalars['String']>;
  storeOrdersId?: InputMaybe<Scalars['ID']>;
};

export type CreateProductCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  image: Scalars['String'];
  storeProductCategoriesId?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type CreateProductInput = {
  _version?: InputMaybe<Scalars['Int']>;
  brand: Scalars['String'];
  color?: InputMaybe<Scalars['String']>;
  detail: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  price: Scalars['Float'];
  productCategoryProductsId?: InputMaybe<Scalars['ID']>;
  rooms?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  washrooms?: InputMaybe<Scalars['Int']>;
};

export type CreateProductOrderInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  orderId: Scalars['ID'];
  productId: Scalars['ID'];
};

export type CreateShopperInput = {
  _version?: InputMaybe<Scalars['Int']>;
  avatar: Scalars['String'];
  deliveryOption?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  isOnline?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
};

export type CreateStoreInput = {
  _version?: InputMaybe<Scalars['Int']>;
  address: Scalars['String'];
  branches: Scalars['String'];
  categoryStoresId?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  headerImg?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  latitude?: InputMaybe<Scalars['Float']>;
  logo?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  outletType: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  storeName?: InputMaybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};

export type DeleteCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteClientInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteOrderInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteProductCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteProductInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteProductOrderInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteShopperInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteStoreInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type Message = {
  __typename?: 'Message';
  Message?: Maybe<Scalars['String']>;
  Success?: Maybe<Scalars['Boolean']>;
};

export enum ModelAttributeTypes {
  Null = '_null',
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet'
}

export type ModelBooleanInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelCategoryConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelCategoryConditionInput>>>;
  image?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelCategoryConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCategoryConditionInput>>>;
  title?: InputMaybe<ModelStringInput>;
};

export type ModelCategoryConnection = {
  __typename?: 'ModelCategoryConnection';
  items: Array<Maybe<Category>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelCategoryFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelCategoryFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  image?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelCategoryFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCategoryFilterInput>>>;
  title?: InputMaybe<ModelStringInput>;
};

export type ModelClientConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelClientConditionInput>>>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  lastName?: InputMaybe<ModelStringInput>;
  location?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelClientConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelClientConditionInput>>>;
  password?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
};

export type ModelClientConnection = {
  __typename?: 'ModelClientConnection';
  items: Array<Maybe<Client>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelClientFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelClientFilterInput>>>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  lastName?: InputMaybe<ModelStringInput>;
  location?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelClientFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelClientFilterInput>>>;
  password?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
};

export type ModelFloatInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
};

export type ModelIdInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelIdKeyConditionInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
};

export type ModelIntInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export type ModelOrderConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelOrderConditionInput>>>;
  clientId?: InputMaybe<ModelStringInput>;
  clientOrdersId?: InputMaybe<ModelIdInput>;
  code?: InputMaybe<ModelIntInput>;
  distance?: InputMaybe<ModelStringInput>;
  endTime?: InputMaybe<ModelStringInput>;
  isAccepted?: InputMaybe<ModelBooleanInput>;
  isCancel?: InputMaybe<ModelBooleanInput>;
  isComplete?: InputMaybe<ModelBooleanInput>;
  isDelivered?: InputMaybe<ModelBooleanInput>;
  isPicked?: InputMaybe<ModelBooleanInput>;
  isReject?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelOrderConditionInput>;
  onGoing?: InputMaybe<ModelBooleanInput>;
  or?: InputMaybe<Array<InputMaybe<ModelOrderConditionInput>>>;
  orderNote?: InputMaybe<ModelStringInput>;
  shopperId?: InputMaybe<ModelStringInput>;
  shopperOrdersId?: InputMaybe<ModelIdInput>;
  startTime?: InputMaybe<ModelStringInput>;
  storeId?: InputMaybe<ModelStringInput>;
  storeOrdersId?: InputMaybe<ModelIdInput>;
};

export type ModelOrderConnection = {
  __typename?: 'ModelOrderConnection';
  items: Array<Maybe<Order>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelOrderFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelOrderFilterInput>>>;
  clientId?: InputMaybe<ModelStringInput>;
  clientOrdersId?: InputMaybe<ModelIdInput>;
  code?: InputMaybe<ModelIntInput>;
  distance?: InputMaybe<ModelStringInput>;
  endTime?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  isAccepted?: InputMaybe<ModelBooleanInput>;
  isCancel?: InputMaybe<ModelBooleanInput>;
  isComplete?: InputMaybe<ModelBooleanInput>;
  isDelivered?: InputMaybe<ModelBooleanInput>;
  isPicked?: InputMaybe<ModelBooleanInput>;
  isReject?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelOrderFilterInput>;
  onGoing?: InputMaybe<ModelBooleanInput>;
  or?: InputMaybe<Array<InputMaybe<ModelOrderFilterInput>>>;
  orderNote?: InputMaybe<ModelStringInput>;
  shopperId?: InputMaybe<ModelStringInput>;
  shopperOrdersId?: InputMaybe<ModelIdInput>;
  startTime?: InputMaybe<ModelStringInput>;
  storeId?: InputMaybe<ModelStringInput>;
  storeOrdersId?: InputMaybe<ModelIdInput>;
};

export type ModelProductCategoryConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProductCategoryConditionInput>>>;
  image?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProductCategoryConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProductCategoryConditionInput>>>;
  storeProductCategoriesId?: InputMaybe<ModelIdInput>;
  title?: InputMaybe<ModelStringInput>;
};

export type ModelProductCategoryConnection = {
  __typename?: 'ModelProductCategoryConnection';
  items: Array<Maybe<ProductCategory>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelProductCategoryFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProductCategoryFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  image?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProductCategoryFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProductCategoryFilterInput>>>;
  storeProductCategoriesId?: InputMaybe<ModelIdInput>;
  title?: InputMaybe<ModelStringInput>;
};

export type ModelProductConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProductConditionInput>>>;
  brand?: InputMaybe<ModelStringInput>;
  color?: InputMaybe<ModelStringInput>;
  detail?: InputMaybe<ModelStringInput>;
  image?: InputMaybe<ModelStringInput>;
  model?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProductConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProductConditionInput>>>;
  price?: InputMaybe<ModelFloatInput>;
  productCategoryProductsId?: InputMaybe<ModelIdInput>;
  rooms?: InputMaybe<ModelIntInput>;
  size?: InputMaybe<ModelStringInput>;
  title?: InputMaybe<ModelStringInput>;
  washrooms?: InputMaybe<ModelIntInput>;
};

export type ModelProductConnection = {
  __typename?: 'ModelProductConnection';
  items: Array<Maybe<Product>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelProductFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProductFilterInput>>>;
  brand?: InputMaybe<ModelStringInput>;
  color?: InputMaybe<ModelStringInput>;
  detail?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  image?: InputMaybe<ModelStringInput>;
  model?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProductFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProductFilterInput>>>;
  price?: InputMaybe<ModelFloatInput>;
  productCategoryProductsId?: InputMaybe<ModelIdInput>;
  rooms?: InputMaybe<ModelIntInput>;
  size?: InputMaybe<ModelStringInput>;
  title?: InputMaybe<ModelStringInput>;
  washrooms?: InputMaybe<ModelIntInput>;
};

export type ModelProductOrderConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProductOrderConditionInput>>>;
  not?: InputMaybe<ModelProductOrderConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProductOrderConditionInput>>>;
  orderId?: InputMaybe<ModelIdInput>;
  productId?: InputMaybe<ModelIdInput>;
};

export type ModelProductOrderConnection = {
  __typename?: 'ModelProductOrderConnection';
  items: Array<Maybe<ProductOrder>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelProductOrderFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProductOrderFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelProductOrderFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProductOrderFilterInput>>>;
  orderId?: InputMaybe<ModelIdInput>;
  productId?: InputMaybe<ModelIdInput>;
};

export type ModelShopperConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelShopperConditionInput>>>;
  avatar?: InputMaybe<ModelStringInput>;
  deliveryOption?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  isOnline?: InputMaybe<ModelBooleanInput>;
  lastName?: InputMaybe<ModelStringInput>;
  latitude?: InputMaybe<ModelFloatInput>;
  location?: InputMaybe<ModelStringInput>;
  longitude?: InputMaybe<ModelFloatInput>;
  not?: InputMaybe<ModelShopperConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelShopperConditionInput>>>;
  password?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
};

export type ModelShopperConnection = {
  __typename?: 'ModelShopperConnection';
  items: Array<Maybe<Shopper>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelShopperFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelShopperFilterInput>>>;
  avatar?: InputMaybe<ModelStringInput>;
  deliveryOption?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  isOnline?: InputMaybe<ModelBooleanInput>;
  lastName?: InputMaybe<ModelStringInput>;
  latitude?: InputMaybe<ModelFloatInput>;
  location?: InputMaybe<ModelStringInput>;
  longitude?: InputMaybe<ModelFloatInput>;
  not?: InputMaybe<ModelShopperFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelShopperFilterInput>>>;
  password?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStoreConditionInput = {
  address?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelStoreConditionInput>>>;
  branches?: InputMaybe<ModelStringInput>;
  categoryStoresId?: InputMaybe<ModelIdInput>;
  email?: InputMaybe<ModelStringInput>;
  headerImg?: InputMaybe<ModelStringInput>;
  latitude?: InputMaybe<ModelFloatInput>;
  logo?: InputMaybe<ModelStringInput>;
  longitude?: InputMaybe<ModelFloatInput>;
  not?: InputMaybe<ModelStoreConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelStoreConditionInput>>>;
  outletType?: InputMaybe<ModelStringInput>;
  password?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
  storeName?: InputMaybe<ModelStringInput>;
  verified?: InputMaybe<ModelBooleanInput>;
};

export type ModelStoreConnection = {
  __typename?: 'ModelStoreConnection';
  items: Array<Maybe<Store>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelStoreFilterInput = {
  address?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelStoreFilterInput>>>;
  branches?: InputMaybe<ModelStringInput>;
  categoryStoresId?: InputMaybe<ModelIdInput>;
  email?: InputMaybe<ModelStringInput>;
  headerImg?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  latitude?: InputMaybe<ModelFloatInput>;
  logo?: InputMaybe<ModelStringInput>;
  longitude?: InputMaybe<ModelFloatInput>;
  not?: InputMaybe<ModelStoreFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelStoreFilterInput>>>;
  outletType?: InputMaybe<ModelStringInput>;
  password?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
  storeName?: InputMaybe<ModelStringInput>;
  verified?: InputMaybe<ModelBooleanInput>;
};

export type ModelStringInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelSubscriptionBooleanInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelSubscriptionCategoryFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionCategoryFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  image?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionCategoryFilterInput>>>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionClientFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionClientFilterInput>>>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  firstName?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  lastName?: InputMaybe<ModelSubscriptionStringInput>;
  location?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionClientFilterInput>>>;
  password?: InputMaybe<ModelSubscriptionStringInput>;
  phone?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionFloatInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ModelSubscriptionIdInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ModelSubscriptionIntInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ModelSubscriptionOrderFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionOrderFilterInput>>>;
  clientId?: InputMaybe<ModelSubscriptionStringInput>;
  code?: InputMaybe<ModelSubscriptionIntInput>;
  distance?: InputMaybe<ModelSubscriptionStringInput>;
  endTime?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  isAccepted?: InputMaybe<ModelSubscriptionBooleanInput>;
  isCancel?: InputMaybe<ModelSubscriptionBooleanInput>;
  isComplete?: InputMaybe<ModelSubscriptionBooleanInput>;
  isDelivered?: InputMaybe<ModelSubscriptionBooleanInput>;
  isPicked?: InputMaybe<ModelSubscriptionBooleanInput>;
  isReject?: InputMaybe<ModelSubscriptionBooleanInput>;
  onGoing?: InputMaybe<ModelSubscriptionBooleanInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionOrderFilterInput>>>;
  orderNote?: InputMaybe<ModelSubscriptionStringInput>;
  shopperId?: InputMaybe<ModelSubscriptionStringInput>;
  startTime?: InputMaybe<ModelSubscriptionStringInput>;
  storeId?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionProductCategoryFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionProductCategoryFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  image?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionProductCategoryFilterInput>>>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionProductFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionProductFilterInput>>>;
  brand?: InputMaybe<ModelSubscriptionStringInput>;
  color?: InputMaybe<ModelSubscriptionStringInput>;
  detail?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  image?: InputMaybe<ModelSubscriptionStringInput>;
  model?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionProductFilterInput>>>;
  price?: InputMaybe<ModelSubscriptionFloatInput>;
  rooms?: InputMaybe<ModelSubscriptionIntInput>;
  size?: InputMaybe<ModelSubscriptionStringInput>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
  washrooms?: InputMaybe<ModelSubscriptionIntInput>;
};

export type ModelSubscriptionProductOrderFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionProductOrderFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionProductOrderFilterInput>>>;
  orderId?: InputMaybe<ModelSubscriptionIdInput>;
  productId?: InputMaybe<ModelSubscriptionIdInput>;
};

export type ModelSubscriptionShopperFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionShopperFilterInput>>>;
  avatar?: InputMaybe<ModelSubscriptionStringInput>;
  deliveryOption?: InputMaybe<ModelSubscriptionStringInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  firstName?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  isOnline?: InputMaybe<ModelSubscriptionBooleanInput>;
  lastName?: InputMaybe<ModelSubscriptionStringInput>;
  latitude?: InputMaybe<ModelSubscriptionFloatInput>;
  location?: InputMaybe<ModelSubscriptionStringInput>;
  longitude?: InputMaybe<ModelSubscriptionFloatInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionShopperFilterInput>>>;
  password?: InputMaybe<ModelSubscriptionStringInput>;
  phone?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionStoreFilterInput = {
  address?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionStoreFilterInput>>>;
  branches?: InputMaybe<ModelSubscriptionStringInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  headerImg?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  latitude?: InputMaybe<ModelSubscriptionFloatInput>;
  logo?: InputMaybe<ModelSubscriptionStringInput>;
  longitude?: InputMaybe<ModelSubscriptionFloatInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionStoreFilterInput>>>;
  outletType?: InputMaybe<ModelSubscriptionStringInput>;
  password?: InputMaybe<ModelSubscriptionStringInput>;
  phone?: InputMaybe<ModelSubscriptionStringInput>;
  storeName?: InputMaybe<ModelSubscriptionStringInput>;
  verified?: InputMaybe<ModelSubscriptionBooleanInput>;
};

export type ModelSubscriptionStringInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  codeVerification: ClientPaylod;
  createCategory?: Maybe<Category>;
  createClient?: Maybe<Client>;
  createOrder?: Maybe<Order>;
  createPaymentIntent: PaymentIntention;
  createProduct?: Maybe<Product>;
  createProductCategory?: Maybe<ProductCategory>;
  createProductOrder?: Maybe<ProductOrder>;
  createShopper?: Maybe<Shopper>;
  createStore?: Maybe<Store>;
  deleteCategory?: Maybe<Category>;
  deleteClient?: Maybe<Client>;
  deleteOrder?: Maybe<Order>;
  deleteProduct?: Maybe<Product>;
  deleteProductCategory?: Maybe<ProductCategory>;
  deleteProductOrder?: Maybe<ProductOrder>;
  deleteShopper?: Maybe<Shopper>;
  deleteStore?: Maybe<Store>;
  getVideoToken: Scalars['String'];
  phoneVerification?: Maybe<Scalars['String']>;
  shoppeLocationUpdate: NewShopper;
  shopperLogin: NewShopper;
  shopperSignUp: NewShopper;
  socialAuth: ClientPaylod;
  storeLogin: NewStore;
  storeSignup: NewStore;
  updateCategory?: Maybe<Category>;
  updateClient?: Maybe<Client>;
  updateOrder?: Maybe<Order>;
  updateProduct?: Maybe<Product>;
  updateProductCategory?: Maybe<ProductCategory>;
  updateProductOrder?: Maybe<ProductOrder>;
  updateShopper?: Maybe<Shopper>;
  updateStore?: Maybe<Store>;
};


export type MutationCodeVerificationArgs = {
  code: Scalars['Int'];
  phoneNumber: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  condition?: InputMaybe<ModelCategoryConditionInput>;
  input: CreateCategoryInput;
};


export type MutationCreateClientArgs = {
  condition?: InputMaybe<ModelClientConditionInput>;
  input: CreateClientInput;
};


export type MutationCreateOrderArgs = {
  condition?: InputMaybe<ModelOrderConditionInput>;
  input: CreateOrderInput;
};


export type MutationCreatePaymentIntentArgs = {
  amount: Scalars['Float'];
};


export type MutationCreateProductArgs = {
  condition?: InputMaybe<ModelProductConditionInput>;
  input: CreateProductInput;
};


export type MutationCreateProductCategoryArgs = {
  condition?: InputMaybe<ModelProductCategoryConditionInput>;
  input: CreateProductCategoryInput;
};


export type MutationCreateProductOrderArgs = {
  condition?: InputMaybe<ModelProductOrderConditionInput>;
  input: CreateProductOrderInput;
};


export type MutationCreateShopperArgs = {
  condition?: InputMaybe<ModelShopperConditionInput>;
  input: CreateShopperInput;
};


export type MutationCreateStoreArgs = {
  condition?: InputMaybe<ModelStoreConditionInput>;
  input: CreateStoreInput;
};


export type MutationDeleteCategoryArgs = {
  condition?: InputMaybe<ModelCategoryConditionInput>;
  input: DeleteCategoryInput;
};


export type MutationDeleteClientArgs = {
  condition?: InputMaybe<ModelClientConditionInput>;
  input: DeleteClientInput;
};


export type MutationDeleteOrderArgs = {
  condition?: InputMaybe<ModelOrderConditionInput>;
  input: DeleteOrderInput;
};


export type MutationDeleteProductArgs = {
  condition?: InputMaybe<ModelProductConditionInput>;
  input: DeleteProductInput;
};


export type MutationDeleteProductCategoryArgs = {
  condition?: InputMaybe<ModelProductCategoryConditionInput>;
  input: DeleteProductCategoryInput;
};


export type MutationDeleteProductOrderArgs = {
  condition?: InputMaybe<ModelProductOrderConditionInput>;
  input: DeleteProductOrderInput;
};


export type MutationDeleteShopperArgs = {
  condition?: InputMaybe<ModelShopperConditionInput>;
  input: DeleteShopperInput;
};


export type MutationDeleteStoreArgs = {
  condition?: InputMaybe<ModelStoreConditionInput>;
  input: DeleteStoreInput;
};


export type MutationGetVideoTokenArgs = {
  userName: Scalars['String'];
};


export type MutationPhoneVerificationArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationShoppeLocationUpdateArgs = {
  id: Scalars['ID'];
  isOnline?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
};


export type MutationShopperLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationShopperSignUpArgs = {
  avatar: Scalars['String'];
  deliveryOption: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationSocialAuthArgs = {
  avatar: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


export type MutationStoreLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationStoreSignupArgs = {
  address: Scalars['String'];
  branches: Scalars['String'];
  categoryStoresId?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  headerImg?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  outletType: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  storeName?: InputMaybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};


export type MutationUpdateCategoryArgs = {
  condition?: InputMaybe<ModelCategoryConditionInput>;
  input: UpdateCategoryInput;
};


export type MutationUpdateClientArgs = {
  condition?: InputMaybe<ModelClientConditionInput>;
  input: UpdateClientInput;
};


export type MutationUpdateOrderArgs = {
  condition?: InputMaybe<ModelOrderConditionInput>;
  input: UpdateOrderInput;
};


export type MutationUpdateProductArgs = {
  condition?: InputMaybe<ModelProductConditionInput>;
  input: UpdateProductInput;
};


export type MutationUpdateProductCategoryArgs = {
  condition?: InputMaybe<ModelProductCategoryConditionInput>;
  input: UpdateProductCategoryInput;
};


export type MutationUpdateProductOrderArgs = {
  condition?: InputMaybe<ModelProductOrderConditionInput>;
  input: UpdateProductOrderInput;
};


export type MutationUpdateShopperArgs = {
  condition?: InputMaybe<ModelShopperConditionInput>;
  input: UpdateShopperInput;
};


export type MutationUpdateStoreArgs = {
  condition?: InputMaybe<ModelStoreConditionInput>;
  input: UpdateStoreInput;
};

export type Order = {
  __typename?: 'Order';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  client?: Maybe<Client>;
  clientId?: Maybe<Scalars['String']>;
  clientOrdersId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['Int']>;
  createdAt: Scalars['AWSDateTime'];
  distance?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isAccepted?: Maybe<Scalars['Boolean']>;
  isCancel?: Maybe<Scalars['Boolean']>;
  isComplete?: Maybe<Scalars['Boolean']>;
  isDelivered?: Maybe<Scalars['Boolean']>;
  isPicked?: Maybe<Scalars['Boolean']>;
  isReject?: Maybe<Scalars['Boolean']>;
  onGoing?: Maybe<Scalars['Boolean']>;
  orderNote: Scalars['String'];
  products?: Maybe<ModelProductOrderConnection>;
  shopper?: Maybe<Shopper>;
  shopperId?: Maybe<Scalars['String']>;
  shopperOrdersId?: Maybe<Scalars['ID']>;
  startTime: Scalars['String'];
  store?: Maybe<Store>;
  storeId?: Maybe<Scalars['String']>;
  storeOrdersId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['AWSDateTime'];
};


export type OrderProductsArgs = {
  filter?: InputMaybe<ModelProductOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type PaymentIntention = {
  __typename?: 'PaymentIntention';
  customer: Scalars['String'];
  ephemeralKey: Scalars['String'];
  paymentIntent: Scalars['String'];
  publishableKey: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  brand: Scalars['String'];
  color?: Maybe<Scalars['String']>;
  createdAt: Scalars['AWSDateTime'];
  detail: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  orders?: Maybe<ModelProductOrderConnection>;
  price: Scalars['Float'];
  productCategory?: Maybe<ProductCategory>;
  productCategoryProductsId?: Maybe<Scalars['ID']>;
  rooms?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
  washrooms?: Maybe<Scalars['Int']>;
};


export type ProductOrdersArgs = {
  filter?: InputMaybe<ModelProductOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  image: Scalars['String'];
  products?: Maybe<ModelProductConnection>;
  store?: Maybe<Store>;
  storeProductCategoriesId?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
};


export type ProductCategoryProductsArgs = {
  filter?: InputMaybe<ModelProductFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type ProductOrder = {
  __typename?: 'ProductOrder';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  order: Order;
  orderId: Scalars['ID'];
  product: Product;
  productId: Scalars['ID'];
  updatedAt: Scalars['AWSDateTime'];
};

export type Query = {
  __typename?: 'Query';
  clientByEmail?: Maybe<ModelClientConnection>;
  getCategory?: Maybe<Category>;
  getClient?: Maybe<Client>;
  getOrder?: Maybe<Order>;
  getProduct?: Maybe<Product>;
  getProductCategory?: Maybe<ProductCategory>;
  getProductOrder?: Maybe<ProductOrder>;
  getShopper?: Maybe<Shopper>;
  getStore?: Maybe<Store>;
  hello: Scalars['String'];
  listCategories?: Maybe<ModelCategoryConnection>;
  listClients?: Maybe<ModelClientConnection>;
  listOrders?: Maybe<ModelOrderConnection>;
  listProductCategories?: Maybe<ModelProductCategoryConnection>;
  listProductOrders?: Maybe<ModelProductOrderConnection>;
  listProducts?: Maybe<ModelProductConnection>;
  listShoppers?: Maybe<ModelShopperConnection>;
  listStores?: Maybe<ModelStoreConnection>;
  productOrdersByOrderId?: Maybe<ModelProductOrderConnection>;
  productOrdersByProductId?: Maybe<ModelProductOrderConnection>;
  shopperByEmail?: Maybe<ModelShopperConnection>;
  syncCategories?: Maybe<ModelCategoryConnection>;
  syncClients?: Maybe<ModelClientConnection>;
  syncOrders?: Maybe<ModelOrderConnection>;
  syncProductCategories?: Maybe<ModelProductCategoryConnection>;
  syncProductOrders?: Maybe<ModelProductOrderConnection>;
  syncProducts?: Maybe<ModelProductConnection>;
  syncShoppers?: Maybe<ModelShopperConnection>;
  syncStores?: Maybe<ModelStoreConnection>;
};


export type QueryClientByEmailArgs = {
  email: Scalars['String'];
  filter?: InputMaybe<ModelClientFilterInput>;
  id?: InputMaybe<ModelIdKeyConditionInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryGetCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryGetClientArgs = {
  id: Scalars['ID'];
};


export type QueryGetOrderArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductOrderArgs = {
  id: Scalars['ID'];
};


export type QueryGetShopperArgs = {
  id: Scalars['ID'];
};


export type QueryGetStoreArgs = {
  id: Scalars['ID'];
};


export type QueryListCategoriesArgs = {
  filter?: InputMaybe<ModelCategoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListClientsArgs = {
  filter?: InputMaybe<ModelClientFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListOrdersArgs = {
  filter?: InputMaybe<ModelOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListProductCategoriesArgs = {
  filter?: InputMaybe<ModelProductCategoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListProductOrdersArgs = {
  filter?: InputMaybe<ModelProductOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListProductsArgs = {
  filter?: InputMaybe<ModelProductFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListShoppersArgs = {
  filter?: InputMaybe<ModelShopperFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListStoresArgs = {
  filter?: InputMaybe<ModelStoreFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryProductOrdersByOrderIdArgs = {
  filter?: InputMaybe<ModelProductOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  orderId: Scalars['ID'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryProductOrdersByProductIdArgs = {
  filter?: InputMaybe<ModelProductOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  productId: Scalars['ID'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryShopperByEmailArgs = {
  email: Scalars['String'];
  filter?: InputMaybe<ModelShopperFilterInput>;
  id?: InputMaybe<ModelIdKeyConditionInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QuerySyncCategoriesArgs = {
  filter?: InputMaybe<ModelCategoryFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncClientsArgs = {
  filter?: InputMaybe<ModelClientFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncOrdersArgs = {
  filter?: InputMaybe<ModelOrderFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncProductCategoriesArgs = {
  filter?: InputMaybe<ModelProductCategoryFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncProductOrdersArgs = {
  filter?: InputMaybe<ModelProductOrderFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncProductsArgs = {
  filter?: InputMaybe<ModelProductFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncShoppersArgs = {
  filter?: InputMaybe<ModelShopperFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncStoresArgs = {
  filter?: InputMaybe<ModelStoreFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type Shopper = {
  __typename?: 'Shopper';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  avatar: Scalars['String'];
  createdAt: Scalars['AWSDateTime'];
  deliveryOption?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  latitude?: Maybe<Scalars['Float']>;
  location?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  orders?: Maybe<ModelOrderConnection>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
};


export type ShopperOrdersArgs = {
  filter?: InputMaybe<ModelOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type Store = {
  __typename?: 'Store';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  address: Scalars['String'];
  branches: Scalars['String'];
  category?: Maybe<Category>;
  categoryStoresId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['AWSDateTime'];
  email: Scalars['String'];
  headerImg?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['Float']>;
  logo?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  orders?: Maybe<ModelOrderConnection>;
  outletType: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  productCategories?: Maybe<ModelProductCategoryConnection>;
  storeName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
  verified: Scalars['Boolean'];
};


export type StoreOrdersArgs = {
  filter?: InputMaybe<ModelOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type StoreProductCategoriesArgs = {
  filter?: InputMaybe<ModelProductCategoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateCategory?: Maybe<Category>;
  onCreateClient?: Maybe<Client>;
  onCreateOrder?: Maybe<Order>;
  onCreateProduct?: Maybe<Product>;
  onCreateProductCategory?: Maybe<ProductCategory>;
  onCreateProductOrder?: Maybe<ProductOrder>;
  onCreateShopper?: Maybe<Shopper>;
  onCreateStore?: Maybe<Store>;
  onDeleteCategory?: Maybe<Category>;
  onDeleteClient?: Maybe<Client>;
  onDeleteOrder?: Maybe<Order>;
  onDeleteProduct?: Maybe<Product>;
  onDeleteProductCategory?: Maybe<ProductCategory>;
  onDeleteProductOrder?: Maybe<ProductOrder>;
  onDeleteShopper?: Maybe<Shopper>;
  onDeleteStore?: Maybe<Store>;
  onShopperLocationUpdate?: Maybe<NewShopper>;
  onUpdateCategory?: Maybe<Category>;
  onUpdateClient?: Maybe<Client>;
  onUpdateOrder?: Maybe<Order>;
  onUpdateProduct?: Maybe<Product>;
  onUpdateProductCategory?: Maybe<ProductCategory>;
  onUpdateProductOrder?: Maybe<ProductOrder>;
  onUpdateShopper?: Maybe<Shopper>;
  onUpdateStore?: Maybe<Store>;
};


export type SubscriptionOnCreateCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionCategoryFilterInput>;
};


export type SubscriptionOnCreateClientArgs = {
  filter?: InputMaybe<ModelSubscriptionClientFilterInput>;
};


export type SubscriptionOnCreateOrderArgs = {
  filter?: InputMaybe<ModelSubscriptionOrderFilterInput>;
};


export type SubscriptionOnCreateProductArgs = {
  filter?: InputMaybe<ModelSubscriptionProductFilterInput>;
};


export type SubscriptionOnCreateProductCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionProductCategoryFilterInput>;
};


export type SubscriptionOnCreateProductOrderArgs = {
  filter?: InputMaybe<ModelSubscriptionProductOrderFilterInput>;
};


export type SubscriptionOnCreateShopperArgs = {
  filter?: InputMaybe<ModelSubscriptionShopperFilterInput>;
};


export type SubscriptionOnCreateStoreArgs = {
  filter?: InputMaybe<ModelSubscriptionStoreFilterInput>;
};


export type SubscriptionOnDeleteCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionCategoryFilterInput>;
};


export type SubscriptionOnDeleteClientArgs = {
  filter?: InputMaybe<ModelSubscriptionClientFilterInput>;
};


export type SubscriptionOnDeleteOrderArgs = {
  filter?: InputMaybe<ModelSubscriptionOrderFilterInput>;
};


export type SubscriptionOnDeleteProductArgs = {
  filter?: InputMaybe<ModelSubscriptionProductFilterInput>;
};


export type SubscriptionOnDeleteProductCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionProductCategoryFilterInput>;
};


export type SubscriptionOnDeleteProductOrderArgs = {
  filter?: InputMaybe<ModelSubscriptionProductOrderFilterInput>;
};


export type SubscriptionOnDeleteShopperArgs = {
  filter?: InputMaybe<ModelSubscriptionShopperFilterInput>;
};


export type SubscriptionOnDeleteStoreArgs = {
  filter?: InputMaybe<ModelSubscriptionStoreFilterInput>;
};


export type SubscriptionOnUpdateCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionCategoryFilterInput>;
};


export type SubscriptionOnUpdateClientArgs = {
  filter?: InputMaybe<ModelSubscriptionClientFilterInput>;
};


export type SubscriptionOnUpdateOrderArgs = {
  filter?: InputMaybe<ModelSubscriptionOrderFilterInput>;
};


export type SubscriptionOnUpdateProductArgs = {
  filter?: InputMaybe<ModelSubscriptionProductFilterInput>;
};


export type SubscriptionOnUpdateProductCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionProductCategoryFilterInput>;
};


export type SubscriptionOnUpdateProductOrderArgs = {
  filter?: InputMaybe<ModelSubscriptionProductOrderFilterInput>;
};


export type SubscriptionOnUpdateShopperArgs = {
  filter?: InputMaybe<ModelSubscriptionShopperFilterInput>;
};


export type SubscriptionOnUpdateStoreArgs = {
  filter?: InputMaybe<ModelSubscriptionStoreFilterInput>;
};

export type UpdateCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateClientInput = {
  _version?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type UpdateOrderInput = {
  _version?: InputMaybe<Scalars['Int']>;
  clientId?: InputMaybe<Scalars['String']>;
  clientOrdersId?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['Int']>;
  distance?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  isCancel?: InputMaybe<Scalars['Boolean']>;
  isComplete?: InputMaybe<Scalars['Boolean']>;
  isDelivered?: InputMaybe<Scalars['Boolean']>;
  isPicked?: InputMaybe<Scalars['Boolean']>;
  isReject?: InputMaybe<Scalars['Boolean']>;
  onGoing?: InputMaybe<Scalars['Boolean']>;
  orderNote?: InputMaybe<Scalars['String']>;
  shopperId?: InputMaybe<Scalars['String']>;
  shopperOrdersId?: InputMaybe<Scalars['ID']>;
  startTime?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['String']>;
  storeOrdersId?: InputMaybe<Scalars['ID']>;
};

export type UpdateProductCategoryInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  storeProductCategoriesId?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateProductInput = {
  _version?: InputMaybe<Scalars['Int']>;
  brand?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  detail?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  productCategoryProductsId?: InputMaybe<Scalars['ID']>;
  rooms?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  washrooms?: InputMaybe<Scalars['Int']>;
};

export type UpdateProductOrderInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  orderId?: InputMaybe<Scalars['ID']>;
  productId?: InputMaybe<Scalars['ID']>;
};

export type UpdateShopperInput = {
  _version?: InputMaybe<Scalars['Int']>;
  avatar?: InputMaybe<Scalars['String']>;
  deliveryOption?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  isOnline?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  location?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type UpdateStoreInput = {
  _version?: InputMaybe<Scalars['Int']>;
  address?: InputMaybe<Scalars['String']>;
  branches?: InputMaybe<Scalars['String']>;
  categoryStoresId?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  headerImg?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  latitude?: InputMaybe<Scalars['Float']>;
  logo?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Float']>;
  outletType?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  storeName?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type ClientPaylod = {
  __typename?: 'clientPaylod';
  client?: Maybe<Client>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type NewShoperPayload = {
  __typename?: 'newShoperPayload';
  avatar?: Maybe<Scalars['String']>;
  deliveryOption?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  location?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  password?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
};

export type NewShopper = {
  __typename?: 'newShopper';
  message?: Maybe<Scalars['String']>;
  shopper?: Maybe<NewShoperPayload>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type NewStore = {
  __typename?: 'newStore';
  store?: Maybe<NewStorePayload>;
  token?: Maybe<Scalars['String']>;
};

export type NewStorePayload = {
  __typename?: 'newStorePayload';
  avatar: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  phone: Scalars['String'];
};

export type PhoneUser = {
  __typename?: 'phoneUser';
  phoneNumber?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type PhoneVerification = {
  __typename?: 'phoneVerification';
  phoneNumber: Scalars['String'];
};

export type ShopperLoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type ShopperLoginMutation = { __typename?: 'Mutation', shopperLogin: { __typename?: 'newShopper', token?: string | null, shopper?: { __typename?: 'newShoperPayload', id: string, avatar?: string | null, email?: string | null, password?: string | null, firstName?: string | null, lastName?: string | null, deliveryOption?: string | null, location?: string | null, phone: string } | null } };

export type UpdateOrderMutationVariables = Exact<{
  input: UpdateOrderInput;
}>;


export type UpdateOrderMutation = { __typename?: 'Mutation', updateOrder?: { __typename?: 'Order', id: string, startTime: string, endTime?: string | null, code?: number | null, isCancel?: boolean | null, isComplete?: boolean | null, distance?: string | null, isPicked?: boolean | null, isDelivered?: boolean | null, onGoing?: boolean | null, isAccepted?: boolean | null, shopperId?: string | null, orderNote: string, isReject?: boolean | null, store?: { __typename?: 'Store', storeName?: string | null, logo?: string | null, address: string } | null, client?: { __typename?: 'Client', firstName?: string | null, lastName?: string | null, location?: string | null } | null } | null };

export type ShoppeLocationUpdateMutationVariables = Exact<{
  shoppeLocationUpdateId: Scalars['ID'];
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
}>;


export type ShoppeLocationUpdateMutation = { __typename?: 'Mutation', shoppeLocationUpdate: { __typename?: 'newShopper', shopper?: { __typename?: 'newShoperPayload', id: string, firstName?: string | null, lastName?: string | null, latitude?: number | null, longitude?: number | null } | null } };

export type OnUpdateCategorySubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnUpdateCategorySubscription = { __typename?: 'Subscription', onUpdateCategory?: { __typename?: 'Category', image: string, title: string } | null };

export type OnShopperLocationUpdateSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnShopperLocationUpdateSubscription = { __typename?: 'Subscription', onShopperLocationUpdate?: { __typename?: 'newShopper', shopper?: { __typename?: 'newShoperPayload', id: string, avatar?: string | null, email?: string | null, password?: string | null, firstName?: string | null, lastName?: string | null, deliveryOption?: string | null, location?: string | null, latitude?: number | null, longitude?: number | null, phone: string } | null } | null };

export type GetShopperQueryVariables = Exact<{
  getShopperId: Scalars['ID'];
}>;


export type GetShopperQuery = { __typename?: 'Query', getShopper?: { __typename?: 'Shopper', id: string, avatar: string, email: string, password: string, firstName: string, lastName: string, phone?: string | null, deliveryOption?: string | null, location?: string | null, latitude?: number | null, longitude?: number | null } | null };


export const ShopperLoginDocument = gql`
    mutation ShopperLogin($email: String!, $password: String!) {
  shopperLogin(email: $email, password: $password) {
    shopper {
      id
      avatar
      email
      password
      firstName
      lastName
      deliveryOption
      location
      phone
    }
    token
  }
}
    `;
export type ShopperLoginMutationFn = Apollo.MutationFunction<ShopperLoginMutation, ShopperLoginMutationVariables>;

/**
 * __useShopperLoginMutation__
 *
 * To run a mutation, you first call `useShopperLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShopperLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shopperLoginMutation, { data, loading, error }] = useShopperLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useShopperLoginMutation(baseOptions?: Apollo.MutationHookOptions<ShopperLoginMutation, ShopperLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ShopperLoginMutation, ShopperLoginMutationVariables>(ShopperLoginDocument, options);
      }
export type ShopperLoginMutationHookResult = ReturnType<typeof useShopperLoginMutation>;
export type ShopperLoginMutationResult = Apollo.MutationResult<ShopperLoginMutation>;
export type ShopperLoginMutationOptions = Apollo.BaseMutationOptions<ShopperLoginMutation, ShopperLoginMutationVariables>;
export const UpdateOrderDocument = gql`
    mutation UpdateOrder($input: UpdateOrderInput!) {
  updateOrder(input: $input) {
    id
    startTime
    endTime
    code
    isCancel
    isComplete
    distance
    isPicked
    isDelivered
    onGoing
    isAccepted
    shopperId
    orderNote
    isReject
    store {
      storeName
      logo
      address
    }
    client {
      firstName
      lastName
      location
    }
  }
}
    `;
export type UpdateOrderMutationFn = Apollo.MutationFunction<UpdateOrderMutation, UpdateOrderMutationVariables>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrderMutation, UpdateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument, options);
      }
export type UpdateOrderMutationHookResult = ReturnType<typeof useUpdateOrderMutation>;
export type UpdateOrderMutationResult = Apollo.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<UpdateOrderMutation, UpdateOrderMutationVariables>;
export const ShoppeLocationUpdateDocument = gql`
    mutation ShoppeLocationUpdate($shoppeLocationUpdateId: ID!, $latitude: Float, $longitude: Float) {
  shoppeLocationUpdate(
    id: $shoppeLocationUpdateId
    latitude: $latitude
    longitude: $longitude
  ) {
    shopper {
      id
      firstName
      lastName
      latitude
      longitude
    }
  }
}
    `;
export type ShoppeLocationUpdateMutationFn = Apollo.MutationFunction<ShoppeLocationUpdateMutation, ShoppeLocationUpdateMutationVariables>;

/**
 * __useShoppeLocationUpdateMutation__
 *
 * To run a mutation, you first call `useShoppeLocationUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShoppeLocationUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shoppeLocationUpdateMutation, { data, loading, error }] = useShoppeLocationUpdateMutation({
 *   variables: {
 *      shoppeLocationUpdateId: // value for 'shoppeLocationUpdateId'
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *   },
 * });
 */
export function useShoppeLocationUpdateMutation(baseOptions?: Apollo.MutationHookOptions<ShoppeLocationUpdateMutation, ShoppeLocationUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ShoppeLocationUpdateMutation, ShoppeLocationUpdateMutationVariables>(ShoppeLocationUpdateDocument, options);
      }
export type ShoppeLocationUpdateMutationHookResult = ReturnType<typeof useShoppeLocationUpdateMutation>;
export type ShoppeLocationUpdateMutationResult = Apollo.MutationResult<ShoppeLocationUpdateMutation>;
export type ShoppeLocationUpdateMutationOptions = Apollo.BaseMutationOptions<ShoppeLocationUpdateMutation, ShoppeLocationUpdateMutationVariables>;
export const OnUpdateCategoryDocument = gql`
    subscription OnUpdateCategory {
  onUpdateCategory {
    image
    title
  }
}
    `;

/**
 * __useOnUpdateCategorySubscription__
 *
 * To run a query within a React component, call `useOnUpdateCategorySubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUpdateCategorySubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUpdateCategorySubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnUpdateCategorySubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnUpdateCategorySubscription, OnUpdateCategorySubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnUpdateCategorySubscription, OnUpdateCategorySubscriptionVariables>(OnUpdateCategoryDocument, options);
      }
export type OnUpdateCategorySubscriptionHookResult = ReturnType<typeof useOnUpdateCategorySubscription>;
export type OnUpdateCategorySubscriptionResult = Apollo.SubscriptionResult<OnUpdateCategorySubscription>;
export const OnShopperLocationUpdateDocument = gql`
    subscription OnShopperLocationUpdate {
  onShopperLocationUpdate {
    shopper {
      id
      avatar
      email
      password
      firstName
      lastName
      deliveryOption
      location
      latitude
      longitude
      phone
    }
  }
}
    `;

/**
 * __useOnShopperLocationUpdateSubscription__
 *
 * To run a query within a React component, call `useOnShopperLocationUpdateSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnShopperLocationUpdateSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnShopperLocationUpdateSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnShopperLocationUpdateSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnShopperLocationUpdateSubscription, OnShopperLocationUpdateSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnShopperLocationUpdateSubscription, OnShopperLocationUpdateSubscriptionVariables>(OnShopperLocationUpdateDocument, options);
      }
export type OnShopperLocationUpdateSubscriptionHookResult = ReturnType<typeof useOnShopperLocationUpdateSubscription>;
export type OnShopperLocationUpdateSubscriptionResult = Apollo.SubscriptionResult<OnShopperLocationUpdateSubscription>;
export const GetShopperDocument = gql`
    query GetShopper($getShopperId: ID!) {
  getShopper(id: $getShopperId) {
    id
    avatar
    email
    password
    firstName
    lastName
    phone
    deliveryOption
    location
    latitude
    longitude
  }
}
    `;

/**
 * __useGetShopperQuery__
 *
 * To run a query within a React component, call `useGetShopperQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopperQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopperQuery({
 *   variables: {
 *      getShopperId: // value for 'getShopperId'
 *   },
 * });
 */
export function useGetShopperQuery(baseOptions: Apollo.QueryHookOptions<GetShopperQuery, GetShopperQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShopperQuery, GetShopperQueryVariables>(GetShopperDocument, options);
      }
export function useGetShopperLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShopperQuery, GetShopperQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShopperQuery, GetShopperQueryVariables>(GetShopperDocument, options);
        }
export type GetShopperQueryHookResult = ReturnType<typeof useGetShopperQuery>;
export type GetShopperLazyQueryHookResult = ReturnType<typeof useGetShopperLazyQuery>;
export type GetShopperQueryResult = Apollo.QueryResult<GetShopperQuery, GetShopperQueryVariables>;