const { createApp } = Vue;

createApp({
	data() {
		return {
			message: 'Email	:',
			mails: [],
			mailCount: 10,
		};
	},
	methods: {
		fetchEmails() {
			for (let i = 0; i < this.mailCount; i++) {
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
					.then(response => {
						const mail = response.data.response;
						this.mails.push(mail);
					});
			}
		},
	},
	created() {
		this.fetchEmails();
	},
}).mount('#app');



