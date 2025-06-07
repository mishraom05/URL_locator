function parseINI(data) {
    const result = {};
    const lines = data.split('\n');
    let currentSection = null;

    for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine.length === 0 || trimmedLine.startsWith(';')) {
            continue; // Skip empty lines and comments
        }
        if (trimmedLine.startsWith('[') && trimmedLine.endsWith(']')) {
            currentSection = trimmedLine.slice(1, -1);
            result[currentSection] = {};
        } else if (currentSection) {
            const [key, value] = trimmedLine.split('=').map(part => part.trim());
            result[currentSection][key] = value;
        }
    }
    return result;
}
