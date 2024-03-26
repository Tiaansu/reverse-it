import '@mantine/core/styles.css';
import type { Metadata } from 'next';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import './globals.css';

export const metadata: Metadata = {
    title: 'Reverse It!',
    description: 'A simple tool to reverse your texts.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider defaultColorScheme="dark">
                    {children}
                </MantineProvider>
            </body>
        </html>
    );
}
