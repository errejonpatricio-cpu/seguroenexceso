export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // Server-side initialization
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    // Edge runtime initialization
  }
}
