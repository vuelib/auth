import Vue from 'vue';
import User from '../entities/User';
import { AxiosResponse } from 'axios';

export default class LoginState extends Vue {
  /**
   *
   * @private
   * @type {string}
   * @memberof Login
   */
  private username: string = '';

  /**
   *
   * @private
   * @type {string}
   * @memberof Login
   */
  private password: string = '';

  /**
   *
   * @private
   * @type {string}
   * @memberof Login
   */
  private authUser: string = '';

  /**
   *
   * @private
   * @type {User}
   * @memberof Login
   */
  private user: User;

  /**
   *Creates an instance of Login.
   * @memberof Login
   */
  constructor() {
    super();
    this.user = new User();

    this.me();
    this.listUsers();
  }

  /**
   *
   * @readonly
   * @memberof Login
   */
  get name() {
    return this.isGuest ? 'Bem vindo, visitante.' : `Olá novamente, ${this.authUser}.`;
  }

  /**
   *
   * @readonly
   * @memberof Login
   */
  get isGuest() {
    return this.$auth.isGuest();
  }

  /**
   *
   * @private
   * @param {*} event
   * @memberof Login
   */
  private isFilled(event: any): void {
    if (event.target.value.includes('filled')) {
      event.target.classList.remove('filled');
    } else {
      event.target.classList.add('filled');
    }
  }

  /**
   *
   * @private
   * @memberof Login
   */
  private async me() {
    this.showLoading();

    this.user
      .me()
      .then((result: AxiosResponse) => {
        this.authUser = result.data.data.attributes.name;
        this.onSuccess();
      })
      .catch(() => {
        this.onFail();
      });
  }

  /**
   *
   * @private
   * @memberof Login
   */
  private async listUsers() {
    this.user
      .paginate(5, 1)
      .getEntity()
      .then((result: AxiosResponse) => {
        this.authUser = result.data.data.attributes.name;
        this.onSuccess();
      })
      .catch(() => {
        this.onFail();
      });
  }

  /**
   *
   * @private
   * @memberof Login
   */
  private login(): void {
    this.showLoading();

    this.$auth
      .login({
        username: this.username,
        password: this.password,
      })
      .then(() => {
        if (this.$auth.isAuthenticated()) {
          this.username = '';
          this.password = '';
          setTimeout(() => {
            this.me();
          }, 2500);
        }
      });
  }

  /**
   *
   * @private
   * @memberof Login
   */
  private logout(): void {
    this.$auth
      .logout()
      .then(() => {
        this.onSuccess();
      })
      .catch(() => {
        this.onFail();
      });
  }

  /**
   *
   * @memberof Login
   */
  showLoading() {
    const loading = <HTMLDivElement> document.querySelector('.loading');
    loading.style.display = 'block';
  }

  /**
   *
   * @memberof Login
   */
  hideLoading() {
    const loading = <HTMLDivElement> document.querySelector('.loading');
    loading.style.display = 'none';
  }

  /**
   *
   * @memberof Login
   */
  onSuccess() {
    this.hideLoading();
    this.$forceUpdate();
  }

  /**
   *
   * @memberof Login
   */
  onFail() {
    this.hideLoading();
    this.$forceUpdate();
  }
}
