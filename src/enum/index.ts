export enum ENV_TEMP { }
export interface ListItem{
  text: string;
  value: number | string
}
export interface FeedItem{
  name: string;
  id: number
}

export const TEMPERATURE_LIST: ListItem[] = [
  { text: "-20～-10", value: -2 },
  { text: "-10～0", value: -1 },
  { text: "0～10", value: 0 },
  { text: "10～20", value: 1 },
  { text: "20～30", value: 2 },
];
export const BREED_LIST: ListItem[]= [
  { text: "肉牛1号", value: 1 },
  { text: "肉牛2号", value: 2 },
];

export const INCREASE_LIST: ListItem[] = [
  {
    text: "1斤",
    value: 1,
  },
  {
    text: "2斤",
    value: 2,
  },
  {
    text: "3斤",
    value: 3,
  },
];

export const FEED_LIST: FeedItem[] = [
  { name: "青草", id: 1 },
  { name: "玉米", id: 2 },
  { name: "精料", id: 3 },
  { name: "混料", id: 4 },
  { name: "水", id: 5 },
];
