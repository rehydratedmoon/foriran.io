import cookie from 'cookie';
import supabase from '@db/supabase';


export async function getUser(req: Request) {
  const c = cookie.parse(req.headers.get('cookie') ?? '');
  if (!c.sbat) return null;

  const sessionData = await supabase.auth.getSession();
  const user = sessionData.session.user;
  if (!user || user.role !== 'authenticated') return null;
  return user;
}

export async function isLoggedIn(req: Request) {
  return (await getUser(req)) != null;
}
