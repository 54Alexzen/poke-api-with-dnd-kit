import { VITE_API_URL } from "../config/environments-config";

interface RequestOptions extends RequestInit {
  params?: Record<string, string>;
}

const BASE_URL = VITE_API_URL;

const buildUrl = (path: string, params?: Record<string, string>): string => {
  const url = new URL(`${BASE_URL}${path}`);

  if (params) {
    for (const [keyof, value] of Object.entries(params)) {
      url.searchParams.append(keyof, value);
    }
  }

  return url.toString();
};

const request = async <T>(
  method: string,
  path: string,
  options: RequestOptions = {}
): Promise<T> => {
  const { params, ...fetchOptions } = options;
  const url = buildUrl(path, params);

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  try {
    const response = await fetch(url, {
      method,
      headers,
      ...fetchOptions,
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage =
        data.message || `Error ${response.status}: ${response.statusText}`;
      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    console.error("API request error:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Error de conexión");
  }
};

export const API_SERVICE = {
  GET: <T>(path: string, params?: Record<string, string>): Promise<T> => {
    return request<T>("GET", path, { params });
  },
};
