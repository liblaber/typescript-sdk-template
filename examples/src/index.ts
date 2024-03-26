import { Petstoresdk } from '@dwtestorg/petstorejs';

const sdk = new Petstoresdk({ accessToken: process.env.PETSTORESDK_ACCESS_TOKEN });

(async () => {
  try {
    const result = await sdk.pets.listPets();
    console.log(result);
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
})();
