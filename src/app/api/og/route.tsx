import { NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = request.nextUrl;

        const hasTitle = searchParams.has('title');
        let title = hasTitle
            ? searchParams.get('title')?.slice(0, 64)!
            : 'No Title to reverse 😔';

        if (hasTitle) {
            title = decodeURIComponent(title).split('').reverse().join('');
        }

        return new ImageResponse(
            (
                <div tw="flex flex-col w-full h-full items-center justify-center bg-[#242424] text-white">
                    <h1 tw="text-4xl">{title}</h1>
                </div>
            ),
            {
                emoji: 'fluentFlat',
            }
        );
    } catch (error) {
        return new Response('Failed to generate OG image', { status: 500 });
    }
}
