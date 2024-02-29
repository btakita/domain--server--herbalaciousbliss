import { import_meta_env_ } from 'ctx-core/env'
export function herbaliciousbliss_server_env_() {
	const env = import_meta_env_()
	if (!env.ADMIN_EMAILS) throw Error('ADMIN_EMAILS|missing')
	if (!env.AUTH_SECRET) throw Error('AUTH_SECRET|missing')
	if (!env.AUTH_GITHUB_ID) throw Error('AUTH_GITHUB_ID|missing')
	if (!env.AUTH_GITHUB_SECRET) throw Error('AUTH_GITHUB_SECRET|missing')
	if (!env.AUTH_GOOGLE_ID) throw Error('AUTH_GOOGLE_ID|missing')
	if (!env.AUTH_GOOGLE_SECRET) throw Error('AUTH_GOOGLE_SECRET|missing')
	if (!env.GOOGLE_API_KEY) throw Error('GOOGLE_API_KEY|missing')
	return env as herbaliciousbliss_server_env_T
}
export type herbaliciousbliss_server_env_T = {
	ADMIN_EMAILS:string
	AUTH_SECRET:string
	AUTH_GITHUB_ID:string
	AUTH_GITHUB_SECRET:string
	AUTH_GOOGLE_ID:string
	AUTH_GOOGLE_SECRET:string
	GOOGLE_API_KEY:string
}
