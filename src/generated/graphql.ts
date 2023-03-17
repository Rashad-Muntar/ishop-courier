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
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<ModelOrderConnection>;
  password?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  token?: Maybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  token?: InputMaybe<Scalars['String']>;
};

export type CreateOrderInput = {
  _version?: InputMaybe<Scalars['Int']>;
  clientOrdersId?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['Int']>;
  endTime: Scalars['AWSDateTime'];
  id?: InputMaybe<Scalars['ID']>;
  isCancel: Scalars['Boolean'];
  isComplete: Scalars['Boolean'];
  onGoing: Scalars['Boolean'];
  shopperOrdersId?: InputMaybe<Scalars['ID']>;
  startTime: Scalars['AWSDateTime'];
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
  detail: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  orderProductsId?: InputMaybe<Scalars['ID']>;
  price: Scalars['Float'];
  productCategoryProductsId?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type CreateShopperInput = {
  _version?: InputMaybe<Scalars['Int']>;
  avatar: Scalars['String'];
  deliveryOption?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type CreateShopperIntentInput = {
  _version?: InputMaybe<Scalars['Int']>;
  driverLicense: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  idCard: Scalars['String'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  phone: Scalars['String'];
  vehicleInsurance: Scalars['String'];
  vehicleType: Scalars['String'];
};

export type CreateStoreInput = {
  _version?: InputMaybe<Scalars['Int']>;
  address: Scalars['String'];
  branches: Scalars['String'];
  categoryStoresId?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  headerImg?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  logo?: InputMaybe<Scalars['String']>;
  outletType: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  storeName?: InputMaybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};

export type CreateVendorIntentInput = {
  _version?: InputMaybe<Scalars['Int']>;
  address: Scalars['String'];
  branches: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  lastName: Scalars['String'];
  outletType: Scalars['String'];
  phone: Scalars['String'];
  storeName: Scalars['String'];
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

export type DeleteShopperInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteShopperIntentInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteStoreInput = {
  _version?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type DeleteVendorIntentInput = {
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
  location?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelClientConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelClientConditionInput>>>;
  password?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
  token?: InputMaybe<ModelStringInput>;
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
  id?: InputMaybe<ModelIdInput>;
  location?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelClientFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelClientFilterInput>>>;
  password?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
  token?: InputMaybe<ModelStringInput>;
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
  clientOrdersId?: InputMaybe<ModelIdInput>;
  code?: InputMaybe<ModelIntInput>;
  endTime?: InputMaybe<ModelStringInput>;
  isCancel?: InputMaybe<ModelBooleanInput>;
  isComplete?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelOrderConditionInput>;
  onGoing?: InputMaybe<ModelBooleanInput>;
  or?: InputMaybe<Array<InputMaybe<ModelOrderConditionInput>>>;
  shopperOrdersId?: InputMaybe<ModelIdInput>;
  startTime?: InputMaybe<ModelStringInput>;
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
  clientOrdersId?: InputMaybe<ModelIdInput>;
  code?: InputMaybe<ModelIntInput>;
  endTime?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  isCancel?: InputMaybe<ModelBooleanInput>;
  isComplete?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelOrderFilterInput>;
  onGoing?: InputMaybe<ModelBooleanInput>;
  or?: InputMaybe<Array<InputMaybe<ModelOrderFilterInput>>>;
  shopperOrdersId?: InputMaybe<ModelIdInput>;
  startTime?: InputMaybe<ModelStringInput>;
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
  detail?: InputMaybe<ModelStringInput>;
  image?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProductConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProductConditionInput>>>;
  orderProductsId?: InputMaybe<ModelIdInput>;
  price?: InputMaybe<ModelFloatInput>;
  productCategoryProductsId?: InputMaybe<ModelIdInput>;
  title?: InputMaybe<ModelStringInput>;
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
  detail?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  image?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProductFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProductFilterInput>>>;
  orderProductsId?: InputMaybe<ModelIdInput>;
  price?: InputMaybe<ModelFloatInput>;
  productCategoryProductsId?: InputMaybe<ModelIdInput>;
  title?: InputMaybe<ModelStringInput>;
};

export type ModelShopperConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelShopperConditionInput>>>;
  avatar?: InputMaybe<ModelStringInput>;
  deliveryOption?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  location?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelShopperConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelShopperConditionInput>>>;
  password?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
  username?: InputMaybe<ModelStringInput>;
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
  id?: InputMaybe<ModelIdInput>;
  location?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelShopperFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelShopperFilterInput>>>;
  password?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
  username?: InputMaybe<ModelStringInput>;
};

export type ModelShopperIntentConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelShopperIntentConditionInput>>>;
  driverLicense?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  idCard?: InputMaybe<ModelStringInput>;
  lastName?: InputMaybe<ModelStringInput>;
  location?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelShopperIntentConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelShopperIntentConditionInput>>>;
  phone?: InputMaybe<ModelStringInput>;
  vehicleInsurance?: InputMaybe<ModelStringInput>;
  vehicleType?: InputMaybe<ModelStringInput>;
};

export type ModelShopperIntentConnection = {
  __typename?: 'ModelShopperIntentConnection';
  items: Array<Maybe<ShopperIntent>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelShopperIntentFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelShopperIntentFilterInput>>>;
  driverLicense?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  idCard?: InputMaybe<ModelStringInput>;
  lastName?: InputMaybe<ModelStringInput>;
  location?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelShopperIntentFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelShopperIntentFilterInput>>>;
  phone?: InputMaybe<ModelStringInput>;
  vehicleInsurance?: InputMaybe<ModelStringInput>;
  vehicleType?: InputMaybe<ModelStringInput>;
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
  logo?: InputMaybe<ModelStringInput>;
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
  logo?: InputMaybe<ModelStringInput>;
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
  id?: InputMaybe<ModelSubscriptionIdInput>;
  location?: InputMaybe<ModelSubscriptionStringInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionClientFilterInput>>>;
  password?: InputMaybe<ModelSubscriptionStringInput>;
  phone?: InputMaybe<ModelSubscriptionStringInput>;
  token?: InputMaybe<ModelSubscriptionStringInput>;
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
  code?: InputMaybe<ModelSubscriptionIntInput>;
  endTime?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  isCancel?: InputMaybe<ModelSubscriptionBooleanInput>;
  isComplete?: InputMaybe<ModelSubscriptionBooleanInput>;
  onGoing?: InputMaybe<ModelSubscriptionBooleanInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionOrderFilterInput>>>;
  startTime?: InputMaybe<ModelSubscriptionStringInput>;
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
  detail?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  image?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionProductFilterInput>>>;
  price?: InputMaybe<ModelSubscriptionFloatInput>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionShopperFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionShopperFilterInput>>>;
  avatar?: InputMaybe<ModelSubscriptionStringInput>;
  deliveryOption?: InputMaybe<ModelSubscriptionStringInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  location?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionShopperFilterInput>>>;
  password?: InputMaybe<ModelSubscriptionStringInput>;
  phone?: InputMaybe<ModelSubscriptionStringInput>;
  username?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionShopperIntentFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionShopperIntentFilterInput>>>;
  driverLicense?: InputMaybe<ModelSubscriptionStringInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  firstName?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  idCard?: InputMaybe<ModelSubscriptionStringInput>;
  lastName?: InputMaybe<ModelSubscriptionStringInput>;
  location?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionShopperIntentFilterInput>>>;
  phone?: InputMaybe<ModelSubscriptionStringInput>;
  vehicleInsurance?: InputMaybe<ModelSubscriptionStringInput>;
  vehicleType?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionStoreFilterInput = {
  address?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionStoreFilterInput>>>;
  branches?: InputMaybe<ModelSubscriptionStringInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  headerImg?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  logo?: InputMaybe<ModelSubscriptionStringInput>;
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

export type ModelSubscriptionVendorIntentFilterInput = {
  address?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionVendorIntentFilterInput>>>;
  branches?: InputMaybe<ModelSubscriptionStringInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  firstName?: InputMaybe<ModelSubscriptionStringInput>;
  lastName?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionVendorIntentFilterInput>>>;
  outletType?: InputMaybe<ModelSubscriptionStringInput>;
  phone?: InputMaybe<ModelSubscriptionStringInput>;
  storeName?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelVendorIntentConditionInput = {
  address?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelVendorIntentConditionInput>>>;
  branches?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  lastName?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelVendorIntentConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelVendorIntentConditionInput>>>;
  outletType?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
  storeName?: InputMaybe<ModelStringInput>;
};

export type ModelVendorIntentConnection = {
  __typename?: 'ModelVendorIntentConnection';
  items: Array<Maybe<VendorIntent>>;
  nextToken?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['AWSTimestamp']>;
};

export type ModelVendorIntentFilterInput = {
  address?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelVendorIntentFilterInput>>>;
  branches?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  lastName?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelVendorIntentFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelVendorIntentFilterInput>>>;
  outletType?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelStringInput>;
  storeName?: InputMaybe<ModelStringInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  codeVerification: PhoneUser;
  createCategory?: Maybe<Category>;
  createClient?: Maybe<Client>;
  createOrder?: Maybe<Order>;
  createPaymentIntent: PaymentIntention;
  createProduct?: Maybe<Product>;
  createProductCategory?: Maybe<ProductCategory>;
  createShopper?: Maybe<Shopper>;
  createShopperIntent?: Maybe<ShopperIntent>;
  createStore?: Maybe<Store>;
  createVendorIntent?: Maybe<VendorIntent>;
  deleteCategory?: Maybe<Category>;
  deleteClient?: Maybe<Client>;
  deleteOrder?: Maybe<Order>;
  deleteProduct?: Maybe<Product>;
  deleteProductCategory?: Maybe<ProductCategory>;
  deleteShopper?: Maybe<Shopper>;
  deleteShopperIntent?: Maybe<ShopperIntent>;
  deleteStore?: Maybe<Store>;
  deleteVendorIntent?: Maybe<VendorIntent>;
  getVideoToken: Scalars['String'];
  phoneVerification?: Maybe<Scalars['String']>;
  shopperLogin: NewShopper;
  shopperSignUp: NewShopper;
  storeLogin: NewStore;
  storeSignup: NewStore;
  updateCategory?: Maybe<Category>;
  updateClient?: Maybe<Client>;
  updateOrder?: Maybe<Order>;
  updateProduct?: Maybe<Product>;
  updateProductCategory?: Maybe<ProductCategory>;
  updateShopper?: Maybe<Shopper>;
  updateShopperIntent?: Maybe<ShopperIntent>;
  updateStore?: Maybe<Store>;
  updateVendorIntent?: Maybe<VendorIntent>;
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


export type MutationCreateShopperArgs = {
  condition?: InputMaybe<ModelShopperConditionInput>;
  input: CreateShopperInput;
};


export type MutationCreateShopperIntentArgs = {
  condition?: InputMaybe<ModelShopperIntentConditionInput>;
  input: CreateShopperIntentInput;
};


export type MutationCreateStoreArgs = {
  condition?: InputMaybe<ModelStoreConditionInput>;
  input: CreateStoreInput;
};


export type MutationCreateVendorIntentArgs = {
  condition?: InputMaybe<ModelVendorIntentConditionInput>;
  input: CreateVendorIntentInput;
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


export type MutationDeleteShopperArgs = {
  condition?: InputMaybe<ModelShopperConditionInput>;
  input: DeleteShopperInput;
};


export type MutationDeleteShopperIntentArgs = {
  condition?: InputMaybe<ModelShopperIntentConditionInput>;
  input: DeleteShopperIntentInput;
};


export type MutationDeleteStoreArgs = {
  condition?: InputMaybe<ModelStoreConditionInput>;
  input: DeleteStoreInput;
};


export type MutationDeleteVendorIntentArgs = {
  condition?: InputMaybe<ModelVendorIntentConditionInput>;
  input: DeleteVendorIntentInput;
};


export type MutationGetVideoTokenArgs = {
  userName: Scalars['String'];
};


export type MutationPhoneVerificationArgs = {
  phoneNumber: Scalars['String'];
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


export type MutationUpdateShopperArgs = {
  condition?: InputMaybe<ModelShopperConditionInput>;
  input: UpdateShopperInput;
};


export type MutationUpdateShopperIntentArgs = {
  condition?: InputMaybe<ModelShopperIntentConditionInput>;
  input: UpdateShopperIntentInput;
};


export type MutationUpdateStoreArgs = {
  condition?: InputMaybe<ModelStoreConditionInput>;
  input: UpdateStoreInput;
};


export type MutationUpdateVendorIntentArgs = {
  condition?: InputMaybe<ModelVendorIntentConditionInput>;
  input: UpdateVendorIntentInput;
};

export type Order = {
  __typename?: 'Order';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  client?: Maybe<Client>;
  clientOrdersId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['Int']>;
  createdAt: Scalars['AWSDateTime'];
  endTime: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  isCancel: Scalars['Boolean'];
  isComplete: Scalars['Boolean'];
  onGoing: Scalars['Boolean'];
  products?: Maybe<ModelProductConnection>;
  shopper?: Maybe<Shopper>;
  shopperOrdersId?: Maybe<Scalars['ID']>;
  startTime: Scalars['AWSDateTime'];
  store?: Maybe<Store>;
  storeOrdersId?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['AWSDateTime'];
};


export type OrderProductsArgs = {
  filter?: InputMaybe<ModelProductFilterInput>;
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
  createdAt: Scalars['AWSDateTime'];
  detail: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  orderProductsId?: Maybe<Scalars['ID']>;
  price: Scalars['Float'];
  productCategory?: Maybe<ProductCategory>;
  productCategoryProductsId?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
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

export type Query = {
  __typename?: 'Query';
  getCategory?: Maybe<Category>;
  getClient?: Maybe<Client>;
  getOrder?: Maybe<Order>;
  getProduct?: Maybe<Product>;
  getProductCategory?: Maybe<ProductCategory>;
  getShopper?: Maybe<Shopper>;
  getShopperIntent?: Maybe<ShopperIntent>;
  getStore?: Maybe<Store>;
  getVendorIntent?: Maybe<VendorIntent>;
  hello: Scalars['String'];
  listCategories?: Maybe<ModelCategoryConnection>;
  listClients?: Maybe<ModelClientConnection>;
  listOrders?: Maybe<ModelOrderConnection>;
  listProductCategories?: Maybe<ModelProductCategoryConnection>;
  listProducts?: Maybe<ModelProductConnection>;
  listShopperIntents?: Maybe<ModelShopperIntentConnection>;
  listShoppers?: Maybe<ModelShopperConnection>;
  listStores?: Maybe<ModelStoreConnection>;
  listVendorIntents?: Maybe<ModelVendorIntentConnection>;
  shopperByEmail?: Maybe<ModelShopperConnection>;
  syncCategories?: Maybe<ModelCategoryConnection>;
  syncClients?: Maybe<ModelClientConnection>;
  syncOrders?: Maybe<ModelOrderConnection>;
  syncProductCategories?: Maybe<ModelProductCategoryConnection>;
  syncProducts?: Maybe<ModelProductConnection>;
  syncShopperIntents?: Maybe<ModelShopperIntentConnection>;
  syncShoppers?: Maybe<ModelShopperConnection>;
  syncStores?: Maybe<ModelStoreConnection>;
  syncVendorIntents?: Maybe<ModelVendorIntentConnection>;
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


export type QueryGetShopperArgs = {
  id: Scalars['ID'];
};


export type QueryGetShopperIntentArgs = {
  id: Scalars['ID'];
};


export type QueryGetStoreArgs = {
  id: Scalars['ID'];
};


export type QueryGetVendorIntentArgs = {
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


export type QueryListProductsArgs = {
  filter?: InputMaybe<ModelProductFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QueryListShopperIntentsArgs = {
  filter?: InputMaybe<ModelShopperIntentFilterInput>;
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


export type QueryListVendorIntentsArgs = {
  filter?: InputMaybe<ModelVendorIntentFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
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


export type QuerySyncProductsArgs = {
  filter?: InputMaybe<ModelProductFilterInput>;
  lastSync?: InputMaybe<Scalars['AWSTimestamp']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


export type QuerySyncShopperIntentsArgs = {
  filter?: InputMaybe<ModelShopperIntentFilterInput>;
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


export type QuerySyncVendorIntentsArgs = {
  filter?: InputMaybe<ModelVendorIntentFilterInput>;
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
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  orders?: Maybe<ModelOrderConnection>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
  username: Scalars['String'];
};


export type ShopperOrdersArgs = {
  filter?: InputMaybe<ModelOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type ShopperIntent = {
  __typename?: 'ShopperIntent';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  createdAt: Scalars['AWSDateTime'];
  driverLicense: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  idCard: Scalars['String'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  phone: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
  vehicleInsurance: Scalars['String'];
  vehicleType: Scalars['String'];
};

export type ShopperSignupInput = {
  avatar?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone: Scalars['String'];
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
  logo?: Maybe<Scalars['String']>;
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
  onCreateShopper?: Maybe<Shopper>;
  onCreateShopperIntent?: Maybe<ShopperIntent>;
  onCreateStore?: Maybe<Store>;
  onCreateVendorIntent?: Maybe<VendorIntent>;
  onDeleteCategory?: Maybe<Category>;
  onDeleteClient?: Maybe<Client>;
  onDeleteOrder?: Maybe<Order>;
  onDeleteProduct?: Maybe<Product>;
  onDeleteProductCategory?: Maybe<ProductCategory>;
  onDeleteShopper?: Maybe<Shopper>;
  onDeleteShopperIntent?: Maybe<ShopperIntent>;
  onDeleteStore?: Maybe<Store>;
  onDeleteVendorIntent?: Maybe<VendorIntent>;
  onUpdateCategory?: Maybe<Category>;
  onUpdateClient?: Maybe<Client>;
  onUpdateOrder?: Maybe<Order>;
  onUpdateProduct?: Maybe<Product>;
  onUpdateProductCategory?: Maybe<ProductCategory>;
  onUpdateShopper?: Maybe<Shopper>;
  onUpdateShopperIntent?: Maybe<ShopperIntent>;
  onUpdateStore?: Maybe<Store>;
  onUpdateVendorIntent?: Maybe<VendorIntent>;
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


export type SubscriptionOnCreateShopperArgs = {
  filter?: InputMaybe<ModelSubscriptionShopperFilterInput>;
};


export type SubscriptionOnCreateShopperIntentArgs = {
  filter?: InputMaybe<ModelSubscriptionShopperIntentFilterInput>;
};


export type SubscriptionOnCreateStoreArgs = {
  filter?: InputMaybe<ModelSubscriptionStoreFilterInput>;
};


export type SubscriptionOnCreateVendorIntentArgs = {
  filter?: InputMaybe<ModelSubscriptionVendorIntentFilterInput>;
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


export type SubscriptionOnDeleteShopperArgs = {
  filter?: InputMaybe<ModelSubscriptionShopperFilterInput>;
};


export type SubscriptionOnDeleteShopperIntentArgs = {
  filter?: InputMaybe<ModelSubscriptionShopperIntentFilterInput>;
};


export type SubscriptionOnDeleteStoreArgs = {
  filter?: InputMaybe<ModelSubscriptionStoreFilterInput>;
};


export type SubscriptionOnDeleteVendorIntentArgs = {
  filter?: InputMaybe<ModelSubscriptionVendorIntentFilterInput>;
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


export type SubscriptionOnUpdateShopperArgs = {
  filter?: InputMaybe<ModelSubscriptionShopperFilterInput>;
};


export type SubscriptionOnUpdateShopperIntentArgs = {
  filter?: InputMaybe<ModelSubscriptionShopperIntentFilterInput>;
};


export type SubscriptionOnUpdateStoreArgs = {
  filter?: InputMaybe<ModelSubscriptionStoreFilterInput>;
};


export type SubscriptionOnUpdateVendorIntentArgs = {
  filter?: InputMaybe<ModelSubscriptionVendorIntentFilterInput>;
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
  id: Scalars['ID'];
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type UpdateOrderInput = {
  _version?: InputMaybe<Scalars['Int']>;
  clientOrdersId?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['Int']>;
  endTime?: InputMaybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  isCancel?: InputMaybe<Scalars['Boolean']>;
  isComplete?: InputMaybe<Scalars['Boolean']>;
  onGoing?: InputMaybe<Scalars['Boolean']>;
  shopperOrdersId?: InputMaybe<Scalars['ID']>;
  startTime?: InputMaybe<Scalars['AWSDateTime']>;
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
  detail?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  orderProductsId?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  productCategoryProductsId?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateShopperInput = {
  _version?: InputMaybe<Scalars['Int']>;
  avatar?: InputMaybe<Scalars['String']>;
  deliveryOption?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateShopperIntentInput = {
  _version?: InputMaybe<Scalars['Int']>;
  driverLicense?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  idCard?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  vehicleInsurance?: InputMaybe<Scalars['String']>;
  vehicleType?: InputMaybe<Scalars['String']>;
};

export type UpdateStoreInput = {
  _version?: InputMaybe<Scalars['Int']>;
  address?: InputMaybe<Scalars['String']>;
  branches?: InputMaybe<Scalars['String']>;
  categoryStoresId?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  headerImg?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  logo?: InputMaybe<Scalars['String']>;
  outletType?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  storeName?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateVendorIntentInput = {
  _version?: InputMaybe<Scalars['Int']>;
  address?: InputMaybe<Scalars['String']>;
  branches?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  outletType?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  storeName?: InputMaybe<Scalars['String']>;
};

export type VendorIntent = {
  __typename?: 'VendorIntent';
  _deleted?: Maybe<Scalars['Boolean']>;
  _lastChangedAt: Scalars['AWSTimestamp'];
  _version: Scalars['Int'];
  address: Scalars['String'];
  branches: Scalars['String'];
  createdAt: Scalars['AWSDateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  outletType: Scalars['String'];
  phone: Scalars['String'];
  storeName: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
};

export type NewShoperPayload = {
  __typename?: 'newShoperPayload';
  avatar: Scalars['String'];
  deliveryOption: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  location: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type NewShopper = {
  __typename?: 'newShopper';
  shopper?: Maybe<NewShoperPayload>;
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


export type ShopperLoginMutation = { __typename?: 'Mutation', shopperLogin: { __typename?: 'newShopper', token?: string | null, shopper?: { __typename?: 'newShoperPayload', id: string, avatar: string, email: string, password: string, firstName: string, lastName: string, deliveryOption: string, location: string, phone: string } | null } };


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