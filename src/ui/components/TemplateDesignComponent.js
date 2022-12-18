import {
  ContainerCircleTemp,
  ContainerSquareRoundedTemp,
  ContainerSquareTemp,
} from "../templates/ContainerTemp";
import { FrameTemp } from "../templates/FrameTemp";
import { TextTemp } from "../templates/TextTemp";
import {
  ImageCircleTemp,
  ImageLogoTemp,
  ImageSquareRoundedTemp,
  ImageSquareTemp,
} from "../templates/ImageTemp";
import { RatioTemplateContext } from "src/context/RatioTemplateContext";
import { useContext } from "react";

export function TemplateDesign({ type, components, colors }) {
  const { ratioTemplate, setRatioTemplate } = useContext(RatioTemplateContext);
  return (
    <div
      className={`overflow-hidden w-[${type.logicWidth * ratioTemplate}px] h-[${
        type.logicHeight * ratioTemplate
      }px] duration-500 shadow-xl mx-auto relative bg-white`}
    >
      <SwicthCase components={components} colors={colors} />
    </div>
  );
}

function SwicthCase({ components, colors }) {
  return (
    <>
      {components.map((item) => {
        switch (item.id) {
          case "frame_comp":
            return <FrameTemp item={item} colors={colors} />;
            break;
          case "image_logo_comp":
            return <ImageLogoTemp item={item} colors={colors} />;
            break;
          case "image_square_comp":
            return <ImageSquareTemp item={item} colors={colors} />;
            break;
          case "image_square_rounded_comp":
            return <ImageSquareRoundedTemp item={item} colors={colors} />;
            break;
          case "image_circle_comp":
            return <ImageCircleTemp item={item} colors={colors} />;
            break;
          case "container_square_comp":
            return <ContainerSquareTemp item={item} colors={colors} />;
            break;
          case "container_square_rounded_comp":
            return <ContainerSquareRoundedTemp item={item} colors={colors} />;
            break;
          case "container_circle_comp":
            return <ContainerCircleTemp item={item} colors={colors} />;
            break;
          case "text_comp":
            return <TextTemp item={item} colors={colors} />;
            break;
          default:
            return null;
        }
      })}
    </>
  );
}
