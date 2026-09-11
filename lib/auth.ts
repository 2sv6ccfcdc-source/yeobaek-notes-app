import { createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';
const COOKIE_NAME='yeobaek_session', PAYLOAD='authenticated';
function signature(){const secret=process.env.AUTH_SECRET;if(!secret)throw new Error('AUTH_SECRET is not configured');return createHmac('sha256',secret).update(PAYLOAD).digest('hex')}
export function passwordMatches(input:string){const expected=process.env.APP_PASSWORD??'';const a=Buffer.from(input),b=Buffer.from(expected);return a.length===b.length&&timingSafeEqual(a,b)}
export async function isAuthenticated(){const value=(await cookies()).get(COOKIE_NAME)?.value??'',expected=signature(),a=Buffer.from(value),b=Buffer.from(expected);return a.length===b.length&&timingSafeEqual(a,b)}
export async function createSession(){(await cookies()).set(COOKIE_NAME,signature(),{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/',maxAge:2592000})}
export async function clearSession(){(await cookies()).set(COOKIE_NAME,'',{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/',maxAge:0})}
