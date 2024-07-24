// This TS version of the Task model shows how to create Realm objects using
// TypeScript syntax, using `@realm/babel-plugin`
// (https://github.com/realm/realm-js/blob/main/packages/babel-plugin/).
//
// If you are not using TypeScript and `@realm/babel-plugin`, you instead need
// to defining a schema on the class - see `Task.js` in the Realm example app
// for an example of this.

import Realm, { BSON, Types, List } from "realm";

// To use a class as a Realm object type in Typescript with the `@realm/babel-plugin` plugin,
// simply define the properties on the class with the correct type and the plugin will convert
// it to a Realm schema automatically.
export class Task extends Realm.Object {
  _id: BSON.ObjectId = new BSON.ObjectId();
  description!: string;
  isComplete: boolean = false;
  createdAt: Date = new Date();
  userId!: string;

  static primaryKey = "_id";
}

export class tracking_route_routeData extends Realm.Object {
  _id: BSON.ObjectId = new BSON.ObjectId();
  latitude?: number;
  longitude?: number;
  embedded: true;
  static primaryKey = "_id";
}

export class way_point extends Realm.Object {
  _id: BSON.ObjectId = new BSON.ObjectId();
  createdAt!: Date;
  description!: string;
  dislikes!: number;
  lat!: string;
  likes!: number;
  lon!: string;
  name!: string;
  routeId: BSON.ObjectId = new BSON.ObjectId();
  updatedAt!: Date;
  userId: BSON.ObjectId = new BSON.ObjectId();
  wayTypeId: BSON.ObjectId = new BSON.ObjectId();

  static primaryKey = "_id";
}

export class TrackingRoute extends Realm.Object {
  _id: BSON.ObjectId = new BSON.ObjectId();
  // averageTime!: string;
  // climbingDifficulty!: string;
  createdAt: Date = new Date();
  // description!: string;
  // difficulty!: number;
  // distance!: number;
  // estimatedDays!: number;
  // heightPoint!: number;
  // name!: string;
  // resupply!: string;
  // shortDescription!: string;
  // singleTrack!: string;
  // technicalDifficulty!: string;
  // totalAscent!: string;
  // unplaved!: string;
  // updatedAt: Date = new Date();
  sliderUrls!: Realm.List<string>;
  //routeData: Realm.List<{ latitude?: number; longitude?: number }>;
  static primaryKey = "_id";
}
