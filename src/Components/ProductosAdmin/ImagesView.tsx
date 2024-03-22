import React, { useCallback, useState } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { useParams } from 'react-router-dom';
import { UploadImages } from '../../axios/hostingAPI';

const FileUploader: React.FC = () => {
    const [perfect, setPerfect]= useState<boolean>()
    const { idproducto } = useParams<{ idproducto: string }>();
    const productId = idproducto || '';
    const [files, setFiles] = useState<FileWithPath[]>([]);

    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        setFiles(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });



    const handleUpload = async () => {
        const formData = new FormData();
        
        files.forEach(file => {
            formData.append('imagenes[]', file); // Ajuste en el nombre de la clave
        });
        formData.append('idproducto', productId);
        
        UploadImages(formData)
            .then((res: any) => {
                if( res.data.success){
                    alert("Imágenes cargadas perfectamente")
                    window.location.href = "/productos/administrar"
                }else setPerfect(false);
            })
    }

    return (
        <div className='container'>
            <h2 className='text-center m-5'>Producto</h2>
            <div className='row'>
                <div className='col-md-6 mb-4'>
                    <div {...getRootProps()} style={dropzoneStyles} className="border p-4">
                        <input {...getInputProps()} />
                        <p className="m-0">Arrastra y suelta archivos aquí, o haz clic para seleccionar archivos</p>
                    </div>
                </div>

                <div className='col-md-6 mb-4' style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    <div className="d-flex flex-wrap">
                        {files.length > 0 && files.map(file => (
                            <div key={file.path} className="mr-3 mb-3" style={imagePreviewContainerStyles}>
                                <p className="m-0">{file.name}</p>
                                <img src={URL.createObjectURL(file)} alt={file.name} style={imagePreviewStyles} />
                            </div>
                        ))}
                    </div>
                </div>
                <button className='btn btn-dark'onClick={handleUpload} >Subir Archivos</button>
            </div>
        </div>
    );
};

const dropzoneStyles: React.CSSProperties = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
};

const imagePreviewContainerStyles: React.CSSProperties = {
    textAlign: 'center',
};

const imagePreviewStyles: React.CSSProperties = {
    maxWidth: '100%',
    maxHeight: '150px',
};

export default FileUploader;
