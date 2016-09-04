Module.register("welcome", {
	// Default module config 
	defaults: {
		welcome_message: "Welcome to RFLCT. Please say your name"
	},

	// Start sequence 
	start: function() {
		this.getDom()
		this.logInUser()
	},

	logInUser: function() {

	},

	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.welcome_message;

		return wrapper;
	}
})