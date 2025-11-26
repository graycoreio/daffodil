export interface SassDocItem {
  context?: {
    type: string;
    name: string;
    value: string;
    [key: string]: any;
  };
  [key: string]: any;
}

export interface ParsedValue {
  raw: string;
  parsed?: any;
  type: 'sass-map' | 'sass-variable' | 'color' | 'string' | 'unknown';
}


class SassValueParser {
  
  private isSassMap(value: string): boolean {
    const trimmed = value.trim();
    return trimmed.startsWith('(') && trimmed.endsWith(')') && trimmed.includes(':');
  }

  private isColor(value: string): boolean {
    const trimmed = value.trim();
    return trimmed.startsWith('#') || 
           /^rgb\(/.test(trimmed) || 
           /^rgba\(/.test(trimmed) ||
           /^hsl\(/.test(trimmed) ||
           /^hsla\(/.test(trimmed);
  }

  private isSassVariable(value: string): boolean {
    const trimmed = value.trim();
    return trimmed.startsWith('$');
  }


  private parseSassMap(value: string): any {
    try {
      let mapContent = value.trim().slice(1, -1);
      
      mapContent = mapContent.replace(/\n\s*/g, ' ').replace(/\s+/g, ' ').trim();
      
      const result: any = {};
      
      let depth = 0;
      let currentKey = '';
      let currentValue = '';
      let inKey = true;
      let i = 0;
      
      while (i < mapContent.length) {
        const char = mapContent[i];
        
        if (char === '(' && !inKey) {
          depth++;
          currentValue += char;
        } else if (char === ')' && !inKey) {
          depth--;
          currentValue += char;
        } else if (char === ':' && depth === 0 && inKey) {
          inKey = false;
          i++;
          continue;
        } else if (char === ',' && depth === 0 && !inKey) {
          const key = currentKey.trim();
          const val = currentValue.trim();
          
          const parsedKey = key.replace(/^['"]|['"]$/g, '');
          
          let parsedValue: any = val;
          if (this.isSassMap(val)) {
            parsedValue = this.parseSassMap(val);
          } else if (this.isColor(val)) {
            parsedValue = val.trim();
          } else {
            parsedValue = val.replace(/^['"]|['"]$/g, '');
          }
          
          result[parsedKey] = parsedValue;
          
          currentKey = '';
          currentValue = '';
          inKey = true;
        } else {
          if (inKey) {
            currentKey += char;
          } else {
            currentValue += char;
          }
        }
        
        i++;
      }
      
      if (currentKey.trim() && currentValue.trim()) {
        const key = currentKey.trim();
        const val = currentValue.trim();
        
        const parsedKey = key.replace(/^['"]|['"]$/g, '');
        let parsedValue: any = val;
        
        if (this.isSassMap(val)) {
          parsedValue = this.parseSassMap(val);
        } else if (this.isColor(val)) {
          parsedValue = val.trim();
        } else {
          parsedValue = val.replace(/^['"]|['"]$/g, '');
        }
        
        result[parsedKey] = parsedValue;
      }
      
      return result;
    } catch (error) {
      console.warn('Failed to parse Sass map:', value, error);
      return null;
    }
  }


  public parseValue(value: string): ParsedValue {
    const trimmed = value.trim();
    
    if (this.isSassMap(trimmed)) {
      const parsed = this.parseSassMap(trimmed);
      return {
        raw: value,
        parsed: parsed,
        type: 'sass-map'
      };
    } else if (this.isSassVariable(trimmed)) {
      return {
        raw: value,
        type: 'sass-variable'
      };
    } else if (this.isColor(trimmed)) {
      return {
        raw: value,
        parsed: trimmed,
        type: 'color'
      };
    } else {
      return {
        raw: value,
        parsed: trimmed.replace(/^['"]|['"]$/g, ''),
        type: trimmed.startsWith('"') || trimmed.startsWith("'") ? 'string' : 'unknown'
      };
    }
  }


  public processSassDocData(sassDocData: SassDocItem[]): SassDocItem[] {
    const enhancedData = sassDocData.map(item => {
      if (item.context && item.context.value) {
        const parsedValue = this.parseValue(item.context.value);
        
        let enhanced = { ...item };
        
        if (parsedValue.type === 'sass-map' && parsedValue.parsed) {
          enhanced = {
            ...item,
            context: {
              ...item.context,
              type: 'map',
              value: parsedValue.parsed
            }
          };
        } else if (parsedValue.parsed !== undefined) {
          enhanced = {
            ...item,
            context: {
              ...item.context,
              parsedValue: parsedValue.parsed
            }
          };
        }
        
        return enhanced;
      }
      
      return item;
    });
    
    return enhancedData;
  }
}



export { SassValueParser };