# Petstoresdk Typescript SDK 1.0.0

The Typescript SDK for Petstoresdk.

- API version: 1.0.0
- SDK version: 1.0.0

## Table of Contents

- [Installation](#installation)
- [Authentication](#authentication)
  - [Access Token](#access-token)
- [API Endpoint Services](#api-endpoint-services)
- [API Models](#api-models)
- [Sample Usage](#sample-usage)
- [Petstoresdk Services](#petstoresdk-services)
- [License](#license)

## Installation

```sh
npm install petstoreJS
```

## Authentication

To see whether an endpoint needs a specific type of authentication check the endpoint's documentation.

### Access Token

The Petstoresdk API uses access tokens as a form of authentication. You can set the access token when initializing the SDK through the constructor:

```
const sdk = new Petstoresdk('YOUR_ACCESS_TOKEN')
```

Or through the `setAccessToken` method:

```
const sdk = new Petstoresdk()
sdk.setAccessToken('YOUR_ACCESS_TOKEN')
```

You can also set it for each service individually:

```
const sdk = new Petstoresdk()
sdk.pets.setAccessToken('YOUR_ACCESS_TOKEN')
```

## Sample Usage

Here is a simple program demonstrating usage of this SDK. It can also be found in the `examples/src/index.ts` file in this directory.

When running the sample make sure to use `npm install` to install all the dependencies.

```Typescript
import { Petstoresdk } from '@petstore/petstoreJS';


const sdk = new Petstoresdk({ accessToken: process.env.PETSTORESDK_ACCESS_TOKEN });

(async () => {
  try {
    const result = await sdk.pets
      .listPets();
    console.log(result);
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
})();


```

# Petstoresdk Services

A list of all services and services methods.

- Services

  - [Pets](#pets)

- [All Methods](#all-methods)

## Pets

| Method                      | Description             |
| :-------------------------- | :---------------------- |
| [createPets](#createpets)   | Create a pet            |
| [listPets](#listpets)       | List all pets           |
| [showPetById](#showpetbyid) | Info for a specific pet |

## All Methods

### **createPets**

Create a pet

- HTTP Method: POST
- Endpoint: /pets

**Required Parameters**

| input | object | Request body. |

**Return Type**

Returns a dict object.

**Example Usage Code Snippet**

```Typescript
import { Petstoresdk } from '@petstore/petstoreJS';


const sdk = new Petstoresdk({ accessToken: process.env.PETSTORESDK_ACCESS_TOKEN });

(async () => {
  const input = {"id":5141097,"name":"name","tag":"tag"};
  const result = await sdk.pets
    .createPets(input);
  console.log(result);
})();

```

### **listPets**

List all pets

- HTTP Method: GET
- Endpoint: /pets

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name  | Type   | Description                                    |
| :---- | :----- | :--------------------------------------------- |
| limit | number | How many items to return at one time (max 100) |

**Return Type**

Pets

**Example Usage Code Snippet**

```Typescript
import { Petstoresdk } from '@petstore/petstoreJS';


const sdk = new Petstoresdk({ accessToken: process.env.PETSTORESDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.pets
    .listPets({ limit: -82640509 });
  console.log(result);
})();

```

### **showPetById**

Info for a specific pet

- HTTP Method: GET
- Endpoint: /pets/{petId}

**Required Parameters**

| Name  | Type   | Description                   |
| :---- | :----- | :---------------------------- |
| petId | string | The id of the pet to retrieve |

**Return Type**

Pet

**Example Usage Code Snippet**

```Typescript
import { Petstoresdk } from '@petstore/petstoreJS';


const sdk = new Petstoresdk({ accessToken: process.env.PETSTORESDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.pets
    .showPetById('petId');
  console.log(result);
})();

```

## License

License: MIT. See license in LICENSE.
