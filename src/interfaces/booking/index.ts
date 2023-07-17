import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  session_time: any;
  end_customer_id?: string;
  practitioner_id?: string;
  created_at?: any;
  updated_at?: any;

  user_booking_end_customer_idTouser?: UserInterface;
  user_booking_practitioner_idTouser?: UserInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  end_customer_id?: string;
  practitioner_id?: string;
}
