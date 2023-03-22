import '@testing-library/jest-dom';
import { jestPreviewConfigure } from 'jest-preview';

import { server } from './mocks/server.js';
jestPreviewConfigure({ autoPreview: true });

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
