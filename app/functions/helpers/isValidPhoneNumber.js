//###################################################################
//############### VALID PHONE NUMBER PATTERN FUNCTION ###############
//###################################################################

///////////////////////////
////// THIS FUNCTION //////
///////////////////////////
export function isValidPhoneNumber(phone) {
  const regex = /^\d{2,3}[-. ]?\d{3,4}[-. ]?\d{4}$/;
  return regex.test(phone);
}

