function graduate(credential) {
  return function (fullName) {
    return `${fullName} ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('medicalSchool:', medicalSchool('Christina Le'));
console.log('lawSchool:', lawSchool('Christina Le'));
