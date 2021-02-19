import * as React from 'react';
import './spinner.scss';
import { ReactNode } from 'react';
import classnames from 'classnames';
type SpinnerSize = 'small' | 'normal' | 'large';
type Props = {
  loading: boolean;
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
function generateSpinnerChildrenClasses(loading: boolean): string {
  return classnames({
    'r-parts-spinner-children-wrapper': true,
    'is-loading': loading,
  });
}
function generateLoading(
  size: SpinnerSize | undefined,
  tip?: string,
  indicator?: ReactNode | null,
) {
  return (
    <div className="r-parts-spinner-container">
      {indicator ? (
        <div className="r-parts-spinner-custom">{indicator}</div>
      ) : (
        <div className={generateSpinnerClasses(size)}></div>
      )}
      {tip && <p className="r-parts-spinner-text">{tip}</p>}
    </div>
  );
}
export const Spinner: React.FC<Props> = props => {
  const { loading, size, tip, indicator, children } = props;
  console.log(`size:${size}`);
  console.log(children);
  return (
    <>
      {children ? (
        <div className="r-parts-spinner-with-children">
          <div className={generateSpinnerChildrenClasses(loading)}>
            {children}
            {loading && generateLoading(size, tip, indicator)}
          </div>

        </div>
      ) : (
        <>{loading && generateLoading(size, tip, indicator)}</>
      )}
    </>
  );
};
Spinner.defaultProps = {
  loading: false,
  size: 'normal',
  indicator: null,
};
