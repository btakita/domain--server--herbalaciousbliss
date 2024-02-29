import { session_tbl } from '@rappstack/domain--server--auth/schema'
import { person_tbl } from '../schema/index.js'
export * from '@rappstack/domain--server--auth/auth'
declare module '@rappstack/domain--server--auth/auth' {
	interface register_T {
		session_tbl:typeof session_tbl
		person_tbl:typeof person_tbl
	}
}
