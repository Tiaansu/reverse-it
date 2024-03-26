import { Anchor, Center, Code, Text } from '@mantine/core';

export default function Home() {
    return (
        <Center h="100vh">
            <Text>
                Hi! Just follow this:{' '}
                <Anchor href="/your-text-goes-here">
                    https://reverse-it.vercel.app/your-text-goes-here
                </Anchor>
            </Text>
        </Center>
    );
}
