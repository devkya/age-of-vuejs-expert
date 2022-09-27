<template>
	<div>
		<form @submit.prevent="submitForm">
			<div>
				<label for="username">id :</label>
				<input id="username" type="text" v-model="username" />
			</div>
			<div>
				<label for="password">pw :</label>
				<input id="password " type="text" v-model="password" />
			</div>
			<button :disabled="!isUsernameValid || !password" type="submit">
				로그인
			</button>
		</form>
		<p>{{ logMessage }}</p>
	</div>
</template>
<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
export default {
	components: {},
	data() {
		return {
			username: '',
			password: '',
			logMessage: '',
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				const userData = {
					username: this.username,
					password: this.password,
				};
				const { data } = await loginUser(userData);
				this.logMessage = `${data.user.username} 님 환영합니다`;
				console.log(data);
			} catch (error) {
				// 에러 핸들링할 코드
				// console.log(error.response.data);
				this.logMessage = error.response.data;
			} finally {
				this.initForm();
			}
		},

		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>
