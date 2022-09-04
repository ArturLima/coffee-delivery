export const cepMask = (value) => {
  const re = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/
  return value.replace(re, '$1.$2-$3')
}
