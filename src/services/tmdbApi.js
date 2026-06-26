const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

export const imageSizes = {
  poster: 'w500',
  backdrop: 'original',
}

const options = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
}

export function getPosterUrl(path) {
  return path ? `${IMAGE_BASE_URL}/${imageSizes.poster}${path}` : null
}

export function getBackdropUrl(path) {
  return path ? `${IMAGE_BASE_URL}/${imageSizes.backdrop}${path}` : null
}

export async function fetchMovies(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`, options)

  if (!response.ok) {
    throw new Error('Failed to fetch movies')
  }

  const data = await response.json()
  return data.results
}