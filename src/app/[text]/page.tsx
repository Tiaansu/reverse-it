import { Center, Text } from '@mantine/core';
import { type Metadata } from 'next';

export async function generateMetadata({
    params,
}: {
    params: { text: string };
}): Promise<Metadata> {
    const { text } = params;
    const reversed = decodeURIComponent(text).split('').reverse().join('');

    return {
        title: reversed,
    };
}

export default function TextPage({ params }: { params: { text: string } }) {
    const { text } = params;
    const reversed = decodeURIComponent(text).split('').reverse().join('');
    return (
        <Center h="100vh">
            <Text>{reversed}</Text>
        </Center>
    );
}
