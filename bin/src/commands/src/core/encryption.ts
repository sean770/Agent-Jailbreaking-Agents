import { exec } from '../utils/exec';
import readlineSync from 'readline-sync';

export async function decryptArchive(archive: string): Promise<string> {
  const password = readlineSync.question('Enter decryption password: ', {
    hideEchoBack: true
  });

  const out = archive.replace(/\.enc$/, '');

  await exec(
    ['openssl', 'enc', '-d', '-aes-256-cbc', '-pbkdf2', '-in', archive, '-out', out, '-pass', 'stdin'],
    { stdin: password }
  );

  return out;
}