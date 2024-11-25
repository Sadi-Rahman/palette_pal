function ButtonPreview({ colors }) {
  return (
    <div className="button-preview">
      <h3>Button Styles</h3>
      <div className="button-row">
        <div className="button-group">
          <h4>Primary Button</h4>
          <button
            className="preview-button primary"
            style={{
              backgroundColor: colors.primary,
              color: colors.background,
              border: `1px solid ${colors.primary}`
            }}
          >
            Primary Button
          </button>
        </div>

        <div className="button-group">
          <h4>Secondary Button</h4>
          <button
            className="preview-button secondary"
            style={{
              backgroundColor: 'transparent',
              color: colors.primary,
              border: `1px solid ${colors.primary}`
            }}
          >
            Secondary Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default ButtonPreview;