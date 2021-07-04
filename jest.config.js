module.exports = {
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'html', 'cobertura'],
    preset: 'ts-jest',
    roots: ['<rootDir>/src'],
    testEnvironment: 'node',
};
