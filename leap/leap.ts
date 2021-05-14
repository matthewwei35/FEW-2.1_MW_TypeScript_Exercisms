function isLeapYear(year: number): boolean {
  let leap: boolean = false

  if (year % 4 === 0) {
    leap = true
    if (year % 100 === 0) {
      leap = false
      if (year % 400 === 0) {
        leap = true
      }
    }
  }
  return leap
}

export default isLeapYear
