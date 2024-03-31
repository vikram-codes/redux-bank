const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createdCustomer":
      return {
        ...state,
        fullName: action.payload.name,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

export function createCustomer(name, nationalId) {
  return {
    type: "customer/createdCustomer",
    payload: { name, nationalId, createdAt: new Date().toISOString() },
  };
}

export function updateName(name) {
  return { type: "customer/updateName", payload: name };
}
