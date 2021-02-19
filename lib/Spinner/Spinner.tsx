import * as React from 'react';
import './spinner.scss';
import { ReactNode } from 'react';
import classnames from 'classnames';
type SpinnerSize = 'small' | 'normal' | 'large';
type Props = {
  loading?: boolean;
  size?: SpinnerSize;
  tip?: string;
  indicator?: ReactNode | null;
};
function generateSpinnerClasses(size: SpinnerSize | undefined): string {
  return classnames({
    'r-parts-spinner-border': true,
    'r-parts-spinner-small': size === 'small',
    'r-parts-spinner-large': size === 'large',
  });
}
export const Spinner: React.FC<Props> = props => {
  const { loading, size, tip, indicator } = props;
  return (
    <>
      {loading && (
        <div className="r-parts-spinner-container">
          {indicator ? (
            <div className="r-parts-spinner-custom">
              {indicator}
            </div>

          ) : (
            <div className={generateSpinnerClasses(size)}></div>
          )}
          {tip && <p className="r-parts-spinner-text">{tip}</p>}
        </div>
      )}
    </>
  );
};
Spinner.defaultProps = {
  loading: false,
  size: 'normal',
  indicator: null,
};
