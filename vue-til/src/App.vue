<template>
	<v-app>
		<v-app-bar color="primary" dense dark app>
			<v-toolbar-title class="font-weight-black"
				>Age Of VueJS Expert</v-toolbar-title
			>

			<v-spacer></v-spacer>

			<div>
				<v-btn to="/login">로그인</v-btn>
				<v-btn to="/signup">회원가입</v-btn>
			</div>
		</v-app-bar>
		<v-main>
			<v-container>
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
// import AppHeader from '@/components/common/AppHeader.vue';

export default {
	name: 'App',

	components: {
		// AppHeader,
	},

	data: () => ({
		//
	}),
};
</script>
