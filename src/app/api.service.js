export class ApiService {
    url = 'https://api.realworld.io/api';

    async signup(name, email, password) {
        const request = {
            user: {
                username: name,
                email: email,
                password: password
            }
        }

        const response = await fetch(`${this.url}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        });
        if (response.ok) {
            const json = await response.json();
            return json.user;
        }

    }

    async login(email, password) {
        const request = {
            user: {
                email: email,
                password: password
            }
        }

        const response = await fetch(`${this.url}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        });
        if (response.ok) {
            const json = await response.json();
            return json.user;
        }

    }

}