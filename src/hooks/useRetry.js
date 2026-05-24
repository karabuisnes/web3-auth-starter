import { useState, useCallback } from 'react';

/**
 * Hook for retrying async operations with exponential backoff
 * @param {Function} fn - Async function to retry
 * @param {Object} options - Retry options
 * @returns {Object} { execute, loading, error, attempts }
 */
export function useRetry(fn, { maxAttempts = 3, baseDelay = 1000 } = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [attempts, setAttempts] = useState(0);

  const execute = useCallback(async (...args) => {
    setLoading(true);
    setError(null);

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        setAttempts(attempt);
        const result = await fn(...args);
        setLoading(false);
        return result;
      } catch (err) {
        if (attempt === maxAttempts) {
          setError(err);
          setLoading(false);
          throw err;
        }
        // Exponential backoff: 1s, 2s, 4s...
        const delay = baseDelay * Math.pow(2, attempt - 1);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }, [fn, maxAttempts, baseDelay]);

  return { execute, loading, error, attempts };
}

// Last updated: 2026-05-25
