function ColorPalette({ colors }) {
  return (
    <div className="color-palette">
      <div className="color-row">
        <div className="color-item">
          <div 
            className="color-preview" 
            style={{ backgroundColor: colors.background }}
          ></div>
          <div className="color-info">
            <span>Background</span>
            <code>{colors.background.hex()}</code>
          </div>
        </div>
        
        <div className="color-item">
          <div 
            className="color-preview" 
            style={{ backgroundColor: colors.surface }}
          ></div>
          <div className="color-info">
            <span>Surface</span>
            <code>{colors.surface.hex()}</code>
          </div>
        </div>

        <div className="color-item">
          <div 
            className="color-preview" 
            style={{ backgroundColor: colors.primary }}
          ></div>
          <div className="color-info">
            <span>Primary</span>
            <code>{colors.primary.hex()}</code>
          </div>
        </div>

        <div className="color-item">
          <div 
            className="color-preview" 
            style={{ backgroundColor: colors.secondary }}
          ></div>
          <div className="color-info">
            <span>Secondary</span>
            <code>{colors.secondary.hex()}</code>
          </div>
        </div>

        <div className="color-item">
          <div 
            className="color-preview" 
            style={{ backgroundColor: colors.accent }}
          ></div>
          <div className="color-info">
            <span>Accent</span>
            <code>{colors.accent.hex()}</code>
          </div>
        </div>

        <div className="color-item">
          <div 
            className="color-preview" 
            style={{ backgroundColor: colors.text }}
          ></div>
          <div className="color-info">
            <span>Text</span>
            <code>{colors.text.hex()}</code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPalette;