import { newElement } from "../utils/new-element";


export class AppView {
    element;
    switchToSignupCallback;
    switchToLoginCallback;
    switchToLogoutCallback;
    signupCallback;


    constructor(element) {
        this.element = element;
    }

    refresh(model) {
        this.element.innerHTML = "";

        this.element.append(this.createHeaderElement(model));

        this.element.append(this.createMainElement(model));
    } // Перерисовывает view'ху

    createHeaderElement(model) {
        const header = newElement("section", "header");
        if (model.state === 'signup') {
            const login = newElement("button", "header__login", "login");
            login.addEventListener("click", () => {
                this.emitSwitchToLogin();
            });
            header.append(login);
        }

        if (model.state === 'login') {
            const signup = newElement("button", "header__signup", "signup");
            signup.addEventListener("click", () => {
                this.emitSwitchToSignup();
            });
            header.append(signup);
        }

        if (model.state === 'auth') {
            const logout = newElement("button", "header__logout", "logout");
            logout.addEventListener("click", () => {
                this.emitSwitchToLogout();
            });
            header.append(logout);
        }
        return header;
    }

    createMainElement(model) {
        const main = newElement("section", "main");
        if (model.state === "signup") {
            main.append(this.createSignupElement());
        }
        if (model.state === "login") {
            main.append(this.createLoginElement());
        }
        if (model.state === "auth") {

        }
        return main;
    }

    subscribeSwitchToSignup(callback) {
        this.switchToSignupCallback = callback;
    }

    emitSwitchToSignup() {
        if (this.switchToSignupCallback !== undefined) {
            this.switchToSignupCallback();
        }
    }

    subscribeSwitchToLogin(callback) {
        this.switchToLoginCallback = callback;
    }

    emitSwitchToLogin() {
        if (this.switchToLoginCallback !== undefined) {
            this.switchToLoginCallback();
        }
    }

    subscribeSwitchToLogout(callback) {
        this.switchToLogoutCallback = callback;
    }

    emitSwitchToLogout() {
        if (this.switchToLogoutCallback !== undefined) {
            this.switchToLogoutCallback();
        }
    }

    createSignupElement() {
        const signup = newElement("section", "form");
        const header = newElement("div", "form__header", "Registration");
        signup.append(header);
        const body = newElement("div", "form__body");
        const nameLabel = newElement("div", "form-label", "Name:");
        body.append(nameLabel);
        const nameInput = newElement("input", "form-input");
        body.append(nameInput);
        const emailLabel = newElement("div", "form-label", "Email:");
        body.append(emailLabel);
        const emailInput = newElement("input", "form-input");
        body.append(emailInput);
        const passwordLabel = newElement("div", "form-label", "Password:");
        body.append(passwordLabel);
        const passwordInput = newElement("input", "form-input");
        body.append(passwordInput);
        const confirmLabel = newElement("div", "form-label", "Confirm:");
        body.append(confirmLabel);
        const confirmInput = newElement("input", "form-input");
        body.append(confirmInput);
        signup.append(body);
        const footer = newElement("div", "form__footer");
        const submit = newElement("button", "form__button", "submit");
        submit.addEventListener("click", () => {
            const name = nameInput.value;
            const email = emailInput.value;
            const password = passwordInput.value;

            this.emitSignup(name, email, password);

        })
        footer.append(submit);
        signup.append(footer);
        return signup;
    }

    createLoginElement() {
        const login = newElement("section", "form");
        const header = newElement("div", "form__header", "Login");
        login.append(header);
        const body = newElement("div", "form__body");
        const loginLabel = newElement("div", "form-label", "Login:");
        body.append(loginLabel);
        const loginInput = newElement("input", "form-input");
        body.append(loginInput);
        const passwordLabel = newElement("div", "form-label", "Password:");
        body.append(passwordLabel);
        const passwordInput = newElement("input", "form-input");
        body.append(passwordInput);
        login.append(body);
        const footer = newElement("div", "form__footer");
        const submit = newElement("button", "form__button", "submit");
        // submit.addEventListener("click", () => {
        //     const login = loginInput.value;
        //     const password = passwordInput.value;

        //     this.emitRegistration(login, password);

        // })
        footer.append(submit);
        login.append(footer);
        return login;
    }

    subscribeSignup(callback) {
        this.signupCallback = callback;
    }

    emitSignup(name, email, password) {
        if (this.signupCallback !== undefined) {
            this.signupCallback(name, email, password);
        }
    }



}