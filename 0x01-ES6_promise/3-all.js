import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((data) => data.body).then((data) => {
    createUser().then((res) => {
      console.log(`${data} ${res.firstName} ${res.lastName}`);
    });
  })
    .catch(() => { console.log('Signup system offline'); });
}
