import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
    const userUpload = {};

    try {
        userUpload.photo = await uploadPhoto();
        userUpload.user = await createUser();
    }
    catch {
        userUpload.photo = null;
        userUpload.user = null;
    }

    return userUpload;
}
