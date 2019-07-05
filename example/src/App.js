import React, { Component } from 'react'

import UploadFile from '@yagoubi/upload-file'

export default class App extends Component {
  render () {
    return (
      <div>
      <br />
      <br />
      <br />
      <br />
         <UploadFile   
        accepts={['image/png', '.pdf', 'audio/*']}
          multiple
          maxFiles={3}
          maxFileSize={10000000}
          minFileSize={0}
         
          
         />
      </div>
    )
  }
}
