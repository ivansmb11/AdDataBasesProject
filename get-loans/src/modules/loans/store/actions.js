import loansApi from '@/api/loansApi'

export const loadLoans = async({ commit }) => {

	const token = localStorage.getItem('token')

	try {
		const { data } = await loansApi.get('', {
			headers: {
				'x-token': token
			}
		})
	
		commit( 'setLoans', data.loans )
	
		return { ok: true }
	
	} catch ({ response }) {
		return { ok: false, msg: response.data.msg }
	}

}
