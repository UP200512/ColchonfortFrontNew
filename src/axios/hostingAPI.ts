import axios from 'axios';

// Crea una instancia de Axios con la URL base
const api = axios.create({
    baseURL: 'http://localhost/api/'
});



export async function UploadImages(formData:any) {
    console.log(formData)
    try {
       const response= await api.post('/uploads.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        
        alert('Files uploaded successfully!');

        console.log(response)
        return response
    } catch (error) {
        console.error( error);
        alert('Error uploading files. Please try again.');
    }
}
export async function GetIamges(id:number) {
    try {
        const response= await api.get('/servirimagenes.php?id=' + id);
        // console.log(response)
         return response
     } catch (error) {
         console.error( error);
        //  alert('Error uploading files. Please try again.');
     }
}