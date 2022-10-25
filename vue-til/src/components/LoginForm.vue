<template>
	<v-card class="pa-3">
		<v-card-title class="text-h4 font-weight-black">로그인</v-card-title>

		<template>
			<validation-observer ref="observer" v-slot="{ invalid }">
				<v-form ref="form" submit="submitForm" lazy-validation>
					<v-text-field
						v-model="username"
						:rules="usernameValid"
						label="ID:"
						required
					></v-text-field>

					<v-text-field
						v-model="password"
						:counter="10"
						type="password"
						label="PWD:"
						required
					></v-text-field>

					<v-btn
						type="submit"
						color="success"
						:disabled="invalid"
						class="mr-4"
						@click="loginValidate"
					>
						로그인
					</v-btn>
				</v-form>
			</validation-observer>
		</template>
	</v-card>
</template>
<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
import { ValidationObserver } from 'vee-validate';
export default {
	components: { ValidationObserver },
	data() {
		return {
			username: '',
			password: '',
			logMessage: '',
			usernameValid: [
				v => !!v || 'E-mail is required',
				v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			],
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
		loginValidate() {
			console.log(this.$refs.form.validate());
		},
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
