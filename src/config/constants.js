/**
 * Application-wide constants
 * Update these for different networks/environments
 */

export const SUPPORTED_CHAINS = {
  ETHEREUM: 1,
  POLYGON: 137,
  ARBITRUM: 42161,
  OPTIMISM: 10,
  BASE: 8453,
};

export const RPC_ENDPOINTS = {
  [SUPPORTED_CHAINS.ETHEREUM]: process.env.VITE_ETH_RPC || 'https://eth.llamarpc.com',
  [SUPPORTED_CHAINS.POLYGON]: process.env.VITE_POLY_RPC || 'https://polygon.llamarpc.com',
  [SUPPORTED_CHAINS.ARBITRUM]: process.env.VITE_ARB_RPC || 'https://arb1.arbitrum.io/rpc',
  [SUPPORTED_CHAINS.BASE]: process.env.VITE_BASE_RPC || 'https://mainnet.base.org',
};

export const SLIPPAGE_DEFAULTS = {
  LOW: 0.1,    // 0.1% - stable pairs
  MEDIUM: 0.5, // 0.5% - most pairs
  HIGH: 1.0,   // 1.0% - volatile pairs
  DEGEN: 5.0,  // 5.0% - meme coins
};

export const GAS_MULTIPLIER = 1.2; // Add 20% buffer to gas estimates
export const TX_TIMEOUT_MS = 60_000; // 60 seconds
export const PRICE_STALE_THRESHOLD_MS = 30_000; // 30 seconds

// Last updated: 2026-05-25
