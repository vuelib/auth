import Vue from 'vue';
import { Model } from '@kernel-js/api';
import { Config } from '@kernel-js/api/dist/Interfaces';
import { AxiosInstance, AxiosResponse } from 'axios';

class User extends Model {
  /**
   *
   *
   * @memberof User
   */
  readonly baseUrl = 'api/users';

  /**
   *
   *
   * @memberof User
   */
  readonly fields = ['name', 'email'];

  /**
   *
   *
   * @memberof User
   */
  readonly relationshipNames = [''];

  /**
   *
   *
   * @param {Config} config
   * @returns
   * @memberof User
   */
  protected request(config: Config): Promise<AxiosResponse> {
    return Vue.prototype.$request(config);
  }

  /**
   *
   *
   * @private
   * @returns
   * @memberof User
   */
  public me(): Promise<AxiosResponse> {
    return this.request({
      method: 'GET',
      url: 'api/me',
    });
  }
}

export default User;
