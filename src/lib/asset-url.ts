const ASSET_BASE_URL = "https://pub-770ea3447a9240a980fcaeb25bcef091.r2.dev";

export function assetUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${ASSET_BASE_URL}${normalized}`;
}
