# Tree Data Structure Exercise

## Exercise

Using the simulated API endpoints write a function which retrieves
a list of investable properties. Any property belonging to an
investable region, or an investable region's descendant in the
regions-tree, is considered investable.

## Running solution

### Prerequisites

-   Node v10.x
-   Docker

### Dev mode

```bash
yarn && yarn dev
```

### Without compiling

```bash
yarn && yarn start
```

### With compiling

```bash
yarn && yarn build && yarn build:start
```

### Tests

```bash
yarn && yarn test
```

### Run in node 10.16 environment

```bash
docker build -t tree-data .
docker run tree-data
```

## Solution

The developed solution works as follows:

1. Identifies if input region is within the investible region list
2. For the input region, create a tree data structure with all subregions set as child records
3. Traverse the tree data structure to identify all subregions for input region
4. Call `getPropertiesByRegion` method with identified subregions

| The `createTree` function was derived from a blog post by [Nick Scialli](https://typeofnan.dev/an-easy-way-to-build-a-tree-with-object-references/).

## Things to improve

-   Error trapping on API failures
-   Create simple cache of slow APIs
-   Add more tests
