import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <Bounded
    className="className"
    data-slice-type={slice.slice_type} data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading>
          {slice.primary.heading}
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert text-justify col-start-1 sm:justify-items-center md:flex md:justify-center md:items-center">
          <PrismicRichText field={slice.primary.description} />
        </div>
        <Avatar image={slice.primary.avatar} className="" />
      </div>
      <Button 
        linkField={slice.primary.button_link}
        label={slice.primary.button_text}
        className="my-4"
        />
    </Bounded>
  );
};

export default Biography;
