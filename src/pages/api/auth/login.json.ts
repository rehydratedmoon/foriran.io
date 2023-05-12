import supabase from '@db/supabase';
import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ params, request }) => {
  const { email } = await request.json();
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    // options: {
    //   emailRedirectTo: 'https://example.com/welcome',
    // },
  });
  if (error) {
    return { body: JSON.stringify({ status: 403, data: null, message: error instanceof Error ? error.message : '' }) };
  }
  return { body: JSON.stringify({ status: 201, data }) };
};
