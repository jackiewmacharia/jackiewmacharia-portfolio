interface OgImageProps {
  title: string;
  description: string;
  tags?: string[];
}

export default function OgImage({ title, description, tags = [] }: OgImageProps) {
  return (
    <div
      style={{
        width: 1200,
        height: 630,
        background: '#09090b',
        display: 'flex',
        flexDirection: 'column',
        padding: '60px',
        fontFamily: 'Inter',
      }}
    >
      <div style={{ color: '#fbbf24', fontSize: 20, fontWeight: 400 }}>
        jackiewmacharia.dev
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'center',
          gap: 20,
        }}
      >
        <div
          style={{
            color: '#f4f4f5',
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: '#a1a1aa',
            fontSize: 24,
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: 820,
          }}
        >
          {description}
        </div>
      </div>

      {tags.length > 0 && (
        <div style={{ display: 'flex', gap: 16 }}>
          {tags.slice(0, 5).map((tag, i) => (
            <span key={i} style={{ color: '#a1a1aa', fontSize: 18 }}>
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
