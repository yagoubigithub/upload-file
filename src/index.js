import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";
import PublishIcon from "./icons/publishIcon.svg";
import CloseIcon from "./icons/close.png";
export default class UploadFile extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const {
      accepts,
      multiple,
      maxFiles,
      maxFileSize,
      minFileSize,
      label,
     

      color
    } = this.props;

    return (
      <div className={styles["btn-upload-container"]}>
        <button
          className={styles["btn-upload"]}
          style={{ backgroundColor: color }}
        >
          <img src={PublishIcon} className={styles["svg-icon"]} />
          <input type="file" style={{ display: "none" }} id="fileupload" />
          <label htmlFor="fileupload">{label}</label>
        </button>
        <div className={styles["files-container"]}>
          <div className={styles["file"]}>
          <span className={styles["file-name"]}>translate.txt</span>
          <span className={styles["file-close"]}>
          <img src={CloseIcon} />
          </span>
          </div>
         

          <div className={styles["file"]}>
          <span className={styles["file-name"]}>translate.txt</span>
          <span className={styles["file-close"]}>
          <img src={CloseIcon} />
          </span>
          </div>


          <div className={styles["file"]}>
          <span className={styles["file-name"]}>translate.txt</span>
          <span className={styles["file-close"]}>
            <img src={CloseIcon} />
          </span>
          </div>

          <div className={styles["file"]}>
          <span className={styles["file-name"]}>translate.txt</span>
          <span className={styles["file-close"]}>
          <img src={CloseIcon} />
          </span>
          </div>
          <div className={styles["file"]}>
          <span className={styles["file-name"]}>translate.txt</span>
          <span className={styles["file-close"]}>
          <img src={CloseIcon} />
          </span>
          </div>
          <div className={styles["file"]}>
          <span className={styles["file-name"]}>translate.txt</span>
          <span className={styles["file-close"]}>
          <img src={CloseIcon} />
          </span>
          </div>
        </div>
      </div>
    );
  }
}
