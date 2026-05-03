import type { NextConfig } from "next"

import "./env"

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.10.220.31'],
}

export default nextConfig
