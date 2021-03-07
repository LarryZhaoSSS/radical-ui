import  Icon  from '../icon/Icon'
import React, { FC } from 'react'
import { UploadFile } from './Uploader'
import { ProgressBar } from '../ProgressBar/ProgressBar'
interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

export const UploadList: FC<UploadListProps> = (props) => {
  const {
    fileList,
    onRemove,
  } = props

  return (
    <ul className="r-parts-upload-list">
      {fileList.map(item => {
        return (
          <li className="r-parts-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <Icon name="file" />
              {item.name}
            </span>
            <span className="file-status">
              {(item.status === 'uploading' || item.status === 'ready') && <Icon name="spinner" spin  />}
              {item.status === 'success' && <Icon name="check-circle"  />}
              {item.status === 'error' && <Icon name="times-circle"  />}
            </span>
            <span className="file-actions">
              <Icon name="times" onClick={() => { onRemove(item)}}/>
            </span>
            {item.status === 'uploading' &&
              <ProgressBar
                percent={item.percent || 0}
              />
            }
          </li>
        )
      })}
    </ul>
  )

}