export type Regions = { regions: Region[] };

export type Region = { name: string; parent?: string; children: Region[] };

export type InvestableRegions = { regions: string[] };

export type Properties = {
    properties: Property[];
};

type Property = { address: string; region: string };

export type InvestableProperties = {
    [key: string]: Properties;
};

export type Tree = {
    name: string;
    children: Region[];
};
