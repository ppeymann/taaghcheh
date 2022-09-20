export interface furtherInfo {
  grouping: string;
  page: number;
  finalPrice: number;
  typeofFile: string;
  shabak: number;
}
export type infoBook = {
  translator: string;
  price: number;
  rate: number;
  publication: string;
  finalInfo: furtherInfo;
};

export type swiper2 = {
  id: number;
  src: string;
  title: string;
  author: string;
  info?: infoBook;
};
