import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { exec } from '../utils/exec';
import { decryptArchive } from '../core/encryption';
import { logger } from '../logger';
import { withProgress } from '../progress/progress';

export async function runRestore(
  archive: string,
  opts: any,
  global: any
) {
  logger.configure(global.json);

  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'appsmith-restore-'));

  let archivePath = archive;

  if (opts.decrypt) {
    archivePath = await decryptArchive(archive);
  }

  await withProgress('Extracting backup', async bar => {
    await exec(['tar', '-xzf', archivePath, '-C', tempDir]);
    bar.increment();
  });

  logger.info('Restore extracted. Manual restore steps may be required.');
}