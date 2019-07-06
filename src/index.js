import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";
import PublishIcon from "./icons/publishIcon.svg";
import CloseIcon from "./icons/close.png";
export default class UploadFile extends Component {
  static propTypes = {
    text: PropTypes.string
  };
  state = {
    files: []
  };
  onError = error =>{
    if(this.props.onError !== undefined)
     this.props.onError(error);
    
  }
  TestAccepts = (accept, accepts) => {
    return accepts.filter(a => a === accept).length > 0;
  };
  onchange = file => {
    let files = [...this.state.files];
    if (!this.props.multiple) {
      files = [];
    }
    if (file.length > 0) {
      if (this.props.accepts !== undefined) {
       

        if (this.TestAccepts(file[0].type, this.props.accepts)) {
         
          //Max File Size :
          if (this.props.maxFileSize !== undefined) {
            if (file[0].size < this.props.maxFileSize) {
              //Min File Size :
              if (this.props.minFileSize !== undefined) {
                if (file[0].size > this.props.minFileSize) {
                  //Tes Max files
                  if (this.props.maxFiles !== undefined) {
                    if (files.length < this.props.maxFiles) {
                      files.push(file[0]);
                      this.setState({ files });
                    } else {
                      //error maxFiles
                     this.onError({
                       type : "maxFiles",
                       message :  "The maximum number of files is : " + this.props.maxFiles
                     })
                    }
                  } else {
                    //fourth else
                    files.push(file[0]);
                      this.setState({ files });
                  }
                } else {
                  //error min size
                  this.onError({
                    type : "minFileSize",
                    message :  "The minimum size of file is : " + this.props.minFileSize
                  })
                }
              } else {
                //third else
                 //Tes Max files
                 if (this.props.maxFiles !== undefined) {
                  if (files.length < this.props.maxFiles) {
                    files.push(file[0]);
                    this.setState({ files });
                  } else {
                    //error maxFiles
                    this.onError({
                      type : "maxFiles",
                      message :  "The maximum number of files is : " + this.props.maxFiles
                    })
                  }
                } else {
                 
                  files.push(file[0]);
                    this.setState({ files });
                }
              }
            } else {
              //error max size
              this.onError({
                type : "maxFileSize",
                message :  "The maximum size of file is : " + this.props.maxFileSize
              })
            }
          } else {
            //second else
            if (this.props.minFileSize !== undefined) {
              if (file[0].size > this.props.minFileSize) {
                //Tes Max files
                if (this.props.maxFiles !== undefined) {
                  if (files.length < this.props.maxFiles) {
                    files.push(file[0]);
                    this.setState({ files });
                  } else {
                     //error maxFiles
                     this.onError({
                      type : "maxFiles",
                      message :  "The maximum number of files is : " + this.props.maxFiles
                    })
                  }
                } else {
                  //fourth else
                  files.push(file[0]);
                    this.setState({ files });
                }
              } else {
                //error min size
                this.onError({
                  type : "minFileSize",
                  message :  "The minimum size of file is : " + this.props.minFileSize
                })
              }
            } else {
              
               //Tes Max files
               if (this.props.maxFiles !== undefined) {
                if (files.length < this.props.maxFiles) {
                  files.push(file[0]);
                  this.setState({ files });
                } else {
                
                   //error maxFiles
                   this.onError({
                    type : "maxFiles",
                    message :  "The maximum number of files is : " + this.props.maxFiles
                  })
                }
              } else {
               
                files.push(file[0]);
                  this.setState({ files });
              }
            }
          }
        } else {
          //file not accepts error
           //error maxFiles
           this.onError({
            type : "accepts",
            message :    `This type : ${file[0].type} of file not accepted` 
          })
          
        }
      } else {
        // first else
         //Max File Size :
         if (this.props.maxFileSize !== undefined) {
          if (file[0].size < this.props.maxFileSize) {
            //Min File Size :
            if (this.props.minFileSize !== undefined) {
              if (file[0].size > this.props.minFileSize) {
                //Tes Max files
                if (this.props.maxFiles !== undefined) {
                  if (files.length < this.props.maxFiles) {
                    files.push(file[0]);
                    this.setState({ files });
                  } else {
                    
                      //error maxFiles
                   this.onError({
                    type : "maxFiles",
                    message :  "The maximum number of files is : " + this.props.maxFiles
                  })
                  }
                } else {
                  //fourth else
                  files.push(file[0]);
                    this.setState({ files });
                }
              } else {
                //error min size
                this.onError({
                  type : "minFileSize",
                  message :  "The minimum size of file is : " + this.props.minFileSize
                })
              }
            } else {
              //third else
               //Tes Max files
               if (this.props.maxFiles !== undefined) {
                if (files.length < this.props.maxFiles) {
                  files.push(file[0]);
                  this.setState({ files });
                } else {
                 
                  //error maxFiles
                  this.onError({
                    type : "maxFiles",
                    message :  "The maximum number of files is : " + this.props.maxFiles
                  })
                }
              } else {
               
                files.push(file[0]);
                  this.setState({ files });
              }
            }
          } else {
             //error max size
             this.onError({
              type : "maxFileSize",
              message :  "The maximum size of file is : " + this.props.maxFileSize
            })
          }
        } else {
          //second else
          if (this.props.minFileSize !== undefined) {
            if (file[0].size > this.props.minFileSize) {
              //Tes Max files
              if (this.props.maxFiles !== undefined) {
                if (files.length < this.props.maxFiles) {
                  files.push(file[0]);
                  this.setState({ files });
                } else {
                  
                  //error maxFiles
                  this.onError({
                    type : "maxFiles",
                    message :  "The maximum number of files is : " + this.props.maxFiles
                  })
                }
              } else {
                //fourth else
                files.push(file[0]);
                  this.setState({ files });
              }
            } else {
             //error min size
             this.onError({
              type : "minFileSize",
              message :  "The minimum size of file is : " + this.props.minFileSize
            })
            }
          } else {
            
             //Tes Max files
             if (this.props.maxFiles !== undefined) {
              if (files.length < this.props.maxFiles) {
                files.push(file[0]);
                this.setState({ files });
              } else {
                 //error maxFiles
                 this.onError({
                  type : "maxFiles",
                  message :  "The maximum number of files is : " + this.props.maxFiles
                })
              }
            } else {
             
              files.push(file[0]);
                this.setState({ files });
            }
          }
        }
        
      }
    }
    if(this.props.onChange !== undefined)
    this.props.onChange(files);
  };
  removeFile = index => {
    const files = [...this.state.files];
    files.splice(index, 1);
    this.setState({ files });
  };

