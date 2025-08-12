function n(a,r){return t=>{let s=t.get(a)?.value,o=t.get(r)?.value;return s===o?null:(t.get(r)?.setErrors({passwordMismatch:!0}),{passwordMismatch:!0})}}export{n as a};
