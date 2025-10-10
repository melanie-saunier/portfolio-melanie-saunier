export interface project {
  id: number
  title: string,
  description: string,
  stack: stack[],
}

interface stack {
  id: number,
  name: string,
  logo: string,
}