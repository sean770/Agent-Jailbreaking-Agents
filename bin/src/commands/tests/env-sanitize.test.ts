import { removeSensitiveEnvData } from '../src/core/filesystem';

test('removes encryption and mongo vars', () => {
  const input = `
APPSMITH_ENCRYPTION_PASSWORD=secret
FOO=bar
APPSMITH_MONGODB_URI=mongo
`;

  const output = removeSensitiveEnvData(input);
  expect(output).toContain('FOO=bar');
  expect(output).not.toContain('ENCRYPTION');
  expect(output).not.toContain('MONGODB');
});