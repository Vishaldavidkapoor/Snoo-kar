export type BookingData = {
  fromTime: string;
  toTime: string;
  bookingID: string;
  bookingDate: Date,
  paymentID?: string;
  paymentAmount?: number;
  game: string;
  totalTime: string;
  price: number;
};