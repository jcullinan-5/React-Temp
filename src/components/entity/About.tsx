import type { Image as ImageType, CTA as CTAType } from "@yext/types";
import { Image } from "@yext/pages/components";

type AboutProps = {
  image?: ImageType;
  title: string;
  description?: string;
  cta?: CTAType;
};

const About = (props: AboutProps) => {
  return (
    <div className="About py-8 sm:py-16">
      <div className="container flex flex-col md:flex-row gap-8 md:gap-16">
        {props.image && (
          <div className="w-full lg:w-1/2">
            <Image image={props.image} />
          </div>
        )}

        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h2 className="Heading Heading--head">{props.title}</h2>
          {props.description && <div>{props.description}</div>}
        </div>
      </div>
    </div>
  );
};

export default About;
