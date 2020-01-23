export const HEADER_ACTIONS = Object.freeze({
  CUSTOM_SET: 'myapp/header/custom-set',
})

export const headerActions = Object.freeze({
  customSet: (field, value) => ({
    type: HEADER_ACTIONS.CUSTOM_SET,
    field,
    value,
  }),
})

const initState = {
  position: '0',
}

const reducer = (state = initState, { type, value, field }) => {
  switch (type) {
    case HEADER_ACTIONS.CUSTOM_SET:
      return {
        ...state,
        [field]: value,
      }
    default:
      return state
  }
}

export default reducer
