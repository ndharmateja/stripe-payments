export const clog = (...args) => {
  try {
    console.log(
      args.reduce(
        (merged, arg) => `${merged}\n${JSON.stringify(arg, null, 2)}`,
        ''
      )
    )
  } catch (error) {
    console.log(...args)
  }
}

export const getErrorMessage = (error) => {
  let message: string
  if (error instanceof Error) message = error.message
  else message = String(error)
}
