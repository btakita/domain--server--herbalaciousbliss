import { person_tbl_columns, session_tbl } from '@rappstack/domain--server--auth/schema'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
/** @see {https://www.loginradius.com/blog/engineering/guest-post/nodejs-authentication-guide/} */
export * from '@rappstack/domain--server/schema/text_cache'
export { session_tbl }
export const person_tbl = sqliteTable('person', {
	...person_tbl_columns,
	google_openid: text('google_openid')
})
