export function herbaliciousbliss_server_env_() {
	const env = import.meta.env
	if (!env.ADMIN_EMAILS) throw Error('ADMIN_EMAILS|missing')
	if (!env.GOOGLE_API_KEY) throw Error('GOOGLE_API_KEY|missing')
	return env as herbaliciousbliss_server_env_T
}
export type herbaliciousbliss_server_env_T = {
	ADMIN_EMAILS:string
	GOOGLE_API_KEY:string
}
