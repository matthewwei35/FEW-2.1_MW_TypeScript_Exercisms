class Transcriptor {
  toRna(DNA: string): string {
    let complimentRNA: string = ''
    for (let i: number = 0; i < DNA.length; i += 1) {
      if (DNA[i] === 'G') {
        complimentRNA += 'C'
      } else if (DNA[i] === 'C') {
        complimentRNA += 'G'
      } else if (DNA[i] === 'T') {
        complimentRNA += 'A'
      } else if (DNA[i] === 'A') {
        complimentRNA += 'U'
      } else {
        throw new Error('Invalid input DNA.')
      }
    }
    return complimentRNA
  }
}

export default Transcriptor
