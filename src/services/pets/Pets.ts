import BaseService from '../../BaseService';

import CustomHook from '../../hooks/CustomHook';
import { Request } from '../../hooks/Hook';

import { Pets } from './models/Pets';
import { Error } from './models/Error';
import { Pet } from './models/Pet';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

const hook: CustomHook = new CustomHook();

export class PetsService extends BaseService {
  /**
   * @summary List all pets

   * @param optionalParams - Optional parameters
   * @param optionalParams.limit - How many items to return at one time (max 100)
   * @returns {Promise<Pets>} - The promise with the result
   */
  async listPets(optionalParams: { limit?: number } = {}): Promise<Pets> {
    const { limit } = optionalParams;

    const queryParams: string[] = [];
    const headers: { [key: string]: string } = {};
    if (limit) {
      queryParams.push(serializeQuery('form', true, 'limit', limit));
    }
    const urlEndpoint = '/pets';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const request: Request = { method: 'GET', url: finalUrl, headers };
    await hook.beforeRequest(request);
    const response: any = await this.httpClient.get(
      request.url,
      {},
      {
        ...this.getAuthorizationHeader(),
        ...request.headers,
      },
      true,
    );
    await hook.afterResponse(
      { method: 'GET', url: request.url, headers: request.headers },
      { data: response.data, headers: response.headers, status: response.status },
    );
    const responseModel = response.data as Pets;
    return responseModel;
  }

  /**
   * @summary Create a pet

   * @returns {Promise<any>} - The promise with the result
   */
  async createPets(input: Pet): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-Type': 'application/json' };
    const urlEndpoint = '/pets';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const request: Request = { method: 'POST', url: finalUrl, input, headers };
    await hook.beforeRequest(request);
    const response: any = await this.httpClient.post(
      request.url,
      request.input,
      {
        ...this.getAuthorizationHeader(),
        ...request.headers,
      },
      true,
    );
    await hook.afterResponse(
      { method: 'POST', url: request.url, input: request.input, headers: request.headers },
      { data: response.data, headers: response.headers, status: response.status },
    );
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary Info for a specific pet

   * @param petId The id of the pet to retrieve
   * @returns {Promise<Pet>} - The promise with the result
   */
  async showPetById(petId: string): Promise<Pet> {
    if (petId === undefined) {
      throw new Error('The following parameter is required: petId, cannot be empty or blank');
    }
    const headers: { [key: string]: string } = {};
    let urlEndpoint = '/pets/{petId}';
    urlEndpoint = urlEndpoint.replace('{petId}', serializePath('simple', false, petId, undefined));
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const request: Request = { method: 'GET', url: finalUrl, headers };
    await hook.beforeRequest(request);
    const response: any = await this.httpClient.get(
      request.url,
      {},
      {
        ...this.getAuthorizationHeader(),
        ...request.headers,
      },
      true,
    );
    await hook.afterResponse(
      { method: 'GET', url: request.url, headers: request.headers },
      { data: response.data, headers: response.headers, status: response.status },
    );
    const responseModel = response.data as Pet;
    return responseModel;
  }
}
