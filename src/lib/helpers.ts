export async function getSlug(params: { slug: string } | Promise<{ slug: string }>) {
  // Проверяем, является ли params промисом:
  if (typeof (params as Promise<unknown>).then === 'function') {
    return await params;
  }
  return params as { slug: string };
}