  render() {
    let {
      accepts,
      multiple,
      maxFiles,
      maxFileSize,
      minFileSize,
      label,
      color
    } = this.props;
    label = label ? label : "upload file ..";
    color = color ? color : "#0074D9";

    return (
      <div className={styles["btn-upload-container"]}>
        <button
          className={styles["btn-upload"]}
          style={{ backgroundColor: color }}
        >
          <label htmlFor="fileupload">
            <img src={PublishIcon} className={styles["svg-icon"]} />
            <span>{label}</span>
          </label>
        </button>
        <input
          type="file"
          onChange={ref => this.onchange(ref.target.files)}
          style={{ display: "none" }}
          id="fileupload"
        />
        <div className={styles["files-container"]}>
          {this.state.files.length > 0 ? (
            this.state.files.map((file, index) => {
              return (
                <div className={styles["file"]} key={index}>
                  <span className={styles["file-name"]}>{file.name}</span>
                  <span
                    className={styles["file-close"]}
                    onClick={() => this.removeFile(index)}
                  >
                    <img src={CloseIcon} />
                  </span>
                </div>
              );
            })
          ) : (
            <label htmlFor="fileupload" className={styles["placeholder"]}>
              {label}
            </label>
          )}
          {/**  <div className={styles["file"]}>
            <span className={styles["file-name"]}>translate.txt</span>
            <span className={styles["file-close"]}>
              <img src={CloseIcon} />
            </span>
          </div> */}
        </div>
      </div>
    );
  }
}
