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
  const input = {"id":-90015228,"name":"name","tag":"tag"};
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
    .listPets({ limit: -24866775 });
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
