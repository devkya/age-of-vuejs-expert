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
			<button type="submit">로그인</button>
		</form>
		<p>{{ logMessage }}</p>
	</div>
</template>
<script>
import { loginUser } from '@/api/index';
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
	methods: {
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
			};
			const { data } = await loginUser(userData);
			this.logMessage = `${data.user.username} 님 환영합니다`;
			console.log(data);
			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>
