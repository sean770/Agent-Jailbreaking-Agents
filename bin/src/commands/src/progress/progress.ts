import cliProgress from 'cli-progress';

export async function withProgress<T>(
  label: string,
  fn: (bar: cliProgress.SingleBar) => Promise<T>
): Promise<T> {
  const bar = new cliProgress.SingleBar({
    format: `${label} |{bar}| {percentage}%`
  });

  bar.start(1, 0);
  const result = await fn(bar);
  bar.update(1);
  bar.stop();

  return result;
}