import * as React from 'react';
import ContentLoader from 'react-content-loader';
import { LoadingProps, LoadingType } from '../../@types';

const Loading: React.FC<LoadingProps> = (props) => {
  const { loading, type, width, height, viewBox } = props;
  const RenderLoading = () => {
    switch (type) {
      case LoadingType.POST:
        return (
          <ContentLoader
            speed={2}
            width={width ?? 450}
            height={height ?? 460}
            viewBox={viewBox ?? '0 0 380 360'}
            backgroundColor="#1976d2"
            foregroundColor="#ecebeb"
          >
            <circle cx="40" cy="44" r="33" />
            <rect x="85" y="11" rx="3" ry="3" width="125" height="18" />
            <rect x="85" y="48" rx="3" ry="3" width="267" height="21" />
            <rect x="8" y="103" rx="3" ry="3" width="352" height="45" />
            <rect x="8" y="157" rx="3" ry="3" width="352" height="190" />
          </ContentLoader>
        );
      case LoadingType.PROFILE:
        return (
          <ContentLoader
            speed={2}
            width={width ?? 360}
            height={height ?? 300}
            viewBox={viewBox ?? '0 0 362 300'}
            backgroundColor="#1976d2"
            foregroundColor="#ecebeb"
            {...props}
          >
            <circle cx="165" cy="50" r="40" />
            <rect x="5" y="134" rx="3" ry="3" width="280" height="8" />
            <rect x="5" y="150" rx="3" ry="3" width="280" height="8" />
            <rect x="5" y="168" rx="3" ry="3" width="350" height="8" />
            <rect x="5" y="197" rx="3" ry="3" width="350" height="54" />
          </ContentLoader>
        );
      default:
        return null;
    }
  };
  return loading ? RenderLoading() : null;
};

export default Loading;
