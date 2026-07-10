// src/services/contactService.ts
import { supabase } from './supabase';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export const submitContact = async (data: ContactFormData) => {
  const { error } = await supabase.from('contacts').insert([data]);
  if (error) throw new Error(error.message);
};

export interface NewsletterData {
  email: string;
  name?: string;
}

export const subscribeNewsletter = async (data: NewsletterData) => {
  const { error } = await supabase.from('newsletter_subscribers').insert([{
    ...data,
    source: 'landing_page',
  }]);
  if (error) {
    if (error.code === '23505') { // unique_violation
      throw new Error('Este email já está inscrito.');
    }
    throw new Error(error.message);
  }
};
