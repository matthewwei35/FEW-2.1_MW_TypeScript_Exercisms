type BandColors = {
  black: string,
  brown: string,
  red: string,
  orange: string,
  yellow: string,
  green: string,
  blue: string,
  violet: string,
  grey: string,
  white: string,
  [key: string]: string
}

export class ResistorColor {
  private colors: string[]

  constructor(colors: string[]) {
    this.colors = colors
    if (this.colors.length < 2) {
      throw new Error('At least two colors need to be present')
    }
  }
  
  value(): number {
    let resistorValue: string = ''
    const bandColors: BandColors = {
      black: '0',
      brown: '1',
      red: '2',
      orange: '3',
      yellow: '4',
      green: '5',
      blue: '6',
      violet: '7',
      grey: '8',
      white: '9',
    }
    for (let i: number = 0; i < this.colors.length; i += 1) {
      resistorValue += bandColors[this.colors[i]]
    }
    if (resistorValue.length > 2) {
      resistorValue = resistorValue.slice(0, 2)
    }
    return parseInt(resistorValue)
  }
}
