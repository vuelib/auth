import Vue from 'vue';
import User from '../entities/User';
import { isEmpty, get } from 'lodash';
import { AxiosResponse } from 'axios';

export default class LoginState extends Vue {
  /**
   *
   * @private
   * @type {string}
   * @memberof Login
   */
  private username = '';

  /**
   *
   * @private
   * @type {string}
   * @memberof Login
   */
  private password = '';

  /**
   *
   * @private
   * @type {Object}
   * @memberof Login
   */
  private authUser: any = {};

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
    return this.isGuest ? 'Olá, visitante.' : `${get(this.authUser, 'name', '')}`;
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
    if (isEmpty(event.target.value)) {
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
        this.authUser = result.data.data.attributes;

        window.localStorage.setItem('window', '1');
        window.dispatchEvent(new window.StorageEvent('storage'));
        this.$vueRouter.push('/');

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
      .then(() => {
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

    if (!this.isGuest) {
      this.username = this.authUser.login;
    }

    this.$auth
      .login({
        // username: this.username,
        // password: this.password,
        username: 'carlos2103t1@mailinator.com',
        password: 'carlos2103t1',
      })
      .then(() => {
        if (this.$auth.isAuthenticated()) {
          this.username = '';
          this.password = '';

          this.me();
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
    const loading = <HTMLDivElement>document.querySelector('.loading');
    loading.style.display = 'block';
  }

  /**
   *
   * @memberof Login
   */
  hideLoading() {
    const loading = <HTMLDivElement>document.querySelector('.loading');
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
