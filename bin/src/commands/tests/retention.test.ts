import { getBackupArchiveLimit } from '../src/core/retention';

test('uses default limit when undefined', () => {
  expect(getBackupArchiveLimit(undefined)).toBeGreaterThan(0);
});