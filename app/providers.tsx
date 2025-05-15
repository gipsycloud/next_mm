'use client';

import { NextUIProvider } from "@nextui-org/react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
// loading the client from the server
// and passing it to the provider
const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
        </NextUIProvider>
    );
    }