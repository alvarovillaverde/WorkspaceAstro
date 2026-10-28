import { useState, useEffect } from 'react';

export default function StarRatingReact({ projectId }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(`rating_${projectId}`);
    if (saved) {
      const r = parseInt(saved, 10);
      setRating(r);
      setStatus(`(Tu nota: ${r}/5)`);
    }
  }, [projectId]);

  const handleClick = (val) => {
    localStorage.setItem(`rating_${projectId}`, val.toString());
    setRating(val);
    setStatus(`¡Guardado! (${val}/5)`);
  };

  return (
    <div
      className="star-rating"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        margin: '0.5rem 0',
        padding: '0.6rem 1rem',
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        fontFamily: 'inherit'
      }}
    >
      <span
        style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}
      >
        Valorar proyecto:
      </span>
      <div style={{ display: 'flex', gap: '0.2rem' }}>
        {[1, 2, 3, 4, 5].map((val) => (
          <button
            key={val}
            type="button"
            aria-label={`${val} estrella`}
            onClick={() => handleClick(val)}
            onMouseEnter={() => setHover(val)}
            onMouseLeave={() => setHover(0)}
            style={{
              background: (hover >= val || rating >= val) ? '#f59e0b' : '#f3f4f6',
              border: (hover >= val || rating >= val) ? '2px solid #f59e0b' : '2px solid #d1d5db',
              borderRadius: '50%',
              fontSize: '1.5rem',
              color: (hover >= val || rating >= val) ? '#ffffff' : '#374151',
              cursor: 'pointer',
              padding: '0.25rem 0.4rem',
              lineHeight: 1,
              transition: 'all 0.15s ease',
              transform: hover >= val ? 'scale(1.2)' : 'scale(1)'
            }}
          >
            ★
          </button>
        ))}
      </div>
      <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{status}</span>
    </div>
  );
}
