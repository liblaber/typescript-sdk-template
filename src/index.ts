import { PetsService } from './services/pets/Pets';

export * from './models';

export * as PetsModels from './services/pets';

type Config = {
  accessToken?: string;
};

export * from './http/errors';

export class Petstoresdk {
  public pets: PetsService;

  constructor({ accessToken = '' }: Config) {
    this.pets = new PetsService(accessToken);
  }

  /**
   * Sets the baseUrl that the SDK will use for its requests.
   * @param {string} url
   */
  setBaseUrl(url: string): void {
    this.pets.setBaseUrl(url);
  }

  /**
   * Sets the access token used to authenticate.
   * @param {string} accessToken
   */
  setAccessToken(accessToken: string) {
    this.pets.setAccessToken(accessToken);
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
