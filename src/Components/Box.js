import React from 'react'; 
import  {useState, useEffect} from 'react';
import "./Box.css"
//import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

const Box = (props) => { 
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
	const [selectedText, setSelectedText] = useState();
	const [selectedAudio, setSelectedAudio] = useState();
	const [change, setchange] = useState(0);
	const [changet, setchanget]= useState(0);
	const [changea, setchangea]= useState(0);
	const [top, settop] = useState(-30)
	const [color, setcolor] = useState('')
	const [bottom, setbottom] = useState(30)
	const [vbottom, vsetbottom] = useState()


    // This function will be triggered when the file field change
    const imageChange = (e) => {
settop(-90)

		setchange(1)
      if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(e.target.files[0]);
      }

    };
	const TextChange = (e) => {

		setchanget(1)
      if (e.target.files && e.target.files.length > 0) {
        setSelectedText(e.target.files[0]);
      }
    };
	const AudioChange = (e) => {
		setchangea(1)
		
		if (e.target.files && e.target.files.length > 0) {
		  setSelectedAudio(e.target.files[0]);
		}
	  };


	const handleSubmissioni = () => {
		const formData = new FormData();

		formData.append('File', selectedImage);

		fetch(
			'https://video-editor-api.herokuapp.com/'+selectedImage.name,
			{
				method: 'POST',
				body:    {
          "image_file_path": "public/upload/"+selectedImage.name,
          "audio_file_path": "public/upload/4839379a-4d0a-440e-943f-e1e4b0ebfdb7.mp3"
           }    
      ,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', {
					"status": "ok",
					"message": "Image uploaded Successfully",
					"image_file_path": "public/upload/"+selectedImage.name
				},result
				);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	
	const handleSubmissiont = () => {
		const formData = new FormData();

		formData.append('File', selectedText);

		fetch(
			'https://video-editor-api.herokuapp.com/'+selectedText.name,
			{
				method: 'POST',
				body:    {
          "transcript_file_path": "public/upload/"+selectedText.name,
          "audio_file_path": "public/upload/4839379a-4d0a-440e-943f-e1e4b0ebfdb7.mp3"
           }    
      ,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', {
					"status": "ok",
					"message": "Transcript uploaded Successfully",
					"transcript_file_path": "public/upload/"+selectedText.name
				},result
				);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	// for audio files
	const handleSubmissiona = () => {
		const formData = new FormData();

		formData.append('File', selectedAudio);

		fetch(
			'https://video-editor-api.herokuapp.com/'+selectedAudio.name,
			{
				method: 'POST',
				body:    {
          "transcript_file_path": "public/upload/"+selectedAudio.name,
          "audio_audio_path": "public/upload/4839379a-4d0a-440e-943f-e1e4b0ebfdb7.mp3"
           }    
      ,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', {
					"status": "ok",
					"message": "Audio-file uploaded Successfully",
					"transcript_file_path": "public/upload/"+selectedAudio.name
				},result
				);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	useEffect(() => {
		
if(change==1){
	handleSubmissioni();
	setcolor('black')
	setbottom(100)
	vsetbottom(50)
}

	  }, [change])
// for video
	  useEffect(() => {
		
		if(changet==1){
			handleSubmissiont();
		
		}
		
			  }, [changet])
// for audio
			  useEffect(() => {
		
				if(changea==1){
					handleSubmissiona();
				
				}
				
					  }, [changea])
    const textMsg =  'Upload Image'
	const script =  'Upload Transcript' 
	const audio =  'Upload Audio' 
	
  return ( 
    <Container >
    
    
		
	<div className="img-box" id="img_box_0">
 
 <div className="img-prevv" id="img_impv_0" style={{backgroundColor:color}}>
	 <div className="imagebox" style={{backgroundColor:{color}}} >
 {selectedImage && (
              
            <img className="image"
		
              src={URL.createObjectURL(selectedImage)}
              
         style={{ marginTop: '25%', backgroundColor: 'black'}}
            />
          
        )}</div>

	 {/* <div className="progress" id="img_prog_0">
		 <div className="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
	 </div> */}
	 
 </div>
 <div className="middle-butt" id="img_mid_0" style={{bottom:bottom}}>

 &nbsp;<label id="img_upts_0" className="btn btn-primary">
                {textMsg}
                <input type="file" name="file" accept="image/*" style={{ display: 'none' }} className="test" onChange={imageChange} />
    
                </label>
				{/* <button className="btn btn-primary" onClick={handleSubmissioni}>handle submission</button> */}
 &nbsp;
				<label id="img_upts_0" className="btn btn-primary">
                {script}
                <input type="file" name="file" accept=".xls,.xlsx,.txt" style={{ display: 'none' }} className="test" onChange={TextChange}/>
    
                </label>
				&nbsp;
				<label id="img_upts_0" className="btn btn-primary">
                {audio}
                <input type="file" name="file" accept="audio/*" style={{ display: 'none' }} className="test" onChange={AudioChange} />
    
                </label>

	 <button type="button" id="img_mgia_0" className="btn btn-primary">Merge Image+Audio</button>
	 
    
	 {selectedImage && (
         <p >Image: {selectedImage.name}</p>
        )}&nbsp;
		 {selectedText && (
         <p >Script: {selectedText.name}</p>
        )}&nbsp; 
			 {selectedAudio && (
         <p >Audio: {selectedAudio.name}</p>
        )} 
     {/* {isFilePicked ? (
				<div className="pp">
					<p >Filename: {selectedFile.name}</p>
					
					 <p>Size: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p> 
                    
				</div>
			) : (
				<p>Select a file to show details</p>
			)} */}
			
 </div>
 
 <div className="video-prev" style={{bottom:vbottom}}></div>
 </div>

<hr />


    </Container>
  ); 
  
}; 

export {Box};

// Just some styles
const styles = {
	
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
    },

    delete: {
      cursor: "pointer",
      padding: 15,
      background: "red",
      color: "white",
      border: "none",
    },
  };