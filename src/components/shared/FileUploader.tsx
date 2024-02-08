import {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

const FileUploader = () => {
	const [fileUrl, setFileUrl] = useState('');

	const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
	
	return (
		<div {...getRootProps()} className="flex flex-center flex-col 
		bg-dark-3 rounded-xl cursor-pointer">
      <input {...getInputProps()} className="cursor-pointer" />
      {
        fileUrl ? (
					<div>
						test 1
					</div>
				) : (
					<div className="file_uploader-box">
						<img 
							src="/assets/icons/file-upload.svg"
							width={96}
							height={77}
							alt="file-upload"
						/>

						<h3></h3>
						<p className="text-light-4 small-regular mb-6">SVG, PNG, JPG</p>
					</div>
				)
      }
    </div>
	)
}

export default FileUploader