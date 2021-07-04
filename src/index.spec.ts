import { createTree } from './';

const regions = [
    { name: 'blackrod', parent: 'bolton' },
    { name: 'bolton', parent: 'manchester' },
    { name: 'bury', parent: 'manchester' },
    { name: 'camden', parent: 'central london' },
    { name: 'camden town', parent: 'camden' },
    { name: 'central london', parent: 'london' },
    { name: 'covent garden', parent: 'westminster' },
    { name: 'croydon', parent: 'south-west london' },
    { name: 'east london', parent: 'london' },
    { name: 'farnworth', parent: 'bolton' },
    { name: 'hatton garden', parent: 'camden' },
    { name: 'heywood', parent: 'rochdale' },
    { name: 'holborn', parent: 'camden' },
    { name: 'kensington and chelsea', parent: 'london' },
    { name: 'kew', parent: 'richmond upon thames' },
    { name: 'kingston upon thames', parent: 'south-west london' },
    { name: 'manchester', parent: '' },
    { name: 'middleton', parent: 'rochdale' },
    { name: 'north london', parent: 'london' },
    { name: 'oldham', parent: 'manchester' },
    { name: 'richmond upon thames', parent: 'south-west london' },
    { name: 'rochdale', parent: 'manchester' },
    { name: 'south london', parent: 'london' },
    { name: 'south-west london', parent: 'london' },
    { name: 'twickenham', parent: 'richmond upon thames' },
    { name: 'west london', parent: 'london' },
    { name: 'westminster', parent: 'central london' },
    { name: 'wimbledon', parent: 'south-west london' },
];

describe('createTree', () => {
    it('should return a full tree when at the root level', () => {
        const result = createTree('london', regions);

        expect(result).toStrictEqual({
            name: 'london',
            children: [
                {
                    name: 'central london',
                    parent: 'london',
                    children: [
                        {
                            name: 'camden',
                            parent: 'central london',
                            children: [
                                {
                                    name: 'camden town',
                                    parent: 'camden',
                                },
                                {
                                    name: 'hatton garden',
                                    parent: 'camden',
                                },
                                {
                                    name: 'holborn',
                                    parent: 'camden',
                                },
                            ],
                        },
                        {
                            name: 'westminster',
                            parent: 'central london',
                            children: [
                                {
                                    name: 'covent garden',
                                    parent: 'westminster',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'east london',
                    parent: 'london',
                },
                {
                    name: 'kensington and chelsea',
                    parent: 'london',
                },
                {
                    name: 'north london',
                    parent: 'london',
                },
                {
                    name: 'south london',
                    parent: 'london',
                },
                {
                    name: 'south-west london',
                    parent: 'london',
                    children: [
                        {
                            name: 'croydon',
                            parent: 'south-west london',
                        },
                        {
                            name: 'kingston upon thames',
                            parent: 'south-west london',
                        },
                        {
                            name: 'richmond upon thames',
                            parent: 'south-west london',
                            children: [
                                {
                                    name: 'kew',
                                    parent: 'richmond upon thames',
                                },
                                {
                                    name: 'twickenham',
                                    parent: 'richmond upon thames',
                                },
                            ],
                        },
                        {
                            name: 'wimbledon',
                            parent: 'south-west london',
                        },
                    ],
                },
                {
                    name: 'west london',
                    parent: 'london',
                },
            ],
        });
    });

    it('should return the tree for the specified root level', () => {
        const result = createTree('camden', regions);

        expect(result).toStrictEqual({
            name: 'camden',
            children: [
                {
                    name: 'camden town',
                    parent: 'camden',
                },
                {
                    name: 'hatton garden',
                    parent: 'camden',
                },
                {
                    name: 'holborn',
                    parent: 'camden',
                },
            ],
        });
    });
});
