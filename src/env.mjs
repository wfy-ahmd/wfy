import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SITE_URL: z.string().url().optional(),
    GOOGLE_SITE_VERIFICATION_ID: z.string().min(1).optional(),

    EXA_API_KEY: z.string().min(1).optional(),
    OPENROUTER_API_KEY: z.string().min(1).optional(),
    OPENROUTER_MODEL: z.string().optional(), // ⭐ Added safely

    // Resend API for contact form
    RESEND_API_KEY: z.string().min(1),
    RESEND_TO_EMAIL: z.string().email(),
  },
  client: {
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: z.string().min(1).optional(),
    NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID: z.string().min(1).optional(),
    NEXT_PUBLIC_MICROSOFT_CLARITY_ID: z.string().min(1).optional(),
  },
  runtimeEnv: {
    SITE_URL: process.env.SITE_URL,
    GOOGLE_SITE_VERIFICATION_ID: process.env.GOOGLE_SITE_VERIFICATION_ID,

    EXA_API_KEY: process.env.EXA_API_KEY,
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
    OPENROUTER_MODEL: process.env.OPENROUTER_MODEL, // ⭐ Added safely

    // Resend API
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_TO_EMAIL: process.env.RESEND_TO_EMAIL,

    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID:
      process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
    NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID:
      process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID,
    NEXT_PUBLIC_MICROSOFT_CLARITY_ID:
      process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_ID,
  },
});
