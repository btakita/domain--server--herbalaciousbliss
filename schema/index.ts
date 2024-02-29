import { google_person_tbl, session_tbl } from '@rappstack/domain--server--auth/schema'
/** @see {https://www.loginradius.com/blog/engineering/guest-post/nodejs-authentication-guide/} */
export * from '@rappstack/domain--server/schema/text_cache'
export { session_tbl }
export const person_tbl = google_person_tbl
