import React, { Component } from 'react'

import UploadFile from '@yagoubi/upload-file'

export default class App extends Component {
  onError = error=>{
    console.log(error);
  }
  onChange= files=>{
    console.log(files);
  }
  
  render () {
    return (
      <div>
      <br />
      <br />
      <br />
      <br />
         <UploadFile   
        accepts={['image/png', '.pdf', 'audio/*', 'text/plain', 'image/jpeg']}
         maxFiles={2}
          maxFileSize={10000000}
          minFileSize={0}
          multiple
          onError={this.onError}
          onChange={this.onChange}
         
          
         />
      </div>
    )
  }
}
