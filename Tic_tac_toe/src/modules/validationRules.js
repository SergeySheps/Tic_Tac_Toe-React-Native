export const email = (value) =>
  value &&
  !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
    value
  )
    ? 'Invalid email address'
    : undefined;

export const required = (value) =>
  value === 0 || (value && /\w+/.test(value)) ? undefined : 'Required';
