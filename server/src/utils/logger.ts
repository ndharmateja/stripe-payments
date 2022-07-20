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
