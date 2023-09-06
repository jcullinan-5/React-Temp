import type { TemplateRenderProps, LocationProfile } from "src/types/entities";
import { LazyLoadWrapper } from "src/components/common/LazyLoadWrapper";
import ErrorBoundaryWithAnalytics from "src/components/common/ErrorBoundaryWithAnalytics";

import About from "src/components/entity/About";
import Core from "src/components/entity/Core";
import Nearby from "src/components/entity/Nearby";

interface EntityLayoutProps {
  data: TemplateRenderProps<LocationProfile>;
}

const EntityLayout = ({ data }: EntityLayoutProps) => {
  const {
    id,
    yextDisplayCoordinate,
    description,
    c_aboutSection: about,
    c_nearbySection: nearby,
  } = data.document;

  const showAbout = about?.title && (about.description || description);

  return (
    <>
      <LazyLoadWrapper>
        <ErrorBoundaryWithAnalytics name="nearby">
          <Nearby
            title={nearby?.title}
            linkToLocator={nearby?.linkToLocator}
            buttonText={nearby?.cta?.label}
            buttonLink={nearby?.cta?.link}
            coordinate={yextDisplayCoordinate}
            id={id}
          />
        </ErrorBoundaryWithAnalytics>
      </LazyLoadWrapper>
      <ErrorBoundaryWithAnalytics name="core">
        <Core profile={data.document} />
      </ErrorBoundaryWithAnalytics>
      {showAbout && (
        <ErrorBoundaryWithAnalytics name="about">
          <About
            image={about.image}
            title={about.title}
            description={about.description || description}
          />
        </ErrorBoundaryWithAnalytics>
      )}
    </>
  );
};

export default EntityLayout;
