export default function isReversed(
    text: string,
    possiblyReversedString: string
): boolean {
    return (
        encodeURIComponent(text) === encodeURIComponent(possiblyReversedString)
    );
}
