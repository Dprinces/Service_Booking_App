export interface ServiceProvider {
  id: number;
  name: string;
  phone: string;
  company: string;
  city: string;
  category: string;
  description?: string;
  website?: string;
  email?: string;
}

export interface Booking {
  id: string;
  serviceId: number;
  serviceName: string;
  providerName: string;
  date: string; // ISO string or formatted date
  time: string;
  notes?: string;
}
