import React from 'react';

interface TechIconProps {
    name: string;
    className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5" }) => {
    const lowerName = name.toLowerCase();

    // Helper to return SVG wrapper
    const SvgWrapper = ({ children, viewBox = "0 0 24 24", color = "currentColor" }: { children: React.ReactNode, viewBox?: string, color?: string }) => (
        <svg viewBox={viewBox} className={className} fill={color} xmlns="http://www.w3.org/2000/svg">
            {children}
        </svg>
    );

    if (lowerName.includes('react')) {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#61DAFB">
                <path d="M12 2.5c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5zm0 17c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z" />
                <circle cx="12" cy="12" r="2.5" />
            </SvgWrapper>
        );
    }
    if (lowerName.includes('python')) {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#3776AB">
                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77V9.79l-.04.6-.12.53-.2.45-.27.37-.3.3-.34.24-.35.18-.35.13-.33.09-.3.06-.26.03-.2.02H3.35l-.21-.02-.26-.05-.3-.07-.33-.1-.35-.14-.35-.19-.33-.25-.3-.31-.26-.38-.21-.46-.13-.55L0 8.5V5.11l.02-.2.04-.26.1-.3.16-.33.25-.34.34-.34.45-.32.59-.3.73-.26.9-.2L4.8.03l.65-.02.48.01.32.04.18.06.05.02.06.04.05.06.04.09.02.12v2.32c0 .2.05.38.15.53.1.15.24.27.4.36.17.09.36.14.56.14h2.34c.2 0 .39-.05.56-.14.16-.09.3-.21.4-.36.1-.15.15-.33.15-.53V.44l.02-.12.04-.09.05-.06.06-.04.05-.02.18-.06.32-.04.48-.01.65.02zM12 4.26c.41 0 .75.14 1.04.43.29.29.43.63.43 1.04 0 .41-.14.75-.43 1.04-.29.29-.63.43-1.04.43-.41 0-.75-.14-1.04-.43-.29-.29-.43-.63-.43-1.04 0-.41.14-.75.43-1.04.29-.29.63-.43 1.04-.43z" />
            </SvgWrapper>
        );
    }
    if (lowerName.includes('node')) {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#339933">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
            </SvgWrapper>
        );
    }
    if (lowerName.includes('typescript')) {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#3178C6">
                <path d="M2 2h20v20H2V2zm15.6 15.6v-5.6h-2v2h-1.6v-2h-2v5.6h-2v-7.6h7.6v7.6h-2z" />
            </SvgWrapper>
        );
    }
    if (lowerName.includes('tailwind')) {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#38B2AC">
                <path d="M12.001 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6 6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-12 0c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
            </SvgWrapper>
        );
    }
    if (lowerName.includes('docker')) {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#2496ED">
                <path d="M13.5 2h-3v3h3V2zm-4.5 0h-3v3h3V2zm-4.5 0h-3v3h3V2zM2 6.5h3v3H2v-3zm4.5 0h3v3h-3v-3zm4.5 0h3v3h-3v-3zm4.5 0h3v3h-3v-3zM1 12.5h22v9H1v-9z" />
            </SvgWrapper>
        );
    }
    if (lowerName.includes('sql')) {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#00758F">
                <path d="M12 2C6.48 2 2 4.24 2 7v10c0 2.76 4.48 5 10 5s10-2.24 10-5V7c0-2.76-4.48-5-10-5zm0 2c4.27 0 8 1.66 8 3.5S16.27 11 12 11 4 9.34 4 7.5 7.73 4 12 4zm0 16c-4.27 0-8-1.66-8-3.5V14c0 1.84 3.73 3.5 8 3.5s8-1.66 8-3.5v2.5c0 1.84-3.73 3.5-8 3.5z" />
            </SvgWrapper>
        );
    }
    if (lowerName.includes('netsuite')) {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#000000">
                <text x="0" y="16" fontSize="16" fontWeight="bold" fill="#00758F">N</text>
            </SvgWrapper>
        );
    }
    if (lowerName.includes('c#') || lowerName === 'csharp') {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#239120">
                <path d="M11.5 8h1v8h-1V8zm-2 2h1v4h-1v-4zm4 0h1v4h-1v-4zM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8z" />
            </SvgWrapper>
        );
    }
    if (lowerName === 'c') {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#A8B9CC">
                <path d="M12 2C6.48 2 2 4.48 2 10v4c0 5.52 4.48 8 10 8s10-2.48 10-8v-4c0-5.52-4.48-8-10-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
            </SvgWrapper>
        );
    }
    if (lowerName.includes('kotlin')) {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#7F52FF">
                <path d="M2 2h10l10 10-10 10H2V2zm10 0L2 12v10l10-10L2 2z" />
            </SvgWrapper>
        );
    }
    if (lowerName === 'r') {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#276DC3">
                <text x="6" y="18" fontSize="18" fontWeight="bold" fill="#276DC3">R</text>
            </SvgWrapper>
        );
    }
    if (lowerName.includes('html')) {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#E34F26">
                <path d="M12 2L2 5l2 15 8 2 8-2 2-15-10-3zm0 16.5l-5.5-1.5L5.5 7h13l-1 10-5.5 1.5z" />
            </SvgWrapper>
        );
    }
    if (lowerName.includes('css')) {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#1572B6">
                <path d="M12 2L2 5l2 15 8 2 8-2 2-15-10-3zm0 16.5l-5.5-1.5L5.5 7h13l-1 10-5.5 1.5z" />
            </SvgWrapper>
        );
    }
    if (lowerName.includes('flutter') || lowerName.includes('dart')) {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#02569B">
                <path d="M14.3 2L5.9 10.4l3.2 3.2L22.5 2h-8.2zM5.9 16.8L2 20.7l3.2 3.2 3.9-3.9-3.2-3.2zm5.7-2.5l-3.2 3.2 8.2 8.2h8.2l-13.2-11.4z" />
            </SvgWrapper>
        );
    }
    if (lowerName === 'microsoft-bc') {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#0078D4">
                <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z" />
            </SvgWrapper>
        );
    }
    if (lowerName === 'oracle-netsuite') {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#000000">
                <path d="M2 2h20v20H2V2z" fill="#000000" />
                <text x="4" y="18" fontSize="16" fontWeight="bold" fill="#FFFFFF" fontFamily="Arial">N</text>
            </SvgWrapper>
        );
    }
    if (lowerName === 'workflow-custom') {
        return (
            <SvgWrapper viewBox="0 0 24 24" color="#3B82F6">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-2h2v2zm0-4h-2V7h2v6z" />
                <path d="M12 11l-2-2 2-2 2 2-2 2z" fill="currentColor" opacity="0.5" />
            </SvgWrapper>
        );
    }

    // Default fallback icon (Code bracket)
    return (
        <SvgWrapper viewBox="0 0 24 24" color="#94a3b8">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </SvgWrapper>
    );
};

export default TechIcon;
