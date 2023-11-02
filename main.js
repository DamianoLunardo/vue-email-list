const { createApp } = Vue;

createApp({
	data() {
		return {
			message: 'Email	:',
			mail: [],
		};
	},
	methods: {
		fetchName() {
			const requests = [];
			for (let i = 0; i < 10; i++) {
				requests.push(
					axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
				);
			}
			console.log('Recupero delle mail');

			// 
			Promise.all(requests)
				.then((responses) => {
					console.log('Tutte le email sono state recuperate con successo!');
					for (const response of responses) {
						const nome = response.data.response;
						this.mail.push(nome);
					}
					this.showEmails();
				})
		},
		showEmails() {
			console.log('Email recuperate:');
			console.log(this.mail);
		},
	},
	created() {
		this.fetchName();
	},
}).mount('#app');



