export type BookingData = {
  fromTime: string;
  toTime: string;
  bookingID: string;
  paymentID?: string;
  paymentAmount?: number;
  game: string;
  totalTime: string;
  price: number;
};