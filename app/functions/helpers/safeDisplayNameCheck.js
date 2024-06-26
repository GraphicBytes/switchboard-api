//############################################################
//############### SAFE USERNAME CHECK FUNCTION ###############
//############################################################

///////////////////////////
////// THIS FUNCTION //////
///////////////////////////
export function safeDisplayNameCheck(string) {

  if(/[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]/.test(string)) {
    return true;
  } else {
    return false;
  }

}